import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Background from "assets/graphics.png";
import Tokenplace from "assets/tokenplace.png";
import FundPlatform from "assets/fund-platform.png";
import Noviscient from "assets/noviscient.png";

const promoSliders = [
  {
    title: "Tokenplace",
    description: "Multi-exchange Trading Terminal",
    image: Tokenplace,
  },
  {
    title: "Fund Platform",
    description: "Hedge funds wealth management",
    image: FundPlatform,
  },
  {
    title: "Noviscient",
    description: "Management Platform",
    image: Noviscient,
  },
];

export const PromoSliders = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="bg-primary bg-fixed bg-contain rounded-2xl lg:h-full sm:h-auto lg:w-7/12 sm:w-full lg:max-w-[798px]"
    >
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper h-full"
      >
        {promoSliders.map(({ title, description, image }) => (
          <SwiperSlide className="flex" key={title}>
            <div className="h-auto m-auto pb-14">
              <img
                className="object-fill w-full max-w-lg drop-shadow-2xl mb-10"
                src={image}
                alt={title}
              />
              <h2 className="text-xl text-white text-center pb-4">{title}</h2>
              <p className="text-sm text-white text-center">{description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
