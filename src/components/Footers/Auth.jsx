import React,{useState} from 'react';

import 'firebase/auth';

import { useFirebaseApp, useUser } from "reactfire";

export default function Auth(props){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    
    const firebase = useFirebaseApp();
    const user = useUser();

    //Envia datos a firebase 
    const enviar = async ()=>{
        await firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
            alert(email+" Registrado!!");
        }).catch(err=>{
            alert("error: " + err.message);
        })  
    
    }

    console.log(user.displayName);
    
    return(
    <div>
        <p>{user.email}</p>
        <div className="description">
            <label htmlFor="email">Correo Electronico</label>
            <input type="email" id="email" onChange={(e)=>setEmail((e.target.value))}/>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" onChange={(e)=>setPassword((e.target.value))}/>
            <button onClick={enviar}>Iniciar Sesion</button>
        </div>
    </div>
    );
}
