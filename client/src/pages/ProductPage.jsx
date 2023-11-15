// ProductPage.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import {  Box, Flex, Spacer } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import CartPage from './CartPage';

const products = [
  { id: 1, name: 'Produk 1', price: 19.99 },
  { id: 2, name: 'Produk 2', price: 29.99 },
  { id: 3, name: 'Produk 3', price: 39.99 },
];

const ProductPage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    
      <Flex>
        <Box p="4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={() => handleAddToCart(product)} />
          ))}
        </Box>
        <Spacer />
        <Box p="4">
          <CartPage />
        </Box>
      </Flex>
    
  );
};

export default ProductPage;
