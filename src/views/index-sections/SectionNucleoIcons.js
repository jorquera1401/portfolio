 
import React, { useState }  from "react";

// reactstrap components
import { Button, Container, Row, Col, Modal } from "reactstrap";

// core components

function SectionNucleoIcons() {
  const frameworks = {
    titulo : "Frameworks Utilizados",
    lista : Array('React','Angular','Laravel','CodeIgniter','Node Express','KumbiaPHP'),
    descripcion :"Estos framework son utilizados principalmente para el desarrollo web de aplicaciones"
  } ;
  const movil ={
    titulo: "Desarrollo Movil",
    lista : ['Ionic','React Native'],
    descripcion: "Tecnologias de desarrollo de aplicaciones moviles hibridas" 
  } 
  const lenguajes = {
    titulo : "Lenguajes de Programación",
    lista:Array('PHP','JavaScript','Java','C','C++','Python'),
    descripcion:"Experiencia en los siguientes lenguajes de programación"
  }
  const iot = {
    titulo : "Internet de las cosas",
    lista:Array('Arduino','Raspberry','MQTT'),
    descripcion:"Programación de Firmware y comunicación con dispositivo IoT"
  }
  const so = {
    titulo : "Administración de Sistemas Operativos",
    lista:Array('Linux','Microsoft Windows','MacOs','Aws'),
    descripcion:"Experiencia en la administración de Sistemas Operativos, configuración de puertos, pruebas de seguridad. "
  }
  const [modal,setModal]=useState(false);
  const [visual,setVisual]=useState({}); 
  const toggleModal=()=>{
   
    setModal(!modal);
  };
  function handleClick(e){
    if(this.id==='framework'){
      setVisual(frameworks);
    }
    if(this.id==='movil'){
      setVisual(movil);

    }
    if(this.id==='lenguaje'){
      setVisual(lenguajes)
    } 
    if(this.id==='iot'){
      setVisual(iot);

    }
    if(this.id==='so'){
      setVisual(so)
    }
    toggleModal();
  }

  const  visualizar =  visual.lista?visual.lista.map((item)=>(
    <li key={item}>{item}</li>
  )):<p>Error desdconocido</p>;

  return (
    <>
      <div className="section section-dark section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Soluciones</h2>
              <br />
              <p className="description">
                Se describre algunas de las aplicaciones desarrolladas 
              </p>
              <br />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="title">
              <div className="container">
                <Button className="btn-round" color = "danger" outline type="button" onClick={handleClick} id="lenguaje">Lenguajes de programación</Button>
                <Button className="btn-round" color = "danger" outline type="button" onClick={handleClick} id="framework">FrameWork</Button>
                <Button className="btn-round" color = "danger" outline type="button" onClick={handleClick} id="movil">Desarrollo Movil</Button>
                <Button className="btn-round" color = "danger" outline type="button" onClick={handleClick} id="iot">Internet of Things</Button>
                <Button className="btn-round" color = "danger" outline type="button" onClick={handleClick} id="so">Sistemas Operativos</Button>
                
                
                </div>
                <Modal isOpen={modal} toggle={toggleModal}>
                  <div className="modal-header">
                    <button
                      aria-label="Cerrar"
                      className="close"
                      type="button"
                      onClick={toggleModal}
                    >
                      <span aria-hidden={true}>X</span>
                    </button>
                    <h4 className="modal-title text-center">{visual.titulo}</h4>

                  </div>
                  <div className="modal-body">
                    <p>{visual.descripcion}</p>
                    <ul>
                    {visualizar}
                     
                    </ul>
                  </div>
                  <div className="modal-footer">
                   
                    <Button
                      className="btn-link"
                      color="default"
                      type="button"
                      onClick={toggleModal}
                    >Cerrar</Button>
                 
                  <div className="divider"/>
                
                  </div>
                  
                </Modal>
              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionNucleoIcons;
