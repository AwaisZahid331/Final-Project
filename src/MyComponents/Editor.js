// import { HStack, VStack } from '@chakra-ui/react';
// import React, { useState } from 'react'
// import BasicInfo from './forms/BasicInfo';
// import WorkExp from './forms/WorkExp';
// import Education from './forms/Education';
// import Projects from './forms/Projects';
// import Achivements from './forms/Achivements';
// import Summery from './forms/Summery';
// import Others from './forms/Others';

// const Editor = ({sections}) => {

//     const[Active,setactive]=useState(Object.keys(sections)[0]);

//     const components={
//       basisinfo: BasicInfo,
//       workExp: WorkExp,
//       education:Education,
//       project:Projects,
//       achivement:Achivements,
//       summery:Summery,
//       other:Others,
//     };


//   return (
//     <>
//         <HStack w={'full'} margin={'auto'} justifyContent={'space-around'} marginTop={'5'} cursor={'pointer'}>
//          {
//             Object.keys(sections).map((key)=>(
//               <div 
//               style={Active ===key ? ({borderBottom:"2px solid blue"}) :({borderBottom:"none"})}
//                  key={key}
//                  className='text-xl text-blue-600 font-medium'
//                  onClick={()=> setactive(key)}
//                  >
//                 {sections[key]}
               
//               </div>
//             ))
//          }        
//         </HStack>
        
             
//                <div>
//                {
//                  Object.keys(components).map((componentKey)=>{
//                    return Active === componentKey ? (React.createElement(components[componentKey], { key: componentKey })
//                    ):(null)
//                  })
//                }
//                </div>
             
        
//     </>
//   )
// }

// export default Editor;
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { HStack, VStack, Box, IconButton, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import BasicInfo from './forms/BasicInfo';
import WorkExp from './forms/WorkExp';
import Education from './forms/Education';
import Projects from './forms/Projects';
import Achivements from './forms/Achivements';
import Summery from './forms/Summery';
import Others from './forms/Others';

const Editor = ({ sections }) => {
  const [active, setActive] = useState(Object.keys(sections)[0]);
  const [isOpen, setIsOpen] = useState(false);
  const { onOpen, onClose } = useDisclosure();

  const components = {
    basisinfo: BasicInfo,
    workExp: WorkExp,
    education: Education,
    project: Projects,
    achivement: Achivements,
    summery: Summery,
    other: Others,
  };

  return (
    <>
      <Box display={{ base: 'block' ,lg:'none' }}>
      <IconButton
  icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
  onClick={() => setIsOpen(!isOpen)}
  variant="ghost"
  aria-label="Toggle menu"
  size="lg"
      />
      </Box>
       <div className='lg:block sm:hidden md:hidden'>
       <HStack w={'full'} margin={'auto'} justifyContent={'space-around'} marginTop={'5'} cursor={'pointer'} display={{ base: 'none', md: 'flex' }}>
        {Object.keys(sections).map((key) => (
          <div
            style={active === key ? { borderBottom: '2px solid blue' } : { borderBottom: 'none' }}
            key={key}
            className="text-xl text-blue-600 font-medium"
            onClick={() => setActive(key)}
          >
            {sections[key]}
          </div>
        ))}
      </HStack>
       </div>
     

       <div className='block md:block lg:hidden'>
       <VStack display={{ base: isOpen ? 'flex' : 'none', md:isOpen ? 'flex' :'none' }}>
        {Object.keys(sections).map((key) => (
          <div
            key={key}
            className="text-xl text-blue-600 font-medium"
            onClick={() => {
              setActive(key);
              onClose();
              setIsOpen(!isOpen)
            }}
          >
            {sections[key]}
          </div>
        ))}
      </VStack>
       </div>
      {/* <VStack display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}>
        {Object.keys(sections).map((key) => (
          <div
            key={key}
            className="text-xl text-blue-600 font-medium"
            onClick={() => {
              setActive(key);
              onClose();
              setIsOpen(!isOpen)
            }}
          >
            {sections[key]}
          </div>
        ))}
      </VStack> */}

      <div>
        {Object.keys(components).map((componentKey) =>
          active === componentKey ? React.createElement(components[componentKey], { key: componentKey }) : null
        )}
      </div>
    </>
  );
};

export default Editor;
