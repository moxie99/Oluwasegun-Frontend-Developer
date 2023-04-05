import React from "react";
import { Tab } from "@headlessui/react";
const DataGrid = ({ data }) => {
  const showData = (params) => {
    return data
      .filter((product) => product.params._ref === categories[category]._id)
      .map((product) => <Product product={product} key={product._id} />);
    //filter product by categoryPrincipal Web Applications Developer
    // map the product
  };
  return (
    <section className="relative z-40 mt-[100vh] min-h-screen bg-[#61181E]">
      <div className="py-20 space-y-10 ">
        <h1 className="text-center text-4xl font-medium tracking-wide text-[#18615B] md:text-5xl">
          Available In Store
        </h1>

        <Tab.Group>
          <Tab.List className="flex justify-center">
            {data?.map((category) => (
              <Tab
                key={category._id}
                id={category._id}
                className={({ selected }) =>
                  `whitespace-nowrap rounded-t-lg py-3 px-3 text-sm font-light
                  outline-none md:py-4 md:px-6 md:text-base ${
                    selected
                      ? "borderGradient bg-[#18615b] text-[#120302]"
                      : "border-b-2 border-[#120302] text-[#d4af37]"
                  }
                  `
                }
              >
                {category.title}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mx-auto pt-15 pb-25 max-w-fit sm:px-4">
            <Tab.Panel className="tabPanel">{showData(0)}</Tab.Panel>
            <Tab.Panel className="tabPanel">{showData(1)}</Tab.Panel>
            <Tab.Panel className="tabPanel">{showData(2)}</Tab.Panel>
            <Tab.Panel className="tabPanel">{showData(3)}</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default DataGrid;
