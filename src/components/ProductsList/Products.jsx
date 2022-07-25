import React from 'react';
import { Grid, GridItem, Flex } from '@chakra-ui/react';
import Product from './Product/Product';

const products = [
    {id: 1, name: 'Desk', category: 'Furniture', description: 'This is a description of a desk.', price: '$159', imageUrl: 'https://www.ikea.com/sg/en/images/products/micke-desk-white__0736018_pe740345_s5.jpg?f=s', imageAlt:'Picture of a desk.'},
    {id: 2, name: 'Wardrobe', category: 'Furniture',description: 'This is a description of a wardrobe.', price: '$239', imageUrl: 'https://www.ikea.com/sg/en/images/products/vihals-storage-unit-white__1038847_pe839901_s5.jpg?f=s', imageAlt:'Picture of a wardrobe.'},
    {id: 3, name: 'Table Lamp', category: 'Furniture', description: 'This is a description of a table lamp.', price: '$15', imageUrl: 'https://www.ikea.com/sg/en/images/products/tertial-work-lamp-dark-grey__0609306_pe684440_s5.jpg?f=s', imageAlt: 'Picture of a tablelamp'}
]

function Products() {
    
    return (
        <main>
        <Flex
      direction="column"
      justifyContent="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      minH="100vh"
    >
            <Grid w="full"
        gridGap="5"
        gridTemplateColumns="repeat( auto-fit, minmax(300px, 1fr) )">
                {products.map((product) => (
                    <GridItem key={product.id}>
                        <Product product={product} />
                    </GridItem>
                ))}
            </Grid>
            </Flex>
        </main>
    );
}

export default Products; 