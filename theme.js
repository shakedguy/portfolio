import '@fontsource/dosis';
import '@fontsource/raleway';

import { extendTheme } from '@chakra-ui/react';

const Theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.400',
        color: '#222',
      },
    },
  },
  fonts: {
    heading: 'dosis',
    body: 'dosis',
  },
});
export default Theme;
