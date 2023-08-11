
import { useState } from "react";
import axios from "axios";
import { response } from "express";
function ClientMaker(){
    const [name,setName] =useState('')
    const [CpfCnpj,setCpfCnpje] =useState('')
    const [email,setEmail] =useState('')
    const [cep, setCep] = useState('')
    const [password,setPassword] = useState('')
    const [confPassword,setconfirm] =useState('')
    const user = {
        name:name,
        cpf_cnpj:CpfCnpj,
        email:email,
        cep:cep,
        password:password
    }
    function ClientServer(){
        const server = "http://localhost:5000/sign_up"
        const promise = axios.post(server,user)
        promise.then((resposta)=>alert('cadastrado'))
        promise.catch((resposta)=>{alert("erro")})
    }
    return(
    <>
    <form>
    <label for="email">Email:</label><br/><br/>
            <input type="text" id="name" name="name" value={name}
            onChange={(event)=>setEmail(event.target.value)}/><br/><br/>
    </form>
    </>
    )
}
export default ClientMaker;
