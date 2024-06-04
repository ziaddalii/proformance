"use client";
import React from "react";
import { HeroParallax } from "../ui/parallax";
import { MdChecklist } from "react-icons/md";
import { IoChatbubblesSharp } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { FaClock } from "react-icons/fa";
import { LiaGlobeSolid } from "react-icons/lia";

export function HeroParallaxDemo() {
  return <HeroParallax features={features} />;
}
export const features = [
  {
    title: "Effortless Task Management",
    desc: "Assign, prioritize, and track tasks seamlessly with our intuitive interface.",
    icon: <MdChecklist className="md:text-7xl text-5xl mx-auto text-white" />,
  },
  {
    title: "Real-Time Team Communication",
    desc: "Stay connected with chat, video conferencing, and instant notifications.",
    icon: (
      <IoChatbubblesSharp className="md:text-7xl text-5xl mx-auto text-white hover:text-red" />
    ),
  },
  {
    title: "Comprehensive Performance Tracking",
    desc: "Monitor individual and team performance with detailed analytics and reports.",
    icon: <GoGraph className="md:text-7xl text-5xl mx-auto text-white hover:text-red" />,
  },
  {
    title: "Accurate Time Tracking",
    desc: "Track working hours and project time effortlessly with integrated tools.",
    icon: <FaClock className="md:text-7xl text-5xl mx-auto text-white hover:text-red" />,
  },
  {
    title: "Optimized for Remote Work",
    desc: "Enable seamless remote work with secure access and collaborative tools.",
    icon: (
      <LiaGlobeSolid className="md:text-7xl text-5xl mx-auto text-white hover:text-red" />
    ),
  },
  {
    title: "Accurate Time Tracking",
    desc: "Track working hours and project time effortlessly with integrated tools.",
    icon: <FaClock className="md:text-7xl text-5xl mx-auto text-white hover:text-red" />,
  },
  {
    title: "Optimized for Remote Work",
    desc: "Enable seamless remote work with secure access and collaborative tools.",
    icon: (
      <LiaGlobeSolid className="md:text-7xl text-5xl mx-auto text-white hover:text-red" />
    ),
  },
  {
    title: "Effortless Task Management",
    desc: "Assign, prioritize, and track tasks seamlessly with our intuitive interface.",
    icon: <MdChecklist className="md:text-7xl text-5xl mx-auto text-white" />,
  },
  {
    title: "Real-Time Team Communication",
    desc: "Stay connected with chat, video conferencing, and instant notifications.",
    icon: (
      <IoChatbubblesSharp className="md:text-7xl text-5xl mx-auto text-white hover:text-red" />
    ),
  },
  {
    title: "Comprehensive Performance Tracking",
    desc: "Monitor individual and team performance with detailed analytics and reports.",
    icon: <GoGraph className="md:text-7xl text-5xl mx-auto text-white hover:text-red" />,
  },
  //

  {
    title: "Optimized for Remote Work",
    desc: "Enable seamless remote work with secure access and collaborative tools.",
    icon: (
      <LiaGlobeSolid className="md:text-7xl text-5xl mx-auto text-white hover:text-red" />
    ),
  },
  {
    title: "Accurate Time Tracking",
    desc: "Track working hours and project time effortlessly with integrated tools.",
    icon: <FaClock className="md:text-7xl text-5xl mx-auto text-white hover:text-red" />,
  },

  {
    title: "Real-Time Team Communication",
    desc: "Stay connected with chat, video conferencing, and instant notifications.",
    icon: (
      <IoChatbubblesSharp className="md:text-7xl text-5xl mx-auto text-white hover:text-red" />
    ),
  },
  {
    title: "Effortless Task Management",
    desc: "Assign, prioritize, and track tasks seamlessly with our intuitive interface.",
    icon: <MdChecklist className="md:text-7xl text-5xl mx-auto text-white" />,
  },
  {
    title: "Comprehensive Performance Tracking",
    desc: "Monitor individual and team performance with detailed analytics and reports.",
    icon: <GoGraph className="md:text-7xl text-5xl mx-auto text-white hover:text-red" />,
  },
];
