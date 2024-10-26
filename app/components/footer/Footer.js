import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black  pt-[100px] mt-[136px]">
      <div className="top-info-cont container mx-auto flex gap-[96px] items-start">
        {/* left info container */}
        <div className="left-info w-[40%] ">
          <div className="logo">
            <Image src="/ftrlogo.png" alt="picture" width={266} height={237} />
            <p className="font-body text-white-80  text-bodyText mt-8 ">
              We harness the power of technology to reimagine interactions
              between businesses and consumers. Pixel-perfect, cutting-edge
              websites, apps, software and campaigns that make an impact.
            </p>
            {/* partners logo */}
            <div className="logo-partners flex  items-center justify-between mt-10">
              <Image src="/google.png" alt="picture" width={115} height={56} />
              <Image src="/suit.png" alt="picture" width={115} height={56} />
              <Image src="/micro.png" alt="picture" width={115} height={56} />
            </div>
            <div className="logo-partners flex  items-center justify-between mt-2">
              <Image src="/tabloo.png" alt="picture" width={115} height={56} />
              <Image src="/meta.png" alt="picture" width={115} height={56} />
              <Image src="/spotify.png" alt="picture" width={115} height={56} />
            </div>
          </div>
          {/* logo container */}
        </div>
        {/* right info container */}
        <div className="w-[60%] flex flex-col items-start gap-10">
          <div className=" flex items-start gap-[96px]">
            <div className=" flex flex-col gap-5">
              <h6 className="font-body font-semibold text-white-100">
                Explore
              </h6>
              <p className="font-body text-white-80  text-bodyText">Home</p>
              <p className="font-body text-white-80  text-bodyText">Services</p>
              <p className="font-body text-white-80  text-bodyText">
                Our Works
              </p>
              <p className="font-body text-white-80  text-bodyText">
                Resources
              </p>
              <p className="font-body text-white-80  text-bodyText">Contacts</p>
            </div>

            {/*  */}
            <div className=" flex flex-col gap-5">
              <h6 className="font-body font-semibold text-white-100">
                Quick Links
              </h6>
              <p className="font-body text-white-80  text-bodyText">
                Get a Free Quote
              </p>
              <p className="font-body text-white-80  text-bodyText">
                Press Release
              </p>
              <p className="font-body text-white-80  text-bodyText">
                Web Development
              </p>
              <p className="font-body text-white-80  text-bodyText">
                Digital Marketing
              </p>
              <p className="font-body text-white-80  text-bodyText">
                Data + AI Solutions
              </p>
            </div>
            {/* quicks links */}
            <div className=" flex flex-col gap-5">
              <h6 className="font-body font-semibold text-white-100">
                Contact Information
              </h6>
              <p className="font-body text-white-80  text-bodyText">
                Level 5, 607 Bourke Street,<br></br> Melbourne 3000
              </p>
              <p className="font-body text-white-80  text-bodyText">
                team@elephantintheboardroom.com.au
              </p>
              <p className="font-body text-white-80  text-bodyText">
                +0400 000 000
              </p>
              <p className="font-body text-white-80  text-bodyText">
                Resources
              </p>
              <p className="font-body text-white-80  text-bodyText">
                9:00am - 5:30pm AEST
              </p>
            </div>
          </div>
          <div className="social-icons flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M21 3.32812H3V21.3281H12.621V14.3671H10.278V11.6421H12.621V9.63713C12.621 7.31313 14.042 6.04612 16.116 6.04612C16.815 6.04412 17.513 6.08012 18.208 6.15112V8.58113H16.78C15.65 8.58113 15.43 9.11512 15.43 9.90312V11.6381H18.13L17.779 14.3631H15.414V21.3281H21V3.32812Z"
                fill="#D4196E"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M10.053 8.31612L15.684 16.3401H14.187L8.566 8.31612H10.053ZM21 7.32812V17.3281C21 19.5371 19.209 21.3281 17 21.3281H7C4.791 21.3281 3 19.5371 3 17.3281V7.32812C3 5.11912 4.791 3.32812 7 3.32812H17C19.209 3.32812 21 5.11912 21 7.32812ZM17.538 17.3281L13.352 11.3381L16.774 7.32812H15.463L12.759 10.4881L10.552 7.32812H6.702L10.643 12.9611L6.906 17.3281H8.239L11.24 13.8121L13.698 17.3281H17.538Z"
                fill="#D4196E"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M3 3.32812V21.3281H21V3.32812H3ZM18 5.32812C18.552 5.32812 19 5.77612 19 6.32812C19 6.88013 18.552 7.32812 18 7.32812C17.448 7.32812 17 6.88013 17 6.32812C17 5.77612 17.448 5.32812 18 5.32812ZM12 7.32812C14.761 7.32812 17 9.56713 17 12.3281C17 15.0891 14.761 17.3281 12 17.3281C9.239 17.3281 7 15.0891 7 12.3281C7 9.56713 9.239 7.32812 12 7.32812ZM12 9.32812C11.2044 9.32812 10.4413 9.6442 9.87868 10.2068C9.31607 10.7694 9 11.5325 9 12.3281C9 13.1238 9.31607 13.8868 9.87868 14.4494C10.4413 15.0121 11.2044 15.3281 12 15.3281C12.7956 15.3281 13.5587 15.0121 14.1213 14.4494C14.6839 13.8868 15 13.1238 15 12.3281C15 11.5325 14.6839 10.7694 14.1213 10.2068C13.5587 9.6442 12.7956 9.32812 12 9.32812Z"
                fill="#D4196E"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M11.9995 2.32812C6.47651 2.32812 1.99951 6.80513 1.99951 12.3281C1.99951 16.5651 4.63551 20.1831 8.35551 21.6401C8.26851 20.8491 8.18851 19.6351 8.39051 18.7721C8.57251 17.9921 9.56251 13.8011 9.56251 13.8011C9.56251 13.8011 9.26351 13.2021 9.26351 12.3171C9.26351 10.9261 10.0695 9.88912 11.0725 9.88912C11.9255 9.88912 12.3375 10.5301 12.3375 11.2971C12.3375 12.1551 11.7915 13.4381 11.5095 14.6261C11.2735 15.6221 12.0085 16.4331 12.9905 16.4331C14.7675 16.4331 16.1335 14.5591 16.1335 11.8541C16.1335 9.46012 14.4135 7.78613 11.9565 7.78613C9.11151 7.78613 7.44151 9.92013 7.44151 12.1261C7.44151 12.9851 7.77251 13.9071 8.18551 14.4081C8.26751 14.5071 8.27851 14.5941 8.25451 14.6951C8.17851 15.0111 8.01051 15.6901 7.97751 15.8291C7.93451 16.0121 7.83251 16.0511 7.64351 15.9621C6.39451 15.3801 5.61351 13.5541 5.61351 12.0881C5.61351 8.93412 7.90551 6.03613 12.2215 6.03613C15.6905 6.03613 18.3865 8.50813 18.3865 11.8121C18.3865 15.2591 16.2135 18.0321 13.1975 18.0321C12.1845 18.0321 11.2315 17.5051 10.9055 16.8841C10.9055 16.8841 10.4035 18.7931 10.2825 19.2621C10.0565 20.1301 9.44751 21.2201 9.03951 21.8841C9.97451 22.1711 10.9685 22.3281 11.9995 22.3281C17.5215 22.3281 21.9995 17.8501 21.9995 12.3281C21.9995 6.80613 17.5225 2.32812 11.9995 2.32812Z" fill="#D4196E"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M20 3.32812H4C3.73478 3.32813 3.48043 3.43348 3.29289 3.62102C3.10536 3.80855 3 4.06291 3 4.32812V20.3281C3 20.5933 3.10536 20.8477 3.29289 21.0352C3.48043 21.2228 3.73478 21.3281 4 21.3281H20C20.2652 21.3281 20.5196 21.2228 20.7071 21.0352C20.8946 20.8477 21 20.5933 21 20.3281V4.32812C21 4.06291 20.8946 3.80855 20.7071 3.62102C20.5196 3.43348 20.2652 3.32813 20 3.32812ZM8.747 15.0741C8.20422 15.0737 7.67374 14.9124 7.22261 14.6106C6.77148 14.3088 6.41996 13.88 6.21247 13.3784C6.00499 12.8769 5.95085 12.3251 6.05692 11.7927C6.16298 11.2604 6.42447 10.7715 6.80835 10.3878C7.19222 10.004 7.68124 9.74271 8.2136 9.63685C8.74596 9.53098 9.29775 9.58531 9.79923 9.79298C10.3007 10.0006 10.7294 10.3523 11.031 10.8036C11.3327 11.2548 11.4938 11.7853 11.494 12.3281C11.4943 12.6889 11.4234 13.0462 11.2854 13.3795C11.1474 13.7129 10.9451 14.0157 10.6899 14.2708C10.4348 14.5258 10.1319 14.7281 9.79847 14.8659C9.46507 15.0038 9.10777 15.0745 8.747 15.0741ZM15.253 15.0741C14.8923 15.0742 14.5352 15.0032 14.2019 14.8653C13.8687 14.7273 13.5659 14.525 13.3108 14.27C13.0557 14.0151 12.8533 13.7123 12.7153 13.3791C12.5772 13.0459 12.5061 12.6888 12.506 12.3281C12.5059 11.9674 12.5769 11.6103 12.7149 11.277C12.8528 10.9438 13.0551 10.641 13.3101 10.3859C13.5651 10.1308 13.8678 9.92847 14.201 9.79038C14.5342 9.6523 14.8913 9.58119 15.252 9.58113C15.9804 9.58099 16.6791 9.87023 17.1942 10.3852C17.7094 10.9002 17.9989 11.5987 17.999 12.3271C17.9991 13.0555 17.7099 13.7542 17.1949 14.2693C16.6799 14.7845 15.9814 15.074 15.253 15.0741Z" fill="#D4196E"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M21 3.32812H3V21.3281H21V3.32812ZM9 17.3281H6.477V10.3281H9V17.3281ZM7.694 9.04513C6.923 9.04513 6.408 8.53113 6.408 7.84513C6.408 7.15913 6.922 6.64512 7.779 6.64512C8.55 6.64512 9.065 7.15913 9.065 7.84513C9.065 8.53113 8.551 9.04513 7.694 9.04513ZM18 17.3281H15.558V13.5021C15.558 12.4441 14.907 12.2001 14.663 12.2001C14.419 12.2001 13.605 12.3631 13.605 13.5021C13.605 13.6651 13.605 17.3281 13.605 17.3281H11.082V10.3281H13.605V11.3051C13.93 10.7351 14.581 10.3281 15.802 10.3281C17.023 10.3281 18 11.3051 18 13.5021V17.3281Z" fill="#D4196E"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M20.9995 5.32812C20.9995 5.32812 17.9995 4.32812 11.9995 4.32812C5.99951 4.32812 2.99951 5.32812 2.99951 5.32812C2.99951 5.32812 1.99951 8.32812 1.99951 12.3281C1.99951 16.3281 2.99951 19.3281 2.99951 19.3281C2.99951 19.3281 5.99951 20.3281 11.9995 20.3281C17.9995 20.3281 20.9995 19.3281 20.9995 19.3281C20.9995 19.3281 21.9995 16.3281 21.9995 12.3281C21.9995 8.32812 20.9995 5.32812 20.9995 5.32812ZM9.99951 15.7921V8.86413L15.9995 12.3281L9.99951 15.7921Z" fill="#D4196E"/>
</svg>
          </div>
        </div>
      </div>
      {/* top info */}
      <div className="middle-info-cont container mx-auto flex items-center gap-10 mt-[50px] mb-[50px]">
        <div className="w-[10%] flex items-center ">
          <Image src="/blueflag.png" alt="picture" width={115} height={56} />
        </div>
        {/*  */}
        <div className="w-[80%]">
          <p className="font-body text-white-80  text-bodyText  ">
            Elephant in the Boardroom respectfully acknowledges the Traditional
            Owners of the land on which we work, the Wurundjeri Woi-wurrung and
            Bunurong Boon Wurrung peoples of the Eastern Kulin and pay respect
            to their Elders past, present and emerging.We acknowledge and honour
            the unbroken spiritual, cultural and political connection the
            Wurundjeri, Bunurong, Dja Dja Wurrung, Taungurung and Wadawurrung
            peoples of the Eastern Kulin have to this unique place for more than
            2000 generations.
          </p>
        </div>
        {/*  */}
        <div className="w-[10%] flex items-center">
          <Image src="/flag.png" alt="picture" width={115} height={56} />
        </div>
      </div>
      {/* middle info */}
      <div className="bottom-info-con border-solid border-t-[1px] border-secondary-hrline">
        <div className="container mx-auto flex items-center gap-[96px] pt-4 pb-4">
          {/* inner container */}
          <div className="w-[30%]">
            <p className="font-body text-white-80  text-bodyText  ">
              © 2024 Elephant in the Boardroom
            </p>
          </div>
          {/* inner container */}
          <div className="w-[70%]">
            <p className="font-body text-white-80  text-bodyText text-right ">
              Melbourne Digital Agency | Development, Design, Technology and
              Digital Marketing.
            </p>
          </div>
          {/* inner container */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
