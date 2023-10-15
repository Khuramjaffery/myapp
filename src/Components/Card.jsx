import { useState ,useEffect} from "react"
import axios from "axios";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { addtocart } from "../Redux/Action";
import { useDispatch } from "react-redux";

function Card() {
  const [counter ,setCounter]=useState(1);
    const [products,setProducts]=useState([]);
    const [loader ,setLoader]=useState(true);
const Dispatch=useDispatch();
    const senddata=(items)=>{
      if(counter<=10){

     
      Dispatch(addtocart(items))
      setCounter(counter+1);
    }
    }
   

    const fetchData=async()=>{
        const data=await axios.get("https://fakestoreapi.com/products/");
        setProducts(data.data);
        setLoader(false);


    }
    useEffect(()=>{
      fetchData();
    },[])
  return (
   <>
   <div className="d-flex flex-wrap justify-content-evenly align-item-center">

   {loader?<Loader/>:null}
   {products.map((item)=>{
    return(
     
<div class="card" style={{width: "18rem"}}>
 <Link to={`/products/${item.id}`}> <img src={item.image} class="card-img-top" width={"200px"}  height={"200px"} alt="..."/></Link>
  <div class="card-body">
  <h5 class="card-title">{item.title.slice(0,19)}</h5>
    <p class="card-text">{item.description.slice(0,40)}</p>
   <a href="#" class="btn btn-primary " onClick={()=>senddata(item)}>Add to Card</a>
  </div>
</div>

    )
   })}
     </div>
   </>
  )
}

export default Card
