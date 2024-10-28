// app/api/header/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  const headerData = {
    logo: "/eitblogo.png",
    menuItems: [
      { 
        title: "ABOUT", 
        subMenu: [
          "PROUD SPONSORS", 
          "PARTNERS"
        ] 
      },
      { 
        title: "SERVICES", 
        subMenu: [
          "SERVICE 1", 
          "SERVICE 2"
        ] 
      },
      { title: "OUR WORK" },
      { title: "TOOL BOX" },
      { title: "BLOG" }
    ],
    contactButton: {
      text: "LET'S TALK",
      icon: "/arrowup.svg" // Update path if needed
    },
    searchIcon: "/search.svg" // Update path if needed
  };

  return NextResponse.json(headerData);
}
