// CartPage.js
import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  SimpleGrid,
  ButtonGroup,
  Stack,
  
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, selectCart, updateQuantity } from "../redux/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const cartItems = cart.items || []; // Menangani jika cart.items adalah null atau tidak terdefinisi

  const handleUpdateQuantity = (id, newQuantity) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Heading p="4" size="md">
        Keranjang Belanja
      </Heading>
      <SimpleGrid columns={1} spacing={4} p="4">
        {cartItems.length === 0 ? (
          <Text>Keranjang kosong.</Text>
        ) : (
          cartItems.map((item) => (
            <Flex key={item.id} align="center" mb="4">
              <Stack direction={"column"}>
                <Stack direction={"row"} spacing={"5"}>
                  <Box>
                    <Text>{item.name}</Text>
                  </Box>

                  <ButtonGroup>
                    <Button
                      size="sm"
                      colorScheme="teal"
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </Button>

                    <Button
                      size="sm"
                      colorScheme="teal"
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </Button>
                  </ButtonGroup>
                  <Button
                    size="sm"
                    colorScheme="red"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Hapus
                  </Button>
                </Stack>
                <Stack direction={"row"}>
                  <Flex minWidth="max-content" alignItems="center" gap="2">
                    <Box>
                      <Text>
                        {" "}
                        ${item.price.toFixed(2)} X {item.quantity}
                      </Text>
                    </Box>

                    <Box>
                      <Text color="gray.600">
                        Total: ${(item.price * item.quantity).toFixed(2)}
                      </Text>
                    </Box>
                  </Flex>
                </Stack>
              </Stack>
            </Flex>
          ))
        )}
      </SimpleGrid>
      <Box borderTopWidth="1px" p="4">
        <Text fontWeight="bold">Total:</Text>
        <Text>
          $
          {cartItems
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}
        </Text>
        <Button colorScheme="teal" mt="4">
          Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default CartPage;
