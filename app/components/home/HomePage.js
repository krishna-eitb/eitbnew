"use client"

import { useEffect, useState } from "react";
import { HomeHero } from "../homeHero/HomeHero";
import VideoCompo from "../video/VideoCompo";
import UxDesign from "../uxdesign/UxDesign";
import MobileFriend from "../mobilefriend/MobileFriend";
import OfferSec from "../offerSec/OfferSec";
import HomeHeroSkeleton from "../homeHero/HomeHeroSkeleton";
import MobileFriendSkeleton from "../mobilefriend/MobileFriendSkeleton";



const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/page-data");
      const result = await response.json();
      setData(result); // Set the entire data object
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <div>
        <HomeHeroSkeleton/>
        <div className="mt-36"></div>
        <MobileFriendSkeleton/>
        <div className="mt-36"></div>
      </div>
    );
  }

  return (
    <div>
      <HomeHero heroData={data.HomeHero}/>
      {/* <HomeHero heroData={data.HomeHero}/> */}
      <section className="mt-[136px]"></section>
      <VideoCompo/>
      {/* <VideoCompo/> */}
      <section className="mt-[136px]"></section>
     {/* <UxDesign/> */}
     <UxDesign/>
      <section className="mt-[136px]"></section>
<MobileFriend data={data.MobileFriend}/>
      {/* <MobileFriend data={data.MobileFriend} /> */}
      
      <section className="mt-[136px]"></section>
      {/* <OfferSec data={data.OfferSec} /> */}
      <OfferSec data={data.OfferSec} />
      
    </div>
  );
};

export default HomePage;
