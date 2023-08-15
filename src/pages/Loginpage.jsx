import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UseContextLab } from "../createContext";

function Login1(){
    const {setToken,token} = useContext(UseContextLab)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const login ={
        email:email,
        password:password
    }
    function Login_server(){
        const server = "http://localhost:5000/sign_in"
        const promise = axios.post(server,login)
        promise.then((resposta)=>{setToken(resposta.data.token),alert(token)})
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
            </form>
            <button onClick={()=>Login_server()} >send</button><br/><br/>
            <Link to={'/cadastro'}>ainda não é membro crie sua conta e siga o bushido</Link>   
        </>
    )
}

export default Login1
