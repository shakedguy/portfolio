import React, { useContext } from 'react';
import TypeWriter from './../components/TypeWriter';
import Layout from '../contexts/Layout';
import { buildFilePath, extractFileData } from '../services/helpers';
import { Box } from '@chakra-ui/react';

const Home = ({ lines }) => {
  const layoutCtx = useContext(Layout);
  layoutCtx.setPageName('Home');

  return (
    <Box className='page' flex={1} alignSelf={'start'} justifySelf={'left'}>
      <TypeWriter title={lines} />
    </Box>
  );
};

export const getStaticProps = async () => {
  const filePath = buildFilePath('home.json');
  const data = await extractFileData(filePath);
  return {
    props: {
      lines: [data.headers.first, data.headers.second],
    },
  };
};

export default Home;
