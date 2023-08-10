import {useState} from "react";

function Login(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confPassword,setconfirm] =useState('')
    const login ={
        email:email,
        password:password
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
                <input type="submit" value="Enviar" /><br/>  
            </form>
        </>
    )
}

export default Login
