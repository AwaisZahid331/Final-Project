import { Button} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { work,removeWork } from '../../Redux/slice/UserSlice';
import Chips from '../Chips';

const WorkExp = () => {

  const dispatch=useDispatch();

  const {user}=useSelector((state)=>state);

  const arr=user.workExp.details;

  const[wordData,setWorkData]=useState({
    id:'',
    title:'',
    company:'',
    certificate:'',
    location:'',
    start:'',
    end:'',
    workdecsription:'',

  });
  
  function changeHandler(e)
  {
    setWorkData((prev)=>(
      {
        ...prev,
        [e.target.name]:e.target.value
      }
    ))
  }  

  function submitHandler(e)
  {
    e.preventDefault();

    dispatch(work(wordData));
    const id=wordData.start;
    setWorkData({
      id:id,
      title:'',
      company:'',
      certificate:'',
      location:'',
      start:'',
      end:'',
      workdecsription:'',
    })
  }



  function updateHandler(id,name)
  {
    if(name==='workexp')
    {
      const currentData=arr.filter((item)=>item.id ===id);
       setWorkData({
        title:currentData[0].title,
        company:currentData[0].company,
        certificate:currentData[0].certificate,
        location:currentData[0].location,
        start:currentData[0].start,
        end:currentData[0].end,
        workdecsription:currentData[0].workdecsription,
      });
  
      const newData=arr.filter((item)=>item.id!==id);
      dispatch(removeWork(newData));
    }
    else {
      return;
    }
 
  }

  return (
    <>
    <div className='m-0 lg:m-9'>
           <form  onSubmit={submitHandler} className='flex flex-col '>
              

              <div className='w-full flex flex-col lg:flex-row  gap-5 mt-5 '>
                 <label className='w-[95%] lg:w-[47%]'>
                   <p className='text-2xl text-sky-800 font-serif  pl-4'>Title</p>
                   
                   <input type='text' 
                     className='px-4 w-full ml-1 lg:ml-4 mt-3 py-2 border-2 rounded-sm outline-none'
                     placeholder='Enter title eg. Fontend eng ' 
                     name='title'
                     value={wordData.title} 
                     onChange={changeHandler}
                    
                     />
                 </label>

                 <label className='w-[95%] lg:w-[47%]'>
                   <p className='text-2xl text-sky-800 font-serif  pl-4'>Company Name</p>
                     <input type='text' 
                       className='px-4 w-full ml-1 lg;ml-4 mt-3 py-2 border-2 rounded-sm outline-none'
                       placeholder='Enter copany name'
                       name='company'
                       value={wordData.company}
                       onChange={changeHandler}
                        />
                   </label>

              </div>

              <div className='flex'>
                {
                  arr.length >0 &&
                  
                   arr.map((item,index)=>(
                    <Chips 
                    key={index} 
                    id={item.id} 
                    name={"workexp"} 
                    item={index+1}
                    arr={arr}
                    updater={removeWork}
                    updateHandler={updateHandler}
                     />
                   ))
                  
                }
                 
              </div>
             

              <div className='w-full flex flex-col lg:flex-row gap-5 mt-5 '>
                 <label className='w-[95%] lg:w-[47%]'>
                   <p className='text-2xl text-sky-800 font-serif  pl-4'>Certificate Link</p>
                   <input type='text' 
                     className='px-4 w-full ml-1 lg:ml-4 mt-3 py-2 border-2 rounded-sm outline-none'
                     placeholder='Enter certificate Link'
                     name='certificate'
                     value={wordData.certificate}
                     onChange={changeHandler}
                      />
                 </label>

                 <label className='w-[47%]'>
                   <p className='text-2xl text-sky-800 font-serif  pl-4'>Location</p>
                     <input type='text' 
                       className='px-4 w-full ml-4 mt-3 py-2 border-2 rounded-sm outline-none '
                       placeholder='Enter location eg.Remote' 
                       name='location'
                       value={wordData.location} 
                       onChange={changeHandler}
                       />
                   </label>

              </div>

              <div className='w-full flex flex-col lg:flex-row gap-5 mt-5 '>
                 <label className='w-[95%] lg:w-[47%]'>
                   <p className='text-2xl text-sky-800 font-serif  pl-4'>Start Date</p>
                   <input type='date' 
                     className='px-4 w-full ml-1  lg:ml-4 mt-3 py-2 border-2 rounded-sm outline-none'
                     placeholder='Basic information pl-4'
                     name='start'
                     value={wordData.start}
                     onChange={changeHandler}
                      />
                 </label>

                 <label className='w-[95%] lg:w-[47%]'>
                   <p className='text-2xl text-sky-800 font-serif  pl-4'>End Date</p>
                     <input type='date' 
                       className='px-4 w-full ml-1 lg:ml-4 mt-3 py-2 border-2 rounded-sm outline-none '
                       placeholder='Basic information'
                       name='end'
                       value={wordData.end}
                       onChange={changeHandler}
                        />
                   </label>

              </div>

              <lable className='w-full mt-3 '>
                <p className='text-2xl text-sky-800 font-serif  pl-4'>Work description</p>
                  
                 <textarea 
                  className='border-2 w-[95%] lg:w-[70%] ml-1 lg:ml-3 outline-none p-4 text-xl'
                  name="workdecsription" 
                  value={wordData.workdecsription}
                  onChange={changeHandler}
                  cols="30"
                  rows="10"
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

export default WorkExp;