import React from "react";
import changishaBot from "../assets/portfolio/changisha-bot.PNG";
import changishaPortal from "../assets/portfolio/changisha.png";
import ksoc from "../assets/portfolio/ksoc.jpg";
import vodaBimaUSSD from "../assets/portfolio/vodabima-ussd.PNG";
import vodabimaPortal from "../assets/portfolio/vodabima.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ksoc,
      hasLink: true,
      link: "https://www.ksoc.co/login?next=/"
    },
    {
      id: 2,
      src: vodabimaPortal,
      hasLink: true,
      link: "https://vodabima.vodacom.co.tz/#/"
    },
    {
      id: 3,
      src: changishaPortal,
      hasLink: true,
      link: "https://changisha.vodacom.co.tz/#/"
    },
    {
      id: 4,
      src: changishaBot,
      hasLink: false,
      link: ""
    },
    {
      id: 5,
      src: vodaBimaUSSD,
      hasLink: false,
      link: ""
    }
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, hasLink, link }) => (
            <div
              key={id} 
              style={{ cursor: hasLink ? "pointer" : "auto" }}
              className="shadow-md shadow-gray-600 rounded-lg"
              onClick={ hasLink ? () => window.open(link, '_blank') : () => {} }
            >
              <img
                style={{ height: '100%' }}
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
