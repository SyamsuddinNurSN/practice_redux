// ProductCard.js
import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';

const ProductCard = ({ product, addToCart }) => {
  const { id, name, price } = product;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p="4" m="4">
      <Image src={`https://placekitten.com/300/200?image=${id}`} alt={name} />
      <Box mt="4">
        <Text fontWeight="semibold" fontSize="lg" mb="2">
          {name}
        </Text>
        <Text color="gray.600">Deskripsi produk singkat.</Text>
      </Box>
      <Box mt="4">
        <Text fontSize="2xl" fontWeight="bold">
          ${price.toFixed(2)}
        </Text>
      </Box>
      <Button colorScheme="teal" mt="4" onClick={handleAddToCart}>
        Tambah ke Keranjang
      </Button>
    </Box>
  );
};

export default ProductCard;
