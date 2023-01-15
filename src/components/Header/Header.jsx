import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [MenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-5 md:px-[36px] lg:px-[72px] py-2 relative bg-white border z-10 drop-shadow-md">
        <Link to="">APP LOGO</Link>
        <button
          onClick={() => {
            setMenuOpen(!MenuOpen);
          }}
          className="lg:hidden"
        >
          {!MenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>

        <ul
          className={`lg:flex w-[200px] lg:w-auto px-5 lg:px-0 py-3 rounded-md  ${
            !MenuOpen && "hidden "
          } items-center absolute top-16 lg:top-0 right-3 lg:relative bg-white z-10`}
        >
          <li
            className="lg:px-4 pt-4 lg:pt-0"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <NavLink
              to="/dashboard"
              className={`text-[14px] font-medium py-1 hover`}
            >
              DASHBOARD
            </NavLink>
          </li>
          <li
            className="lg:px-4 pt-4 lg:pt-0"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <NavLink
              to="/createads"
              className={`text-[14px] font-medium py-1 hover`}
            >
              CREATE ADS
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
