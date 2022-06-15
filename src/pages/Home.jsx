import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwipperCore, { EffectFade, Mousewheel, Pagination } from "swiper";

import { Welcome } from '../components/HomeSection'

SwipperCore.use([Mousewheel, Pagination, EffectFade])

const swiperOptions = {
  direction: 'vertical',
  slidePerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: true,
  effect: 'fade',
  speed: 1000

}
const Home = () => {
  return (
    <Fragment>
      <Swiper {...swiperOptions}>
        <SwiperSlide>
          {({isActive}) => <Welcome isActive={isActive}/>}
        </SwiperSlide>
      </Swiper>
    </Fragment>
  )
};

export default Home;
