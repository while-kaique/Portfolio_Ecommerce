import React from 'react'
import ReactDOM from 'react-dom/client'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import App from './App.jsx'

import CreateAccount from '../src/pages/CreateAccount.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'

import './index.css'
import MainPages from './pages_groups/MainPages.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}> {/* Elemento principal que engobla todos */}

          <Route element={<MainPages/>}> {/* Apenas páginas que contenham Header e Footer */}
            <Route path="/" element={<Home />}/> {/* Página inicial */}
          </Route>

          {/* Daqui pra baixo, páginas que não contenham obrigatoriamente os dois */}
          <Route path="/login" element={<Login />}/></Route> 
          <Route><Route path="/register" element={<CreateAccount />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
