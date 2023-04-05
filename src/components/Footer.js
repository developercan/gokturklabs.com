import { Container } from "react-bootstrap";
import React from "react";

function Footer() {
  return (
    <Container
      fluid
      className="text-center bg-dark text-light p-5"
      style={{
        //position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        padding: "0px",

      }}
    >
      2023 © {/**belki sonra Date().getYear() olarak çekersin */}
      <a
        href="https://www.gokturklabs.com/Manifest/"
        target="_blank"
        title="GokturkLabs Website's Written By"
      >
     <a href="https://tr.linkedin.com/in/ahmet-can-kocaman-001" target="_blank">Ahmet Can Kocaman</a>
      </a>
    </Container>
  );
}
export default Footer;
