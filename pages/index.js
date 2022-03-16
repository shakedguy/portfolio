import React, { useContext, useEffect, useState } from 'react';
import TypeWriter from './../components/TypeWriter';
import Layout from '../contexts/Layout';
import { Box } from '@chakra-ui/react';
import useSWR from 'swr';
import { fetcher } from '../services/clientHelpers';

const Home = () => {
  const { data, error } = useSWR('/api/home', fetcher);
  const [lines, setLines] = useState(null);
  const layoutCtx = useContext(Layout);
  layoutCtx.setPageName('Home');

  useEffect(() => {
    if (data) {
      setLines(data.lines);
    }
  }, [data]);

  return (
    <Box className='page' flex={1} alignSelf={'start'} justifySelf={'left'}>
      {lines && <TypeWriter title={lines} />}
    </Box>
  );
};

export default Home;
