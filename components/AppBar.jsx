import React, { useContext } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex, Heading, Container, Img, Spacer } from '@chakra-ui/react';
import ThemeMenu from './ThemeMenu';
import Layout from '../contexts/Layout';
import textClasses from '../styles/Text.module.css';
import Link from 'next/link';

const AppBar = ({ openHandler, colorMode, data }) => {
  const layoutCtx = useContext(Layout);

  const index = data.titles.findIndex((title) => title === layoutCtx.pageName);
  const hoverColor = layoutCtx.currentColorMode === 'light' ? 'rgb(0, 150, 150)' : 'rgba(112, 128, 144, 0.1)';

  return (
    <Flex h={'10vh'} bg={'teal'} alignItems={'center'}>
      <Container
        w={'fit-content'}
        onClick={openHandler}
        borderRadius={'md'}
        p={1}
        mx={3}
        className='btn-cont'
        _hover={{ bg: hoverColor }}>
        <HamburgerIcon h={5} w={5} m={2} cursor={'pointer'} _hover={{ bg: hoverColor }} />
      </Container>
      <Link href='/' passHref>
        <Img className='logo' src='/logo.png'></Img>
      </Link>
      <Heading as='h1' className={textClasses.appBar}>
        <Link href={data.pages[index] || '/'}>{layoutCtx.pageName}</Link>
      </Heading>
      <Spacer />
      <ThemeMenu colorMode={colorMode} />
    </Flex>
  );
};
export default AppBar;
