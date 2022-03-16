import React, { createContext, useState } from 'react';
import { useColorMode } from '@chakra-ui/react';
import MainMenu from '../components/MainMenu';
import Footer from '../components/Footer';

const Layout = createContext({
  isDark: null,
  currentColorMode: '',
  pageName: '',
  changeColorMode: (mode) => {},
  setPageName: (name) => {},
});

export const LayoutProvider = ({ systemColorMode, onModeChange, children }) => {
  const [pageName, setPageName] = useState('Home');
  const [currentColorMode, setCurrentColorMode] = useState();
  const { setColorMode } = useColorMode();

  const colorModeChangeHandler = (newMode) => {
    setColorMode(newMode);
    setCurrentColorMode(newMode);
    onModeChange(newMode);
  };
  const isDark = currentColorMode === 'dark';
  return (
    <Layout.Provider
      value={{
        isDark: isDark,
        currentColorMode: currentColorMode,
        pageName: pageName,
        changeColorMode: (mode) => colorModeChangeHandler(mode),
        setPageName: (name) => setPageName(name),
      }}>
      <div className='page'>
        <MainMenu colorMode={systemColorMode} />
        {children}
        <Footer />
      </div>
    </Layout.Provider>
  );
};

export default Layout;
