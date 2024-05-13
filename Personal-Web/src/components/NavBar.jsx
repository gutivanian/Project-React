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
        className="fixed-top bg-body-tertiary">
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
                    <Nav className="me-auto justify-content-center">
                        <Nav.Item>
                            <Nav.Link href = "#home">
                                <IoHomeOutline></IoHomeOutline>
                                Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href = "#link">
                                <IoPersonOutline></IoPersonOutline>
                                About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href = "#link">
                            <PiProjectorScreenChartBold></PiProjectorScreenChartBold>
                                Projects
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href = "#link">
                                <IoNewspaper></IoNewspaper>
                                Resume
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href = "#link">
                                <GrBlog></GrBlog>
                                Blogs
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar