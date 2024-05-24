import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#f9f9f9',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
      },
    },
  },
});

export default theme;
