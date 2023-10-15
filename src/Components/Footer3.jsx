import { useState } from "react"
import "./Footer3.css"

function Footer3() {
    const [Footerdata,setFooterdata]=useState([
        {
            "heading1": "get in touch",
            "heading2":"address",
            "address":"22nd Floor, Sky Tower B- East Wing, Dolmen City, Block 4, Marine Drive Clifton, Karachi, Pakistan.",
            "heading3": "phone",
            "number": "03054372019",
            "heading4":"Email",
            "email":"khurramjaffery12@gmail.com",
                },
                {
                    "title":"Our company",
                    "link1":"about us",
                    "link2":"contact us",
                },
                {
                    "title":"customer support",
                    "link1":"customer service",
                    "link2":"store  locator",
                    "link3": "disclaimer",
                },
                {
                    "title":"Detail",
                    "link1":"shipping& handling",
                    "link2":"returns & exchange",
                    "link3": "FAQs",
                },
                {
                    "title":"help",
                    "link1":"track your order",
                    "link2":"term  & condition ",
                    "link3": "privacy policy",
                },
    ])
   
  return (
   
   
    <>
     <div className="footer-third">

  {Footerdata.map((item)=>{
 return(
  <div>
<div className="info">
  <div className="heading">{item.heading1}</div>
  <div className="info-body">

  
  <div className="heading">{item.heading2}</div>
  <div className="address">{item.address}</div>
  <div className="heading">{item.heading3}</div>
  <div className="phone"><a href="">{item.number}</a></div>
  <div className="heading">{item.heading4}</div>
  <div className="email"><a href="">{item.email}</a></div>
</div>
</div>
<div className="links">
<div className="heading">{item.title}</div>
  <div className="link-body">
   
  <div className="bar"><a href="">{item.link1}</a></div>
  <div className="bar"><a href="">{item.link2}</a></div>
  <div className="bar"><a href="">{item.link3}</a></div>

  </div>
  
</div>

    </div>

  )

  })}
   
</div>
  
   </>
  )
}

export default Footer3
