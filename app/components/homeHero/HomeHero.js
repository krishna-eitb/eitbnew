import React from "react";

export const HomeHero = () => {
  return (
    <div className="h-[600px]  bg-primary-100 rounded-2xl flex items-center ">
      <div className=" container mx-auto flex items-center gap-[20px]">
        <div className="w-[65%]">
          <h5 className="text-primary-100 bg-primary-40 w-fit p-1 rounded-2xl px-2 uppercase mb-5">
            web design & development
          </h5>
          <h1 className="text-white-100 font-heading text-h1 ">
            Melbourne leading web development and design agency
          </h1>
          <div className="para-btn-container mt-10 flex items-center gap-10">
            <div className="paragraph-hero w-1/2 ">
              <p className="font-body text-white-80  text-xl ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div className="homehero-btn w-1/2">
              <button className="uppercase font-heading flex items-center gap-2 text-white-100 p-3 bg-black rounded-3xl px-4 ">
                explore our services
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_20040_23637)">
                      <path
                        d="M8.95923 2.5V13.5"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="square"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.45923 9.23047L8.95923 13.7305L13.4592 9.23047"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="square"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_20040_23637">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.959229)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* right side form coloumn starts */}
        <div className="bg-white-100 rounded-3xl p-[24px] w-[35%]">
          <h2 className="text-h3 font-heading font-extrabold">
            Got a web design and development project in mind?
          </h2>
          <p className="text-body text-bodyText text-secondary-caption">
            Lets talk about your new website.
          </p> 
          <form id="banner-form" className="flex flex-col gap-8 mt-8">
            <input type="text" placeholder="Name*"/>
            <input type="email" placeholder="Email*"/>
            <input type="text" placeholder="Project Information*" />
            <button type="submit" className="rounded-3xl flex items-center gap-2 bg-primary-100 p-3 w-fit px-4 text-white-100 font-heading text-bodyText uppercase">send message <span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" viewBox="0 0 21 14" fill="none">
  <path d="M6.83838 11.6797L15.4302 3.08789" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
  <path d="M7.68994 2.23047H16.2817V10.8223" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
</svg></span></button>
          </form>
        </div>
      </div>
    </div>
  );
};
