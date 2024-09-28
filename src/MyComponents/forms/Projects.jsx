import React, { useState } from 'react'
import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { project,removeProject } from '../../Redux/slice/UserSlice';
import { useSelector } from 'react-redux';
import Chips from '../Chips';
const Projects = () => {

  const dispatch=useDispatch();
  const {user}=useSelector((state)=>state);

  const arr=user.projects.details;
   console.log(arr);

  const[projectdata,setProjectdata]=useState({
    id:'',
    project_title:'',
    deloyed_link:'',
    github_link:'',
    project_description:''

  });

  function changeHandler(e)
  {
   setProjectdata((prev)=>(
    {
      ...prev,
      [e.target.name]:e.target.value
    }
   ))
  };

  function submitHandler(e)
  {
    e.preventDefault();
     dispatch(project(projectdata));
     
     const id=projectdata.project_title;

     setProjectdata({
      id:id,
      project_title:'',
      deloyed_link:'',
      github_link:'',
      project_description:''
     })
  }
  function projectUpdateHandler(id,name)
  {
       if(name==='project')
       {
        const curData=arr.filter((item)=>item.id===id)
         setProjectdata(
          {
            project_title:curData[0].project_title,
            deloyed_link:curData[0].deloyed_link,
            github_link:curData[0].github_link,
            project_description:curData[0].project_description,
          }
         );

         const newData=arr.filter((item)=>item.id !== id)
         dispatch(removeProject(newData));
       }
    else{
      return;
    }
      
  }
  return (
    <>
      <div className='m-0 lg:m-9'>
           <form className='flex flex-col ' onSubmit={submitHandler}>
            

              <lable className='w-[95%] lg:w-full'>
                <p className='text-2xl text-sky-800 font-serif  pl-4'>Title</p>
                <input type='text' 
                 className=' min-w-[60%] w-full ml-1 lg:ml-4 mt-3 py-2 border-2 rounded-sm outline-none px-4'
                 placeholder='Enter project eg.title'
                 name='project_title'
                 value={projectdata.project_title}
                 onChange={changeHandler}
                 />
              </lable>

              <div className='flex'>
                  {
                    arr.length>0
                    &&
                    arr.map((item,index)=>(
                      <Chips
                       key={index}
                       id={item.id}
                       name="project"
                       item={index+1}
                       updater={removeProject}
                       updateHandler={projectUpdateHandler}
                       arr={arr}
                     />
                    ))
                    
                  }
              </div>

              <div className='w-full flex flex-col lg:flex-row gap-5 mt-5 '>
                 <label className='w-[95%] lg:w-full'>
                   <p className='text-2xl text-sky-800 font-serif  pl-4'>Deployed Link</p>
                    <input type='text' 
                     className='min-w-[60%] w-full ml-1 lg:ml-4 mt-3 py-2 border-2 rounded-sm outline-none px-4'
                     placeholder='Enter deployed link of project '
                     name='deloyed_link'
                     value={projectdata.deloyed_link}
                     onChange={changeHandler}
                      />
                 </label>

                   <label className='w-[95%] lg:w-full'>
                   <p className='text-2xl text-sky-800 font-serif  pl-4'>Github link</p>
                     <input type='text' 
                       className='min-w-[60%] w-full ml-1 lg:ml-4 mt-3 py-2 border-2 rounded-sm outline-none px-4'
                       placeholder='Enter github link of your project'
                       name='github_link'
                       value={projectdata.github_link}
                       onChange={changeHandler}
                        />
                   </label>

              </div>

              <lable className='lg:w-full w-[95%] mt-3'>
                <p className='text-2xl text-sky-800 font-serif  pl-4'> Project Description</p>
                  <textarea 
                  onChange={changeHandler}
                  className='border-2 rounded-md outline-none lg:ml-3 lg:w-[70%] w-full ml-1 '
                  name="project_description" 
                  value={projectdata.project_description}
                  id="" 
                  cols="30" 
                  rows="10">

                  </textarea>
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

export default Projects;