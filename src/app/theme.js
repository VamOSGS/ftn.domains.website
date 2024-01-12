import { Roboto_Mono } from 'next/font/google';
// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';

const montserrat = Roboto_Mono({ subsets: ['cyrillic'], display: 'swap' });

const fonts = {
  heading: montserrat.style.fontFamily,
  body: montserrat.style.fontFamily,
};

const theme = extendTheme({
  fonts,
});

export default theme;
