"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import design from "@/design.png";
import model from "@/public/model.png";
import Button from "./Button";
import leftArrow from "@/public/Left-Arrow.svg";
import rightArrow from "@/public/Right-Arrow.svg";

const cards = [
  {
    sno: "01",
    title: "Front-End",
    detail:
      "I am new to this fiend but I konw how to do the work in this creatus of thisowl dis Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat",
    url: "design",
  },
  {
    sno: "02",
    title: "Figma to React code",
    detail:
      "I am new to this fiend but I konw how to do the work in this creatus of thisowl dis Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat",
    url: "design",
  },
  {
    sno: "03",
    title: "UI/UX design",
    detail:
      "I am new to this fiend but I konw how to do the work in this creatus of thisowl dis Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat",
    url: "design",
  },
  {
    sno: "04",
    title: "Neovim Plugins",
    detail:
      "I am new to this fiend but I konw how to do the work in this creatus of thisowl dis Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat",
    url: "design",
  },
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
    scrollLeft = Math.max(0, Math.min(scrollLeft, container.scrollWidth - container.clientWidth));
    
    // Scroll to the new position
    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth"
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
          {cards.map(({ sno, title, detail }, index) => {
            return (
              <main
                key={index}
                className="border-[#44445e] relative w-[40rem] h-[24rem] rounded-3xl overflow-hidden border-2 bg-[#101019] p-10 flex flex-col items-center justify-between bg-[url('../public/gradient.png')] bg-cover bg-no-repeat bg-[center_top_5rem]"
              >
                <div className="flex w-full">
                  <Image
                    src={model}
                    width={400}
                    height={400}
                    alt=""
                    className=" border border-white rounded-full overflow-hidden mr-10"
                  />
                  <p className="">{detail}</p>
                </div>
                <div className="flex items-center justify-between w-full text-5xl">
                  <h1 className="">{title}</h1>
                  <p className="text-[#44445e]">{sno}</p>
                </div>
              </main>
            );
          })}
        </div>
      </div>
    </>
  );
}
