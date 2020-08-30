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
        color: var(--blue);
    }
    #uploader:hover{
        color: var(--dark-blue);
        position: relative;
        &::after{
            content: 'Upload image';
            position: absolute;
            left: 0;
            display: inline-block;
            font-size: 0.8rem;
            z-index: 1;
            top: 110%;
            color: black;
            animation: move-out 250ms ease-out both;
            @keyframes move-out {
                from {
                transform: translateY(-25px);
                opacity : 0;
                }
                to {
                transform: translateY(0);
                opacity : 1;
                }
            }
        }
    }
#scanner:hover{
color: var(--dark-blue);
position: relative;
&::after{
content: 'Scan image';
position: absolute;
left: 0;
display: inline-block;
font-size: 0.8rem;
z-index: 1;
top: 110%;
color: black;
animation: move-out 250ms ease-out both;
@keyframes move-out {
from {
transform: translateY(-25px);
opacity : 0;
}
to {
transform: translateY(0);
opacity : 1;
}
}
}
}
label{
margin-right: 10%;
}
input{
display: none;
}
`;

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
export const ResultLabel = styled.p`
  font-weight: bold;
  color: var(--blue);
`;

export const ResultGroup = styled.div`
  display: flex;
`;

export const ResultDisplay = styled.span`
  color: black;
`;

export const ResultLoader = styled.h3`
  animation: beat 300ms both alternate infinite ease-in-out;
  @keyframes beat {
  from {
  color: var(--blue);
  }
  to {
  color: var(--dark-blue);
  }
  }
`;