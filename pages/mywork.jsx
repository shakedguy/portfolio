import React, { useContext, useState, useEffect } from 'react';
import path from 'path';
import Layout from '../contexts/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Center, Img, Link } from '@chakra-ui/react';
import Card from '../components/Card';
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from 'swiper';
import containerClasses from '../styles/Container.module.css';
import useSWR from 'swr';
import { fetcher } from '../services/clientHelpers';

// const data = {
//   names: ['connect_four', 'garage_manager', 'tetris.zip'],
//   links: ['Connect_Four.zip', 'GarageManager.zip', 'tetris.png'],
//   images: ['connect_four.png', 'garage-manager.png', 'tetris.png'],
// };

SwiperCore.use([EffectCoverflow, Navigation, Pagination]);

const MyWorkPage = () => {
  const layoutCtx = useContext(Layout);
  const [names, setNames] = useState(null);
  const [links, setLinks] = useState(null);
  const [images, setImages] = useState(null);
  const { data, error } = useSWR('/api/myWork', fetcher);

  useEffect(() => {
    if (data) {
      console.log(data);
      setNames(data.names);
      setLinks(data.links);
      setImages(data.images);
    }
  }, [data]);
  layoutCtx.setPageName('My Work');
  if (!data) return <h1>Loading...</h1>;
  return (
    <>
      {data && links && images && (
        <Center w={'100vw'} h={'85vh'}>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            navigation
            coverflowEffect={{
              rotate: 40,
              stretch: 30,
              depth: 180,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            className='overflow-swiper'
            style={{ margin: 0, position: 'absolute' }}>
            {links &&
              links.map((link, index) => (
                <SwiperSlide key={index} className='overflow-slide'>
                  <Link
                    href={path.join(process.cwd(), 'resources', link)}
                    download={names[index]}
                    target='_blank'
                    passHref>
                    <Card p={0.5} boxShadow={'inner'} bg={containerClasses.contactStackLight.background}>
                      <Img src={`/${images[index]}`} alt='Dan Abramov' />
                    </Card>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </Center>
      )}
    </>
  );
};

// export const getStaticProps = async () => {
//   return {
//     props: {
//       names: data.names,
//       links: data.links,
//       images: data.images,
//     },
//   };
// };

export default MyWorkPage;
