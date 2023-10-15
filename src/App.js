import Navbar from "./Components/Navbar";
import { Route,Routes } from "react-router-dom";
import Home from "./Components/Home";
import CardDesc from "./Components/CardDesc";

import Parent from "./Components/Parent";
import LoginSign from "./Components/LoginSign";
import Sale from "./Components/Sale";
import Practice from "./Components/Practice";
import Dashboard from "./Components/Dashboard";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Footer1 from "./Components/Footer1";
import Footer2 from "./Components/Footer2";
import Footer3 from "./Components/Footer3";
import Footer4 from "./Components/Footer4";
import Bag from "./Components/Bag";






function App() {
  
  return (
    <>
  
   <Navbar/>
   <Routes>

   
    <Route path="/" element={<Home/>}></Route>
    <Route path="/products" element={<Sale/>} ></Route>
    <Route path="/products/:id" element={<CardDesc/>}></Route>
    <Route path='/practice' element={<Practice/>}></Route>
    <Route path="/Login" element={<LoginSign/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    <Route path="/bag" element={<Bag/>}></Route>
   
    </Routes>
   
   
   <ToastContainer
   position="top-right"
   autoClose={5000}
   hideProgressBar={false}
   newestOnTop={false}
   closeOnClick
   rtl={false}
   pauseOnFocusLoss
   draggable
   pauseOnHover
   theme="light"
   />
   <Footer1/>
   <Footer2/>
   <Footer3/>
   <Footer4/>
   
   </>
  );
}

export default App;
