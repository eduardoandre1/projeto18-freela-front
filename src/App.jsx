import { BrowserRouter,Routes,Route} from "react-router-dom"
import Resetstyle from './reset'
import Login1 from './pages/Loginpage'
import ClientMaker from "./pages/cadastro_client"
function App() {
  return (    
    <>
        <Resetstyle />
        <BrowserRouter>
          <Routes>        
            <Route path='/'  element={<Login1 />}/>
            <Route path ="/cadastro" element={<ClientMaker />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
