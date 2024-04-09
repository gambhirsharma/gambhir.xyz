import Image from "next/image";
import check from "@/public/check.png";
import graph from "@/public/graph.svg";
import model from "@/public/model.png";
import arrow from "@/public/arrow.svg";
import Button from "./components/Button";

export default function Home() {
  return (
    <main className="select-none">
      <section className="uppercase text-8xl flex flex-col items-center h-[80vh] justify-center ">
        <Image
          src={check}
          alt=""
          height={450}
          className="absolute left-0 top-0"
        />
        <Image
          src={graph}
          height={500}
          alt="graph"
          className="absolute opacity-65 translate-y-[50px] z-0"
        />
        <div className="z-10">
          <h1>
            Hi
            <span className="w-14 overflow-hidden inline-block h-[69px]">
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
          <h1>I'm Gambhir</h1>
          <Image
            src={model}
            alt="model"
            className="absolute -translate-x-48"
            height={240}
          />
          <div className="inline-block p-5 translate-x-[20%] bg-[url('../public/box.svg')] bg-center bg-fit bg-no-repeat">
            <h1
              className="
            bg-gradient-to-r from-[#EA3B2A] via-[#D64186] to-[#C34CFB] text-transparent bg-clip-text font-semibold"
            >
              Software
            </h1>
          </div>
          <h1>Developer</h1>
        </div>
      </section>
      <section className="h-[55vh] w-full flex items-start justify-center pt-28 ">
        <div className=" w-1/2">
          <p className="text-5xl uppercase">
            <h1>discover the</h1>
            <h1>professional</h1>
            <h1>journey of a</h1>
            <h1>developer.</h1>
          </p>
          <Button>About me</Button>
        </div>
        <div className="w-[30rem] text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          suscipit nobis, aliquam ex, repellat autem sit vero harum inventore
          vel officiis sed numquam et ullam mollitia dolorem eveniet facilis
          accusantium?
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          suscipit nobis, aliquam ex, repellat autem sit vero harum inventore
          vel officiis sed numquam et ullam mollitia dolorem eveniet facilis
          accusantium?
        </div>
      </section>
    </main>
  );
}
