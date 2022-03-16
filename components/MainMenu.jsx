import React, { useRef, useEffect, useState } from 'react';
import {
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  List,
  Spinner,
} from '@chakra-ui/react';
import AppBar from './AppBar';
import MenuItem from './MenuItem';
import useSWR from 'swr';
import { fetcher } from '../services/clientHelpers';

const MainMenu = ({ colorMode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, error } = useSWR('/api/pages', fetcher);

  if (error) return <Spinner />;

  return (
    <>
      {data && (
        <>
          <AppBar openHandler={onOpen} data={data} colorMode={colorMode} />
          <Drawer isOpen={isOpen} placement='left' onClose={onClose} size={'xs'}>
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton w={10} h={10} mt={2.5} />
                <DrawerHeader>Main Menu</DrawerHeader>
                <DrawerBody>
                  <List>
                    {data &&
                      data.titles.map((title, index) => (
                        <MenuItem key={index} title={title} onItemClicked={onClose} link={data.pages[index]} />
                      ))}
                  </List>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </>
      )}
    </>
  );
};

export default MainMenu;
