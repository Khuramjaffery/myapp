const initialState={
  carts:[],
}



export const Reducer=(state=initialState, action)=>{
  
  
  switch(action.type){
    
    case "Add_To_Carts":
      let itemIndex=  state.carts.findIndex(item=>item.id==action.payload.id)
        
      if(itemIndex>=0){
         state.carts[itemIndex].qnty+=1;
         return{
             ...state,
             carts:[...state.carts]
         }

      }
      else{
         const temp={...action.payload , qnty:1}
         return{
             ...state,
             carts:[...state.carts ,temp]
         }
        
      }
      
      
     
      
        
        

       
        case "REMOVE_FROM_CARTS":
          let itemIndexdel=  state.carts.findIndex(item=>item.id==action.payload.id)
        
          if(itemIndexdel>=0){
             state.carts[itemIndexdel].qnty-=1;
             return{
                 ...state,
                 carts:[...state.carts]
             }
    
          }
          else{
             const temp={...action.payload , qnty:1}
             return{
                 ...state,
                 carts:[...state.carts ,temp]
             }
            
          }
         
            
            case "EMTPY-CARTS":
               const data=state.carts.filter((ele)=>ele.id !==action.payload.id)
               return{
                ...state,
                carts:data
               }
            default:
              return state;
  }
  
}