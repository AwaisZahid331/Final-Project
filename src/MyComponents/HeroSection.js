import { Stack, VStack, Image } from '@chakra-ui/react';
import React from 'react';
import hero from '../assts/hero.svg'

const HeroSection = () => {
  return (
    <>
      <Stack
        direction={['column', 'row']}
        maxW={['100%', '90vw']}
        minH={['100vh', '80vh']}
        margin={'auto'}
        alignItems={['center', 'stretch']}
        justifyContent={['center', 'space-between']}
        padding={['6', '10']}
      >
        <VStack w={['full', '50%']} alignItems={['center', 'flex-start']} justifyContent={'center'} rowGap={'6'}>
          <h1 className='lg:text-5xl text-sky-800 font-semibold font-sans text-3xl '>
          Stand Out from the Crowd with Our Resume Builder
          </h1>

          <h1 className='lg:text-5xl text-sky-800 font-semibold font-sans text-3xl'>
            Make a resume. It's FREE*
          </h1>
        </VStack>

        <VStack w={['full', '50%']} justifyContent={'center'} padding={['0', '10']}>
          <Image src={hero} w={['80%', '100%']} />
        </VStack>
      </Stack>
    </>
  )
}

export default HeroSection;
