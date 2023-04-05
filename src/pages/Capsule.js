import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import SearchBar from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { setApiKey } from "../redux/slices/authslice";
import { useGetCapsulesQuery } from "../redux/slices/api";

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
  // const dispatch = useDispatch();
  // const apiKey = useSelector((state) => state.auth.apiKey);

  // useEffect(() => {
  //   dispatch(setApiKey("my_api_key"));
  // }, [dispatch]);

  const { data, isLoading, error } = useGetCapsulesQuery();

  return (
    <div>
      <Navbar />
      <Banner slides={slidesCapsules} />
      <SearchBar />

      {/*data Grid */}

      <div className="py-20 space-y-10">
        <h1 className="text-center text-4xl font-medium tracking-wide text-[#18615B] md:text-5xl">
          Capsules
        </h1>
        {data || !isLoading ? (
          <section className="flex justify-center z-40 mx-5">
            <div className="tabPanel">
              {data?.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-950 rounded-md px-5 py-10"
                >
                  <h1 className="text-white">{item.type}</h1>
                  <h2 className="text-white">{item.last_update}</h2>
                  <h2 className="text-white">{item.status}</h2>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <div className="flex items-center justify-center mx-5 my-2">
            <h5>Loadiing...</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default Capsule;
