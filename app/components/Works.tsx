"use client";
import React, { useEffect, useState } from "react";
import arrow from "@/public/arrow.svg";
import hoverArrow from "@/public/hoverArrow.svg";
import Image from "next/image";
import AnimatedCursor from "react-animated-cursor";
import Link from "next/link";

const data = [
  {
    title: "Moon",
    imgURL: "../../public/codepens/",
    URL: "https://codepen.io/gambhirsharma/",
  },
  {
    title: "Minnion",
    imgURL: "../../public/codepens/",
    URL: "https://codepen.io/gambhirsharma/",
  },
  {
    title: "Supabase Card",
    imgURL: "../../public/codepens/",
    URL: "https://codepen.io/gambhirsharma/",
  },
  {
    title: "Radar CSS",
    imgURL: "../../public/codepens/",
    URL: "https://codepen.io/gambhirsharma/",
  },
];

function Works() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setCursorPosition({
        x: e.clientX + window.scrollX,
        y: e.clientY + window.scrollY,
      });
    };
    document.body.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorPosition]);
  return (
    <div className="cursor-none">
      <div
        id="circularcursor"
        style={{
          backgroundColor: "#f75b59",
          backgroundImage: "linear-gradient(to bottom, #f75b59, #c94de9)",
          border: "2px solid #f75b59",
          height: "70px",
          width: "70px",
          borderRadius: "50%",
          position: "absolute",
          zIndex: "1",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          boxShadow:
            "inset -3px 0px 0px -1px rgba(255,146,123,1), inset 3px 0px 0px -1px rgba(255,146,123,1)",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          display: hoverIndex !== null ? "flex" : "none", // Show only when hovering
        }}
      >
        <p> View </p>
        <p> Works</p>
      </div>
      <ul>
        {data.map((item, index) => {
          return (
            <Link href={item.URL} key={index} target="_blank">
            <li
              className="border-y-[0.02px] border-x-0"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="flex text-4xl items-center justify-between">
                <div className="flex items-center">
                  {hoverIndex === index && (
                    <>
                      <Image src={arrow} alt="" height={100} width={100} />
                    </>
                  )}
                  {""}
                  {item.title}
                </div>
                <Image
                  src={hoverIndex === index ? hoverArrow : arrow}
                  alt=""
                  height={100}
                  width={100}
                />
              </div>
            </li>
            </Link> 
          );
        })}
      </ul>
    </div>
  );
}

export default Works;
