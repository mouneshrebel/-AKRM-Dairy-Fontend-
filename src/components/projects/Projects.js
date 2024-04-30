import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { amazon, diaryapp } from "../../assets/index";

import { arkm } from "../../assets/index";
import food from "../../assets/images/projects/food.jpg";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PROJECT AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14 flex flex-wrap">
       
        <a
          href=" https://aquamarine-kulfi-ebbdb2.netlify.app/login"
          target="_blank"
          rel="noreferrer"
        >
          <ProjectsCard
            title="Diary Manager Application"
            des="Diary Manager Application this my capstone project in guvi."
            src={diaryapp}
            button={
              <a
                href=" https://github.com/mouneshrebel/Diary-Manager-Frontend-capstone-1"
                className="border-b-black hover:text-designColor bannerIcon w-40 h-11"
                target="_blank"
              >
                {" "}
                FrontEnd{" "}
              </a>
            }
            buttons={
              <a
                href=" https://github.com/mouneshrebel/Diary-manager-backend-capstone-2"
                className="border-b-black hover:text-designColor bannerIcon w-40 h-11"
                target="_blank"
              >
                {" "}
                BackEnd{" "}
              </a>
            }
            Live={
              <a
                href=" https://aquamarine-kulfi-ebbdb2.netlify.app/login"
                className="border-b-black hover:text-designColor bannerIcon w-40 h-11"
                target="_blank"
              >
                {" "}
                Live
              </a>
            }
          />
        </a>

        <a
          href=" https://jolly-platypus-888d6d.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <ProjectsCard
            title="The Arkm dairy Manager"
            src={arkm}
            des=" Dairy products or milk products, also known as lacticinia, are food products made from (or containing) milk."
            button={
              <a
                href=" https://github.com/mouneshrebel/cap-stone-front-end-"
                className="border-b-black hover:text-designColor bannerIcon w-40 h-11"
                target="_blank"
              >
                {" "}
                FrontEnd{" "}
              </a>
            }
            buttons={
              <a
                href=" https://github.com/mouneshrebel/arkmDairy-manager-Backend- "
                className="border-b-black hover:text-designColor bannerIcon w-40 h-11"
                target="_blank"
              >
                BackEnd{" "}
              </a>
            }
            Live={
              <a
                href=" https://jolly-platypus-888d6d.netlify.app/"
                className="border-b-black hover:text-designColor bannerIcon w-40 h-11"
                target="_blank"
              >
                {" "}
                Live
              </a>
            }
          />
        </a>

        <a
          href=" https://app.netlify.com/sites/magnificent-mooncake-eda188/overview"
          target="_blank"
          rel="noreferrer"
        >
          <ProjectsCard
            title="Amazon clone"
            src={amazon}
            des="Clone of Amazon with some functionalities like authentication, adding items to the cart, etc."
            button={
              <a
                href=" https://github.com/mouneshrebel/web-code-2-amazon--frontend"
                className="border-b-black hover:text-designColor bannerIcon w-40 h-11"
                target="_blank"
              >
                {" "}
                FrontEnd
              </a>
            }
            buttons={
              <a
                href=" https://github.com/mouneshrebel/wecode-amazon-back-end-2-"
                className="border-b-black hover:text-designColor bannerIcon w-40 h-11"
                target="_blank"
              >
                {" "}
                BackEnd
              </a>
            }
            Live={
              <a
                href=" https://app.netlify.com/sites/magnificent-mooncake-eda188/overview "
                className="border-b-black hover:text-designColor bannerIcon w-40 h-11"
                target="_blank"
              >
                {" "}
                Live
              </a>
            }
          />
        </a>

        <a
          href="https://fooddelights.netlify.app/"
          target="_blank"
          rel="noreferrer "
        >
          <ProjectsCard
            title="FoodOrder Website"
            des="Food Delight is a Redux-powered food ordering app that allows users to browse and order from a menu of delicious dishes with a user-friendly panel to add and manage food items seamlessly."
            src={food}
            button={
              <a
                href=" https://github.com/Surya-MERNstack/fooddelightclient"
                className="border-b-black hover:text-designColor bannerIcon w-40 h-11"
                target="_blank"
              >
                {" "}
                FrontEnd
              </a>
            }
            buttons={
              <a
                href=" https://github.com/Surya-MERNstack/fooddelightserver"
                className="border-b-black hover:text-designColor bannerIcon w-40 h-11"
                target="_blank"
              >
                {" "}
                BackEnd
              </a>
            }
            Live={
              <a
                href=" https://fooddelights.netlify.app/"
                className="border-b-black hover:text-designColor bannerIcon w-40 h-11"
                target="_blank"
              >
                {" "}
                Live
              </a>
            }
          />
        </a>

      </div>
    </section>
  );
};

export default Projects;
