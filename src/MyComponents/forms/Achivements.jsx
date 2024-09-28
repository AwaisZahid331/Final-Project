import React, { useState } from 'react'
import { Button } from '@chakra-ui/react';
import { achieve,removeAchive } from '../../Redux/slice/UserSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Chips from '../Chips';
const Achivements = () => {
const dispatch=useDispatch();

  const[data,setData]=useState({
    id:'',
    title:'',
    description:''
  });


  function changeHandler(e)
  {
    setData((prev)=>(
      {
        ...prev,
        [e.target.name]:e.target.value
      }
    ))
  };

  function submitHandler(e)
  {
    e.preventDefault();
    dispatch(achieve(data));
    const id=data.title;
   
    setData({
      id:id,
      title:'',
      description:''
    });

  }

  const {user}=useSelector((state)=>state);
  const arr=user.achievements.details;

  function updateAchive(id,name){

        if(name==='achivement')
        {
            const curArr=arr.filter((item)=>item.id===id);
            setData({
              title:curArr[0].title,
              description:curArr[0].description
            });

            const newData=arr.filter((item)=>item.id !==id);

            dispatch(removeAchive(newData))
        }
        else{
          return ;
        }

  }

  return (
    <>
        <div className='m-0 lg:m-9'>
           <form className='flex flex-col ' onSubmit={submitHandler}>
              <lable className='w-[95%] lg:w-[100%]'>
                <p className='text-2xl text-sky-800 font-serif  pl-4'>Title</p>
                <input type='text' 
                 className='w-full lg:min-w-[60%] ml-1 lg:ml-4 mt-3 py-2 border-2 rounded-sm outline-none px-4'
                placeholder='Enter section title'
                name='title'
                value={data.title}
                onChange={changeHandler}
                 />
              </lable>
                <div>
                  {
                     arr.length>0 &&
                     arr.map((item,index)=>(
                       <Chips
                        key={index}
                        id={item.id}
                        name="achivement"
                        arr={arr}
                        updater={removeAchive}
                        updateHandler={updateAchive}
                        item={index+1}
                       />
                     ))
                  }
                </div>
    
               <label className='w-[95%] lg:w-[100%] my-4' >
                <p className='text-2xl text-sky-800 font-serif  pl-4 '>Details</p>
                <textarea 
                 className='border-2 rounded-md outline-none w-full ml-1 lg:w-[70%] lg:ml-3 p-4'
                 name="description"
                 value={data.description}
                 onChange={changeHandler}
                 id="" 
                cols="30" 
                rows="10" />
               </label>
              <Button 
              type='submit'
              bgColor={'gray.200'} 
              marginLeft={'4'} 
              width={'fit-content'} 
              marginTop={'1.5'}>Save</Button>
           </form>
        </div>
    </>
  )
}

export default Achivements;