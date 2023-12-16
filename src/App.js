
import './App.css';
import Navbar from './Components/Navbar/Navbar';

import { Routes,Route } from 'react-router-dom';

import Shop from './Pages/Shop';
import Shopcatogory from './Pages/ShopCatogory';
import Footer from './Components/Footer/Footer';
// import Product from './Pages/Product';


import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

import Loginsignup from './Pages/Loginsignup';


import Product from './Pages/product';
import Cart from './Pages/Cart';



function App() {
  return (
    <div >
      <Navbar/>
      
      
      <Routes>

        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<Shopcatogory banner = {men_banner} category="men"/>}/>
        <Route path='/women' element={<Shopcatogory banner = {women_banner} category="women"/>}/>
        <Route path='/kids' element={<Shopcatogory banner = {kid_banner} category="kid"/>}/>
        

        {/* <Route path='/product' element={<Product/>}/> */}
        <Route path="/product/:id" element={<Product />} />


        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Loginsignup/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
