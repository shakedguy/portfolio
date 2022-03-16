import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SiCsharp, SiCplusplus, SiPython, SiNodedotjs } from 'react-icons/si';
import { IoLogoReact, IoLogoJavascript } from 'react-icons/io5';
import { TiHtml5 } from 'react-icons/ti';
import Layout from '../../contexts/Layout';
import { buildFilePath, extractFileData } from '../../services/helpers';
import Card from '../../components/Card';
import SkillsBar from '../../components/SkillsBar';
import SkillsModal from '../../components/SkillsModal';

const icons = [SiCsharp, SiCplusplus, IoLogoJavascript, TiHtml5, IoLogoReact, SiPython, SiNodedotjs];

const EducationPage = ({ titles, links, values, colors, iconColors }) => {
  const layoutCtx = useContext(Layout);
  const router = useRouter();
  layoutCtx.setPageName('Education & Skills');

  return (
    <>
      <Card boxShadow={'dark-lg'} p={7} isDarkMode={layoutCtx.currentColorMode === 'dark'}>
        {titles.map((title, index) => (
          <Link
            key={index}
            href={`/education&skills/?skillid=${links[index]}`}
            as={`/education&skills/${links[index]}`}
            passHref>
            <div style={{ padding: '15px' }}>
              <SkillsBar
                index={index}
                title={title}
                icon={icons[index]}
                iconColor={iconColors[index]}
                barColor={colors[index]}
                value={values[index]}
              />
            </div>
          </Link>
        ))}
      </Card>
      <SkillsModal
        openModal={!!router.query.skillid}
        onModalClose={() => router.push('/education&skills')}
        title={router.query.skillid}
      />
    </>
  );
};

export const getStaticProps = async () => {
  const filePath = buildFilePath('chartData.json');
  const data = await extractFileData(filePath);

  return {
    props: {
      titles: data.titles,
      links: data.links,
      values: data.values,
      colors: data.colors,
      iconColors: data.iconColors,
    },
  };
};

export default EducationPage;
