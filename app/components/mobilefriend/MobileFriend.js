import Image from "next/image";

const MobileFriend = () => {
  return (
    <div className="container mx-auto">
      <div className="topsection-mobfriend w-[50%]">
        <h5 className="text-primary-100 bg-primary-40 w-fit p-1 rounded-2xl px-2 uppercase text-heading mb-5">
          mobile friendly website
        </h5>
        <h2 className="text-black font-heading text-h2 ">
          Responsive web development, website design for business growth
        </h2>
      </div>
      {/* top section */}
      <div className="bottomsection-mobfriend mt-14 flex items-center gap-[96px]">
        
        <div className="w-[65%] ">
          <Image
            src="/mobfriend.png"
            alt="picture"
            width={800}
            height={533}
            className="rounded-3xl "
          />
        </div>
        {/* first container */}
        <div className="w-[35%] bg-[#F3F3F3] rounded-3xl p-[40px]">
          <p className="text-secondary-caption text-body text-bodyText">
            We are committed in helping businesses deliver the right user
            experience on any device. We build responsive website designs that
            make your website adjust to any screen or resolution to ensure you
            get the optimum reach on your website across all devices.
          </p>
          <p className="text-secondary-caption text-body text-bodyText">
            Be accessible anytime, anywhere and reach everyone in your target
            audience with a responsive website design that generates traffic,
            potential leads, and conversion.
          </p>
          <button  className="rounded-3xl mt-8 flex items-center gap-2 bg-primary-100 p-3 w-fit px-4 text-white-100 font-heading text-bodyText uppercase">send message <span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" viewBox="0 0 21 14" fill="none">
  <path d="M6.83838 11.6797L15.4302 3.08789" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
  <path d="M7.68994 2.23047H16.2817V10.8223" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
</svg></span></button>
        </div>
        {/* second container */}
      </div>
    </div>
  );
};

export default MobileFriend;
