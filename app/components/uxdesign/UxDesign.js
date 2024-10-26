import Image from "next/image";

const UxDesign = () => {
  return (
    <div className=" bg-[#F3F3F3] pt-[100px] pb-[100px]">
    <div className=" container mx-auto flex items-center gap-[96px]">
      {/* 1st column */}
      <div className="w-1/2">
        <Image
          src="/uxdesign.jpg"
          alt="picture"
          width={631}
          height={398}
          className="rounded-3xl"
        />
      </div>
      {/* 2 column */}
      <div className="w-1/2">
        <h5 className="text-primary-100 bg-primary-40 w-fit p-1 rounded-2xl px-2 uppercase text-heading mb-5">
          UX Design for all
        </h5>
        <h2 className="text-black font-heading text-h2 ">
          Compelling website design, UX design for all users
        </h2>
        <p className="text-secondary-caption text-body text-bodyText">
          Our websites are designed to provide meaningful and relevant
          experiences to users. We dont simply take care of the web development
          and web hosting aspect, but more than that, we take time to truly
          understand your business and your target audience.
        </p>
        <p className="text-secondary-caption text-body text-bodyText">
          Our user-centred approach puts the spotlight on your business branding
          and business objectives, with your users in mind.
        </p>
        <button  className="rounded-3xl mt-8 flex items-center gap-2 bg-primary-100 p-3 w-fit px-4 text-white-100 font-heading text-bodyText uppercase">send message <span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" viewBox="0 0 21 14" fill="none">
  <path d="M6.83838 11.6797L15.4302 3.08789" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
  <path d="M7.68994 2.23047H16.2817V10.8223" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
</svg></span></button>
      </div>
    </div>
    </div>
  );
};

export default UxDesign;
