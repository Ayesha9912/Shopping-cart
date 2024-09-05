import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RxCross2 } from "react-icons/rx";
import { closeSidebar } from './Action/Action';
import {Remove } from './Action/Action';


function Sidebar(){
    const trueside = useSelector(state => state.reducerModal.sidebar)
    console.log(trueside);
    const dispatch = useDispatch()
    const selector = useSelector(state=> state.cartReducer.cart)
  console.log(selector);
  return(
    <>
        <div className={`w-[25vw] h-[100vh] fixed top-0 right-0 bg-white ${trueside ? "flex": "hidden"}`}>
            <div className='w-full h-[100%] relative p-10'>
            <RxCross2 onClick = {()=> {dispatch(closeSidebar())}} className='absolute top-0 right-0' size={25}/>
            <ul>
        {selector.map((item, index)=>{
          return(
            <li key={index} className='flex border w-full h-fit p-0 mt-5'>
              <div className='w-[150px]'>
                <img src={item.image} alt={item.name}/>
              </div>
              <div className='ml-5 flex justify-between w-[80%] h-[100%]'>
                <div>
                <h1 className='text-xl font-semibold'>{item.heading}</h1>
                <p className='text-lg'>Price: {item.price}</p>
                   <p className='text-xl mt-5 font-bold'>Total Price: {Math.floor(item.totalprice)}$</p>
                </div>
                <RxCross2 onClick={()=>{dispatch(Remove(item.id))}} className='text-red-500 cursor-pointer'></RxCross2>
              </div>

            </li>
          )
        })}
        
        
      </ul>
            </div>
        </div>

    </>
  )
}

export default Sidebar