import { HStack, Button, Text, Heading} from '@chakra-ui/react'
import { color } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <HStack p={'4'} shadow={'base'} justifyContent={'space-evenly'} backgroundColor={'blackAlpha.800'} boxShadow={'xl'} h={'20'}>
        <Heading color={'white'} justifyContent={'flex-start'} noOfLines={1}>Hello Cryppyy</Heading>
        <Button variant={'unstyled'} color={'white'} transition={'all 0.8s'} __css={{
          ":hover":{
            transform:"scale(1.4)",
            fontStyle:"bold"
          }
        }}>
            <Link to="/">Home</Link>
        </Button>
        <Button variant={'unstyled'} color={'white'} transition={'all 0.8s'} __css={{
          ":hover":{
            transform:"scale(1.4)",
            fontStyle:"bold"
          }
        }}>
            <Link to="/coins">Coins</Link>
        </Button>
        <Button variant={'unstyled'} color={'white'} transition={'all 0.8s'} __css={{
          ":hover":{
            transform:"scale(1.4)",
            fontStyle:"bold"
          }
        }}>
            <Link to="/exchanges">Exchanges</Link>
        </Button>
    </HStack>
  )
}

export default Header