import React from 'react'
import { Container, Content, Image } from './style'
import house1 from '../../assets/house1.jpg'
import house2 from '../../assets/house2.jpg'
import {Swiper, SwiperSlide} from "swiper/react"


import "swiper/css";
import "swiper/css/pagination";
import "./main.css"

import { Pagination } from 'swiper'

const Main = () => {
    const pagination = {
        clickable:true,
        renderBullet: function (index,classname){
            return '<span class="'+classname+'">' + (index + 1) + "</span>"
        },
    };
  return (
   <Container>
    <Swiper pagination={pagination}
    modules={[Pagination]}
    classname='mySwiper'
    >
        <SwiperSlide><Image src={house1}/></SwiperSlide>
        <SwiperSlide><Image src={house2}/></SwiperSlide>
    </Swiper>
<Content>
    <Content.Text fs='44px'>Skyper Pool Partment</Content.Text>
    <Content.Text fs='16px'>112 GlenWood Ave Hyde Park, Boston, MA</Content.Text>
    <Content.Text fs='28px'>$5, 250/mo</Content.Text>

</Content>

   </Container>
  )
}

export default Main
