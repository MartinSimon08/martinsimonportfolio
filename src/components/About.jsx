import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          What about me???
          </p>
        </div>

        <p className="text-xl mt-20">
          
                                  
I am a Full Stack Developer and Systems Engineering student with a strong interest in building functional, scalable, and user-friendly applications. I enjoy working on both the frontend and backend, turning ideas into reliable solutions through clean code and thoughtful design.      </p>

        <br />

        <p className="text-xl">
        I am always willing to learn and stay up to date with the latest trends and technologies in web design and development. My approach is collaboration and attention to detail, to ensure that the final product meets the client's objectives and user expectations.
        </p>
      </div>
    </div>
  );
};

export default About;
