export const  Modalfalse = (images, name, price, id)=>{
  return{
    type: 'MODAL_FALSE',
    payload:{images, name, price, id}
  }
}
export const modalRemove = ()=>{
  return{
    type: "MODAL_REMOVE"
  }
}
export const addProduct = (image, heading, price, id)=>{
  return{
    type:'ADD_ITEMS',
    payload:{
      image,
      heading,
      price,
      id
    }
  }
}
export const Plus = (id)=>{
  return{
    type: "PLUS",
    payload:id

  }
}
export const Minus = (id)=>{
  return{
    type: "MINUS",
    payload:id
  }
}
export const Remove = (id)=>{
  return{
    type: "REMOVE",
    payload: id
  }
}
export const OpenSidebar = ()=>{
  return{
    type: 'SIDEBAR_ON'
  }
}
export const closeSidebar = ()=>{
  return{
    type: 'SIDEBAR_OFF'
  }
}