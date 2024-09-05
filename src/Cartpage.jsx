import React from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { Minus, Plus, Remove } from './Action/Action';
function Cartpage(){
  const selector = useSelector(state=> state.cartReducer.cart)
  console.log(selector);
  const dispatch = useDispatch()
  return(
    <>
    <Navbar/>
    <div className='w-full h-[80vh] p-10'>
      <ul>
        {selector.map((item, index)=>{
          return(
            <li key={index} className='flex border w-full h-fit p-0 mt-5'>
              <div className='w-[300px]'>
                <img src={item.image} alt={item.name}/>
              </div>
              <div className='ml-5 flex justify-between items-center w-[80%] h-[100%]'>
                <div>
                <h1 className='text-xl font-semibold'>{item.heading}</h1>
                <p className='text-lg'>Price: {item.price}</p>
                <div className='flex items-center'>
                  <button onClick={()=> {dispatch(Plus(item.id))}} className='size-10  text-white font-bold text-xl bg-green-700 rounded-full'>+</button>
                  <p className='ml-2'>{item.quantity}</p>
                  <button onClick={()=> {dispatch(Minus(item.id))}} className='size-10 ml-3 bg-red-500 text-white text-xl font-bold  rounded-full'>-</button>
                </div>
                   <p className='text-xl mt-5 font-bold'>Total Price: {Math.floor(item.totalprice)}$</p>
                </div>
                <button onClick={()=>{dispatch(Remove(item.id))}} className='p-4 mr-5 text-white bg-red-500 rounded-md'>Remove Product</button>
              </div>

            </li>
          )
        })}
        
        
      </ul>

    </div>

    </>
  )
}

export default Cartpage