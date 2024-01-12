import { Flex, Heading, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export default function Ecosystem() {
  return (
    <Flex
      minH='600px'
      textAlign='center'
      justify='center'
      flexDir='column'
      align='center'
      mt={24}
      mb={48}
    >
      <Heading mb={24}>Integrations With Ecosystem</Heading>

      <Stack spacing={20} justify='center' align='center'>
        <Image src='/fastex.png' alt='fastex' width={150} height={150} />
        <Image
          src='/eco.png'
          alt='fastex'
          width={500}
          height={150}
          draggable='false'
          style={{
            userSelect: 'none',
          }}
        />
      </Stack>
    </Flex>
  );
}
