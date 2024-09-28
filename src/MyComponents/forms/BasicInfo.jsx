import { Button, Text} from '@chakra-ui/react';
import { useState } from 'react';
import React from 'react'
import { basic } from '../../Redux/slice/UserSlice';
import { useDispatch} from 'react-redux';

const BasicInfo = () => {

 
  const dispatch=useDispatch();
 

   const[infodata,setInfoData]=useState({
        name:'',
        designation:'',
        github:'',
        linkedin:'',
        email:'',
        phone:null
   });

   function chnageHandler(event)
   {
      setInfoData((prev)=>(
        {
          ...prev,
          [event.target.name]:event.target.value
        }
      ))
   }

   function submithandler(e)
   {

       e.preventDefault();
       dispatch(basic(infodata));

       setInfoData({
        name:'',
        designation:'',
        github:'',
        linkedin:'',
        email:'',
        phone:null
       })

   }

  return (
    <>
       <div className='m-0  lg:m-9'>
           <form onSubmit={submithandler}>
             

              <div className='w-full flex gap-5 mt-5 flex-col lg:flex-row'>
                 <label className='w-[95%] lg:w-[47%]'>
                   <p className='text-2xl text-sky-800 font-serif  pl-4'>Name</p>
                   <input type='text' 
                     className='px-4 w-full ml-1 lg:ml-4 mt-3 py-2 border-2 rounded-sm outline-none'
                     placeholder='Basic information'
                     name='name'
                     value={infodata.name || ''}
                   
                     onChange={chnageHandler}
                      />
                 </label>

                 <label className='w-[95%] lg:w-[47%]'>
                   <p className='text-2xl text-sky-800 font-serif  pl-4'>Designation</p>
                     <input type='text' 
                       className='px-4 w-full ml-1 lg:ml-4 mt-3 py-2 border-2 rounded-sm outline-none'
                       placeholder='Title eg.Frontend Developer'
                       name='designation'
                       value={infodata.designation || ''}
                       onChange={chnageHandler}
                        />
                   </label>

              </div>

                 <div className='w-full flex flex-col lg:flex-row gap-5 mt-5 '>
                   <label className='w-[95%] lg:w-[47%]'>
                   <p className='text-2xl text-sky-800 font-serif  pl-4'>Github Link</p>
                   <input type='text' 
                     className='px-4 w-full ml-1 lg:ml-4 mt-3 py-2 border-2 rounded-sm outline-none'
                     placeholder='Basic information pl-4'
                     name='github'
                     value={infodata.github || ''}
                     onChange={chnageHandler}
                      />
                  </label>

                   <label className='w-[95%] lg:w-[47%]'>
                   <p className='text-2xl text-sky-800 font-serif  pl-4'>Linkedin Link</p>
                     <input type='text' 
                       className='px-4 w-full ml-1 lg:ml-4 mt-3 py-2 border-2 rounded-sm outline-none '
                       placeholder='Basic information'
                       name='linkedin'
                       value={infodata.linkedin || ''}
                       onChange={chnageHandler}
                        />
                   </label>

               </div>

              <div className='w-full flex flex-col lg:flex-row gap-5 mt-5 '>
                 <label className='w-[95%] lg:w-[47%]'>
                   <p className='text-2xl text-sky-800 font-serif  pl-4'>Email</p>
                   <input type='email' 
                     className='px-4 w-full ml-1 lg:ml-4 mt-3 py-2 border-2 rounded-sm outline-none'
                     placeholder='Basic information pl-4'
                     
                     name='email'
                     value={infodata.email || ''}
                     onChange={chnageHandler}
                      />
                 </label>

                 <label className='w-[95%[] lg:w-[47%]'>
                   <p className='text-2xl text-sky-800 font-serif  pl-4'>Phone</p>
                   <input type='number'
                  className='px-4 w-full ml-1 lg:ml-4 mt-3 py-2 border-2 rounded-sm outline-none'
                  placeholder='Basic information'
                    name='phone'
                  value={infodata.phone}
                       onChange={event => setInfoData(prev => ({ ...prev, phone: event.target.value }))}
                   />
                   </label>

              </div>
              <Button type='submit' bgColor={'gray.200'} marginLeft={'4'} marginY={'1.5'}>Save</Button>
           </form>
        </div>
    </>
  )
}

export default BasicInfo;
