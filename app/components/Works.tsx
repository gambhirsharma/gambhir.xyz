import React from "react";
import arrow from '@/public/arrow.svg';
import Image from 'next/image'

const data = [
  {
    title: "Moon",
    imgURL: "../../public/model.png",
  },
  {
    title: "AppWrite Card",
    imgURL: "../../public/model.png",
  },
  {
    title: "Supabase Card",
    imgURL: "../../public/model.png",
  },
  {
    title: "Radar CSS",
    imgURL: "../../public/model.png",
  }
];

function Works() {
  return (
    <>
      <ul>
        {data.map((item, index) => {
          return <li key={index} className="flex text-4xl items-center justify-between border-y-[0.02px] border-x-0">{item.title}
            <Image src={arrow} alt="" height={100} width={100}/>
          </li>;
        })}
      </ul>
    </>
  );
}

export default Works;
