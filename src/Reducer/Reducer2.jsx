const initial = {
    cart: []
}
export const cartReducer = ( state2 = initial , action)=>{
  if(action.type === "ADD_ITEMS"){
    const existEle = state2.cart.find((item)=>{
        return item.id === action.payload.id
    })
    if(existEle){
        return{
            ...state2 , cart: state2.cart.map(item=> item.id === action.payload.id ? {...item,quantity: item.quantity + 1, totalprice: item.price + action.payload.price
            }: item)
        }
    }
    else{
        return{
           ...state2 , cart: [...state2.cart,{...action.payload, quantity:1, totalprice:action.payload.price}]
        }
    }
  }
  else if(action.type === "PLUS"){
    return{
      ...state2, cart: [...state2.cart.map(item => item.id === action.payload ? {...item, quantity: item.quantity + 1 , totalprice: item.totalprice + (item.totalprice / item.quantity)}: item)]
    }
  }
  else if(action.type === "MINUS"){
    return{
      ...state2 , cart: [...state2.cart.map(item => item.id === action.payload && item.quantity > 1 ? {...item,quantity: item.quantity - 1 , totalprice: item.totalprice - (item.totalprice / item.quantity ) }: item)]
    }
  }
  else if (action.type === 'REMOVE'){
    return{
      ...state2 , cart: state2.cart.filter(item => item.id !== action.payload)
    }
  }
  else{
    return state2;
  }
}