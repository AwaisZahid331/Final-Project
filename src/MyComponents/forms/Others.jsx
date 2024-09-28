import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { othr } from '../../Redux/slice/UserSlice'

const Others = () => {
  
  const dispatch=useDispatch();
  const[data,setData]=useState({
   title:'',
   description:''
  });

  function changeHandler(e){
    setData((prev)=>(
      {
        ...prev ,
        [e.target.name]:e.target.value
      }
    ))
  }

  function submitHandler(e)
  {
    e.preventDefault();
    dispatch(othr(data));
   
    setData({
      title:'',
      description:''
    });
    
  }
  return (
     <>
<div className='m-0 lg:m-9'>
           <form className='flex flex-col ' onSubmit={submitHandler}>
             
              <lable>
                <p className='text-2xl text-sky-800 font-serif  pl-4'>Title</p>
                <input type='text' 
                 className='w-[95%] lg:min-w-[60%] ml-1 lg:ml-4 mt-3 py-2 border-2 rounded-sm outline-none px-4'
                 placeholder='Enter section title'
                 name='title'
                 value={data.title}
                 onChange={changeHandler}
                 />
              </lable>

             

              <lable className='w-full mt-4'>
                <p className='text-2xl text-sky-800 font-serif  pl-4'>Description</p>
              
                 <textarea
                  className='border-2 rounded-md outline-none ml-1 lg:ml-3 p-4 text-gray-500 w-[95%] lg:w-[70%]'
                   rows='10'
                   cols='30'
                  typeof='text'
                  name='description'
                  value={data.description}
                  onChange={changeHandler}
                  />
              </lable>
             
              <Button 
                type='submit'
                bgColor={'gray.200'} 
                marginLeft={'4'} 
                width={'fit-content'} 
                marginY={'1.5'}>Save</Button>
           </form>
        </div>


     </>
  )
}

export default Others;