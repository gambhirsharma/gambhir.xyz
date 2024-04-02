import Image from "next/image";
import check from "@/public/check.png";

export default function Home() {
  return (
    <main>
      <section
        className="uppercase text-8xl flex flex-col items-center h-[80vh] justify-center before:[background:repeating-linear-gradient(
      #0003 0 0.125%,
      #0000 0 9.875%,
      #0003 0 10%
    ),
    repeating-linear-gradient(
      90deg,
      #0003 0 0.125%,
      #0000 0 9.875%,
      #0003 0 10%
    );
] before:h-1/2 before:w-1/2 before:absolute before:z-[-1]"
      >
        <Image
          src={check}
          alt=""
          height={450}
          className="absolute left-0 top-0"
        />
        <h1>
          Hi
          <span className="w-14 overflow-hidden inline-block h-3/4">
            <svg
              width="75"
              height="81"
              viewBox="0 0 75 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
        <h1 className="border-white inline-block border-2 p-2 border-dotted translate-x-[20%]">
          Software
        </h1>
        <h1>Developer</h1>
      </section>
    </main>
  );
}
