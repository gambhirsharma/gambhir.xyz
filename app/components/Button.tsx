import { ReactNode } from "react";
import Image from "next/image";
import arrow from "@/public/arrow.svg";

interface ButtonProps {
  children: ReactNode;
}

function Button({ children }: ButtonProps) {
  return (
    <button className="border-zinc-50 pl-4 pr-2 text-xl py-2 border my-10 rounded-full flex items-center ">
      {children}
      <Image src={arrow} alt="arrow" />
    </button>
  );
}

export default Button;
