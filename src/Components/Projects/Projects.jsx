import React from "react";
import ProjectCard from "./ProjectCard";
import project1Image from "../../assets/project1.png"
import project2Image from "../../assets/project2.png"
import project3Image from "../../assets/project3.png"
import project4Image from "../../assets/project4.png"


const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-20 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Ecommerce web"
          main="Vijay Mobile Shop and Accessories is an e-commerce platform designed to provide a seamless online shopping experience for mobile phones, mobile accessories, and related products. The website offers a wide range of products, including trending mobile covers, high-quality tempered glasses, and other accessories. Built with modern web technologies.
          Technologies – React, Tailwind CSS, Redux, MongoDB, Express Js, Node Js, Passport, Stripe, Nodemail, Etc."
        
          image={project1Image}
                  live="https://vijay-mobile-shop.vercel.app"
                  code="https://github.com/Aryannagar1912/VijayMobileShop"
        />
        <ProjectCard
          title="Airbnb Clone"
          main="Developed a full-stack web app inspired by Airbnb for browsing property listings. Features include user authentication,image uploads via cloudinary, and form validation with Joi. Followed the MVC pattern for a well-organized code structure. Its help me in learning the all concepts of Api testing, and many more Concepts Technologies – HTML, JavaScript, MongoDB, Express Js, Node Js, Passport, Mapbox, Cloudinary, EJS, CSS, Bootstrap, Joi, Etc."
                  image={project2Image}
                  live="https://major-project-5zel.onrender.com"
                  code="https://github.com/Aryannagar1912/Airbnb-Project"
              />
        <ProjectCard
          title="Myntra Clone"
          main="A stylish and responsive Myntra clone built with React, featuring real-time product fetching from a backend server. This project replicates the e-commerce experience with a dynamic product catalog, intuitive UI, and seamless navigation—bringing the online fashion store experience to life.I gained hands-on experience in building responsive and dynamic user interfaces using React.js and Redux.
                  Technologies – Nodejs JavaScript CSS HTML Rractjs Expressjs Redux-toolkit"
                  image={project3Image}
                  live="https://github.com/Aryannagar1912/Myntra-App"
                  code="https://github.com/Aryannagar1912/Myntra-App"
              />
        <ProjectCard
                  title="Weather App"
                  main="A responsive weather app built with React and Material UI that provides real-time weather updates based on city names. The app features dynamic background images that change according to the weather conditions: rain, hot, or cold. Users can easily search for any city to view temperature, humidity, wind speed, and other essential weather details Real-Time Temperature.With easy toggling between Celsius.
                  Technologies – React, Material UI"
                  image={project4Image}
                  live="https://github.com/Aryannagar1912/Weather-App"
                  code="https://github.com/Aryannagar1912/Weather-App"
              />
      </div>
    </div>
  );
};

export default Projects;
