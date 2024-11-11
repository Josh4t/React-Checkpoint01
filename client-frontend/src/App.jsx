import './App.css'
import { Routes, Route } from 'react-router-dom';
import Layout from './components/RootLayout';
import Footer from './components/Footer';
import Hero from './Pages/HeroAuth/Hero';
import Login from './Pages/HeroAuth/Login';
import Register from'./pages/HeroAuth/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify'
function App() {
  const user = null

  if(!user){
    return(
      <Routes>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/' element={<Hero/>}/> <Route/>
        <Route path='/login' element={<Login/>} /> <Route/>
      
      </Routes>
    )
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>

        </Route>
      </Routes>
    </>
  )
}


export default App
