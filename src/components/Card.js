import { Box, Badge, Image, Button } from '@chakra-ui/react'

function Card({product}) {
     
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={product.imageUrl} alt={product.imageAlt} />
  
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              {product.category}
            </Badge>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {product.name} {product.price}
          </Box>
          <Button>
            Add to Cart 
          </Button>
        </Box>
      </Box>
    )
  }

  export default Card; 