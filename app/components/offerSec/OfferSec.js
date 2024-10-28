const OfferSec = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>; // or a fallback UI
  }

  return (
    <div className="bg-black pt-[96px] pb-[96px] rounded-3xl ml-3 mr-3">
      <div className="innerOffer-con container mx-auto flex items-start gap-[96px]">
        <div className="left-offercon w-[60%]">
          <h2 className="text-white-100 font-heading text-h2 w-[80%]">
            {data.title}
          </h2>
        </div>
        <div className="right-offercon w-[40%]">
          {data.description.map((desc, index) => (
            <p key={index} className="font-body text-white-80 text-bodyText ">
              {desc}
            </p>
          ))}
          <button className="rounded-3xl mt-8 flex items-center gap-2 bg-primary-100 p-3 w-fit px-4 text-white-100 font-heading text-bodyText uppercase">
            {data.button.text}
            <span>
              <img src={data.button.icon} alt="Arrow Icon" width={21} height={14} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferSec;
