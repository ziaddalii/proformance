"use client";
import React, { ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import RadialBG from "@/assets/images/RadialEffect.png"
export const HeroParallax = ({
  features,
}: {
  features: {
    title: string;
    desc: string;
    icon: ReactNode;
  }[];
}) => {
  const firstRow = features.slice(0, 5);
  const secondRow = features.slice(5, 10);
  const thirdRow = features.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      style={{ backgroundImage: `url(${RadialBG.src})` }}
      className="h-[300vh] hide-scrollbar bg-no-repeat bg-cover bg-blend-darken bg py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((feature) => (
            <FeatureCard
              feature={feature}
              translate={translateX}
              key={feature.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((feature) => (
            <FeatureCard
              feature={feature}
              translate={translateXReverse}
              key={feature.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((feature) => (
            <FeatureCard
              feature={feature}
              translate={translateX}
              key={feature.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0 z-10">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Discover Proformance&apos;s
        <br /> Powerful features
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        Each tool designed to enhance your productivity and streamline your
        workflow.
      </p>
    </div>
  );
};

export const FeatureCard = ({
  feature,
  translate,
}: {
  feature: {
    title: string;
    desc: string;
    icon: ReactNode;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      key={feature.title}
      className="group/feature relative bg-[#00000074] backdrop-blur-md w-[30rem] text-center p-8 flex-shrink-0 rounded-2xl"
    >
      <div className="absolute group-hover/feature:w-full transition-all duration-300 inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-teal-500 to-transparent" />

      <div>
        {feature.icon}
      </div>
      {/* <div className="absolute inset-0 h-full w-full opacity-0 group-hover/feature:opacity-50 bg-black pointer-events-none"></div> */}
      <h2 className="bottom-4 font-bold text-xl left-4 text-white">
        {feature.title}
      </h2>
      <p>{feature.desc}</p>
    </motion.div>
  );
};
