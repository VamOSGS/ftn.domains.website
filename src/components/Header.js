'use client';
import { Button, Flex, Image as ChakraImage, Box } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <Flex
      w='full'
      align='center'
      justify='space-between'
      py={4}
      px={{
        base: 4,
        md: 8,
        lg: 12,
      }}
      position='fixed'
      background='hsla(0,0%,100%,.8)'
      backdropFilter='saturate(180%) blur(5px)'
      boxShadow='inset 0 -1px 0 0 var(--accents-2)'
      borderBottom='1px solid #f6f5f5'
      zIndex='9999'
    >
      {/* <Heading fontSize='2xl'>FTN.DOMAINS</Heading> */}
      <Box
        w={{
          base: '120px',
          md: '200px',
        }}
      >
        <Image src='/logo.png' alt='name' width={200} height={50} />
      </Box>
      <Button
        onClick={() => {
          window.scrollTo({
            top: document.body.scrollHeight - 400,
            behavior: 'smooth',
          });
        }}
        fontSize={{
          base: 'sm',
          md: 'xl',
        }}
      >
        Join the Wait list
      </Button>
    </Flex>
  );
}
