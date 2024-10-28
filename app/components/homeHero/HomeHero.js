"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export const HomeHero = () => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://671f5b4d8cd82e000864d01c--cosmic-cassata-a69971.netlify.app/home-hero");
        const data = await res.json();
        setHeroData(data);
      } catch (error) {
        console.error("Failed to fetch home hero data:", error);
      }
    };
    fetchData();
  }, []);

  if (!heroData) {
    return null; // Optionally, you could add a loading spinner here
  }

  return (
    <div className="h-[600px] bg-primary-100 rounded-2xl flex items-center">
      <div className="container mx-auto flex items-center gap-[20px]">
        <div className="w-[65%]">
          <h5 className="text-primary-100 bg-primary-40 w-fit p-1 rounded-2xl px-2 uppercase mb-5">
            {heroData.subtitle}
          </h5>
          <h1 className="text-white-100 font-heading text-h1">
            {heroData.title}
          </h1>
          <div className="para-btn-container mt-10 flex items-center gap-10">
            <div className="paragraph-hero w-1/2">
              <p className="font-body text-white-80 text-xl">
                {heroData.description}
              </p>
            </div>
            <div className="homehero-btn w-1/2">
              <button className="uppercase font-heading flex items-center gap-2 text-white-100 p-3 bg-black rounded-3xl px-4">
                {heroData.button.text}
                <Image src={heroData.button.icon} alt="Arrow Icon" width={17} height={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Right side form column */}
        <div className="bg-white-100 rounded-3xl p-[24px] w-[35%]">
          <h2 className="text-h3 font-heading font-extrabold">
            {heroData.form.heading}
          </h2>
          <p className="text-body text-bodyText text-secondary-caption">
            {heroData.form.subheading}
          </p>
          <form id="banner-form" className="flex flex-col gap-8 mt-8">
            <input type="text" placeholder={heroData.form.placeholders.name} />
            <input type="email" placeholder={heroData.form.placeholders.email} />
            <input type="text" placeholder={heroData.form.placeholders.projectInfo} />
            <button
              type="submit"
              className="rounded-3xl flex items-center gap-2 bg-primary-100 p-3 w-fit px-4 text-white-100 font-heading text-bodyText uppercase"
            >
              {heroData.form.submitButton.text}
              <Image src={heroData.form.submitButton.icon} alt="Send Icon" width={21} height={14} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
