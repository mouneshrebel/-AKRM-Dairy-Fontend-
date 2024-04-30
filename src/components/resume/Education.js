import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20  h-[900px] overflow-hidden"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015- 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Msc in Biotechnology"
            subTitle="DG Vaishnav College (2015 - 2020)"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="full stack developer"
            subTitle=" Guvi IIT Madras  (2023 - 2024)"
            des=" Sucessfully compeled  Full Stack Development with FrontEnd & BackEnd Crouse in Guvi IIT Madras ."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
