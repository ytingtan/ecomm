import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme
} from '@chakra-ui/react';
import Routing from './Routing';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid p={2}>
          <Routing />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
