import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Center, Container, Heading, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCards, Pagination, Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Layout from '../contexts/Layout';
import textClasses from '../styles/Text.module.css';
import containerClasses from '../styles/Container.module.css';
import useSWR from 'swr';
import { fetcher } from '../services/clientHelpers';

SwiperCore.use([EffectCards, Pagination, Navigation, A11y]);

const DataPage = ({ pageName }) => {
  const layoutCtx = useContext(Layout);
  const router = useRouter();
  const [loadedSlider, setLoadedSlider] = useState(null);
  const { data, error } = useSWR(`/api/sliders/${pageName}`, fetcher);

  useEffect(() => {
    if (data) {
      if (data.slider === '404') router.replace('/404');
      else {
        setLoadedSlider(data.slider);
      }
    }
  }, [data]);

  if (!loadedSlider) return <h1>Loading...</h1>;
  layoutCtx.setPageName(loadedSlider.title);

  const isDarkMode = layoutCtx.currentColorMode === 'dark';
  return (
    <>
      {loadedSlider && (
        <Center>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            effect={'cards'}
            navigation
            grabCursor
            pagination={{
              type: 'bullets',
              dynamicBullets: true,
              clickable: true,
            }}
            className='card-swiper'
            keyboard>
            {loadedSlider.slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className={isDarkMode ? containerClasses.swiperSlideDark : containerClasses.swiperSlideLight}>
                <Box className={isDarkMode ? containerClasses.swiperBoxDark : containerClasses.swiperBoxLight}>
                  {slide.title && (
                    <Container mt={8} mb={5} p={0}>
                      {slide.title.map((line, index) => (
                        <Heading className={textClasses.swiperHeader} key={index} as='h2'>
                          {line}
                        </Heading>
                      ))}
                    </Container>
                  )}
                  <Container>
                    {slide.data.map((line, index) => (
                      <Text
                        key={index}
                        className={isDarkMode ? textClasses.swiperTextDark : textClasses.swiperTextLight}>
                        {line}
                      </Text>
                    ))}
                  </Container>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Center>
      )}
    </>
  );
};

export const getServerSideProps = async (context) => {
  return {
    props: {
      pageName: context.params.pid,
    },
  };
};

export default DataPage;
