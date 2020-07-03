import styled from "styled-components";

export const ScanWrapper = styled.div`
width: 100%;
height: 100%;
`;

export const PreviewContainer = styled.div`
width: 80%;
margin: 10px 10% 20px 10%;
display: flex;
justify-content: center;
align-items: center;
@media only screen and (min-width: 600px){
width: 60%;
height: 55vh;
margin: 87px 20% 20px 20%;
}
img{
width: 100%;
object-fit: contain;
@media only screen and (min-width: 600px){
height: 100%;
}
}
`;

export const ImageInfo = styled.p`
text-align: center;
margin-bottom: 40px;
`;
export const Image = styled.img`
`;

export const Form = styled.form``;

export const IconsWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
i{
font-size: 3rem;
cursor: pointer;
}
i:hover{
color: var(--dark-blue);
}
label{
margin-right: 10%;
}
input{
display: none;
}
`;