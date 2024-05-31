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

export const HeroParallax = ({
  testimonials,
}: {
  testimonials: {
    title: string;
    desc: string;
    icon: ReactNode;
  }[];
}) => {
  const firstRow = testimonials.slice(0, 5);
  const secondRow = testimonials.slice(5, 10);
  const thirdRow = testimonials.slice(10, 15);
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
      className="h-[300vh] hide-scrollbar py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((testimonial) => (
            <TestimonialCard
              testimonial={testimonial}
              translate={translateX}
              key={testimonial.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((testimonial) => (
            <TestimonialCard
              testimonial={testimonial}
              translate={translateXReverse}
              key={testimonial.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((testimonial) => (
            <TestimonialCard
              testimonial={testimonial}
              translate={translateX}
              key={testimonial.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Discover Proformance&apos;s
        <br /> Powerful testimonials
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        Each tool designed to enhance your productivity and streamline your
        workflow.
      </p>
    </div>
  );
};

export const TestimonialCard = ({
  testimonial,
  translate,
}: {
  testimonial: {
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
      whileHover={{
        y: -20,
      }}
      key={testimonial.title}
      className="group/testimonial h-96 w-[30rem] relative flex-shrink-0"
    >
      <div className="block group-hover/testimonial:shadow-2xl ">
        {testimonial.icon}
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/testimonial:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/testimonial:opacity-100 text-white">
        {testimonial.title}
      </h2>
      <p>{testimonial.desc}</p>
    </motion.div>
  );
};
