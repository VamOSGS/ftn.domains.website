import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Wallet', 'Addresse', 'Contract', 'Asset'];

const w = window.innerWidth;
export default function Hero() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1500 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <Flex
      minH='100dvh'
      background='linear-gradient(to right, #ffe259, #ffa751)'
      align='center'
      justify='center'
      overflow='hidden'
      fontSize={{
        base: 'xl',
        md: '3xl',
        lg: '4xl',
        xl: '5xl',
      }}
      fontWeight='bold'
    >
      {w > 480 ? (
        <Flex
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <Flex>
            <Text display='flex' textAlign='center' color='white'>
              Decentralised naming for
            </Text>
            <Flex
              color='ActiveBorder'
              pl={4}
              align='center'
              w={{
                base: '100px',
                md: '300px',
              }}
            >
              <TextTransition springConfig={presets.wobbly}>
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
              s
            </Flex>
          </Flex>

          <Text textAlign='center' color='white'>
            & more
          </Text>
        </Flex>
      ) : (
        <Box fontSize='4xl' color='white'>
          <Text display='flex' textAlign='center'>
            Decentralised
          </Text>
          <Text display='flex' textAlign='center'>
            naming for
          </Text>
          <Flex
            color='ActiveBorder'
            align='center'
            w={{
              base: '100px',
              md: '300px',
            }}
          >
            <TextTransition springConfig={presets.wobbly}>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
            s
          </Flex>
          <Text> & more</Text>
        </Box>
      )}
    </Flex>
  );
}
