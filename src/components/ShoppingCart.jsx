import React from 'react';
import { Button, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from '@chakra-ui/react';
const ShoppingCart = () => {
  const navigate = useNavigate();
  var productSum;
  return (
    <Box align="center">
      <TableContainer width="80%">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Quantity</Th>
              <Th>Product Name</Th>
              <Th isNumeric>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Desk</Td>
              <Td isNumeric>159</Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>Wardrobe</Td>
              <Td isNumeric>239</Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>Table Lamp</Td>
              <Td isNumeric>15</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Total</Th>
              <Th></Th>
              <Td isNumeric>{productSum = 159 + 239 + 15}</Td>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Button
        rounded={'full'}
        px={6}
        colorScheme={'orange'}
        bg={'orange.400'}
        _hover={{ bg: 'orange.500' }}
        onClick={() => navigate('/checkout')}
      >
        Check Out
      </Button>
    </Box>
  );
};

export default ShoppingCart;
