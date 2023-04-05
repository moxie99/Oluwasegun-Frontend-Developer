import React, { Fragment, useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import SearchBar from "../components/SearchBar";
import { useGetRocketsQuery } from "../redux/slices/api";

import { Dialog, Transition } from "@headlessui/react";
import Pagination from "../components/pagination";

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

// change page function

const Rocket = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedRocket, setSelectedRocket] = useState(null);
  const [currentPage, setCurrentPage] = React.useState(1);

  const [postsPerView] = React.useState(10);
  // for modal
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const openModal = (rocket) => {
    setSelectedRocket(rocket);
    setIsOpen(true);
  };
  const { data, isLoading, error } = useGetRocketsQuery();

  const lastPostIndex = currentPage * postsPerView;
  const firstPostIndex = lastPostIndex - postsPerView;
  const currentPosts = data?.slice(firstPostIndex, lastPostIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Navbar />
      <Banner slides={slidesRocket} />
      <SearchBar inputValue={inputValue} setInputValue={setInputValue} />

      {/*data Grid */}

      <div className="py-20 space-y-10">
        <h1 className="text-center text-4xl font-medium tracking-wide text-[#18615B] md:text-5xl">
          Rockets
        </h1>
        {data || !isLoading ? (
          <section className="flex justify-center z-40 mx-5">
            <div className="tabPanel">
              {currentPosts
                .filter((item) =>
                  item.company.toLowerCase().includes(inputValue.toLowerCase())
                )
                .map((item) => (
                  <div
                    key={item.id}
                    onClick={() => openModal(item)}
                    className="bg-slate-950 rounded-md px-5 py-10"
                  >
                    <h1 className="text-white">{item.company}</h1>
                    <h2 className="text-white">{item.cost_per_launch}</h2>
                    <h2 className="text-white">{item.country}</h2>
                    <img
                      src={item.flickr_images[0]}
                      alt="avatar"
                      className="w-full h-30 object-contain rounded-md"
                    />
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

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Company: {selectedRocket && selectedRocket.company}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Country: {selectedRocket && selectedRocket.country}
                    </p>
                    <p>Name: {selectedRocket && selectedRocket.name}</p>
                    <p>
                      Height: {selectedRocket && selectedRocket.height.meters}{" "}
                      meters || {selectedRocket && selectedRocket.height.meters}{" "}
                      Feet
                    </p>
                    <p>
                      Diameter:{" "}
                      {selectedRocket && selectedRocket.diameter.meters} meters
                      || {selectedRocket && selectedRocket.diameter.meters} Feet
                    </p>
                    <p>
                      Mass: {selectedRocket && selectedRocket.mass.kg} kg ||{" "}
                      {selectedRocket && selectedRocket.mass.lbs} lbs
                    </p>
                    <p>Type: {selectedRocket && selectedRocket.type}</p>
                    <p>
                      propellant_1:{" "}
                      {selectedRocket && selectedRocket.propellant_1}
                    </p>
                    <a
                      href={selectedRocket && selectedRocket.wikipedia}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click to go External Link
                    </a>
                    <p>
                      Description:{" "}
                      {selectedRocket && selectedRocket.description}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Pagination
        postsPerView={postsPerView}
        totalPosts={data?.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Rocket;
