import React, { useContext } from 'react';
import TypeWriter from './../components/TypeWriter';
import Layout from '../contexts/Layout';
import { Box } from '@chakra-ui/react';

const lines = ['hello, my name is Guy Shaked,', 'and i am a computer science student'];

const Home = () => {
  const layoutCtx = useContext(Layout);
  layoutCtx.setPageName('Home');

  return (
    <Box className='page' flex={1} alignSelf={'start'} justifySelf={'left'}>
      {lines && <TypeWriter title={lines} />}
    </Box>
  );
};

export default Home;
