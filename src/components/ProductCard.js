import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

function ProductCard({ product }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      textAlign="center"
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box
        width="200px"
        height="200px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="md"
        overflow="hidden"
      >
        <Image src={product.image} alt={product.name} objectFit="cover" />
      </Box>
      <Text mt={4} fontSize="xl" fontWeight="bold">
        {product.name}
      </Text>
      <Text mt={2} fontSize="lg" color="gray.500">
        {product.price}
      </Text>
    </Box>
  );
}

export default ProductCard;
