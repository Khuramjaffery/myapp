import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Loader from './Loader'
import { useParams } from 'react-router-dom'
import "./CardDesc.css"
import { useDispatch } from 'react-redux'
import { addtocart, removefromcart } from '../Redux/Action'
function CardDesc() {
    const [product,setProduct]=useState(null);
    const [loader ,setLoader]=useState(true);
   
    const [counter ,setCounter]=useState(1);
  const Dispatch=useDispatch();
    const senddata=(ele)=>{
   Dispatch(addtocart(ele));
  }
    
    const {id}=useParams();
    
    const increament=(ab)=>{
      if(counter<=10){
     Dispatch(addtocart(ab))
     
      setCounter(counter+1);

      }
     

    }
    const decrement=(cd)=>{
      if(counter>0){
        Dispatch(removefromcart(cd))
        setCounter(counter-1);
       
        }
    }
    const fetchData=async()=>{
        const data=await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(data.data);
        setLoader(false);


    }
    useEffect(()=>{
      fetchData();
    },[])
  return (
    <>
    <div className="d-flex flex-wrap justify-content-evenly align-item-center">

    {loader?<Loader/>:null}
    </div>
     <div className="Card">
      <div>
      <div className="image">
     <img src={product?.image} alt="" />
      </div>
      <div className="card-body">
        <div className="title">{product?.title}</div>
        <div className="category">{product?.category}</div>
        <div className="desc">{product?.description}</div>
      <div className="price">Rs{product?.price}</div>
      <div className="counter-product">
      <div className="btn-sub" onClick={()=>decrement(product)}><button>-</button></div>
      <div className="number">{counter}</div>
      <div className="btn-sub" onClick={()=>increament(product)}><button>+</button></div>
      </div>
      <div className="btn" onClick={()=>senddata(product)}  ><button>Add T0 card Rs{product?.price}</button></div>
     
      </div>
      </div>
     </div>
    

   
    </>
  )
}

export default CardDesc


