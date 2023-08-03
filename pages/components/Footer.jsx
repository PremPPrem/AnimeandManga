import Link from "next/link";
import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaGitSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Modal from "./Modal";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const valid =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    formCheck();
    setTimeout(() => {
      setOpenModal(false)
    }, 1000);
   
  };

  const formCheck = () => {
    if (email.match(valid)) {
        setEmail("");
        setEmailError("");
        setOpenModal(true);
      } else {
        setEmailError("Email  is invalid");
      }
      return <Modal />;
  }


  return (
    <div className="bg-black/30 text-amber-custom/70 ">
      {openModal && <Modal closeModal={setOpenModal} btnName="Subscribe" />}
      <div className=" grid grid-cols-[2fr_1fr_1fr_1fr] lg:grid-cols-[2fr_1fr] sm:grid-cols-[1fr]">
        <div className=" sm:border-b-4 sm:border-white/20 ">
          <h1 className=" text-[3rem] font-bold px-0 py-4 text-center ">
            Anime & Manga
          </h1>
          <h1 className=" text-[2rem] font-bold px-0 py-4 text-center ">
            Social Media
          </h1>
          <div className="flex items-center justify-center">
            <a href="/" className="  px-0 py-4 mx-2">
              <FaFacebookSquare className="inline text-[2.5rem] text-white hover:scale-125  hover:text-amber-custom" />
            </a>
            <a href="/" className="  px-0 py-4 mx-2">
              <FaGitSquare className="inline text-[2.5rem] text-white hover:scale-125  hover:text-amber-custom" />
            </a>
            <a href="/" className="  px-0 py-4 mx-2">
              <FaTwitterSquare className="inline text-[2.5rem] text-white hover:scale-125  hover:text-amber-custom" />
            </a>
            <a href="/" className="  px-0 py-4 mx-2">
              <FaInstagramSquare className="inline text-[2.5rem] text-white hover:scale-125  hover:text-amber-custom" />
            </a>
          </div>
        </div>

        <div className="sm:hidden">
          <div className="mx-2 sm:mx-8">
            <h1 className=" text-[2rem] font-bold px-0 py-4">Quick Links</h1>
            <div>
              <Link href="/" className="group block text-[1.5rem] px-0 py-4 ">
                <FaArrowRight className="text-[1rem] inline text-white mr-2 group-hover:mr-4 group-hover:text-amber-custom" />
                <span className="group-hover:text-white font-bold">Home</span>
              </Link>
              <Link
                href="/Anime"
                className="group block text-[1.5rem] px-0 py-4  "
              >
                <FaArrowRight className="text-[1rem] inline text-white mr-2 group-hover:mr-4 group-hover:text-amber-custom" />
                <span className="group-hover:text-white font-bold">Anime</span>
              </Link>
              <Link
                href="/Manga"
                className="group block text-[1.5rem] px-0 py-4 "
              >
                <FaArrowRight className="text-[1rem] inline text-white mr-2 group-hover:mr-4 group-hover:text-amber-custom" />
                <span className="group-hover:text-white font-bold">Manga</span>
              </Link>
              <Link
                href="/Game"
                className="group block text-[1.5rem] px-0 py-4 "
              >
                <FaArrowRight className="text-[1rem] inline text-white mr-2 group-hover:mr-4 group-hover:text-amber-custom" />
                <span className="group-hover:text-white font-bold">Game</span>
              </Link>
              <Link
                href="/Contact"
                className="group block text-[1.5rem] px-0 py-4 "
              >
                <FaArrowRight className="text-[1rem] inline text-white mr-2 group-hover:mr-4 group-hover:text-amber-custom" />
                <span className="group-hover:text-white font-bold">
                  Contact
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="sm:border-b-4 sm:border-white/20 ">
          <div className="mx-2 lg:mx-6  sm:mx-8 ">
            <h1 className=" text-[2rem] font-bold px-0 py-4 ">Newsletter</h1>
            <p>subscribe for latest updates</p>
            <form action="" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your Email"
                className=" mt-[0.7rem] w-full md:w-[70%] sm:w-full block p-2 rounded-[10px] font-bold outline-none  bg-transparent border-2 border-amber-custom/40"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <small className="mb-[0.7rem] pl-2 text-red-500 block">
                {emailError}
              </small>
              <button type="submit" className="button sm:my-4 ">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mx-2  sm:mx-8">
          <h1 className=" text-[2rem] font-bold px-0 py-4">Contact info</h1>
          <div className="">
            <p className="group block text-[1.2rem] px-0 py-4 ">
              <FaPhoneAlt className="mr-2 inline text-white group-hover:text-amber-custom" />
              <span className="group-hover:text-white cursor-context-menu">
                000-000-0000
              </span>{" "}
            </p>
            <p className="group block text-[1.2rem] px-0 py-4 ">
              <FaEnvelope className="mr-2 inline text-white group-hover:text-amber-custom" />
              <span className="group-hover:text-white cursor-context-menu ">
                Email@info.com
              </span>
            </p>
            <p className="group block text-[1.2rem] px-0 py-4 ">
              <FaMapMarkerAlt className="mr-2 inline text-white group-hover:text-amber-custom" />
              <span className="group-hover:text-white cursor-context-menu">
                Bangkok Thailand
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="mb-2 mt-6 border-t-2 border-white/20">
        <p className=" text-center mt-2 text-amber-custom/50">
          Copyright ©2023 Anime & Manga Website
        </p>
      </div>
    </div>
  );
}
