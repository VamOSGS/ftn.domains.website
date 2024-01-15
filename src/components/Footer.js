import { Flex, Heading, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <Flex
      justify='space-between'
      align='center'
      py={12}
      px={12}
      borderTop='1px solid #eaeaea'
      flexDir={{
        base: 'column',
        md: 'row',
      }}
      minH={{
        base: '300px',
        md: '100px',
      }}
    >
      <Heading
        fontSize='xl'
        cursor='pointer'
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        FTN.DOMAINS
      </Heading>

      <Stack direction='row' spacing={4}>
        <a href='https://x.com/ftndomains' target='_blank'>
          Twitter
        </a>
        {/* <a href='#' target='_blank'>
          Discord
        </a> */}
        <a href='https://github.com/opengate-labs' target='_blank'>
          Github
        </a>
      </Stack>

      <a href='https://ogate.io' target='_blank'>
        <Image src='/opengate.png' alt='opengate' width={150} height={150} />
      </a>
    </Flex>
  );
}
