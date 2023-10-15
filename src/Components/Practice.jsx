import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Practice() {
    const [formData, setFormData ]=useState({
     
        fname:"",
        lname:"",
        Email:"",
        Password:"",
        cpassword:"",
   
    })
    const navigate=useNavigate();
   const onChange=(e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
   }
    const onSubmit=(e)=>{
        e.preventDefault();
       console.log(formData)
        if(Password===cpassword){
          toast.success("password matched");
          
        }
        else{
          toast.error("password is not matched");
        }
        setFormData({
            fname:"",
            lname:"",
            Email:"",
            Password:"",
            cpassword:"",
        })
    }
    
     
   


   
    const {fname,lname,Email,Password,cpassword}=formData
   
  return (
    <>
    <div className="form">
    <div className="contain">
      <form   onSubmit={onSubmit}>
      <div className="btn">
        

        
      
      <div className="button"> Login</div>
      <div className="button">Create Account</div>
      
      </div>
      <div className="inputs">
     
        <div className="input">
          <label htmlFor="">First name</label>
        <input type="text" placeholder='Enter your first Name ' name="fname" value={fname} onChange={onChange}  required/>
        </div>
        <div className="input">
          <label htmlFor="">Last Name </label>
        <input type="text" placeholder='Enter Your Last Name'  name="lname" value={lname} onChange={onChange} required />
        </div>
      
       
        <div className="input">
          <label htmlFor="">Email</label>
        <input type="Email" placeholder='example@gmail.com ' name="Email" value={Email} onChange={onChange} required/>
        </div>
        <div className="input">
          <label htmlFor="">Password</label>
        <input type="password" placeholder='Enter your Password '  name="Password" value={Password} onChange={onChange} required/>
        </div>
        <div className="input">
          <label htmlFor="">Confirm Password</label>
        <input type="password" placeholder='Enter your repeat Password '  name="cpassword" value={cpassword} onChange={onChange} required/>
        </div>
      </div>
      <div className="check">
        <input type="checkbox" id="checkbox"  required
         />
      <label htmlFor="">Sign Up  for Newsletter</label>
      </div>
     
      
      <div className="Submit" >
        <button>Create Account</button>
      </div>
      </form>
    </div>
    </div>
  </>
  )
}

export default Practice