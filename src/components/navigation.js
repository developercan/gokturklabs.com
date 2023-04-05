import React from "react";
import {
  Navbar,
  Container,
  Nav
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png"
function navigation() {
  return (
    <Navbar id="navbar" bg="dark" variant="dark" expand="sm" >
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              style={{ Width: "35px", height: "35px" }}
              src={logo}
            />
            Gokturklabs {/**- 𐰍𐰸𐱃𐰆𐰺𐰴𐰞𐰀𐰉𐰽 **/}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            {/* Buradaki kod bloğunu Iknow Technologies şirketinde staj yaparken yapmış olduğum bir
            e-ticaret sisteminde yazmıştım. Vakit kaybetmemek adına bir kaç düzenleme yapıp burada yayına aldım.
            Sistem ile herhangi bir bağı bulunmamakla beraber ileride işime yarayacağını düşünüyorum
            search bar konumu sabitlemek için max-min css / css media rule
             <Form
                className="d-flex container"
                style={{ width: "55%", alignItems: "center" }}
              >
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button
                  variant="outline-success"
                  style={{ color: "turquoise", borderColor: "turquoise" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </Button>
  </Form>*/}
            <Nav className="container justify-content-end">
              <Nav.Link href="/">Anasayfa</Nav.Link>
              <Nav.Link href="/projects">Projeler</Nav.Link>
              <Nav.Link href="/internship">Staj Görselleri</Nav.Link>
              <Nav.Link href="/manifest"> Manifesto</Nav.Link>
              {/** Alışveriş sepeti icon'u şu anda gizli! */}
              <Nav.Link href="#shopping-cart" hidden={true}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </Nav.Link>
             {/**  <NavDropdown menuVariant="dark" title="Kullanıcı Girişi ">
                <NavDropdown.Item href="/sign-in">Giriş Yap</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/sign-up">Kayıt Ol</NavDropdown.Item>
              </NavDropdown>*/}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default navigation
