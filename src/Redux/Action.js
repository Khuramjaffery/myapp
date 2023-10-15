


export const addtocart=(data)=>{
    console.log("reduced is clicked")
    return{

   type:"Add_To_Carts",
   payload:data


   
    }
}


export const  removefromcart=(data)=>{
    return{

   type:"REMOVE_FROM_CARTS",
   payload:data


   
    }
}

export const emptycart=(data)=>{
    return{

   type:"EMTPY-CARTS",
   payload:data


   
    }
} 