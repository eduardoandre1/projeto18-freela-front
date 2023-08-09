import { useState } from 'react'
import { BrowserRouter,Routes,Route,Switch } from "react-router-dom"
import Provider_maker from './pages/cadastro_prov'
import Resetstyle from './reset'
import Serve_answer from './assets/serve_answer'
import Login from './pages/Login_page'

function App() {
  return (
    <>
      <Resetstyle />
        <BrowserRouter>
          <Routes>        
            <Route path='/' element={<Login />}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
