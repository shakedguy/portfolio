import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Layout from '../contexts/Layout';
import { Heading, Center, Text, Icon, Button, VStack } from '@chakra-ui/react';
import { IoHomeOutline } from 'react-icons/io5';
import containerClasses from '../styles/Container.module.css';

const NotFoundPage = () => {
  const router = useRouter();
  const layoutCtx = useContext(Layout);
  layoutCtx.setPageName('Error');
  const isDarkMode = layoutCtx.currentColorMode === 'dark';
  const style = isDarkMode ? containerClasses.contactStackDark : containerClasses.contactStackLight;
  return (
    <Center px={1} my={2}>
      <VStack className={style} boxShadow={'dark-lg'}>
        <Heading color={'#222'} py={10} as='h2' size={'lg'}>
          Sorry, the page was not found...
        </Heading>
        <Text color={'#222'} fontSize={'1xl'}>
          To return to the home page, click
        </Text>
        <Button
          onClick={() => router.replace('/')}
          variant={'outline'}
          _hover={{ bg: 'gray.300' }}
          color={'gray.900'}
          borderColor={'gray.900'}
          my={10}
          leftIcon={<Icon as={IoHomeOutline} />}>
          Home
        </Button>
      </VStack>
    </Center>
  );
};

export default NotFoundPage;
