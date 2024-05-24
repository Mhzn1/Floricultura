import React from 'react';
import { Box, Image } from '@chakra-ui/react';

function Header() {
  return (
    <Box bg="blue.400" color="white" py={4} textAlign="center">
      <Image src="/imagens/logo.png" alt="Logo da Floricultura da Ana" mx="auto" boxSize="350px" mb={0} />
    </Box>
  );
}

export default Header;
