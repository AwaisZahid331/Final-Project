import React, { useState, useRef, forwardRef } from "react";

import Projects from "./resume components/projects/Projects";
import EducatioDetails from "./resume components/education/EducatioDetails";
import BasicDeatils from "./resume components/BasicDeatils";
import EcperienceDetails from "./resume components/experience/EcperienceDetails";
import AchiveDetails from "./resume components/achivement/AchiveDetails";
import SkillDetails from "./resume components/skills/SkillDetails";
import OtherDetails from "./resume components/other/OtherDetails";
import { HStack, VStack } from "@chakra-ui/react";

// import Header from "./MyComponents/Header";
// import HeroSection from "./MyComponents/HeroSection";
// import Body from "./MyComponents/Body";


const Resume = () => {
  return (
    <>
     
      <div>
        <h1 className="text-4xl text-center text-blue-800 mt-16"> Resume</h1>

        <div className="my-3 rounded-md border-2 mx-auto shadow-2xl w-[80%] min-h-[50rem] px-3 py-2">
          <BasicDeatils />

          <VStack width={"100%"} marginX={"auto"} alignItems={"flex-start"}>
            <EducatioDetails />
            <SkillDetails />
          </VStack>

          <div className="w-[100%] ">
            <Projects />
          </div>
          <div className="w-[100%] ">
            <EcperienceDetails />
          </div>
          <div className="w-[100%] ">
            <AchiveDetails />
          </div>
          <div className="w-[100%] ">
            <OtherDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
