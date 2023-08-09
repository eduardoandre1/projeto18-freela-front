import axios from "axios"
import { useState } from "react";
function Provider_maker(){
    const [nome,setnome] = useState("")
    const [cep,setcep] = useState("")
    const [password,setpassword] = useState('')
    const [phone,setphone] =useState('')
    const [numer] = "sei lá"
    return(
    <>
    <h1>olá bom dia</h1>
    <form>
        <input 
            disabled={waitlogin==true?true:false}
            type="email"placeholder="Email" value={Email}
            onChange={(event)=>SetEmail(event.target.value)}
        />
        <input 
            disabled={waitlogin==true?true:false}
            type="email"placeholder="Email" value={Email}
            onChange={(event)=>SetEmail(event.target.value)}
        />
        <input 
            disabled={waitlogin==true?true:false}
            type="email"placeholder="Email" value={Email}
            onChange={(event)=>SetEmail(event.target.value)}
        />
        <input 
            disabled={waitlogin==true?true:false}
            type="email"placeholder="Email" value={Email}
            onChange={(event)=>SetEmail(event.target.value)}
        />
        <input 
            disabled={waitlogin==true?true:false}
            type="email"placeholder="Email" value={Email}
            onChange={(event)=>SetEmail(event.target.value)}
        />

    </form>
    </>
    )
}
export default Provider_maker;
