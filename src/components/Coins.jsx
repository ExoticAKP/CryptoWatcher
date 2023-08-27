import {Container, Image, Stack, VStack,Text, HStack, Heading, Input, Radio, RadioGroup, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
const Coins = () => {
  const [coin,setCoin]=useState([]);
  const [currency,setCurrency]=useState('INR');
  const [page,setPage]=useState(1);

  useEffect(()=>{
    const fetchCoins= async()=>{
      const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=${page}&sparkline=false&locale=en`);
      
      setCoin(data);
      console.log(data);
      
    };
    fetchCoins();
  },[currency,page]);
  return (
    <Container maxW={"container.xl"} >
     <RadioGroup onChange={setCurrency} value={currency} marginTop={'5'}>
      <HStack justifyContent={'center'}>
      <Radio value='INR'>INR</Radio>
      <Radio value='USD'>USD</Radio>
      <Radio value='EUR'>EUR</Radio>
      </HStack>
     </RadioGroup>
      <HStack wrap={'wrap'} justifyContent={"center"} m={'4'}>
          {coin.map((i)=>(
          <CoinCard currency={currency} name={i.name} rank={i.market_cap_rank} imageSrc={i.image} price={i.current_price}/>
        ))}
        </HStack>
        <HStack justifyContent={'center'} m={'2'}>
        <Button  backgroundColor={'black'} color={'white'} onClick={page>1?(()=>setPage(page-1)):()=>setPage(page)}>
            <Text>-</Text>
        </Button>
        <Text>{page}</Text>
        <Button backgroundColor={'black'} color={'white'} onClick={page<7?(()=>setPage(page+1)):()=>setPage(page)}>
            <Text>+</Text>
        </Button>
      </HStack>

    </Container>
  )
}
const CoinCard=({currency,name,rank,imageSrc,price})=>(
  
  <Link to='/'>
  <VStack w={"60"} shadow={'lg'} m={'5'} borderRadius={'lg'} transition={'all 0.1s'} css={{
      ":hover":{
        transform:"scale(1.2)"
      }
    }}>
    <Image src={imageSrc} w={"10"} h={"10"} objectFit={"contain"} alt={"Exchanges"}/>
    <Heading size={'md'} noOfLines={1}>Rank #{rank}</Heading>
    <Text noOfLines={1}>{name}</Text>
    <Text noOfLines={1}>Price: {symbol(currency)}{price}</Text>
  </VStack>
  </Link>
)
function symbol(currencyNew){
  return (currencyNew=='INR'?'₹':(currencyNew=='USD'?'$':'€'))
}

export default Coins
