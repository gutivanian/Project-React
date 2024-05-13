import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoHomeOutline,IoPersonOutline ,IoNewspaper    } from "react-icons/io5";
import { GrBlog } from "react-icons/gr";
import { PiProjectorScreenChartBold } from "react-icons/pi";
function NavBar(){

    return(
        <Navbar 
        expand="lg" 
        className="fixed-top nav-blur">
            <Container>
                <Navbar.Brand href="#Home">
                    Gutivanian
                </Navbar.Brand>
                <Navbar.Toggle 
                aria-controls="basic-navbar-nav">
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id= "basic-navbar-nav">
                    <Nav className="ms-auto justify-content-end">
                        <Nav.Item>
                            <Nav.Link href = "#home">
                                <IoHomeOutline></IoHomeOutline>
                                <span className='ms-2'>
                                    Home
                                </span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href = "#about">
                                <IoPersonOutline></IoPersonOutline>
                                <span className='ms-2'>
                                    About
                                </span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href = "#projects">
                            <PiProjectorScreenChartBold></PiProjectorScreenChartBold>
                                <span className='ms-2'>
                                    Projects
                                </span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href = "#resume">
                                <IoNewspaper></IoNewspaper>
                                <span className='ms-2'>
                                    Resume
                                </span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href = "#blogs">
                                <GrBlog></GrBlog>
                                <span className='ms-2'>
                                    Blogs
                                </span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar