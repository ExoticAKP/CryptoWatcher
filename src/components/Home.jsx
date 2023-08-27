import { Box, HStack, Heading, Image, VStack } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <Box w={'100'} h={['600px','container.lg']} backgroundColor={'black'}>
      <VStack justifyContent={'center'}>
      <Image objectFit={'contain'} w={'container.lg'}src='https://c0.wallpaperflare.com/preview/471/889/271/cryptocurrency-concept-altcoins-blockchain.jpg'/>
      <HStack>
        <Heading color={'white'} m={'-15'}>Crypto Watcher
        </Heading>
        </HStack>
      </VStack>
      

    </Box>
  )
}

export default Home