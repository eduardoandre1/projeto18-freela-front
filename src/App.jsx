import { BrowserRouter,Routes,Route} from "react-router-dom"
import Resetstyle from './reset'
import Login1 from './pages/Loginpage'
import ClientMaker from "./pages/cadastro_client"
import { useState } from "react"
import {UseContext} from "./createContext"
import { useContext } from "react"
function App() {
  const [token,setToken] = useState('')
  const config = {
    headers: {
      "Authorization": token
    }
  }
  return (    
    <>
      <UseContext.Provider value={{config,token,setToken}}>
      <Resetstyle />
        <BrowserRouter>
          <Routes>        
            <Route path='/'  element={<Login1 />}/>
            <Route path ="/cadastro" element={<ClientMaker />} />
          </Routes>
        </BrowserRouter>
      </UseContext.Provider>
    </>
  )
}

export default App
