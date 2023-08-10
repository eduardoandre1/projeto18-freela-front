

function Login1(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confPassword,setconfirm] =useState('')
    const login ={
        email:email,
        password:password
    }
    function Login_server(){
        alert(login.email)
        const server = "http://localhost:5000/sign_up/p"
        const promise = axios.post(server,login)
        promise.then((resposta)=>{Serve_answer= resposta.data;console.log(Serve_answer.value)})
        promise.catch(()=>{console.log(login),setEmail(""),setPassword(""),setconfirm("")})
    }
    return(
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
    )
}

export default Login1
