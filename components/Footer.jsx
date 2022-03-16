import React, { useContext } from 'react';
import path from 'path';
import { Center, Flex, Icon, Text, Spacer, Link, Spinner, Tooltip } from '@chakra-ui/react';
import { CgCopyright } from 'react-icons/cg';
import { SiLinkedin, SiWaze, SiWhatsapp, SiGithub } from 'react-icons/si';
import { BsTelephoneFill, BsFileEarmarkPdfFill } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import containerClasses from '../styles/Container.module.css';
import { fetcher } from '../services/clientHelpers';
import Layout from '../contexts/Layout';
import textClasses from '../styles/Text.module.css';
import iconsClasses from '../styles/Icons.module.css';
import useSWR from 'swr';

const icons = [BsTelephoneFill, SiWaze, SiLinkedin, BsFileEarmarkPdfFill, FcGoogle, SiGithub, SiWhatsapp];

const Footer = () => {
  const layoutCtx = useContext(Layout);
  const { data, error } = useSWR('/api/footer', fetcher);

  if (error) return <Spinner />;

  const isDarkMode = layoutCtx.currentColorMode === 'dark';
  const style = isDarkMode ? containerClasses.footerDark : containerClasses.footerLight;
  const text = isDarkMode ? textClasses.footerTextDark : textClasses.footerTextLight;

  return (
    <Flex className={style}>
      <Spacer />
      <Center flex={3}>
        <Icon color={isDarkMode ? '#ebedf0' : '#333'} as={CgCopyright} className={iconsClasses.copyright} />
        <Text className={text}>Created by Guy Shaked</Text>
      </Center>
      <Center>
        {data &&
          icons.map((icon, index) => (
            <Tooltip placement='top-start' key={index} hasArrow label={data.tooltips[index]}>
              <Link
                href={index === 3 ? path.join(process.cwd(), 'resources', data.links[index]) : data.links[index]}
                target={'_blank'}
                download={index === 3 ? data.links[index] : null}
                passHref>
                <Icon className={iconsClasses.footer} as={icon} color={data.colors[index]} />
              </Link>
            </Tooltip>
          ))}
      </Center>
    </Flex>
  );
};

export default Footer;

{
  /* <Container
  bg={'rgba(230, 230, 230, 0.3)'}
  maxW={'100vw'}
  position={'fixed'}
  w={'100vw'}
  h={35}
  bottom={0}
  m={0}
  p={0}>
  <Flex position={'fixed'} right={2} bottom={1} h={25}>
    <Center position={'fixed'} left={'45%'}>
      <Icon as={CgCopyright} mx={2} w={5} h={5} />
      <Text fontSize={'sm'} fontFamily={'Raleway'}>
        Created by Guy Shaked
      </Text>
    </Center>
    <Icon as={BsTelephoneFill} color={'teal.600'} mx={2} w={5} h={5} />
    <Icon as={SiWaze} color={'blue.700'} mx={2} w={5} h={5} />
    <Icon as={SiLinkedin} color={'blue.700'} mx={2} w={5} h={5} />
    <Icon as={FcGoogle} mx={2} w={5} h={5} />
    <Icon as={SiGithub} color={'purple.700'} mx={2} w={5} h={5} />
    <Icon as={SiWhatsapp} color={'teal.600'} mx={2} w={5} h={5} />
  </Flex>
</Container>; */
}
