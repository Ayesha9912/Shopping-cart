import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, modalRemove } from './Action/Action';
import { RxCross2 } from "react-icons/rx";
export default function Modal(){
const selector = useSelector(state=> state.reducerModal.modal)
// console.log(selector, "Selector");
const data = useSelector(state => state.reducerModal.data)
// console.log(data , "ProductData");
const image = data ? data.images : null;
const heading = data ? data.name : "";
const price = data ? data.price : "";
const id = data ? data.id : "";
console.log(id, "itemid");
const dispatch = useDispatch()
  return(
    <>
    <div className={`w-full h-[100vh] fixed top-0 left-0 bg-slate-500 justify-center items-center opacity-95 ${selector ? "flex": "hidden"}`}>
    <div  className={`w-[100%] md:w-[400px] h-[400px] bg-white shadow-lg rounded-md flex flex-col justify-center relative items-center pb-5`}>
      <img src={image} alt="image"/>
      <h1 className='text-2xl font-bold mt-5'>{heading}</h1>
      <p className='text-xl font-semibold'>{price}</p>
      <button onClick={()=>{dispatch(addProduct(image, heading, price, id))
      alert("Product Added");}} className='bg-red-400 text-white font-bold px-5 py-3 rounded-md mb-5 mt-5'>Add to Cart</button>
      <div onClick={()=>{ dispatch(modalRemove())}} className='absolute cursor-pointer -top-20 right-0 text-black font-semibold text-3xl'><RxCross2 /></div>
    </div>
    </div>
    </>
  )
}
