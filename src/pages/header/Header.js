import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand to="/"><strong>Stock MAnagement System</strong></Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" className="nav.link">stock-exchange</Nav.Link>
                        <Nav.Link as={Link} to="/stock-exchange" className="nav.link">post-stock-exchange</Nav.Link>
                        <Nav.Link as={Link} to="/fetch-exchange" className="nav.link">FetchStockExchnageDetailByName</Nav.Link>
                        <Nav.Link as={Link} to="/update-exchange" className="nav.link">update-stock-price</Nav.Link>
                        <Nav.Link as={Link} to="/add-stock-to-exchange" className="nav.link">AddStockToExchange</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;