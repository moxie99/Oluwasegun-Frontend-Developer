import React from "react";
import Carousel from "./Carousel";

const Banner = ({ slides }) => {
  return (
    <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
      <div className="space-y-8">
        <h1 className="space-y-3 text-3xl font-semibold tracking-wider lg:text-6xl xl:text-7xl">
          <span className="block text-transparent bg-gradient-to-r from-pink-800 to-red-100 bg-clip-text">
            Designed
          </span>
          <span className="block">By Creativity</span>
          <span className="block">Crafted Into Quality</span>
        </h1>
      </div>
      <div className="relative hidden h-[450px] w-[450px transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]">
        <Carousel autoSlide={true} autoSlideInterval={4000}>
          {[
            ...slides.map(({ img, id }) => (
              <img
                className="object-contain"
                key={id}
                src={img}
                alt="rocket or capsule"
              />
            )),
          ]}
        </Carousel>
      </div>
    </section>
  );
};

export default Banner;
