import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Landing from './Pages/Landing'
import History from './Pages/History'
import Dashboard from './Pages/Dashboard'
import Header from './Components/Header'
import Footer from './Components/Footer'
 
import {Routes,Route} from 'react-router-dom'

function App() {
  

  return (

    <>
    <Header/>
      <Routes>
             {/* (/ is used to view the landing page first without mentioning in the url) */}

        {/* localhost:5213/land */}
        <Route path='/' Component={Landing} />
        {/* localhost:5213/dash */}
        <Route path='/dash' Component={Dashboard} />
        {/* localhost:5213/his */}
        <Route path='/his' Component={History} /> 

         </Routes>
         <Footer/>
    </>
  )
}

export default App
