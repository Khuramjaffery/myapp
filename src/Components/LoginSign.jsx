import { useState } from "react"
import "./LoginSign.css"

const LoginSign=()=> {
  const [action,setAction]=useState("Login");
  const [formData, setFormData]=useState({
   fname:"",
   lname:"",
   Email:"",
   Password:"",


  })
  const onChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  const onSubmit=(e)=>{
    e.preventDefault();
    setFormData({
      fname:"",
      lname:"",
      Email:"",
      Password:"",
    })
    

  }
  const {fname,lname,Email,Password}=formData
  const  btn1=()=>{
    setAction("Create Account");
   }
   const btn2=()=>{
    setAction("Login");
   }
   
  return(
 
    <>
    
    <div className="form">
      <form onSubmit={onSubmit}>
    <div className="contain">
      
      <div className="btn">
        
 
        
      
      <div className={action==="Login"?" button gray":"button"} onClick={btn1} > Login</div>
      <div className={action==="Create Account"?" button gray":"button"} onClick={btn2}>Create Account</div>
      
      </div>
      <div className="inputs">
      {action==="Create Account"?   <div></div>:<>
      <div className="input">
          <label htmlFor="">First name</label>
        <input type="text" placeholder='Enter your first Name ' name="fname" value={fname} onChange={onChange} />
        </div>
        <div className="input">
          <label htmlFor="">Last Name </label>
        <input type="text" placeholder='Enter Your Last Name' name="lname" value={lname} onChange={onChange} />
        </div>
       
        </>}
      
       
        <div className="input">
          <label htmlFor="">Email</label>
        <input type="Email" placeholder='example@gmail.com ' name="Email" value={Email} onChange={onChange} />
        </div>
        <div className="input">
          <label htmlFor="">Password</label>
        <input type="password" placeholder='Enter your Password ' name="Password" value={Password} onChange={onChange} />
        </div>
        
      </div>
      <div className="check">
        <input type="checkbox" name="" id="" />
        <div>Sign Up  for Newsletter</div>
      </div>
      {action=="Login"? <div></div>:<div className="Submit">
        <button>Sign UP</button>
      </div>}
     {action=="Create Account"?<div></div>: <div className="Submit">
        <button>Create Account</button>
      </div>}
     
    </div>
    </form>
    </div>
  </>
  )
}

export default LoginSign