import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { EffectCoverflow, Pagination } from "swiper";

import EventContainer from "../EventContainer";

const Events = ({ showData }) => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        style={{ padding: "100px" }}
        className="mySwiper"
      >
        {showData.slice(0, 5).map((data) => {
          return (
            <SwiperSlide>
              <EventContainer
                name={data.name}
                id={data.show_id}
                img={data.image_url}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Events;
