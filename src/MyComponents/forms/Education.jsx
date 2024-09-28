import React, { useState } from 'react'
import { Button } from '@chakra-ui/react';
import { useDispatch} from 'react-redux';
import { edu,removeEdu } from '../../Redux/slice/UserSlice';
import { useSelector } from 'react-redux';
import Chips from '../Chips';

const Education = () => {

   const[data,setData]=useState({
     id:'',
     title:'',
     institution:'',
     start:"",
     end:"",
     marks:""
   })

   const {user}=useSelector((state)=>state);
   const eduArr=user.education.details;

function changeHandler(e)
{
  setData((prev)=>(
    {
      ...prev,
      [e.target.name]:e.target.value
    }
  ))
}

 const dispatch=useDispatch();

 function educationUpdate(id,name)
 {
     if(name==='education')
     {
        const currenData=eduArr.filter((item)=>item.id ===id);

        setData({
          title:currenData[0].title,
          institution:currenData[0].institution,
          start:currenData[0].start,
          end:currenData[0].end,
          marks:currenData[0].marks,
        })
       const newData=eduArr.filter((item)=>item.id !==id)
        dispatch(removeEdu(newData))
     }
     else{
      return;
     }
 }

 function submitHandler(e){
  e.preventDefault();

    dispatch(edu(data));

    const id=data.start;
    setData({
      id:id,
      title:'',
      institution:'',
      start:"",
      end:"",
      marks:""
    })
 }
  return (
    <>
      <div className='m-0 lg:m-9'>
           <form className='flex flex-col ' onSubmit={submitHandler}>
             
              <lable className='w-[95%] lg:w-full'>
                <p className='text-2xl text-sky-800 font-serif  pl-4'>Title</p>
                <input type='text' 
                 className='w-full ml-1 lg:min-w-[60%] lg:ml-4 mt-3 py-2 border-2 rounded-sm outline-none px-4'
                 placeholder='Enter course name eg.Btech'
                 name='title'
                 value={data.title}
                 onChange={changeHandler}
                 />
              </lable>

                <div>
                   {
                    eduArr.length >0 &&
                     eduArr.map((item,index)=>(

                       <Chips
                        key={index}
                        id={item.id}
                        name='education'
                        item={index+1}
                        arr={eduArr}
                        updater={removeEdu}
                        updateHandler={educationUpdate}
                       />
                     ))
                   }
                </div>

              <lable className='w-[95%] lg:w-full'>
                <p className='text-2xl text-sky-800 font-serif  pl-4'>Institution</p>
                <input type='text' 
                 className='w-full lg:min-w-[60%] ml-1 lg:ml-4 mt-3 py-2 border-2 rounded-sm outline-none px-4'
                 placeholder='Enter overview of project'
                 name='institution'
                 value={data.institution}
                 onChange={changeHandler}
                 />
              </lable>

              <div className='w-full flex flex-col lg:flex-row gap-5 mt-5 '>
                 <label className='w-[95%] lg:w-[47%]'>
                   <p className='text-2xl text-sky-800 font-serif  pl-4'>Start</p>
                   <input type='date' 
                     className='px-4 w-full ml-1 lg:ml-4 mt-3 py-2 border-2 rounded-sm outline-none'
                     placeholder='Enter deployed link of project '
                     name='start'
                     value={data.start}
                     onChange={changeHandler}
                      />
                 </label>

                 <label className='w-[95%] lg:w-[47%]'>
                   <p className='text-2xl text-sky-800 font-serif  pl-4'>End</p>
                     <input type='date' 
                       className='px-4 w-full ml-1 lg:ml-4 mt-3 py-2 border-2 rounded-sm outline-none'
                       placeholder='Enter end date' 
                       name='end'
                      value={data.end}
                      onChange={changeHandler}
                       />
                   </label>

              </div>

              <lable >
                <p className='text-2xl text-sky-800 font-serif  pl-4'>Percentage / CGPA</p>
                <input type='text' 
                 className=' min-w-[60%] ml-1 lg:ml-4 mt-3 py-2 border-2 rounded-sm outline-none px-4'
                placeholder='Enter overview of project'
                name='marks'
                value={data.marks}
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

export default Education;