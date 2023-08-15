import { BrowserRouter,Routes,Route} from "react-router-dom"
import Resetstyle from './reset'
import Login1 from './pages/Loginpage'
import ClientMaker from "./pages/cadastro_client"
import { useState } from "react"
import  { UseContextLab }   from "./createContext"
import { ServicesMaker } from "./pages/create_serviçe"
function App() {
  const [token,setToken] = useState('')
  const config = {
    headers: {
      "Authorization": token
    }
  }
  return (    
    <>
      <UseContextLab.Provider value={{setToken,token,config}}>
      <Resetstyle />
        <BrowserRouter>
          <Routes>        
            <Route path='/'  element={<Login1 />}/>
            <Route path ="/cadastro" element={<ClientMaker />} />
            <Route path="/produts" element={<ServicesMaker />} />
          </Routes>
        </BrowserRouter>
      </UseContextLab.Provider>
    </>
  )
}

export default App
