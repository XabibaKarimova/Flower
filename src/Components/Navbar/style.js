import styled from "styled-components";
import {NavLink} from 'react-router-dom'
import {ReactComponent as logo} from '../../assets/logo.svg'

const Container=styled.div`
height: 64px;
padding: 0 10%;
background-color: #002638;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
`

const Wrapper=styled.div`
display: flex;
align-items: center;
gap: 5px;
font-size: ${({bold})=>bold ? '20px': ''};
font-weight: ${({bold})=>bold ? '700': ''};
cursor: pointer;
`
const Nav=styled.ul`
display: flex;
gap: 64px;


`
Nav.Item=styled(NavLink)`
list-style-type: none;
text-decoration: none;
cursor: pointer;
color: #fff;
`

const Icon=styled.div`

`
Icon.Logo=styled(logo)`
`

const Button=styled.button`
width: 120px;
height: 44px;
background-color: rgba(0,0,0,0);
color: #fff;
border: 1px solid #ffffff;
border-radius: 3px;
cursor: pointer;
 transform: scale(0.97);
`



export {Container,Wrapper,Nav,Button,Icon}