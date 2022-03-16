import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import containerClasses from '../styles/Container.module.css';

const Card = ({ children, isDarkMode, p, boxShadow }) => {
  const bg = isDarkMode ? containerClasses.cardDark : containerClasses.cardLight;
  return (
    <Center mt={2}>
      <Box className={bg} borderRadius={3} boxShadow={boxShadow} p={p}>
        {children}
      </Box>
    </Center>
  );
};
export default Card;
