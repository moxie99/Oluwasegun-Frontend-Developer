import React from "react";

const Pagination = ({ postsPerView, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerView); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="flex items-center justify-center my-2">
        {pageNumbers.map((number, index) => (
          <li
            key={index}
            className="px-2 mx-2 bg-[#bac4c6] rounded-full text-[#233d6f] md:mx-7"
          >
            <a
              onClick={(event) => {
                event.preventDefault();
                paginate(number);
              }}
              href="#"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
