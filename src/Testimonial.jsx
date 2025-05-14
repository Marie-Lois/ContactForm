import React from "react";
import imagedaniel from "./assets/images/image-daniel.jpg";
import imagejeanette from "./assets/images/image-jeanette.jpg";
import imagejonathan from "./assets/images/image-jonathan.jpg";
import imagekira from "./assets/images/image-kira.jpg";
import imagepatrick from "./assets/images/image-patrick.jpg";

const testimonials = [
  {
    bgColor: "bg-purple-500",
    textColor: "text-gray-200",
    avatarImg: imagedaniel,
    name: "Daniel Clifford",
    heading:
      "I have received a job offer mid-course, and subjects I learned were current.",
    description:
      "I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks were the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.",
  },
  {
    bgColor: "bg-blue-800",
    textColor: "text-gray-200",
    avatarImg: imagejonathan,
    name: "Jonathan Walters",
    heading: "The team was very supportive and kept me motivated.",
    description:
      "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.",
  },
  {
    bgColor: "bg-gray-900",
    textColor: "text-gray-200",
    avatarImg: imagejeanette,
    name: "Jeanette Harmon",
    heading: "An overall wonderful and rewarding experience.",
    description:
      "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.",
  },
  {
    bgColor: "bg-white",
    textColor: "text-gray-800",
    avatarImg: imagepatrick,
    name: "Patrick Abrams",
    heading:
      "Awesome teaching support from TAs who did the bootcamp themselves.",
    description:
      "Getting guidance from them was easy. The staff seem genuinely concerned about my progress, which I find really refreshing. The program gave me the confidence necessary to present myself as a capable junior developer.",
  },
  {
    bgColor: "bg-white",
    textColor: "text-gray-800",
    avatarImg: imagekira,
    name: "Kira Whittle",
    heading: "Such a life-changing experience. Highly recommended!",
    description:
      "Before joining the bootcamp, I’d never written a line of code. I needed some structure from professionals who can help me learn programming step by step.",
  },
];

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen p-8 bg-blue-800">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px]">
        {testimonials.map((item, index) => (
          <Card
            key={index}
            bgColor={item.bgColor}
            textColor={item.textColor}
            avatarImg={item.avatarImg}
            description={item.description}
            heading={item.heading}
            name={item.name}
          />
        ))}
      </div>
    </main>
  );
}

function Card({ bgColor, textColor, avatarImg, description, heading, name }) {
  return (
    <div className={`p-6 rounded-lg ${bgColor} ${textColor}`}>
      <section className="flex items-center mb-4">
        <img
          src={avatarImg}
          alt="profile"
          className="rounded-full h-12 w-12 border-2"
        />
        <div className="ml-2">
          <div className="font-semibold">{name}</div>
          <p className="text-sm opacity-70">Verified graduate</p>
        </div>
      </section>
      <h3 className="font-semibold text-lg">{heading}</h3>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
}
