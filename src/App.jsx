import { BrowserRouter,Routes,Route} from "react-router-dom"
import Resetstyle from './reset'
import Login1 from './pages/Loginpage'
import Client_maker from "./pages/cadastro_client"
function App() {
  return (    
    <>
        <BrowserRouter>
          <Routes>        
            <Route path='/'  element={<Login1 />}/>
            <Route path='/cadastro' element={<Client_maker />}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
