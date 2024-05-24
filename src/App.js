import React from 'react';
import { Box, Container, Flex, IconButton, Tooltip, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

const products = [
  {
    id: 1,
    name: 'Rosa Vermelha',
    price: 'R$10,00',
    image: '/imagens/RosaVermelha.jpg',
  },
  {
    id: 2,
    name: 'Buquê de Flores',
    price: 'R$50,00',
    image: '/imagens/Buque.jpg',
  },
  {
    id: 3,
    name: 'Orquídea',
    price: 'R$30,00',
    image: '/imagens/orquidea.jpg',
  },
  {
    id: 4,
    name: 'Tulipas',
    price: 'R$40,00',
    image: '/imagens/tulipas.jpg',
  },
  {
    id: 5,
    name: 'Lírios',
    price: 'R$25,00',
    image: '/imagens/lirios.jpg',
  },
  {
    id: 6,
    name: 'Girassóis',
    price: 'R$35,00',
    image: '/imagens/girassois.jpg',
  },
  {
    id: 7,
    name: 'Cravo',
    price: 'R$15,00',
    image: '/imagens/cravo.jpg',
  },
  {
    id: 8,
    name: 'Violeta',
    price: 'R$20,00',
    image: '/imagens/violeta.jpg',
  },
];

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Header />
      <Container maxW="container.xl" py={6}>
        <Box textAlign="center" mb={8}>
          <Box as="h2" fontSize="2xl" fontWeight="bold">
            Bem-vindo à Floricultura Mendes
          </Box>
          <Box as="p" mt={4}>
            Oferecemos uma variedade de flores frescas e arranjos para todas as ocasiões.
          </Box>
        </Box>
        <Flex flexWrap="wrap" justifyContent="space-around">
          {products.map((product) => (
            <Box key={product.id} width="300px" mb={8} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
              <ProductCard product={product} />
            </Box>
          ))}
        </Flex>
        <Tooltip label="Floricultura" aria-label="Floricultura">
          <IconButton
            icon={<AddIcon />}
            isRound
            size="lg"
            colorScheme="teal"
            aria-label="Adicionar produto"
            position="fixed"
            bottom="40px"
            right="40px"
            onClick={onOpen}
          />
        </Tooltip>
        <Modal isOpen={isOpen} onClose={onClose} size="sm">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Aviso</ModalHeader>
            <ModalBody>
              Teste, coloque sua mensagem aqui
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="teal" onClick={onClose}>
                Fechar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
