import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export default function WaitList() {
  return (
    <Flex
      flexDir='column'
      justify='center'
      align='center'
      minH='100dvh'
      textAlign='center'
      id='waitlist'
      py={12}
      background='#fef8f8'
    >
      <Heading color='#fcc756' mb='80px'>
        Join The Wait list
      </Heading>
      <Box textAlign='center'>
        <Box margin='auto' w='300px' mb={4}>
          <Image
            src='/waitlist.png'
            alt='waitlist'
            style={{
              width: '300px',
              height: '300px',
            }}
            width={300}
            height={300}
          />
        </Box>
        <Input
          minW={{
            base: '250px',
            md: '300px',
          }}
          width={{
            base: '280px',
            md: '400px',
          }}
          margin='auto'
          placeholder='Enter your email'
          py={4}
          display='block'
        />
        <Button mt={6} minW='150px'>
          Join
        </Button>
      </Box>
    </Flex>
  );
}
