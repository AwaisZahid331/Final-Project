import React from 'react';
import './Header.css';
import {BsGear} from 'react-icons/bs';

const Header = () => {
  return (
    <>
         <div className='w-[80%] min-h-[8vh] flex items-center m-auto '>
             <h1 className='text-blue-600 w-full font-serif font-bold text-3xl flex gap-6 items-center py-8' >
             Resume Builder

             <span> <BsGear className='gear'/></span>
            </h1>
           
         </div>
           
           
       
    </>
  )
}

export default Header;