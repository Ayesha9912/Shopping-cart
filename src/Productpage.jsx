import React from 'react'
import { products } from './ProductArray'
import Navbar from './Navbar'
import { useDispatch } from 'react-redux'
import { Modalfalse } from './Action/Action'
import Modal from './Modal'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
function Productpage() {
    let dispatch = useDispatch()
    const modalImage = (eleimg, elename, eleprice, id) =>{
        dispatch(Modalfalse(eleimg, elename, eleprice, id))
    }
    return(
        <>
            <Modal/>
            <Navbar/>
            <Sidebar/>
            <div className='w-full p-5  h-auto flex flex-col items-center'>
                <h1 className='text-5xl font-bold mt-5 text-center underline mb-10'>Product Page</h1>
                {products && <div className='flex flex-wrap p-5 md:p-20 gap-x-20 gap-y-10'>
                    {products.map((ele, index)=>{
                        return(
                            <div key={index}>
                                <div className='w-[350px] cursor-pointer rounded-lg shadow-lg flex flex-col items-center'>
                                    <div className='w-full'>
                                        <img onClick={() => modalImage(ele.img, ele.name, ele.price, ele.id)} src={ele.img} alt={ele.name} />
                                        <h1 className='text-2xl ml-5 mt-5'>{ele.name}</h1>
                                        <p className='ml-5 mt-5 font-bold text-xl mb-10'>Price:{ele.price}$</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>}
                <Link to={'/cart'}>
                    <button className='px-8 py-3 bg-red-400  rounded-md text-white font-bold'>View Cart</button>
                </Link>
            </div>
        </>
    )
}
export default Productpage