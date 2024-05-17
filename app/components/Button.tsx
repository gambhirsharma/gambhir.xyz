import { ReactNode } from "react";
import Image from "next/image";
import arrowURL from "@/public/arrow.svg";

interface ButtonProps {
  children: ReactNode;
  arrow?: boolean;
}

function Button({ children, arrow = true }: ButtonProps) {
  return (
    <button className="border-[#44445e] pl-4 pr-2 text-xl py-2 border-2 my-10 rounded-full flex items-center bg-gradient-to-b from-[#262636] via-transparent to-transparent">
      {children}
      {arrow && <Image src={arrowURL} alt="arrow" />}
    </button>
  );
}

export default Button;
