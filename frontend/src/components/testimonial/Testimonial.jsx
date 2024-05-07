import React from 'react'
import './Testimonial.css'
import AVTR1 from '../../assets/testimonial-img.jpg'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data=[
  {
    avatar:AVTR1,
    name:'Sanya Bhasin',
    review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit blanditiis natus id nulla, quod placeat incidunt vero doloribus fugiat sequi aliquam, minus consectetur error expedita, veritatis ad et? Deserunt, dolorem!'
  },
  {
    avatar:AVTR1,
    name:'Sanya Bhasin',
    review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit blanditiis natus id nulla, quod placeat incidunt vero doloribus fugiat sequi aliquam, minus consectetur error expedita, veritatis ad et? Deserunt, dolorem!'
  },
  {
    avatar:AVTR1,
    name:'Sanya Bhasin',
    review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit blanditiis natus id nulla, quod placeat incidunt vero doloribus fugiat sequi aliquam, minus consectetur error expedita, veritatis ad et? Deserunt, dolorem!'
  },
  {
    avatar:AVTR1,
    name:'Sanya Bhasin',
    review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit blanditiis natus id nulla, quod placeat incidunt vero doloribus fugiat sequi aliquam, minus consectetur error expedita, veritatis ad et? Deserunt, dolorem!'
  }

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Customer</h5>
      <h2>Testimonial</h2>

      

      <Swiper className="container testimonials__container" modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      
      >
        {

          data.map(({avatar,name,review},index)=>{
            return(
        <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} />
            

          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
        </SwiperSlide>
            )
          })
          
          }
        </Swiper>

    </section>
  )
}

export default Testimonials