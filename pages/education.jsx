import React, { useContext } from 'react';
import { SiCsharp, SiCplusplus, SiPython, SiNodedotjs } from 'react-icons/si';
import { IoLogoReact, IoLogoJavascript } from 'react-icons/io5';
import { TiHtml5 } from 'react-icons/ti';
import Layout from '../contexts/Layout';
import { buildFilePath, extractFileData } from '../services/helpers';
import Card from '../components/Card';
import SkillsBar from '../components/SkillsBar';

const icons = [SiCsharp, SiCplusplus, IoLogoJavascript, TiHtml5, IoLogoReact, SiPython, SiNodedotjs];

const EducationPage = ({ titles, values, colors, iconColors }) => {
  const layoutCtx = useContext(Layout);
  layoutCtx.setPageName('Education & Skills');

  return (
    <Card boxShadow={'dark-lg'} p={7} isDarkMode={layoutCtx.currentColorMode === 'dark'}>
      {titles.map((title, index) => (
        <SkillsBar
          key={index}
          index={index}
          title={title}
          icon={icons[index]}
          iconColor={iconColors[index]}
          barColor={colors[index]}
          value={values[index]}
        />
      ))}
    </Card>
  );
};

export const getStaticProps = async () => {
  const filePath = buildFilePath('chartData.json');
  const data = await extractFileData(filePath);
  return {
    props: {
      titles: data.titles,
      values: data.values,
      colors: data.colors,
      iconColors: data.iconColors,
    },
  };
};

export default EducationPage;
