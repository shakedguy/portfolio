import React, { Fragment, useContext } from 'react';
import Link from 'next/link';
import { ListItem, ListIcon, Text, Divider } from '@chakra-ui/react';
import { getIcon } from '../services/clientHelpers';
import Layout from '../contexts/Layout';

const MenuItem = ({ title, onItemClicked, link }) => {
  const layoutCtx = useContext(Layout);

  const hoverColor = layoutCtx.currentColorMode === 'light' ? '#ebedf0' : 'rgba(112, 128, 144, 0.1)';
  const selected = title === layoutCtx.pageName;
  return (
    <Fragment>
      <Link href={`/${link}`} passHref>
        <ListItem
          onClick={onItemClicked}
          my={3}
          bg={selected && hoverColor}
          _hover={{ bg: hoverColor }}
          cursor={'pointer'}
          borderRadius={4}
          display={'flex'}
          gap={4}>
          <ListIcon w={6} h={6} my={2.5} alignSelf={'center'} as={getIcon(title)} />
          <Text flex={2} alignSelf={'center'} fontSize={'2xl'}>
            {title}
          </Text>
        </ListItem>
      </Link>
      <Divider fill={'black'} fontSize={'6xl'} color={'#000'} />
    </Fragment>
  );
};
export default MenuItem;
