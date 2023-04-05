import React from "react";
import Carousel from "./Carousel";

const videoLink = "https://youtu.be/2rt8p3StOZk";
const Banner = ({ slides }) => {
  return (
    <div className="flex flex-col md:flex-row  items-center justify-between py-10 bg-blue-100 border-purple-500 rounded-md md:h-100 border-y lg:py-0">
      <div className="flex-1 px-10 spaxe-y-5">
        <h1 className="max-w-xl font-serif text-6xl text-purple-800">
          <span className="text-purple-900 decoration-purple-400 decoration-4">
            Lorem ipsum dolor sit amet consectetur
          </span>
        </h1>
        <h1 className="py-2 my-10 text-purple-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
          commodi cumque facilis, facere quaerat porro?
        </h1>
      </div>
      <div className="flex-1  h-50 md:inline-flex lg:h-full">
        <Carousel autoSlide={true} autoSlideInterval={2000}>
          {[
            ...slides.map(({ img, id }) => (
              <img
                className="w-full h-full object-cover"
                key={id}
                src={img}
                alt="rocket or capsule"
              />
            )),
            <video src={videoLink} muted autoplay loop />,
          ]}
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
