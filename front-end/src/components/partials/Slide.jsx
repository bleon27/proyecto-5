import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'react-bootstrap/Image';
import g1 from '../../img/instrumentos/slide/Top-5-de-las-mejores-guitarras-del-mundo-Noticias-de-Ecuador.jpg';
import g3 from '../../img/instrumentos/slide/Portada-CORRECTA-02-01-1536x1067.jpg';
import g4 from '../../img/instrumentos/slide/cuales-son-las-clases-de-guitarras-que-existen-portada.jpg';
import g5 from '../../img/instrumentos/slide/Choosing-the-Best-Guitar-Body-Style-Featured-Image.jpg';
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function Slide() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    //disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide className='d-flex justofy-content-center'>
                    <Image
                        alt=""
                        width="auto"
                        src={g1}
                        style={{ objectFit: 'contain' }}
                    />
                </SwiperSlide>
                <SwiperSlide className='d-flex justofy-content-center'>
                    <Image
                        alt=""
                        src={g3}
                        width="auto"
                        style={{ objectFit: 'contain' }}
                    />
                </SwiperSlide>
                <SwiperSlide className='d-flex justofy-content-center'>
                    <Image
                        alt=""
                        src={g4}
                        width="auto"
                        style={{ objectFit: 'contain' }}
                    />
                </SwiperSlide>
                <SwiperSlide className='d-flex justofy-content-center'>
                    <Image
                        alt=""
                        src={g5}
                        width="auto"
                        style={{ objectFit: 'contain' }}
                    />
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}
