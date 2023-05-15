import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet} from "react-router-dom";

function AppNavbar(){
    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand to="#home">Exercise 4</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Search</Nav.Link>
                    <Nav.Link href="/cart-page">Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <Outlet/>
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        </>
    )
}
export default AppNavbar;