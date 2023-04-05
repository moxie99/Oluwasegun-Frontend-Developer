import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const slidesCapsules = [
  {
    img: "https://media.gettyimages.com/id/1227885776/photo/in-this-handout-image-provided-by-nasa-the-spacex-crew-dragon-capsule-spacecraft-with-nasa.jpg?s=612x612&w=0&k=20&c=Lb8f0GJIxki395WmooWgM534Sj12byFZJ0Nd044wZHM=",
    id: "1",
  },
  {
    img: "https://media.gettyimages.com/id/1216299222/photo/us-president-donald-trump-speaks-near-a-spacex-crew-dragon-capsule-at-a-press-briefing-after.jpg?s=612x612&w=0&k=20&c=9n_YViv0H_ZjcNiKxUlSR-233bX_upob1-VIYMB-d6U=",
    id: "2",
  },
  {
    img: "https://media.gettyimages.com/id/1074353714/photo/bloomberg-best-of-the-year-2018-an-attendee-takes-pictures-of-a-mock-up-of-the-crew-dragon.jpg?s=612x612&w=0&k=20&c=xfbZMq8OQZ_ihfpJoFblzlB6WNCo8iX51kx6ipYr8A8=",
    id: "3",
  },
  {
    img: "https://media.gettyimages.com/id/494553139/photo/the-interior-of-spacexs-new-seven-seat-dragon-v2-spacecraft-the-companys-next-generation.jpg?s=612x612&w=0&k=20&c=HEmP6qlxptgIHYkKb3I0qWoA-sxyL4RvoROifw3oMT8=",
    id: "4",
  },
];
const Capsule = () => {
  return (
    <div>
      <Navbar />
      <Banner slides={slidesCapsules} />
    </div>
  );
};

export default Capsule;
