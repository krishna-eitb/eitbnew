// app/api/page-data/route.js
import { NextResponse } from "next/server";

export async function GET() {
  const pageData = {
    HomeHero: {
      title: "Melbourne leading web development and design agency",
      subtitle: "Web Design & Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      button: {
        text: "Explore Our Services",
        icon: "/arrowup.svg" // Update path as needed
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
          icon: "/arrowup.svg" // Update path as needed
        }
      }
    },
    MobileFriend: {
      heading: "Mobile Friendly Website",
      subheading: "Responsive web development, website design for business growth",
      description: [
        "We are committed to helping businesses deliver the right user experience on any device. We build responsive website designs that make your website adjust to any screen or resolution to ensure you get the optimum reach on your website across all devices.",
        "Be accessible anytime, anywhere and reach everyone in your target audience with a responsive website design that generates traffic, potential leads, and conversion."
      ],
      button: {
        text: "Send Message",
        icon: "/arrowup.svg" // Update path as needed
      },
      image: "/mobfriend.png"
    },
    OfferSec: {
      title: "Need a web design that matches your goals?",
      description: [
        "We are here to make sure your website is user-friendly and well-structured. A user-friendly design is the main goal for our professionals so that customers can quickly locate what they want and need!",
        "Many people realize how essential it is to optimize your website, but did you know that there are a variety of different areas that may be adjusted in order to improve exposure and generate revenue?"
      ],
      button: {
        text: "Get a Free Quote",
        icon: "/arrowup.svg" // Update path as needed
      }
    }
  };

  return NextResponse.json(pageData);
}
