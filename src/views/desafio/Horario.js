import React, { useState } from 'react';
import { Container,Row} from 'reactstrap';
import Button from 'reactstrap/lib/Button';
import Col from 'reactstrap/lib/Col';
import Input from 'reactstrap/lib/Input';



function Horario(){
    const style={
        border:'1px solid',
        alignContent: 'center',
           
        height:'50px'
    };
    const boton = {
        height:'40px',
        padding:'10px',
        margin:'auto'
    }
    const [disponible,setDisponible]=useState(false);
    const [usuario,setUsuario]=useState("");
    const [ciclistas,setCiclistas]=useState(8)
    const [color,setColor]= useState('success')
    const horas = ["8:00","8:30","9:00",
    "9:30","10:00","10:30","11:00","11:30","12:00",
    "12:30","13:00","13:30","14:00","14:30","15:00",
    "15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00",]

    const mensaje = <h4>Esto es un mensaje desde la presidencia de la republica</h4>;
    const dias=['lunes','martes','miercoles','jueves','viernes']
    function handleClick(e){
        console.log(e.target.id)/*
        if(color=='success'){
            setColor('danger')
            setCiclistas(ciclistas-1)
        }else{
            setColor('success')
            setCiclistas(ciclistas+1)
        }*/
    }
    function agregarUsuario(e){
        setDisponible(!disponible)
    }
    return (
        <div>
            <Container>
            <Row><p>Usuario</p>
                <input disabled={disponible} type="input" id='usuario' onChange={(e)=>setUsuario((e.target.value))}/>
                <Button onClick={agregarUsuario}>Agregar</Button>
             </Row>
            {mensaje}
                <p>Ciclistas disponibles: {ciclistas}</p>
                <Row>
                   
                    <Col>
                    <Row>Hora/Dia</Row>
                        {horas.map((hora)=>{
                            return(
                                <Row style={style}>
                                    <div>
                                        <p>{hora}</p>
                                    </div>
                                </Row>
                            )
                        })}
                    </Col> 
                    {dias.map((dia)=>{
                        return(
                            <Col>
                            <p>{dia}</p>
                            {horas.map((item,index)=>{
                                
                                return (
                                    <Row style={style}>
                                        <Button id={dia.substr(0,2)+index} style={boton}  color={color} onClick={handleClick}>Reservar</Button>
                                </Row>  
                                )
                            })}            
                            </Col>
                        )
                    })}                    
                </Row>

            {mensaje}
        
            </Container>
    
        </div>

    );
}

export default Horario;
