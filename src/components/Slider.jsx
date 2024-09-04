'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import './styles.css';

import { Scrollbar } from 'swiper/modules';

const content = [
    {
        url: 'https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        url: 'https://images.unsplash.com/photo-1725006708990-b32d393ceb99?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]

export default function App() {
  return (
    <div className='sm:mx-w-[300px]'>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
      {content.map((v) => (
  <SwiperSlide key={v.id}><img src={v.url}></img></SwiperSlide>
))}

      </Swiper>
    </div>
  );
}
