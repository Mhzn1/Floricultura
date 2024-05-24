import React from 'react';
import { Box } from '@chakra-ui/react';

function Footer() {
  return (
    <Box bg="gray.200" py={4} textAlign="center" mt={4}>
      <Box as="p">&copy; 2024 Floricultura da Ana. Todos os direitos reservados.</Box>
    </Box>
  );
}

export default Footer;
