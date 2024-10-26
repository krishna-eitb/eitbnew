import React from "react";

const OfferSec = () => {
  return (
    <div className="bg-black pt-[96px] pb-[96px] rounded-3xl ml-3 mr-3">
      <div className="innerOffer-con container mx-auto flex items-start gap-[96px]">
        <div className="left-offercon w-[60%]">
          <h2 className="text-white-100 font-heading text-h2 w-[80%]">
          Need a web design that matches your goals?
          </h2>
        </div>
        {/* left container */}
        <div className="right-offercon w-[40%]">
          <p className="font-body text-white-80  text-bodyText ">
          We adipiscingre here to make sure your website is user-friendly and well-structured. A user-friendly design is the main goal for our professionals so that customers can quickly locate what they want and need!
          </p>
          <p className="font-body text-white-80  text-bodyText ">
          Many people realise how essential it is to optimise your website, but did you know that there are a variety of different areas that may be adjusted in order to improve exposure and generate revenue?
          </p>
          <button className="rounded-3xl mt-8 flex items-center gap-2 bg-primary-100 p-3 w-fit px-4 text-white-100 font-heading text-bodyText uppercase">
          get a free quote{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="14"
                viewBox="0 0 21 14"
                fill="none"
              >
                <path
                  d="M6.83838 11.6797L15.4302 3.08789"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.68994 2.23047H16.2817V10.8223"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferSec;
