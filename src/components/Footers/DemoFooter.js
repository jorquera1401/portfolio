 
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";
import Auth from "./Auth";
function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
      <Row>
      <Auth></Auth>
      </Row>
        <Row>

          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Miguel Jorquera
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
