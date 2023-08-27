import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page,setPage]=useState(1);

  useEffect(() => {
    const fetExchanges = async () => {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/exchanges?per_page=100&page&page=${page}`
      );
      setExchanges(data);
      setLoading(false);
      console.log(data);
    };
    fetExchanges();
  }, [page]);
  return (
    <Container maxW={"container.xl"}>
      <HStack wrap={'wrap'} justifyContent={'center'} marginTop={'5'}>
        {exchanges.map((i)=>(
          <ExchangeCard key={i.id} name={i.name} rank={i.trust_score_rank} image={i.image} url={i.url} year={i.year_established} trust={i.trust_score}/>
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
  );
};
const ExchangeCard = ({ key, name, rank, image, url,year,trust }) => (
  <a href={url} target="blank">
    <VStack w={"60"} shadow={'lg'} m={'5'} borderRadius={'lg'} transition={'all 0.1s'} css={{
      ":hover":{
        transform:"scale(1.2)"
      }
    }}>
      <Image src={image} w={"10"} h={"10"} objectFit={"contain"} alt={"Exchanges"}/>
      <Heading size={'md'} noOfLines={1}>{name}</Heading>
      <Text noOfLines={1}>Rank #{rank}</Text>
      <Text noOfLines={1}>{key}</Text>
      <Text noOfLines={1}>Estd. {year}</Text>
      <Text noOfLines={1}>Trust Score: {trust}</Text>
    </VStack>
  </a>
);

export default Exchanges;
