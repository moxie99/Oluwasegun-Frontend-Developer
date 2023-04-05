import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const slidesRocket = [
  {
    img: "https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/crs-22_solar_arrays.jpg",
    id: "1",
  },

  {
    img: "https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/iss062e087334.jpg",
    id: "2",
  },
  {
    img: "https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/iss061e070168.jpg",
    id: "3",
  },
  {
    img: "https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/iss061e069087.jpg",
    id: "4",
  },
];

const Rocket = () => {
  return (
    <div>
      <Navbar />
      <Banner slides={slidesRocket} />
    </div>
  );
};

export default Rocket;
