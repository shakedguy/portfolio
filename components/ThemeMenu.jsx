import React, { useContext, useEffect } from 'react';
import { MoonIcon, SettingsIcon, SunIcon } from '@chakra-ui/icons';
import {
  Button,
  Icon,
  Modal,
  ButtonGroup,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Container,
} from '@chakra-ui/react';
import Layout from '../contexts/Layout';

import { RiComputerLine } from 'react-icons/ri';

const ThemeMenu = ({ colorMode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const layoutCtx = useContext(Layout);
  const mode = colorMode ? 'dark' : 'light';
  const hoverColor = layoutCtx.currentColorMode === 'light' ? 'rgb(0, 150, 150)' : 'rgba(112, 128, 144, 0.1)';

  useEffect(() => layoutCtx.changeColorMode(mode), []);

  return (
    <>
      <Container
        w={'fit-content'}
        borderRadius={'md'}
        p={1}
        mx={3}
        onClick={onOpen}
        className='btn-cont'
        _hover={{ bg: hoverColor }}>
        <SettingsIcon h={5} w={5} m={2} cursor={'pointer'} />
      </Container>

      <Modal onClose={onClose} size='sm' isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Theme Mode</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ButtonGroup>
              <Button onClick={() => layoutCtx.changeColorMode('light')} leftIcon={<SunIcon />}>
                Light
              </Button>
              <Button onClick={() => layoutCtx.changeColorMode(mode)} leftIcon={<Icon as={RiComputerLine} />}>
                System
              </Button>
              <Button onClick={() => layoutCtx.changeColorMode('dark')} leftIcon={<MoonIcon />}>
                Dark
              </Button>
            </ButtonGroup>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ThemeMenu;
