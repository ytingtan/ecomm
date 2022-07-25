import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
  } from '@chakra-ui/react';
import { useState } from 'react';
import PopUp from './PopUp';

  export default function CardNew({product}) {
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
        setIsShown(current => !current);
    }
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={product.imageUrl}
              alt={product.imageAlt}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Stack direction={'row'} align={'center'}>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                    {product.name}
                </Heading>
                <Text fontWeight={800} fontSize={'xl'}>
                    {product.price}
                </Text>
            </Stack>
            
            <Button onClick={handleClick}>
            Read More
            </Button>
            {isShown && <PopUp product={product}/>}
          </Stack>
        </Box>
      </Center>
    );
  }
  