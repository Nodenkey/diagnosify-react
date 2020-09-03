import React, {useRef, useState} from "react";
import {
    Form,
    IconsWrapper,
    Image,
    ImageInfo,
    PreviewContainer, ResultDisplay, ResultGroup,
    ResultLabel, ResultLoader,
    ResultWrapper,
    ScanWrapper
} from "./take-scan.style";
import Placeholder from "../../assets/images/placeholder.png";
import axios from "axios";
import {diseaseCheck} from "../../utils/disease-check";


const TakeScan = () => {

    const [loading, setLoading] = useState(false);

    const [userResults, setUserResults] = useState({
        lesion: '',
        probability: '',
    })
    let preview = useRef(null);
    let upload = useRef(null);
    let info = useRef(null);

    const fileTypes = [
        "image/apng",
        "image/bmp",
        "image/gif",
        "image/jpeg",
        "image/pjpeg",
        "image/png",
        "image/svg+xml",
        "image/tiff",
        "image/webp",
        "image/x-icon"
    ];

    function validFileType(file) {
        return fileTypes.includes(file.type);
    }

    function returnFileSize(number) {
        if (number < 1024) {
            return number + 'bytes';
        } else if (number >= 1024 && number < 1048576) {
            return (number / 1024).toFixed(1) + 'KB';
        } else if (number >= 1048576) {
            return (number / 1048576).toFixed(1) + 'MB';
        }
    }

    const updateImageDisplay = () => {
        const initialImage = preview.firstChild;
        while (preview.firstChild) {
            preview.removeChild(preview.firstChild);
        }
        let curFile = upload.files;
        if (curFile.length === 0) {
            //display initialImage
            preview.appendChild(initialImage);
        } else {
            curFile = curFile[0];
            if (validFileType(curFile)) {
                info.textContent = `File name: ${curFile.name}, File size: ${returnFileSize(curFile.size)}`;
                const image = document.createElement('img');
                image.src = URL.createObjectURL(curFile);
                preview.appendChild(image);
            } else {
                const image = document.createElement('img');
                image.src = Placeholder;
                preview.appendChild(image);
                info.textContent = `File name: ${curFile.name} is not a valid type, update your selection`;
            }
        }
    }

    const toDataURL = (src, callback) => {
        const xhttp = new XMLHttpRequest();

        xhttp.onload = () => {
            const fileReader = new FileReader();
            fileReader.onloadend = () => {
                callback(fileReader.result);
            }
            fileReader.readAsDataURL(xhttp.response);
        };

        xhttp.responseType = 'blob';
        xhttp.open('GET', src, true);
        xhttp.send();
    }

    const makeAxiosCall = async (proxy, base64Image) => {
        try {
            setLoading(true);
            await axios.post(proxy + 'http://52.3.246.8/predict', {file: base64Image})
                .then(res => {
                    setUserResults({
                        ...userResults,
                        lesion: diseaseCheck(res.data.result[0].label),
                        probability: res.data.result[0].prob.toString().substring(0, 4)
                    })
                });
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    }


    const uploadImage = () => {
        const initialImage = preview.firstChild;
        //get name of placeholder image
        const filename = initialImage.src.split("/").pop();
        //check if it is the placeholder
        if (filename === 'placeholder.3aec8aa3.png') {
            info.textContent = 'You must select an image before you can scan';
        } else {
            //set up cors-anywhere headers
            const proxyurl = "https://pacific-wave-71648.herokuapp.com/";
            let base64Image = '';

            toDataURL(initialImage.src, (dataURL) => {

                //split base64 results to get only necessary parts
                base64Image = dataURL.split(',')[1];

                //make an async call
                makeAxiosCall(proxyurl, base64Image);
            });
        }
    }


    return (
        <ScanWrapper>
            <PreviewContainer ref={el => preview = el}>
                <Image src={Placeholder} alt="image selected"/>
            </PreviewContainer>
            <ImageInfo ref={el => info = el}>Select the upload icon to upload an image and the scan icon to scan the
                image</ImageInfo>
            <Form method="post" enctype="multipart/form-data">
                <IconsWrapper>
                    {
                        loading ? <ResultLoader>scanning...</ResultLoader> : <> <label htmlFor="file">
                            <i className="fas fa-file-upload" id='uploader'/>
                        </label>
                            <input type="file" id="file" name="file" accept=".jpg, .jpeg, .png"
                                   onChange={updateImageDisplay}
                                   ref={el => upload = el}/>
                            <i onClick={uploadImage} className="fas fa-search-plus" id='scanner'/></>
                    }
                </IconsWrapper>
            </Form>
            <ResultWrapper>
                <ResultGroup><ResultLabel>Skin
                    lesion: <ResultDisplay>{userResults.lesion}</ResultDisplay></ResultLabel></ResultGroup>
                <ResultGroup><ResultLabel>Probability of skin
                    lesion: <ResultDisplay>{userResults.probability}</ResultDisplay></ResultLabel></ResultGroup>
            </ResultWrapper>
        </ScanWrapper>
    )
}
export default TakeScan;
