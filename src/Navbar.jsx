import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { OpenSidebar } from './Action/Action';
function Navbar(){
  const dispatch = useDispatch()
  return(
    <>
    <div className='w-full h-20 bg-red-400 flex justify-center items-center'>
        <div className=' w-[90%] -[100%] flex justify-between items-center'>
          <Link to={"/"}>
            <h1 className='text-3xl font-mono text-white'>Ayesha Shop</h1>
          </Link>
            <div className='flex'>
                <ul className='hidden md:flex gap-x-10 text-xl text-white font-semibold cursor-pointer'>
                  <Link to={"/"}>
                    <li>Shop</li>
                  </Link>
                  <Link to={"/cart"}>
                    <li>Cart</li>
                  </Link>
                </ul>
                <CiMenuBurger className='flex md:hidden text-white' size={25} />
                <FaCartArrowDown onClick={()=> {dispatch(OpenSidebar())
                console.log("click");}} className='ml-5 cursor-pointer text-white' size={25} />
            </div>
        </div>
    </div>

    </>
  )
}

export default Navbar