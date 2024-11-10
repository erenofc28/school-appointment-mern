import React from "react";
import Header from "./Header";

const Home2 = () => {
  const arr = [
    {
      name: "Midoriya",
      position: "Head Of Institue",
      quote:
        "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
      src: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif",
    },
    {
      name: "Nami",
      position: "Principal",
      quote:
        "Empowering minds, shaping futures bright,,Our school's community, a guiding light.Together we learn, grow and thrive",
      src: "https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif",
    },
    {
      name: "Alex",
      position: "IT Support Specialist",
      quote:
        "Connecting technology, empowering minds,Solutions delivered, with expert finds.Supporting your success, always online",
      src: "https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif",
    },
    {
      name: "Thomas",
      position: "Maintenance Officer",
      quote:
        "Protecting assets, with diligent care,Ensuring functionality, everywhere,Maintenance excellence, we declare.",
      src: "https://cdn.tuk.dev/assets/photo-1570211776045-af3a51026f4a.jfif",
    },
  ];
  return (
    <>
      <Header />
      <div class="mb-16">
        <dh-component>
          <div class="container flex justify-center mx-auto pt-16 main_home2">
            <div>
              <h1 class="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                The Talented People Behind the Scenes of the Institute
              </h1>
            </div>
          </div>
          <div class="w-full bg-gray-100 px-10 pt-10">
            <div class="container mx-auto">
              <div
                role="list"
                aria-label="Behind the scenes People "
                class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
              >
                {arr.map((data) => {
                  return (
                    <>
                      <div
                        role="listitem"
                        class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                      >
                        <div class="rounded overflow-hidden shadow-md bg-white">
                          <div class="absolute -mt-20 w-full flex justify-center">
                            <div class="h-32 w-32">
                              <img
                                src={data.src}
                                alt="Display Picture of Andres Berlin"
                                role="img"
                                class="rounded-full object-cover h-full w-full shadow-md"
                              />
                            </div>
                          </div>
                          <div class="px-6 mt-16">
                            <h1 class="font-bold text-3xl text-center mb-1">
                              {data.name}
                            </h1>
                            <p class="text-gray-800 text-sm text-center">
                              {data.position}
                            </p>
                            <p class="text-center text-gray-600 text-base pt-3 font-normal">
                              {data.quote}
                            </p>
                            <div class="w-full flex justify-center pt-5 pb-5">
                              <a href="javascript:void(0)" class="mx-5">
                                <div aria-label="Github" role="img">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#718096"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-github"
                                  >
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                  </svg>
                                </div>
                              </a>
                              <a href="javascript:void(0)" class="mx-5">
                                <div aria-label="Twitter" role="img">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#718096"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-twitter"
                                  >
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                  </svg>
                                </div>
                              </a>
                              <a href="javascript:void(0)" class="mx-5">
                                <div aria-label="Instagram" role="img">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#718096"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-instagram"
                                  >
                                    <rect
                                      x="2"
                                      y="2"
                                      width="20"
                                      height="20"
                                      rx="5"
                                      ry="5"
                                    ></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line
                                      x1="17.5"
                                      y1="6.5"
                                      x2="17.51"
                                      y2="6.5"
                                    ></line>
                                  </svg>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </dh-component>
      </div>
    </>
  );
};

export default Home2;
