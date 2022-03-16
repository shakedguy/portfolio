import React, { useContext } from 'react';
import { Flex, Icon, VStack, Text, Center, Link } from '@chakra-ui/react';
import Layout from '../contexts/Layout';
import { FcPhone } from 'react-icons/fc';
import { FcGoogle } from 'react-icons/fc';
import { SiLinkedin, SiWaze, SiGithub } from 'react-icons/si';
import { buildFilePath, extractFileData } from '../services/helpers';
import containerClasses from '../styles/Container.module.css';
import iconsClasses from '../styles/Icons.module.css';
import textClasses from '../styles/Text.module.css';

const icons = [FcPhone, FcGoogle, SiLinkedin, SiGithub, SiWaze];

const Contact = ({ labels, iconsColor, links }) => {
  const layoutCtx = useContext(Layout);
  layoutCtx.setPageName('Contact');
  const isDarkMode = layoutCtx.currentColorMode === 'dark';
  const style = isDarkMode ? containerClasses.contactStackDark : containerClasses.contactStackLight;

  return (
    <Center px={1} my={2}>
      <VStack className={style} boxShadow={'dark-lg'}>
        {icons.map((icon, index) => {
          return (
            <Link key={index} w={'65%'} href={links[index]} target={'_blank'} passHref>
              <Flex py={5} gap={4}>
                <Icon as={icon} className={iconsClasses.contact} color={iconsColor[index]} w={'25px'} h={'25px'} />
                <Text className={textClasses.contact}>{labels[index]}</Text>
              </Flex>
            </Link>
          );
        })}
      </VStack>
    </Center>
  );
};

export const getStaticProps = async () => {
  const filePath = buildFilePath('contact.json');
  const data = await extractFileData(filePath);
  return {
    props: {
      labels: data.labels,
      iconsColor: data.iconsColor,
      links: data.links,
    },
  };
};

export default Contact;
