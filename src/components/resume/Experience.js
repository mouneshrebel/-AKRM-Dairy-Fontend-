import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="mt-14 w-auto   h-auto flex hover:cursor-pointer    flex-wrap gap-5">
          <ResumeCard
            title="HTML5"
            subTitle="Guvi Certification"
            des={
              <a
                href=" https://www.guvi.in/certificate?id=6Jnfy60S93344137ph&download=true"
                className="text-designColor"
                target="_blank"
              >
                Link
              </a>
            }
          />
          <ResumeCard
            title="CSS3"
            subTitle="Guvi Certification"
            des={
              <a
                href="
                https://www.guvi.in/certificate?id=Bd4Hm106R63l3Iv479&download=true"
                className="text-designColor"
                target="_blank"
              >
                Link
              </a>
            }
          />
          <ResumeCard
            title="Bootstrap"
            subTitle="Guvi Certification"
            des={
              <a
                href=" https://www.guvi.in/certificate?id=0S71l643NQ6O4393z6&download=true"
                className="text-designColor"
                target="_blank"
              >
                Link
              </a>
            }
          />
          <ResumeCard
            title="JavaScript"
            subTitle="Guvi Certification"
            des={
              <a
                href=" https://www.guvi.in/certificate?id=f41860k9j7T6643dX3&download=true"
                className="text-designColor"
                target="_blank"
              >
                Link
              </a>
            }
          />
          <ResumeCard
            title="React"
            subTitle="Guvi Certification"
            des={
              <a
                href=" https://www.guvi.in/certificate?id=4o933C1v17AjR64W60&download=true"
                className="text-designColor"
                target="_blank"
              >
                Link
              </a>
            }
          />
          <ResumeCard
            title="NodeJS"
            subTitle="Guvi Certification"
            des={
              <a
                href=" https://www.guvi.in/certificate?id=3661E9tg43G0P754d1&download=true"
                className="text-designColor"
                target="_blank"
              >
                Link
              </a>
            }
          />
          <ResumeCard
            title="MongoDB"
            subTitle="Guvi Certification"
            des={
              <a
                href=" https://www.guvi.in/certificate?id=e67w34143r46908v1F&download=true"
                className="text-designColor"
                target="_blank"
              >
                Link
              </a>
            }
          />
          <ResumeCard
            title="MySQL"
            subTitle="Guvi Certification"
            des={
              <a
                href=" https://www.guvi.in/certificate?id=90366S334j7710KFw4&download=true"
                className="text-designColor"
                target="_blank"
              >
                Link
              </a>
            }
          />
          <ResumeCard
            title="MERNSTACK"
            subTitle="Guvi Certification"
            des={
              <a
                href=" https://www.guvi.in/certificate?id=G1347FcDi606r6493b&download=true"
                className="text-designColor"
                target="_blank"
              >
                Link
              </a>
            }
          />
         
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
