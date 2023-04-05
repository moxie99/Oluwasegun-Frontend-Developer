import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  const navItems = [
    {
      text: "rockets",
      id: "1",
    },
    {
      text: "capsules",
      id: "2",
    },
  ];

  const navigate = useNavigate();
  const { pathName } = useLocation();

  useEffect(() => {
    setActive(pathName?.substring(1));
  }, [pathName]);
  return (
    <div className="sticky md:top-0 lg:top-0 z-30 flex w-full items-center justify-between bg-[#f7f7f5] p-4">
      <ul className="flex-col  md:flex-row lg:flex-row items-center justify-center flex-1 hidden space-x-8 md:flex cursor-pointer">
        {navItems.map(({ text, id }) => (
          <li
            className={
              active === text
                ? "text-blue-700 headerLink"
                : "text-blue-300 headerLink"
            }
            onClick={() => {
              navigate(`/${text}`);
              setActive(text);
            }}
            key={id}
          >
            {text.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
