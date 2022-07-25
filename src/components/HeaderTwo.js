import { useState } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link as RouteLink
  } from "react-router-dom";
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const NavLink = ({ text }) => (
    <Link>
      <Text fontSize="xl">{text}</Text>
    </Link>
  );
  
const Header = (props) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  return (
    <Flex
      mb={8}
      p={8}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
    >
      <Box w="200px">
        <Text fontSize="lg" fontWeight="bold">
          Ying Ting
        </Text>
      </Box>

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <RouteLink to="/">
            <NavLink text="Home" />
            </RouteLink>
            
        <RouteLink to="/products">
            <NavLink text="Products" />
        </RouteLink>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
