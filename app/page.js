import { HomeHero } from "./components/homeHero/HomeHero";
import MobileFriend from "./components/mobilefriend/MobileFriend";
import OfferSec from "./components/offerSec/OfferSec";
import UxDesign from "./components/uxdesign/UxDesign";
import VideoCompo from "./components/video/VideoCompo";

export default function Home() {
  return (
    <>
      <HomeHero/>
      <section className="mt-[136px]"></section>
      <VideoCompo/>
      <section className="mt-[136px]"></section>
      <UxDesign/>
      <section className="mt-[136px]"></section>
      <MobileFriend/>
      <section className="mt-[136px]"></section>
      <OfferSec/>
     
      
    </>
  );
}
