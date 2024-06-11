import Image from "next/image";
import { HoverEffect } from "../ui/card-hover-effect";
import CurvedLinesBg from "@/assets/images/curved-lines.svg";
export function WhatWeDo() {
  return (
    <section className={"container relative py-12"} id="about-us">
      <div className="h-ful w-full absolute z-[-1] grid grid-cols-2 gap-8 opacity-50">
        <Image
          className="object-contain"
          width={1000}
          height={2000}
          src={CurvedLinesBg.src}
          alt="background"
        />
        <Image
          width={1000}
          height={2000}
          className="rotate-180 object-contain"
          src={CurvedLinesBg.src}
          alt="background"
        />
      </div>
      <header className="space-y-4 p-8">
        <h2 className="text-5xl">What We Do</h2>
        <p
          className="text-sm font-bold"
          style={{
            background: "linear-gradient(to top, #06B6D4 0%, #6366F1 100%)",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
          }}
        >
          Transforming Workplaces with Innovation and Efficiency
        </p>
        <p className="text-slate-400 text-sm max-w-2xl">
          At Proformance, we are dedicated to revolutionizing the way teams
          work. Our comprehensive suite of tools is designed to streamline
          operations, enhance communication, and boost productivity. Whether you
          are managing tasks, collaborating in real time, tracking performance,
          or analyzing detailed reports, our platform provides everything you
          need to optimize your workflow and achieve your goals. Explore the key
          features that make Proformance the ultimate solution for modern
          workplaces.
        </p>
      </header>
      <HoverEffect items={features} />
    </section>
  );
}
export const features = [
  {
    title: "Task Management",
    description:
      "We provide a robust task management system that allows you to create, assign, and track tasks effortlessly. Our intuitive interface ensures that nothing falls through the cracks.",
  },
  {
    title: "Real-Time Collaboration",
    description:
      "Our platform facilitates seamless communication through integrated chat and collaboration tools, much like Slack, ensuring that your team stays connected no matter where they are.",
  },
  {
    title: "Performance Tracking",
    description:
      "Monitor and evaluate employee performance with comprehensive profiles that track tasks completed, hours worked, and more. Gain insights to drive productivity and growth.",
  },
  {
    title: "Attendance Management",
    description:
      "Simplify your attendance tracking with our advanced system that logs work hours, breaks, and more, ensuring accurate timekeeping and payroll management.",
  },
  {
    title: "Detailed Analytics",
    description:
      "Get valuable insights into your team's performance with detailed analytics and reports. Understand trends, identify bottlenecks, and make data-driven decisions.",
  },
  {
    title: "Project Planning",
    description:
      "Streamline your project planning with our intuitive tools that help you define milestones, set deadlines, and allocate resources efficiently. Keep your projects on track and achieve your goals.",
  },
];
