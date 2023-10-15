
import { useState } from 'react'
import "./Footer1.css"

function Footer1() {
    const[footer,setfooter]=useState([
        {
        "image": "https://pk.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw3e0efc1c/images/icons/shipping.svg",
        "heading" : "shipping  charges",
        "descption": "starting from Rs.120"

        },
        {
            "image": "https://pk.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwd072f182/images/icons/support.svg",
            "heading" : "Support 22/7",
            "descption": "contact us 24 hours a day, 7 days a week",

    
            },
            {
                "image": "https://pk.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwe57909af/images/icons/track-1.svg",
                "heading" : "track your order",
                "descption": "track your order for quick updates",
    
        
                },
    ])
  return (
    <>
    <div className="footer1">
    {footer.map((item)=>{

   
    
    return(
        <div>
       <div className="image">
         <img src={item.image} alt="" />
         </div>
         <div className="footer-body">
          <div className="heading">{item.heading}</div>
          <div className="des">{item.descption}</div>
         </div>
         </div>
       
    )
    })}
    </div>
    </>
  )
}

export default Footer1
