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
          
                                  
I am a developer and Systems Engineering student, interested in application development and web design work, where I can apply my skills to bring innovative ideas and exceptional visual solutions to life. With extensive experience creating intuitive and engaging user interfaces, my focus is on ensuring that every project I tackle delivers an exceptional experience to the end user.
        </p>

        <br />

        <p className="text-xl">
        I am always willing to learn and stay up to date with the latest trends and technologies in web design and development. My approach is collaboration and attention to detail, to ensure that the final product meets the client's objectives and user expectations.
        </p>
      </div>
    </div>
  );
};

export default About;
