import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Heading, Box, Stack } from '@chakra-ui/react';
import textStyles from '../styles/Text.module.css';
require('typeface-special-elite');

const TypeWriter = ({ title }) => {
  const [isEnd, setIsEnd] = useState(false);

  return (
    <Stack className='text-Box'>
      <Box alignSelf={'center'} justifySelf={'center'} w={'65%'}>
        <Heading className={textStyles.typewiter}>
          <Typewriter words={[title[0]]} loop={1} onLoopDone={() => setIsEnd(true)} />
        </Heading>
      </Box>
      <br />
      {isEnd && (
        <Box alignSelf={'center'} justifySelf={'center'} w={'65%'}>
          <Heading className={textStyles.typewiter}>
            <Typewriter words={[title[1]]} loop={1} />
          </Heading>
        </Box>
      )}
    </Stack>
  );
};

export default TypeWriter;
