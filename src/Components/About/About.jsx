import React from "react";
import AboutImg from "../../assets/output1.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Introduction
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I’m Aryan Nagar, a final-year BTech student specializing in Electronics and Communication Engineering. I am passionate about building dynamic web applications and aspire to excel in the IT field.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                My Journey
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I discovered my passion for coding during my college years and have since built projects using React, Node.js, and other modern technologies.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                My Vision
                </h1>
                <p className="text-sm md:text-md leading-tight">
                My goal is to contribute to impactful projects that solve real-world problems and deliver exceptional user experiences.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
