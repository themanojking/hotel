import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

export default function Swp() {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    { id: '1', img: '/Images/pizza-with-cheese-tomatoes.avif', title: 'Item 1' },
    { id: '2', img: '/Images/pizza-with-cheese-tomatoes.avif', title: 'Item 2' },
    { id: '3', img: '/Images/pizza-with-cheese-tomatoes.avif', title: 'Item 3' },
    { id: '4', img: '/Images/pizza-with-cheese-tomatoes.avif', title: 'Item 4' },
    { id: '5', img: '/Images/pizza-with-cheese-tomatoes.avif', title: 'Item 5' },
    { id: '6', img: '/Images/pizza-with-cheese-tomatoes.avif', title: 'Item 6' },
    { id: '7', img: '/Images/pizza-with-cheese-tomatoes.avif', title: 'Item 7' },
    { id: '8', img: '/Images/pizza-with-cheese-tomatoes.avif', title: 'Item 8' },
    { id: '9', img: '/Images/pizza-with-cheese-tomatoes.avif', title: 'Item 9' },
    { id: '10', img: '/Images/pizza-with-cheese-tomatoes.avif', title: 'Item 10' },
  ];

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation,Autoplay]}
        slidesPerView={3}
        spaceBetween={10}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          390: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div
              className={`border w-96  rounded-2xl transition-transform duration-300 ${
                index === activeIndex + 1 ? 'lg:scale-110' : 'scale-100'
              }`}
            >
              <img src={item.img} className="w-full rounded-xl" alt={item.title} />
              <h1>{item.title}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper {
          width: 100%;
          height: 100%;
        }
        .swiper-slide {
          padding: 50px;
          text-align: center;
          font-size: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}
