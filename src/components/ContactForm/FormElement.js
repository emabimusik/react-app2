import styled from 'styled-components';

export const Container = styled.div`
  background-color:#ECD8B1;

`

export const  FormWrap = styled.div`
padding:24px 48px;
display:flex;
justify-content:center;

height:auto;


`

export const FormContent = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;

@media screen and (max-width:480){
    padding:10px;
}
`
export const Form = styled.div`
 background: #010101;
 max-width:700px;
 height:auto;
 width:100%;
 z-index:1;
 display:grid;
 margin:0 auto;
 padding:80px 32px;
 border-radius:4px;
 box-shadow:0 1px 3px rgba(0,0,0,0.9);

 @media screen and (max-width: 400px){
     padding:32px 32px;
 }

`

export  const FormInput = styled.input`
 padding:14px  14px;
 margin-bottom:12px;
 border:none;
 border-radius:4px;
 width:450px;
 text-align:center;
 
`

export const FormLabel = styled.div`
  margin-bottom:8px;
  font-size:14px;
  color:black;
`

export const FormButton = styled.div`
background:#01bf71;
padding:14px 10px;
border:none;
margin-top:20px;
text-align:center;
color:#fff;
font-size:16px;

border-radius:4px;
cursor:pointer;

`


export const  FormH1 = styled.h1`
color:#fff;
text-align:center;
padding: auto;
`;
export const FormInputTxtarea = styled.textarea`
 height:150px;
 border:none;
 border-radius:4px;
 text-align:center
`

