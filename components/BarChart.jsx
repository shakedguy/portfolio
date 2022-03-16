import React from 'react';
import { Box, Text, Container } from '@chakra-ui/react';
import containerClasses from '../styles/Container.module.css';

const BarChart = ({ color, value, onClick }) => {
  const val = value + '%';

  return (
    <Container className={containerClasses.barChart} p={0} onClick={onClick} cursor={'pointer'}>
      <Box bg={color} w={val} h={'100%'} textAlign={'center'} borderRadius={3}>
        <Text fontFamily={'Raylay'} pt={'2'} justifySelf={'center'} fontSize={'1xl'}>
          {val}
        </Text>
      </Box>
    </Container>
  );
};

export default BarChart;
