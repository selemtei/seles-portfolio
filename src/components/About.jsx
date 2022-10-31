import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-5">
          I am a senior software engineer with more than five years of professional work experience from top Silicon valley technology startups. I have architected, built, maintained, and managed various  distributed backend systems.
        </p>

        <br />

        <p className="text-xl">
          On top of that, I do have enormous experience building the frontend for web applications and working as a devops engineer, where I was required to set up tools like Jenkins for continuous code deployment to production.
        </p>
      </div>
    </div>
  );
};

export default About;
