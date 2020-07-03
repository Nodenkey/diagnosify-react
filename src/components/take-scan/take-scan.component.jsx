import React, {useRef} from "react";
import {Form, IconsWrapper, Image, ImageInfo, PreviewContainer, ScanWrapper} from "./take-scan.style";
import Placeholder from "../../assets/images/placeholder.png";


const TakeScan = () => {
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
        if(number < 1024) {
            return number + 'bytes';
        } else if(number >= 1024 && number < 1048576) {
            return (number/1024).toFixed(1) + 'KB';
        } else if(number >= 1048576) {
            return (number/1048576).toFixed(1) + 'MB';
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
            if (validFileType(curFile)){
                info.textContent = `File name: ${curFile.name}, File size: ${returnFileSize(curFile.size)}`;
                const image = document.createElement('img');
                image.src = URL.createObjectURL(curFile);
                preview.appendChild(image);
            }
            else{
                const image = document.createElement('img');
                image.src = Placeholder;
                preview.appendChild(image);
                info.textContent = `File name: ${curFile.name} is not a valid type, update your selection`;
            }
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
                    <label htmlFor="file">
                        <i className="fas fa-file-upload"/>
                    </label>
                    <input type="file" id="file" name="file" accept=".jpg, .jpeg, .png" onChange={updateImageDisplay}
                           ref={el => upload = el}/>
                    <i className="fas fa-search-plus"/>
                </IconsWrapper>
            </Form>
        </ScanWrapper>
    )
}
export default TakeScan;