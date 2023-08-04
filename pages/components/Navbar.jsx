import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [scrollColor,setScrollColor] = useState(false)

  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setScrollColor(true);
    } else {
      setScrollColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  })
 

  const toggleMenu = () => {
    setToggle(!toggle), setToggleSearch(false);
  };

  const toggleMenuSearch = () => {
    setToggleSearch(!toggleSearch), setToggle(false);
  };

  const active = useRouter();

  return (
    <>
      <div className={scrollColor ? "z-[800] text-amber-custom flex justify-between items-center fixed top-0 left-0 w-full bg-black mx-0 my-auto lg:bg-black h-[80px]" : "z-[800] text-amber-custom flex justify-between items-center fixed top-0 left-0 w-full bg-black/50 lg:bg-black mx-0 my-auto  h-[80px]"}>
        <Link href="/" className="">
          <img
            src="/Anime&Manga_Icon.png"
            alt="Anime&Manga"
            className=" h-[70px] fold:h-[45px] sm:ml-2 "
          />
        </Link>

        <div className="flex justify-between items-center gap-10">

      <ul
            onClick={() => {
              setToggle(false);
            }}
            className={
              toggle
                ? "flex  text-2xl gap-10 lg:gap-0  font-bold lg:bg-black lg:top-full lg:flex-col lg:absolute lg:left-0   lg:justify-center lg:items-center lg:w-full  lg:border-t-4 lg:border-white/20 "
                : "flex justify-between items-center text-2xl gap-10 font-bold lg:hidden"
            }
          >
            <li className=" relative lg:my-6">
              <Link
                href="/"
                className={
                  active.pathname == "/"
                    ? " after:w-full after:h-[3px] after:bg-amber-custom after:absolute after:bottom-0 after:left-0 text-white "
                    : " after:w-0 after:h-[3px] after:bg-white after:absolute after:bottom-0 after:left-0 after:transition-all after:delay-[0.4s]  hover:after:w-full"
                }
              >
                Home
              </Link>
            </li>
            <li className=" relative lg:my-6">
              <Link
                href="/Anime"
                className={
                  active.pathname == "/Anime"
                    ? " after:w-full after:h-[3px] after:bg-amber-custom after:absolute after:bottom-0 after:left-0 text-white"
                    : " after:w-0 after:h-[3px] after:bg-white after:absolute after:bottom-0 after:left-0 after:transition-all after:delay-[0.4s] hover:after:w-full"
                }
              >
                Anime
              </Link>
            </li>
            <li className=" relative lg:my-6">
              <Link
                href="/Manga"
                className={
                  active.pathname == "/Manga"
                    ? " after:w-full after:h-[3px] after:bg-amber-custom after:absolute after:bottom-0 after:left-0 text-white"
                    : " after:w-0 after:h-[3px] after:bg-white after:absolute after:bottom-0 after:left-0 after:transition-all after:delay-[0.4s] hover:after:w-full"
                }
              >
                Manga
              </Link>
            </li>
            <li className=" relative lg:my-6">
              <Link
                href="/Game"
                className={
                  active.pathname == "/Game"
                    ? " after:w-full after:h-[3px] after:bg-amber-custom after:absolute after:bottom-0 after:left-0 text-white"
                    : " after:w-0 after:h-[3px] after:bg-white after:absolute after:bottom-0 after:left-0 after:transition-all after:delay-[0.4s] hover:after:w-full"
                }
              >
                Game
              </Link>
            </li>
            <li className=" relative lg:my-6">
              <Link
                href="/Contact"
                className={
                  active.pathname == "/Contact"
                    ? " after:w-full after:h-[3px] after:bg-amber-custom after:absolute after:bottom-0 after:left-0 text-white"
                    : " after:w-0 after:h-[3px] after:bg-white after:absolute after:bottom-0 after:left-0 after:transition-all after:delay-[0.4s] hover:after:w-full"
                }
              >
                Contact
              </Link>
            </li>
          </ul>
   

          <div>
            <form
              action=""
              className={
                toggleSearch
                  ? "flex justify-between items-center px-6 fold:px-2  rounded-[3.8rem] bg-white  mr-4 lg:absolute lg:top-[110%] lg:left-0 lg:right-0 lg:mx-4 "
                  : " flex justify-between items-center px-6 rounded-[3.8rem] bg-transparent border-white border-2 mr-4 lg:hidden"
              }
            >
              <input
                type="text"
                placeholder="Search Anime or Manga"
                className=" bg-transparent text-2xl sm:text-[1.2rem] fold:text-[0.95rem]  my-2  font-bold outline-none placeholder:text-amber-custom/70 lg:placeholder:text-amber-custom lg:w-[95%]"
              />
              <button className=" text-2xl sm:text-[1.2rem] sm:w-[2rem] sm:h-[1.75rem]   my-2  ml-2 flex items-center justify-center bg-amber-custom text-white rounded-[50%]  h-[2.5rem] w-[2.5rem]">
                <FaSearch />
              </button>
            </form>
          </div>
        </div>

        <div className=" text-2xl lg:flex justify-between items-center mr-4 hidden">
          <div onClick={toggleMenuSearch} className="mx-2">
            {toggleSearch ? (
              <div className=" bg-white text-amber-custom rounded-full  h-[3rem] w-[3rem] flex items-center justify-center cursor-pointer">
                <FaTimes />
              </div>
            ) : (
              <div className=" bg-amber-custom text-white rounded-full  h-[3rem] w-[3rem] flex items-center justify-center cursor-pointer">
                <FaSearch />
              </div>
            )}
          </div>
          <div onClick={toggleMenu}>
            {toggle ? (
              <div className=" bg-white text-amber-custom rounded-full  h-[3rem] w-[3rem] flex items-center justify-center cursor-pointer ">
                <FaTimes />
              </div>
            ) : (
              <div className=" bg-amber-custom text-white rounded-full  h-[3rem] w-[3rem] flex items-center justify-center cursor-pointer">
                <FaBars />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
