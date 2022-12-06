

const initialState={
    totalCake:20,
    totalIceCream:20,
    totalChocolates:20
}

export const cakeReducer=(state=initialState,action)=>{
switch(action.type){
    case "addCake":return{
      ...state,totalCake:state.totalCake+action.payload
    }
    break;
    case "buyCake": return{
        ...state,totalCake:state.totalCake-action.payload
      }
      default:return state
}
}

export const IceCreamReducer=(state=initialState,action)=>{
    switch(action.type){
        case "addIce": return{
        ...state,totalIceCream:state.totalIceCream+action.payload
        }
        break;
        case "buyIce": return{
            ...state,totalIceCream:state.totalIceCream-action.payload
          }
        break;
        default:return state
    }
}

export const Chocolates=(state=initialState,action)=>{
    switch(action.type){
        case "addChoc": return{
            ...state,totalChocolates:state.totalChocolates+action.payload
        }
        break;
        case "buyChoc": return{
            ...state,totalChocolates:state.totalChocolates-action.payload
          }
        break;
        default:return state
    }
}


