import styled from "styled-components";

const Container=styled.div`
height: 571px;
display: flex;
justify-content: center;
align-items: center;
position: relative;

`
const Image=styled.img`
width: 100%;
height: 100vh;
`
const Content=styled.div`
position: absolute;
z-index: 3;
color: white;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;

`
Content.Text=styled.p`
font-size: ${({fs})=>fs&&fs};
font-weight: 700;
text-shadow: 2px 0 #000, -2px 0 #000,
 0 2px #000, 0 -2px #000,
1px 1px #000,
-1px -1px #000,
1px 1px #000,
-1px -1px #000;
`


export {Container, Image, Content}