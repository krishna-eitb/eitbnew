import Image from "next/image";
const MobileFriend = ({ data }) => {
  // Check if data is defined and has the expected properties
  if (!data) {
    return <div>Loading...</div>; // or a fallback UI
  }

  return (
    <div className="container mx-auto">
      <div className="topsection-mobfriend w-[50%]">
        <h5 className="text-primary-100 bg-primary-40 w-fit p-1 rounded-2xl px-2 uppercase text-heading mb-5">
          {data.heading}
        </h5>
        <h2 className="text-black font-heading text-h2 ">
          {data.subheading}
        </h2>
      </div>
      <div className="bottomsection-mobfriend mt-14 flex items-center gap-[96px]">
        <div className="w-[65%] ">
          <Image
            src={data.image}
            alt="Mobile Friendly Illustration"
            width={800}
            height={533}
            className="rounded-3xl "
          />
        </div>
        <div className="w-[35%] bg-[#F3F3F3] rounded-3xl p-[40px]">
          {data.description.map((desc, index) => (
            <p key={index} className="text-secondary-caption text-body text-bodyText">
              {desc}
            </p>
          ))}
          <button className="rounded-3xl mt-8 flex items-center gap-2 bg-primary-100 p-3 w-fit px-4 text-white-100 font-heading text-bodyText uppercase">
            {data.button.text}
            <span>
              <Image src={data.button.icon} alt="Arrow Icon" width={21} height={14} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileFriend;
