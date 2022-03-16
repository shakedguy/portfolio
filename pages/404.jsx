import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Layout from '../contexts/Layout';
import { Heading, Center, Text, Icon, Button, VStack, Img, Flex } from '@chakra-ui/react';
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
      <Flex dir='row'>
        <VStack className={style} boxShadow={'dark-lg'}>
          <Heading color={'#222'} py={10} as='h2' size={'lg'}>
            we can't seem to find the page you're looking for.
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

        <Img
          bg={'transparent'}
          h={'25.6rem'}
          src='https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif'
        />
      </Flex>

      {/* <VStack className={style} boxShadow={'dark-lg'}>
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
      </VStack> */}
    </Center>
  );
};

export default NotFoundPage;
