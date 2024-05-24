"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import design from "@/design.png";
import model from "@/public/model.png";
import Button from "./Button";
import leftArrow from "@/public/Left-Arrow.svg";
import rightArrow from "@/public/Right-Arrow.svg";
import portfolio from "@/public/Projects/Portfolio-website.png";
import vesper from "@/public/Projects/Vesper.png";
import nftNetwork from "@/public/Projects/NFT-Network.png";

import {
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiLua,
  SiNeovim,
  SiPython,
  SiJupyter,
  SiJavascript,
} from "react-icons/si";

const cards = [
  {
    sno: "01",
    title: "Porfolio website",
    detail:
      "I am new to this fiend but I konw how to do the work in this creatus of thisowl dis Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat",
    url: `https://github.com/gambhirsharma/gambhir.xyz`,
    imageURL: portfolio,
    icons: [SiTypescript, SiTailwindcss, SiReact],
  },
  {
    sno: "02",
    title: "Vesper.nvim",
    detail:
      "I am new to this fiend but I konw how to do the work in this creatus of thisowl dis Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat",
    url: `https://github.com/gambhirsharma/vesper.nvim`,
    bg: "#0F0F0F",
    imageURL: vesper,
    icons: [SiNeovim, SiLua],
  },
  {
    sno: "03",
    title: "NFT Network Analytics",
    detail:
      "I am new to this fiend but I konw how to do the work in this creatus of thisowl dis Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat",
    url: `https://github.com/gambhirsharma/NFT-Data-Analytics`,
    bg: "#222",
    imageURL: nftNetwork,
    icons: [SiPython, SiJupyter, SiJavascript],
  },
  // {
  //   sno: "04",
  //   title: "Vesper.nvim",
  //   detail:
  //     "I am new to this fiend but I konw how to do the work in this creatus of thisowl dis Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat",
  //   url: "design",
  //   imageURL: vesper,
  //   icons: [SiNeovim, SiLua],
  // },
];

export default function Cards() {
  // const sectionsRef = useRef([]);

  // const handleScrollTo = (direction) => {
  //   const currentIndex = sectionsRef.current.findIndex(
  //     (section) => section === document.activeElement,
  //     console.log(`works`)
  //   );
  //
  //   let nextIndex;
  //   if (direction === "forward") {
  //     nextIndex =
  //       currentIndex < sectionsRef.current.length - 1
  //         ? currentIndex + 1
  //         : currentIndex;
  //   } else {
  //     nextIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
  //   }
  //
  //   sectionsRef.current[nextIndex].scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  //   sectionsRef.current[nextIndex].focus();
  // };

  // const myRef = useRef(null);
  //
  // useEffect(() => {myRef}, []);

  // const handleScrollTo = (direction: boolean) => {
  //   // true => font
  //   // false => back
  //   const container = document.getElementById("card-container");
  //   container?.scrollTo({
  //     top: 0,
  //     left: 100,
  //     behavior: "smooth",
  //   });
  // };

  const handleScrollTo = (direction: boolean) => {
    // Get the container element
    const container = document.getElementById("card-container");
    console.log(container);

    if (container) {
      // Get the current scrollLeft position
      let scrollLeft = container.scrollLeft;

      // Calculate the new scrollLeft position based on the direction
      if (direction) {
        // Move right by 100 pixels
        scrollLeft += 300;
      } else {
        // Move left by 100 pixels
        scrollLeft -= 300;
      }

      // Ensure the new scrollLeft position is within the bounds
      scrollLeft = Math.max(
        0,
        Math.min(scrollLeft, container.scrollWidth - container.clientWidth),
      );

      // Scroll to the new position
      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl md:text-6xl">Projects</h1>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => handleScrollTo(false)}
            className="border-[#44445e] border-2 rounded-full flex items-center bg-gradient-to-b from-[#262636] via-transparent to-transparent p-3"
          >
            <Image src={leftArrow} alt="left Arrow" height={30} width={30} />
          </button>
          <button
            onClick={() => handleScrollTo(true)}
            className="border-[#44445e] border-2 rounded-full flex items-center bg-gradient-to-b from-[#262636] via-transparent to-transparent p-3"
          >
            <Image src={rightArrow} alt="left Arrow" height={30} width={30} />
          </button>
        </div>
      </div>
      {/*  */}
      <div
        className="mb-10 overflow-y-scroll p-5 w-[100vw] -left-8 md:-left-36 lg:-left-44 relative lg:px-44 md:px-36 px-4"
        id="card-container"
      >
        <div className="flex space-x-5 w-fit justify-center items-center">
          {cards.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.url}
                target="_blank"
                className="overflow-hidden"
              >
                <main
                  // key={index}
                  className="border-[#44445e] relative w-[40rem] h-[24rem] rounded-3xl overflow-hidden border-2 bg-[#101019] p-10 flex flex-col items-center justify-between bg-[url('../public/gradient.png')] bg-cover bg-no-repeat bg-[center_top_5rem]"
                >
                  <div className="flex w-full">
                    <div
                      style={{ backgroundColor: `${item.bg}` }}
                      className="flex items-center justify-between w-full aspect-square border border-white rounded-full overflow-hidden mr-10 bg-[#000]"
                    >
                      <Image
                        src={item.imageURL}
                        width={400}
                        height={400}
                        alt=""
                        className=""
                      />
                    </div>
                    <div>
                      <p className="">{item.detail}</p>
                      <div className="flex items-center justify-start flex-row space-x-4 py-3">
                        {item.icons.map((Icon, index) => {
                          return <Icon key={index} size="30" />;
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full text-5xl">
                    <h1 className="">{item.title}</h1>
                    <p className="text-[#44445e]">{item.sno}</p>
                  </div>
                </main>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
