import React from "react";
import landingimage from "@/public/assets/images/macbook-pro.png";
import mockup from "@/public/assets/images/mockup.png";
import ipad from "@/public/assets/images/ipad-pro.png";
import Navbar from "../components/Navbar";

import Image from "next/image";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import Play from "@/public/assets/icons/play.svg";
import ArrowCircle from "@/public/assets/icons/arrow-circle-outline.svg";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col mt-[86px] pt-11 gap-40">
        <div className="flex flex-col">
          <div className="px-4 py-[10px] ml-12 lg:ml-40 bg-primary bg-opacity-10 w-fit rounded-lg self-center lg:self-start mb-6">
            <p className="font-worksans font-[500] text-[20px] text-primary">
              UI/UX Design
            </p>
          </div>
          <div className="w-full self-center items-center justify-center max-w-[1440px]">
            <div className="grid gap-20 relative items-center justify-center lg:justify-end">
              <div className="pt-4 z-10 lg:absolute w-[80vw] lg:w-[680px] left-0 pl-4 md:pl-12 lg:pl-40">
                <div className="flex flex-col gap-4">
                  <p className="font-worksans font-extrabold text-dark-1C text-[65px] leading-[65px]">
                    We Plan, Design{" "}
                    <span className="text-primary">and Develop</span>
                  </p>
                  <p className={`font-worksans text-grey-36 text-2xl pr-7`}>
                    {`We provide professional Web & Mobile app design services.`}
                  </p>
                  <div className="mt-[38px]">
                    <div className="button-primary">
                      <p className={`button-primary-text`}>Get a quote</p>
                    </div>
                  </div>
                  <div className="flex flex-col w-72 mt-12">
                    <div className="grid items-center justify-end w-full">
                      <div className="flex items-center w-fit gap-2 border-b-2 p-[2px]">
                        <div className="w-2 h-2 rounded-full bg-green" />
                        <p className="font-worksans font-bold text-lg text-green">
                          Restaurant POS
                        </p>
                      </div>
                      <p className="text-sm text-dark-0 font-[500]">
                        Mobile app design
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-[90px] h-[90px]">
                        <CircularProgressbarWithChildren
                          value={0.7}
                          maxValue={1}
                          styles={buildStyles({
                            // Rotation of path and trail, in number of turns (0-1)
                            rotation: 0.8,

                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: "round",

                            // Text size
                            textSize: "16px",

                            // How long animation takes to go from one percentage to another, in seconds
                            pathTransitionDuration: 0.5,

                            // Can specify path transition in more detail, or remove it entirely
                            // pathTransition: 'none',

                            // Colors
                            pathColor: `#6EB000`,
                            textColor: "#f88",
                            trailColor: "#fff",
                            backgroundColor: "#3e98c7",
                          })}
                        >
                          <div className="w-full h-full bg-opacity-10 items-center justify-center flex rounded-full relative">
                            <div className="w-[75%] h-[75%] bg-grey-D9 box-shadow bg-opacity-10 rounded-full flex items-center justify-center">
                              <p className="font-worksans text-2xl font-extrabold text-green">
                                01
                              </p>
                            </div>
                            <div className="absolute top-1 left-16">
                              <div className="relative">
                                <div className="w-4 h-4 rounded-full border border-green bg-white" />
                                <div className="w-8 h-[1px] bg-grey-D9 absolute -top-2 left-2 -rotate-45" />
                              </div>
                            </div>
                          </div>
                        </CircularProgressbarWithChildren>
                      </div>
                      {Array(3)
                        .fill("a")
                        .map((_, index) => {
                          const rotation =
                            index === 0 ? 0.85 : index === 1 ? 0.9 : 0.78;
                          return (
                            <div className="w-11 h-11" key={index}>
                              <CircularProgressbarWithChildren
                                value={0.85}
                                maxValue={1}
                                styles={buildStyles({
                                  // Rotation of path and trail, in number of turns (0-1)
                                  rotation: rotation,

                                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                  strokeLinecap: "round",

                                  // Text size
                                  textSize: "16px",

                                  // How long animation takes to go from one percentage to another, in seconds
                                  pathTransitionDuration: 0.5,

                                  // Can specify path transition in more detail, or remove it entirely
                                  // pathTransition: 'none',

                                  // Colors
                                  pathColor: `#D9D9D9`,
                                  textColor: "#f88",
                                  trailColor: "#fff",
                                  backgroundColor: "#3e98c7",
                                })}
                                strokeWidth={10}
                              >
                                <div className="w-[60%] h-[60%] bg-grey-D9 box-shadow bg-opacity-10 rounded-full" />
                              </CircularProgressbarWithChildren>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-12 md:ml-0 md:w-[786px] h-fit lg:mr-24">
                <Image
                  src={landingimage}
                  alt="landing-image"
                  className="h-auto lg:h-[520px] w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full self-center items-center justify-center max-w-[1440px]">
          <div className="flex flex-col items-center lg:flex-row justify-center gap-10 lg:gap-36">
            <div>
              <Image src={mockup} alt="mockup" className="h-[520px] w-full" />
            </div>
            <div className="flex flex-col gap-10">
              <p className="w-[90vw] text-center lg:w-[460px] font-worksans text-5xl font-extrabold text-dark-1C">
                Restuarant digital{" "}
                <span className="text-primary">QR Code Menu</span>
              </p>
              <p className="w-[90vw] text-center lg:w-[460px] font-worksans text-2xl text-grey-36">
                This app comes with a backend for restaurants owners, enabling
                them to manage their menu. The system generates a QR code for
                the restaurant where the users can scan and have access to their
                menu.
              </p>
              <div className="flex flex-col lg:flex-row w-fit items-center justify-center gap-2 lg:gap-8">
                <div className="button-primary">
                  <p className="button-primary-text">I need this project</p>
                </div>
                <div className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-grey-36 bg-opacity-10">
                  <Play />
                </div>
                <div className="flex cursor-pointer gap-1 items-center justify-center">
                  <div className="border-b-2 border-primary">
                    <p className="text-primary font-worksans font-semibold">
                      View prototype
                    </p>
                  </div>
                  <div className="mt-1">
                    <ArrowCircle />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative flex flex-col lg:flex-row items-center justify-end max-w-[1440px] self-center mx-auto">
            <div className="flex flex-col gap-10 lg:absolute mx-auto left-0 lg:ml-[162px]">
              <p className="w-[90vw] text-center lg:w-[460px] font-worksans text-5xl font-extrabold text-dark-1C">
                Restuarant digital{" "}
                <span className="text-primary">QR Code Menu</span>
              </p>
              <p className="w-[90vw] text-center lg:w-[460px] font-worksans text-2xl text-grey-36">
                This app comes with a backend for restaurants owners, enabling
                them to manage their menu. The system generates a QR code for
                the restaurant where the users can scan and have access to their
                menu.
              </p>
              <div className="flex flex-col lg:flex-row w-fit items-center justify-center gap-2 lg:gap-8">
                <div className="button-primary">
                  <p className="button-primary-text">I need this project</p>
                </div>
                <div className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-grey-36 bg-opacity-10">
                  <Play />
                </div>
                <div className="flex cursor-pointer gap-1 items-center justify-center">
                  <div className="border-b-2 border-primary">
                    <p className="text-primary font-worksans font-semibold">
                      View prototype
                    </p>
                  </div>
                  <div className="mt-1">
                    <ArrowCircle />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:mr-[72px]">
              <Image
                src={ipad}
                alt="ipad-pro-2020"
                className="h-[520px] w-full  lg:w-[740px]"
              />
            </div>
          </div>
          <div className="absolute bg-black bg-opacity-50 backdrop-blur-md z-40 left-0 right-0 bottom-0 top-[15%] flex flex-col items-center justify-center gap-4">
            <div className="animation">
              <div className="one spin-one"></div>
              <div className="two spin-two"></div>
              <div className="three spin-one"></div>
            </div>
            <h2 className="uppercase text-center font-worksans font-extrabold text-[20px] text-primary text-4xl">
              This site is still under construction
            </h2>
          </div>
        </div>
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
