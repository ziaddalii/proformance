import React, { ReactNode } from "react";
import ProductivityBG from "@/assets/images/TradingEffect2.png";
import { GiChart } from "react-icons/gi";
import { AiOutlineRise } from "react-icons/ai";
import { FaClock } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io5";
import { Button } from "../ui/button";

interface Points {
  icon: ReactNode;
  desc: string;
}
const supporting_points: Points[] = [
  {
    icon: <AiOutlineRise className="text-[#5DF5AD] text-base" />,
    desc: "Streamlined task management for faster completion.",
  },
  {
    icon: <IoChatbubblesSharp className="text-[#5DF5AD] text-base" />,
    desc: "Real-time communication tools to eliminate delays.",
  },
  {
    icon: <GiChart className="text-[#5DF5AD] text-base" />,
    desc: "Comprehensive analytics for better decision-making.",
  },
  {
    icon: <FaClock className="text-[#5DF5AD] text-base" />,
    desc: "Efficient time tracking to maximize productivity.",
  },
];
export default function ProductivitySection() {
  return (
    <section
      style={{ backgroundImage: `url(${ProductivityBG.src})` }}
      className="pt-20 pb-28 bg-no-repeat bg-cover"
    >
      <div className="container">
        <header className="space-y-2">
          <h2 className="text-5xl font-bold">Double Your Productivity</h2>
          <p className="text-neutral-200">
            Experience a 100% increase in performance with Proformance
          </p>
        </header>
          <Button className="px-4 mt-8">Try it now</Button>
        <div className="bg-[#00000053] mt-12 p-8 w-fit backdrop-blur-sm">

        <p className="text-lg font-bold">100% Increase in Performance</p>
        <ul className="mt-8 space-y-4">
          {supporting_points.map((point, i) => (
            <li key={i} className="flex items-center gap-4">{point.icon}<span>{point.desc}</span></li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
}
