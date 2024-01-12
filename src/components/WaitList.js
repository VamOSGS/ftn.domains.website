import { submitEmail } from '@/app/actions/submit';
import { Box, Button, Flex, Heading, Input, useToast } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState } from 'react';

export default function WaitList() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toast = useToast();
  const submitToAction = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await submitEmail(email);
    setIsLoading(false);
    if (res.success) {
      toast({
        title: 'Success',
        description: res.message,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setIsSuccess(true);

      return;
    }
    toast({
      title: 'Error',
      description: res.message,
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
  };
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
        <form onSubmit={submitToAction}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            disabled={isLoading || isSuccess}
          />
          <Button
            type='submit'
            isLoading={isLoading}
            isDisabled={isSuccess}
            mt={6}
            minW='150px'
          >
            {isSuccess ? 'Subscribed🎉' : 'Join🔥'}
          </Button>
        </form>
      </Box>
    </Flex>
  );
}
