
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/home/Home'
import Signup from './Signup/Signup'
import Foooter from './components/Footer/Footer'
import AppDownload from './components/AppDownload/AppDownload'
import PlaceOrder from './Pages/order/PlaceOrder'
import Cart from './Pages/cart/Cart'
import Navbar from './components/Navbar/Navbar'


function App() {

  return(
    <>
       <div className="app">
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/order" element={<PlaceOrder/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
      <AppDownload/>

      </div>
      <Foooter/>
    </>
  )
}

export default App
