import { Button, Container, Nav, Navbar as NavbarBtrp } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBtrp className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="mr-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
            onClick={openCart}
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m0 0h24v24h-24z" fill="#fff" opacity="0" />
              <g fill="#231f20">
                <path d="m21.08 7a2 2 0 0 0 -1.7-1h-12.8l-.58-2.26a1 1 0 0 0 -1-.74h-2a1 1 0 0 0 0 2h1.24l2.76 10.26a1 1 0 0 0 1 .74h9a1 1 0 0 0 .89-.55l3.28-6.56a2 2 0 0 0 -.09-1.89z" />
                <circle cx="7.5" cy="19.5" r="1.5" />
                <circle cx="17.5" cy="19.5" r="1.5" />
              </g>
            </svg>
            <div
              className="rounded-circle bg-danger d-flex position-absolute justify-content-center align-items-center text-white"
              style={{
                width: "1.5rem",
                height: "1.5rem",
                bottom: 0,
                right: 0,
                transform: "translate(25%,25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBtrp>
  );
};
