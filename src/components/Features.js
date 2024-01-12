import { Box, Flex, Heading, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export default function Features() {
  return (
    <Flex
      justify='center'
      align='center'
      minH='400px'
      textAlign='center'
      borderBottom='1px solid #eaeaea'
      py={{
        base: 12,
        md: 6,
      }}
    >
      <Stack
        direction={{
          base: 'column',
          md: 'row',
        }}
        spacing={32}
        align='center'
      >
        <Flex flexDir='column' justify='space-between' height='200px'>
          <Image
            src='/search.png'
            alt='search a domain'
            width={150}
            height={150}
          />
          <Heading color='#ffe259'>Search</Heading>
        </Flex>
        <Flex flexDir='column' justify='space-between' height='200px'>
          <Image
            src='/register.png'
            alt='register a domain'
            width={150}
            height={150}
          />
          <Heading color='#fcc756'>Register</Heading>
        </Flex>
        <Flex flexDir='column' justify='space-between' height='200px'>
          <Image
            src='/manage.png'
            alt='mange a domain'
            width={150}
            height={150}
          />
          <Heading color='#ffa751'>Manage</Heading>
        </Flex>
      </Stack>
    </Flex>
  );
}
