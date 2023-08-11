
import { useState } from "react";
import axios from "axios";

function ClientMaker(){
    const [name,setName] =useState('')
    const [CpfCnpj,setCpfCnpje] =useState('')
    const [email,setEmail] =useState('')
    const [cep, setCep] = useState('')
    const [password,setPassword] = useState('')
    const [confPassword,setconfirm] =useState('')
    const [phone,setPhone] = useState('')
    const user = {
        name:name,
        cpf_cnpj:CpfCnpj,
        email:email,
        cep:cep,
        password:password,
        telephone:phone
    }
    function ClientServer(){
        const server = "http://localhost:5000/sign_up"
        const promise = axios.post(server,user)
        promise.then((resposta)=>{alert('cadastrado')})
        promise.catch((resposta)=>{alert(resposta.response.data.message)})
    }
    return(
    <>
    <h1>Join in the Clan</h1><br/><br/>
    <form>
        <label for="name">Name:</label><br/><br/>
        <input type="text" id="name" name="name" value={name}
        onChange={(event)=>setName(event.target.value)}/><br/><br/>
        <label for="cpf">Seu CPF ou CNPJ:</label><br/><br/>
        <input type="text" id="cpfOrCnpj" name="cpfOrCnpj" value={CpfCnpj}
        onChange={(event)=>setCpfCnpje(event.target.value)}/><br/><br/>
        <label for="cep">Cep:</label><br/><br/>
        <input type="text" id="cep" name="cep" value={cep}
        onChange={(event)=>setCep(event.target.value)}/><br/><br/>
        <label for="email">Email:</label><br/><br/>
        <input type="email" id="email" name="email" value={email}
        onChange={(event)=>setEmail(event.target.value)}/><br/><br/>
        <label for="password">password:</label><br/><br/>
        <input type="text" id="password" name="password" value={password}
        onChange={(event)=>setPassword(event.target.value)}/><br/><br/>
        <label for="confpassword">Confirm the password:</label><br/><br/>
        <input type="text" id="confpassword" name="confpassword" value={confPassword}
        onChange={(event)=>setconfirm(event.target.value)}
        /><br/><br/>
    </form>
    <button onClick={()=>ClientServer()} >create </button>
    </>
    )
}
export default ClientMaker;
