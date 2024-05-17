import React from "react";
import Button from "../components/Button";
import Link from "next/link";

export default function About() {
  return (
    <>
      <h1>About me</h1>
      <div className="w-full flex items-center justify-center">
      <Link className="z-50" href="/">
        <Button>Home</Button>
      </Link>
      </div> 
    </>
  );
}
