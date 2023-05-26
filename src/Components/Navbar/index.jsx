import React from 'react'
import { Button, Container, Nav, Wrapper,Icon } from './style'

const Navbar = () => {
  return (
    <Container>

 <Nav.Item to={'/'}> <Wrapper bold><Icon.Logo/>Housing</Wrapper> </Nav.Item>

<Nav>
      <Nav.Item to={'/home'}>Home</Nav.Item>
      <Nav.Item to={'/properties'}>Properties</Nav.Item>
      <Nav.Item to={'/contact'}>Contact</Nav.Item>
</Nav>

<Wrapper><Button>Log In</Button></Wrapper>
    </Container>
  )
}

export default Navbar

