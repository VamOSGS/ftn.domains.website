import { Badge, Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export default function Example() {
  return (
    <Flex
      justify='center'
      align='center'
      minH='550px'
      // borderBottom='1px solid #eaeaea'
      flexDir='column'
      background='#f9f6fc'
    >
      <Flex align='center' mb={4}>
        <Box
          w={{
            base: '25px',
            sm: '50px',
          }}
        >
          <Image src='/name.png' alt='name' width={50} height={50} />
        </Box>

        <Heading
          fontSize={{
            base: '2xl',
            sm: '4xl',
          }}
        >
          Your web3 username
        </Heading>
      </Flex>
      <Text
        mb={16}
        maxW={{
          base: '300px',
          sm: '500px',
        }}
        textAlign='center'
      >
        No more copying and pasting long addresses. Use your BNS name to store
        all of your addresses and receive any cryptocurrency, token, or NFT.
      </Text>
      <Flex
        align='center'
        flexDir={{
          base: 'column',
          md: 'row',
        }}
      >
        <Badge
          mr='2'
          fontSize={{
            base: 'xs',
            sm: 'sm',
            md: 'xl',
          }}
          variant='outline'
          colorScheme='red'
        >
          0x235C24157644562aE5E89e7660546536D73E8681
        </Badge>
        <Image src='/arrow.png' alt='arrow' width={50} height={50} />
        <Badge ml={2} fontSize='xl' variant='outline' colorScheme='yellow'>
          opengate.ftn
        </Badge>
      </Flex>
    </Flex>
  );
}
