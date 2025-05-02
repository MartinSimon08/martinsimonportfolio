import React from "react";
/*
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
*/
import block from "../assets/portfolio/blockgame.png";
import checkers from "../assets/portfolio/checkers.png"
import food from "../assets/portfolio/food.png"
import notes from "../assets/portfolio/notes.png"
import twitter from "../assets/portfolio/twitter.png"
import worlde from "../assets/portfolio/worlde.png"
import amazon from "../assets/portfolio/amazon.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: checkers,
      demolink: "https://checkers-git-main-martin-simons-projects.vercel.app/",
      codelink: "https://vercel.com/martin-simons-projects/checkersmartin",
      titulo: "Checkers",
    },
    {
      id: 2,
      src: twitter,
      demolink: "https://twittermartin.vercel.app/",
      codelink: "https://github.com/MartinSimon08/twittermartin",
      titulo: "Twitter Full Stack Clone",
    },
    {
      id: 3,
      src: notes,
      demolink: "https://notesmartinsimon.vercel.app/",
      codelink: "https://github.com/MartinSimon08/notes",
      titulo: "Notes App",
    },
    {
      id: 4,
      src: food,
      demolink: "https://foodpage-ten.vercel.app/",
      codelink: "https://github.com/MartinSimon08/foodpage",
      titulo: "Food Page",
    },
    {
      id: 5,
      src: worlde,
      demolink: "https://wordleclonemartinsimon.vercel.app/",
      codelink: "https://github.com/MartinSimon08/wordleclone",
      titulo: "Worlde Clone",
    },
    {
      id: 6,
      src: amazon,
      demolink: "https://metafrontend.vercel.app/",
      codelink: "https://github.com/MartinSimon08/metafrontend",
      titulo: "Meta Front End Developer Capstone",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6"></p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          
          {portfolios.map(({ id, src, demolink, codelink, titulo }) => (


            <div>
              
                <div className="flex items-center justify-center">
                <a href={demolink} target="_blank">
                <button className=" px-6 py-0 m-1 duration-200 hover:scale-105 ">
                  {titulo}
                </button>
                </a>
                </div>


            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demolink} target="_blank">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                </a>
                <a  href={codelink} target="_blank">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
                </a>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
