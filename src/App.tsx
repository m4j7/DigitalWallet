import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from "./components/Header";
import Login from "./pages/login";


function App() {

  return (
    <BrowserRouter>
    
        <Routes>
           <Route path="/" element={< Login/>}/> 
        </Routes>
    </BrowserRouter>
  )
}

export default App