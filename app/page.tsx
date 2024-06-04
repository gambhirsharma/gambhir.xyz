import Image from "next/image";
import check from "@/public/check.png";
import graph from "@/public/graph.svg";
import model from "@/public/model.png";
import arrow from "@/public/arrow.svg";
import Button from "./components/Button";
import Link from "next/link";
import Works from "./components/Works";
import Cards from "./components/Cards";
import vim from "@/public/vim.png";
import neovim from "@/public/neovim.png";
import eye from "@/public/Eye.png";
import software from "@/public/software.svg";

export default function Home() {
  return (
    <main className="select-none">
      <section className="uppercase lg:text-8xl text-5xl md:text-8xl flex flex-col items-center h-[80vh] justify-center ">
        <Image
          src={check}
          alt="background image"
          height={420}
          width={280}
          className="md:w-[280px] h-auto absolute left-0 top-0 aspect-[280/420] w-[220px] "
        />
        <Image
          src={graph}
          height={500}
          priority={true}
          alt="graph"
          className="absolute opacity-65 translate-y-[50px] z-0"
        />
        <div className="z-10">
          <h1>
            Hi
            <span className="w-14 overflow-hidden inline-block h-[26px] md:h-[69px]">
              <svg width="75" height="81" viewBox="0 0 75 81" fill="none">
                <rect width="11" height="81" fill="white" />
                <rect x="17" width="8" height="81" fill="white" />
                <rect x="30" width="7" height="81" fill="white" />
                <rect x="43" width="5" height="81" fill="white" />
                <rect x="72" width="2" height="81" fill="white" />
                <rect x="64" width="3" height="81" fill="white" />
                <rect x="54" width="4" height="81" fill="white" />
              </svg>
            </span>{" "}
            there
          </h1>
          <h1>I&apos;m Gambhir</h1>
          <Image
            src={model}
            alt="model"
            className="aspect-[226/240] absolute md:-translate-x-48 -translate-x-20 h-auto md:w-[240px] w-[120px]"
            height={240}
            width={226}
            // fill
//            sizes="(max-width: 768px) 80px, 240px"
            // sizes="(max-width: 768px) 80px, 240px"
          />
          <div className="inline-block p-4 translate-x-[5%] lg:translate-x-[20%] bg-center bg-auto bg-no-repeat">
            {/*               <h1
              className="
            bg-gradient-to-r from-[#EA3B2A] via-[#D64186] to-[#C34CFB] text-transparent bg-clip-text font-semibold"
            >
              Software
            </h1>
             */}
            <Image
              src={software}
              height={127.31}
              width={600}
              alt="text: Software"
              className="bg-no-repeat"
            />
          </div>
          <h1>Developer</h1>
        </div>
      </section>
      <section className="md:h-[55vh] w-full flex items-start justify-center lg:px-20 flex-col md:flex-row lg:mt-44 mt-10 md:my-24">
        <div className=" md:w-1/2 w-full">
          <div className="text-5xl uppercase ">
            <h1>discover the</h1>
            <h1>professional</h1>
            <h1>journey of a</h1>
            <h1>developer.</h1>
          </div>
          <Link href="/about">
            <Button>About me</Button>
          </Link>
        </div>
        <div className="text-gray-400  md:w-1/2 w-full">
          As a dedicated web developer, I aim to establish a strong online
          presence through my personal website. By showcasing my technical
          expertise and diverse project portfolio, I hope to attract clients
          seeking high-quality web development services. (If you reading this
          then let me tell you its ai generated text.) My website will
          highlight my skills in various programming languages and frameworks,
          demonstrating my ability to create responsive, efficient, and visually
          appealing websites tailored to each client&apos;s needs.
        </div>
      </section>
      <section className="mx-4 lg:my-18 lg:mt-44 mt-10 md:my-24">
        <Cards />
      </section>
      <section className="my-10 md:my-24 lg:my-44">
        <div className="">
          <h1 className="text-4xl lg:text-6xl my-4 mx-4">CodePens</h1>
        </div>
        <div>
          <Works />
        </div>
      </section>
      <section className="flex items-center justify-center flex-col">
        <div className=" text-4xl lg:text-6xl uppercase">
          <h1 className="flex items-center justify-center">
            let&apos;s
            <Image
              src={eye}
              alt=""
              height={140}
              width={140}
              className=""
            />{" "}
            create
          </h1>
          <h1> something great </h1>
        </div>
        <Link
          href="https://twitter.com/messages/compose?recipient_id=gambhir_sharma"
          target="_blank"
          className="z-10"
        >
          <Button>Drop me a DM</Button>
        </Link>
      </section>
    </main>
  );
}
