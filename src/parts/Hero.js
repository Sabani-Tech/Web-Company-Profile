/* eslint-disable react/jsx-filename-extension */

import React from "react";

import Fade from "react-reveal/Fade";

import Button from "elements/Button";

import BuildWebsite from "assets/images/Startup.png";

export default function Hero() {
  return (
    <section className="hero">
      <Fade bottom>
        <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-8">
          <h1 className="text-5xl sm:text-6xl text-theme-deep-green font-bold leading-tight mb-5">
            Mengembangkan Bisnis Anda <br />
            Adalah Panggilan Kami
          </h1>

          <p className="font-light text-xl text-gray-400 leading-relaxed mb-16">
            Kami menyediakan pengembang & desainer yang menggunakan teknologi
            terbaru untuk membantu Anda meningkatkan bisnis Anda.
          </p>

          <Button
            href="/project"
            type="link"
            className="flex w-72 h-18 items-center px-14 py-5 text-white text-xl bg-green-500 rounded-lg shadow-2xl hover:bg-green-800 transition duration-200"
          >
            Lihat Karya Kami
            <svg
              className="ml-2 w-7 h-7 text-white animate-bounce-x"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>
      </Fade>

      <Fade bottom>
        <div className="flex pt-5 w-full justify-center items-center order-first md:w-full lg:order-last lg:w-1/2">
          <img className="" src={BuildWebsite} alt="Build Website" />
        </div>
      </Fade>
    </section>
  );
}
