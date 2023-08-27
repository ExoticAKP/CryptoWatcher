import { Box, Button,  HStack,  Heading,  Image, Input, Stack, Text,VStack } from '@chakra-ui/react'
import React from 'react'
import {useState,useEffect} from 'react'
const Footer = () => {
  const [txt,setTxt]=useState('');
  const handleChange=(event)=>setTxt(event.target.value);
  
    
  
  
  
  return (
    <Box w={'full'} h={'full'} bgColor={'black'} >
      <Stack direction={['column','row']} justifyContent={'space-evenly'} >
        <VStack  marginTop={'5'}  >
        <Heading fontSize={'20'}  color={'white'}>Any Suggestions?? Send Us Here</Heading>
        <HStack w={'full'} m={'5'} >
        <Input value={txt} onChange={handleChange} id="inp" w={'80%'} type="text" border={'4px solid black'} borderRadius={'10px solid blue'}  placeholder='Write here....' color={'white'}></Input>
        <Button onClick={()=>{
          alert("Suggestion Submitted");
        }}>
        <Image w={'10'} h={'10'} objectFit={'contain'}  src="https://media.istockphoto.com/id/1216419742/video/white-arrows-animated-on-black-background-submit-button-in-motion.jpg?s=256x256&k=20&c=k7vdm3-7_Sht9WpyPjGyAX6qNDq2XRmWWyWZvWfktcw="/>
        </Button>
        </HStack>
        
        </VStack>
        <VStack justifyContent={'space-evenly'} marginTop={'0'}  >
          <Heading size={'lg'} color={'white'}>Contact Us</Heading>
          <HStack justifyContent={'space-evenly'}>
          <a href='https://www.linkedin.com/in/amit-pandey-125237208/' target='blank'><Image marginTop={'-3'} w={'10'} h={'10'} borderRadius={'10px'} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAY1BMVEUCdLP///8AbrCNstODrNAAbK8Aaq+yyuCbvNn5+/0AcrO50OTZ5/H6/v4ueraUttXN3uwAZaxvoss/hbyqxd1elsRUkMEAYKrw9vpDib3D1+gvfriiwNrk7vVNib5qnMd8pczF02oiAAADKUlEQVRoge3ba5eqIBQGYMBAJfKajVnW/P9fOVozk8Lr1JwFeNY57A998fIslGCzXRB6CxXnka/IY3VHyfhT1Jwzf8F5XXzZOZfEb0ie3+1IeJbHENFod2vQA94N9sn3A7+HPFFS8FVoQnhB9qvZexKxlWwWkc1q9ibYwf6v7WGmE8PMuoIt2CYuerWNiLOZZsGW8ky/Yps5aju2+aWnj0gbNyM+tNmlpbNonLQct7uf0zR1MsUjW8RUj8JFw2G7DZrSg4OGA/uWQeqxdfBPQ3YB7N4+DW29p43R1vYfOrBFCuzdxYvNW2CnnmyF3vfJOg1t8+89/MH99HN5APbGwZCOxpbS7OhtZp+Gtmy8NBuPqSLR6G3pgF6Yx8o53r25oJfyFnF9vPPWVWlgKV9jJFLjGNOqPHO1Tl3OUzmvD82hZu5WyD/l53IMZ/JfuzYI9u9CvtpPLNtMyKw+Hg7H+pQx8eTG0JZcj2kzmHaMye/LWLVVn5lH2hdxRX5cSiKbRb2aR59M/uVKP9jc8bKOd/oc1F3flp8+srk+lVAaT4ZV42A13oBnWzDtDwlPszgi/96WRio52uU7lG/XLnU8SzY/G5c8QhGM27EZSvEmOO5xVuzSvGAeHcw9bNjX6xN6IeeyYqPFxDzSDLxyG/ZzergBaLgN+5VoQeXCl43euDdbmcObNzs9Gg/dm03fzVKaRTtVRdcVqGqh3cK6rTY14UJwcsEDrDLGNmt2/p1gyLJBp7TO3nc1bRU/gjNSo1pkyT7PH6hAJbrGjd0bfRj0uHc3dqQPWmIPTjLyQhu2WfgDpQuaO7FBXnIyzzrrD8eKvQepqFmkM743W7HByoaZBWFjYLNig+I67zzZoMYszJWCUYK3YoOcBBRG3dig6Ai+uTixd8EOdrCDHexgBzvYwQ52sIMdbDu2+dFnep1xEK4F/3ANLJtzMo9zNVnlJkYAW1b6PZLqlVoP+B46PeXHg48bPz/tH/v+HexgB3tur7mvZs39RGo1WxFUivURsqaErrSBjBfjfsFklf2CyX2fZLLCPskxObrlIerI/O4PPd6+p3zmQKvsi/0AnbFBWaxIr6IAAAAASUVORK5CYII='/></a>
          <a href='https://mail.google.com/mail/u/0/#inbox' target='blank'><Image marginTop={'-3'} w={'10'} h={'10'} borderRadius={'10px'} src='data:image/png;base64,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'/></a>
          <a href='https://www.instagram.com/am.it82/' target='blank'><Image marginTop={'-3'} w={'10'} h={'10'} borderRadius={'10px'} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAACfCAMAAADQxfvSAAAAY1BMVEX///8AAADo6Oj39/fMzMxXV1eKioq5ubn6+vpjY2NKSkoyMjLR0dF8fHwRERHIyMinp6fg4OCCgoIYGBjBwcEiIiKvr6/x8fGQkJBtbW3X19cKCgpCQkIqKiqhoaF1dXU5OTkAfH2VAAAGDUlEQVR4nN1d65qCOAxFkDteAAVlvL3/U64MOytJ05YWqPn2/BtRe2ybS5Mm43la+GXRRGmWn382y+DnnGdp1BSlrx9ch+Kxuy1ES8Rt9yhmcAv8KN+vRm7APo/8wIpdG6crc/tDGrfm9I6ZI3Y9sqMZuaCpHbLrUTcGq9xdHbPrce2mTl70BXY9oklT2IVforfZhBOm8OR6541Rn3T0Ll9k1+OipvetrfdBpGAXfENuMa5yKeFA703QeHHvWfXYlqW/FMpy+6iyu2w4yRJLRCOP4gX8IAJ+XOX0kKSQnMi33lYi90fxRY5KqJmO0nupVh/NxonykmpBUQeE1dgfk9XpeV5yJHzMEAsxIRuphVdmhZaYQiQjnfCGH40mXxQX8WgDVphQzOvvvDFE4QRqusFP7wen9DzvIGjDZvRU2KGu6b0JYgr159kD7z23izvghPfgf2eSFh+FXIrGB9h+ZX/6I0YP0vW5JG13ijt08sVqJh5eDtDr+/X13vY6WKvwOB6rRWKQDvR92bqvhuuHSDYOcBwRk8H0I9ORrm3UfOi1jKYDr+RgRJCTs7bsCpZ+NINIEvL+tQKu+m1lel6F6G1uIw8Oulv7njpSfvHK9PBuf+PxeRqLT3ZwStd0R3sQXvrto2bQ3ty9X4HhR9XxbglgEfhF+XkOhfW99KXb5S2paOxoULTApVeAv+9rL293JviN7KkP/ZgCuVbZyvRofiMB8aAv0KAFr6wHToK2O8TNsYkPXRtIdTy5vmOVC9VPhIzyQ/a9SrTFsQrH5786rI4FacYTKkYx3lRQ3aVoPrcW7A7PjFq0c/akvFy1fnm7DuBRhqxbSXyjCkmnDshdOrzSiXjOBjoD6pPcgz/dkN/2qWTX44mXBDvrmwx4gZDf2YNetZF66aalIDIYDAh26DkcE9q/H0/1XiV8wdBLUYGvbcGk52h+kX225ieJ7NB4gS0WjPZshkdchl87ffIGVC38eHrfvyV8J0r4IvxK8xxECEWv7Yqio0Zbgh+02VMxLZW6AL/YLkVST/KN5vMTgjWT0ei/fD4/fJo3wYQZnMuvUCzuK0yvaahQPLV+D87kh9ztP+zD3eljpoLTLpRcDNAa0Hn8WlKx1JctjhcH2ws50aEueDKPH7adPe4Pesz2QWVgdB7wLH6UbFzkn/Ep50sjI3P4+eLWf6kjrQfiE5oxZvATja4i2TiAiLyrV3gGPzEJUeljXYn4o5RZ/Bn8BHd02mlKdJjX4QdPLpvph1FhBlWnMGt+CT5rXKcGMoUz5VPxSWt+ePe9pl/4CbAUK3agNT+sy0xSODj5okhgWPObPgQB/OOW54emwDDQhcJSism35YekwzRQg5TMc2l+KAdWm+ZwWujNZNLPW/IrYBzEPEMHd+BZ6qha8oOpnb15nGsLHVZpksqSH7QBwvUFPVBaRmp77Pgl8Nt3xvSwaxvKTIgdvwBub5scGLxiUMtWwI5fC99mc2M5gF8hE2A7fsj4WtDDBkhmgu34QevxsuIHnQSZBbHjBw9GoRU/KGKyY5IdPxhzsbugADMZsliMHT+onqU3HJWAXqpMQf8/54/7/uMuv9z1H3f7wd3+cvdfuPt/7P1n7ucP7uc37udf9vED7vEX9vEr7vE/7vFT7vFn9vF79vkP7vkj9vk37vlL9vlf9vlz7vcP2N/fYH//hf39Ifb3r9jfX1vi/t+6/Oben1yd36z7p0742d/fNePn/P6zEb8f9/fHNcD3x13fvzfjlzuvX9AB1y84rv/QAtd/OK6f0QLXzziuP9IC1x85rt/SQajfclz/poNQ/+a4flAHoX7Qdf2lGmL9pev6VTWI+lXX9b9KwM32W//run5aBdTm4rd+2nn9uRwJWX/uvn5fBrp+/wv9D2hI+h98o38ECUn/CPb9N7j3L2Hf/4V9/xzu/Ye4929i3/9K0j/MrrOrGYJJ/cMk/dfW97bILrVi/zVZ/7oXl/513+j/F5n0/2PfP5F9/0n2/Tu59z/12PePZd9/l33/Yvb9nz3u/bM99v3He7Du396Def97j/v/DxjA+f8v/Iuv/v+KfwCBeWosKyl8JgAAAABJRU5ErkJggg=='/></a>
          </HStack>
        </VStack>
        <VStack marginTop={'5'} justifyContent={'center'} >
          <Heading color={'white'}>CryptoWatcher</Heading>
          <Text color={'white'}>©All rights reserved(IN) 2023</Text>
        </VStack>

      </Stack>
    </Box>
  )
}

export default Footer