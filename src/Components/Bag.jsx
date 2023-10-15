import { Widgets } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Bag.css"
import { addtocart, emptycart, removefromcart } from '../Redux/Action'

function Bag() {
  
  
  
    
    const {carts}=useSelector(state=>state.Reducer)
  const Dispatch=  useDispatch()
  const increament=(ele)=>{
    

   
    Dispatch(addtocart(ele))
   
    }   


 
  const decrement=(ab)=>{
   
   
     Dispatch(removefromcart(ab))
   
    }
  
  const delbag=(ac)=>{
    Dispatch(emptycart(ac))
  }
  const [price,SetPrice]=useState(0);
  const tprice=()=>{
    let Totalprice=0;
   carts.map((ab)=>{
    Totalprice=ab.price * ab.qnty + Totalprice;
   })
   SetPrice(Totalprice)
  }
  useEffect(() => {
    tprice()
  },[tprice]);
  return (
   <>
  
    <section className="divide">
    
       
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr className='head-table'>
                    <th scope="col" className="h5">
                      Shopping Bag
                    </th>
                    <th >Format</th>
                    <th >Title</th>
                    <th >Quantity</th>
                    <th >Price</th>
                  </tr>
                </thead>
                <tbody>
              

                {
               
               
                  carts.map(item=>{                  

 return(

 
  
    <tr>
      <th  className='pointer' onClick={()=>delbag(item)} ><i class="fa-solid fa-trash"></i></th>
      <td className='image-bag' ><img src={item.image} alt=""  /></td>
      <td>{item.title}</td>
      <div className="bag-button">
        <div className="add" onClick={()=>decrement(item)} ><button>-</button></div>
      {item.qnty}
      <div className="add" onClick={()=>increament(item)}><button>+</button></div>
      </div>
      <td>{item.price* item.qnty}</td>
      
     
       


    </tr>
)    
}) }

                  
                </tbody>
              </table>
            </div>

            

              
<ul class="list-group">
  <li class="list-group-item a">SUMMARY DETAIL </li>
  <li class="list-group-item a" >Estimate  Shipping  & tax</li>
  <li class="list-group-item b"> SUBTOTAL:<span className='fw-bold text-danger'>PKR{price}</span></li>
  <li class="list-group-item b">SHIPPING DOMESTIC :100RKR</li>
  <li class="list-group-item b text-primary fw-bold fs-5 ">Order Total:{price < 2000 ? (price+100) :price}</li>
  

  <li class="list-group-item"><button className='btn btn-primary'>CHECKOUT</button></li>
</ul>
            </section>
 
   </>
  )
}

export default Bag