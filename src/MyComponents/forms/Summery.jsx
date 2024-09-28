import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sum,removeSum } from '../../Redux/slice/UserSlice';
import { useSelector } from 'react-redux';
import Chips from '../Chips';

const Summery = () => {
  
  const dispatch=useDispatch();
  const[data,setData]=useState({
    id:'',
    title:'',
    skill:"",
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
    dispatch(sum(data));

    const id=data.title;

    setData({
      id:id,
      title:'',
      skill:''
    })
    
  }

  const {user}=useSelector((state)=>state);
  const arr=user.summery.details;

  function updateSummery(id,name)
  {
    if(name==='skill')
    {
      const curArr=arr.filter((item)=>item.id ===id);

      setData({
        title:curArr[0].title,
        skill:curArr[0].skill,
      });

      const newArr=arr.filter((item)=>item.id !==id);

      dispatch(removeSum(newArr));
    }
    else{
       return ;
    }
  }

  return (
     <>
    <div className='m-0 lg:m-9'>
           <form className='flex flex-col ' onSubmit={submitHandler}>
             
              <lable >
                <p className='text-2xl text-sky-800 font-serif  pl-4'>Title</p>
                <input type='text' 
                 className='w-[95%] lg:min-w-[60%] ml-1 lg:ml-4 mt-3 py-2 border-2 rounded-sm outline-none px-4'
                 placeholder='Enter title eg.Programming Language'
                 name='title'
                 value={data.title}
                 onChange={changeHandler}
                 />
              </lable>

              <div>
                {
                  arr.length>0 
                  &&
                  arr.map((item,index)=>(
                    <Chips 
                      key={index}
                      id={item.id}
                      name="skill"
                      arr={arr}
                      updater={removeSum}
                      item={index+1}
                      updateHandler={updateSummery}
                    />
                  ))
                }
              </div>
                
              <lable>
                <p className='text-2xl text-sky-800 font-serif  pl-4'>Skills</p>
                <input type='text' 
                 className='w-[95%] lg:min-w-[60%] ml-1 lg:ml-4 mt-3 py-2 border-2 rounded-sm outline-none px-4'
                 placeholder='Enter skil eg.Java C++'
                 name='skill'
                 value={data.skill}
                 onChange={changeHandler}
                 />
              </lable>
              
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

export default Summery;