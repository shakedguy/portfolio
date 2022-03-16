import React, { useState } from 'react';
import { Center, useMediaQuery } from '@chakra-ui/react';
import { LayoutProvider } from '../contexts/Layout';
import styles from '../styles/Home.module.css';

const Page = ({ children }) => {
  const [colorMode] = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState('');

  const darknessHandler = (currentMode) => {
    currentMode === 'dark' ? setMode(styles.containerDarker) : setMode(styles.container);
  };
  return (
    <Center m={0} p={0} w={'100vw'} h={'100vh'} className={mode}>
      <LayoutProvider onModeChange={darknessHandler} systemColorMode={colorMode}>
        <Center m={0} p={0} w={'100vw'} h={'85vh'} className='page'>
          {children}
        </Center>
      </LayoutProvider>
    </Center>
  );
};
export default Page;
