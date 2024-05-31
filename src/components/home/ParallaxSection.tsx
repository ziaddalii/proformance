"use client";
import React from "react";
import { HeroParallax } from "../ui/parallax";
import { MdChecklist } from "react-icons/md";
import { IoChatbubblesSharp } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { FaClock } from "react-icons/fa";
import { LiaGlobeSolid } from "react-icons/lia";

export function HeroParallaxDemo() {
  return <HeroParallax testimonials={testimonials} />;
}
export const testimonials = [
  {
    title: "Effortless Task Management",
    desc: "Assign, prioritize, and track tasks seamlessly with our intuitive interface.",
    icon: <MdChecklist  />,
  },
  {
    title: "Real-Time Team Communication",
    desc: "Stay connected with chat, video conferencing, and instant notifications.",
    icon: <IoChatbubblesSharp />,
  },
  {
    title: "Comprehensive Performance Tracking",
    desc: "Monitor individual and team performance with detailed analytics and reports.",
    icon: <GoGraph />,
  },
  {
    title: "Accurate Time Tracking",
    desc: "Track working hours and project time effortlessly with integrated tools.",
    icon: <FaClock />,
  },
  {
    title: "Optimized for Remote Work",
    desc: "Enable seamless remote work with secure access and collaborative tools.",
    icon: <LiaGlobeSolid />,
  },
];
