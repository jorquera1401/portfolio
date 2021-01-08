/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {  useFirebaseApp} from "reactfire";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionDark() {
  const firebase = useFirebaseApp();

  console.log(firebase);
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Acerca de Mí</h2>
            </Col>
          </Row>
          <Row>
            <Col className="m1-auto mr-auto text-justify" md="6">
              <p className="description">
                  Estudiante de Ingenieria Civil en Computación de la Universidad de Talca <br/>
                  Me interesa participar en toda la etapa de desarrollo de software, mi area de interes es la ingenieria de Sofwtare.<br/>
                   
              </p>
            </Col>
            <Col className="m1-auto mr-auto text-center" md="6">
              <p className="description">
                  Mis habilidades son el desarrollo de aplicaciones web pueden ser separados por Front y Back o integradas en un mismo Framework. 
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDark;
