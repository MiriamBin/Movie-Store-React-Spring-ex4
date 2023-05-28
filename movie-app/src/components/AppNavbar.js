import {Outlet} from "react-router-dom";
import {Navbar, Nav, Row} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function AppNavbar(){
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <LinkContainer to="/">
                    <Navbar.Brand> TMDB </Navbar.Brand>
                </LinkContainer>
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link> Search </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={"/cart-page"}>
                        <Nav.Link> Cart </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar>
            <Outlet />
            {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        </>
    )
}
export default AppNavbar;