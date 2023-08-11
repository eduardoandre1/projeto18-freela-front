import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login1(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confPassword,setconfirm] =useState('')
    const login ={
        email:email,
        password:password
    }
    function Login_server(){
        const server = "http://localhost:5000/sign_in"
        const promise = axios.post(server,login)
        promise.then((resposta)=>{alert(resposta.data.token)})
        promise.catch(()=>{alert('algo de errado')})
    }
    return(
        <>
            <form>
            <label for="email">Email:</label><br/><br/>
            <input type="email" id="email" name="email" value={email}
            onChange={(event)=>setEmail(event.target.value)}/><br/><br/>
            <label for="password">password:</label><br/><br/>
            <input type="password" id="password" name="password" value={password}
            onChange={(event)=>setPassword(event.target.value)}/><br/><br/>
            <label for="password">Confirm  password:</label><br/><br/>
            <input type="password" id="password" name="password" value={confPassword}
            onChange={(event)=>setconfirm(event.target.value)}/><br/><br/>
            </form>
            <button onClick={()=>Login_server()} >olá</button><br/><br/>
            <Link to={'/cadastro'}> ainda não é cadrastado clique aqui</Link>   
        </>
    )
}

export default Login1
