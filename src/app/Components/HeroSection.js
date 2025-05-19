import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      background:  "/assets/hero-section.jpg",
    
    },
    {
      id: 2,
      background: "https://gustosafoods.com/wp-content/uploads/2024/03/2-1.jpg",
    },
  ];

  return (
    <div className="hero-slider-wrapper">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={1000}
        spaceBetween={0}
        slidesPerView={1}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="hero-section d-flex flex-column justify-content-center"
              style={{
                backgroundImage: `url(${slide.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="hero-section1">
                <h1>
                  Say goodbye to bland makhanas; it's time to savor the flavors.
                </h1>
                <p className="fs-6 fs-lg-5 mb-4">
                  Get extra 5% off on flavoured makhanas.
                </p>
                <div className="shop-now d-flex gap-2 align-items-center justify-content-center my-3">
                  <p className="fs-5 mb-0 text-white">Shop Now</p>
                  <img src="/assets/next.png" alt="Next Icon" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
