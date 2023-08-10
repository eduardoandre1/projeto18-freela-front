import { BrowserRouter,Routes,Route} from "react-router-dom"
import Resetstyle from './reset'
import Login from './pages/Login_page'

function App() {
  return (
    <>
      <Resetstyle />
        <BrowserRouter>
          <Routes>        
            <Route path='/' element={<Login />}/>
            <Route path='/cadastro_cliente' element={<Client_maker />}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
