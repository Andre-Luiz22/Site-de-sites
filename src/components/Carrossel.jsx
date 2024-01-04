import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Card } from "./Card";
import { v4 as uuid4 } from "uuid";
import "swiper/css";

export const Carrossel = ({ objConfig, cards }) => {
  return (
    <div className="flex flex-col mb-6">
      <h2 className="text-white text-2xl px-7 mb-5">
        {objConfig.title} {objConfig.emoji}
      </h2>
      <div>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5.5}
          centeredSlides
          loop
          autoplay={{
            delay: 20000,
            pauseOnMouseEnter: true,
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={uuid4()}>
              {" "}
              <Card data={card} />{" "}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

Carrossel.propTypes = {
  objConfig: PropTypes.object,
  cards: PropTypes.array,
};
