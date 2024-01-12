'use client';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Wallet', 'Addresse', 'Contract', 'Asset'];

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function Hero() {
  const size = useWindowSize();
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
      {size.width > 480 ? (
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
