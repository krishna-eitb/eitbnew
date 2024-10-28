// app/api/home-hero/route.js
import { NextResponse } from "next/server";

export async function GET() {
  const heroData = {
    title: "Melbourne leading web development and design agency",
    subtitle: "Web Design & Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    button: {
      text: "Explore Our Services",
      icon: "/arrowup.svg" // Update this path to the correct location for the icon
    },
    form: {
      heading: "Got a web design and development project in mind?",
      subheading: "Let's talk about your new website.",
      placeholders: {
        name: "Name*",
        email: "Email*",
        projectInfo: "Project Information*"
      },
      submitButton: {
        text: "Send Message",
        icon: "/arrowup.svg" // Update this path to the correct location for the icon
      }
    }
  };

  return NextResponse.json(heroData);
}
