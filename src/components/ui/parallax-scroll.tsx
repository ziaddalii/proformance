"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { TestimonialModel } from "../home/Testimonials";
import TestimonialCard from "../cards/testimonial.cards";

export const ParallaxScroll = ({
  testimonials,
  className,
}: {
  testimonials: TestimonialModel[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(testimonials.length / 3);

  const firstPart = testimonials.slice(0, third);
  const secondPart = testimonials.slice(third, 2 * third);
  const thirdPart = testimonials.slice(2 * third);

  return (
    <div
      className={cn(
        "md:h-[35rem] h-[70vh] min-h-[20rem] mt-8 hide-scrollbar items-start overflow-y-auto w-full",
        className
      )}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 pb-40"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <TestimonialCard testimonial={el} />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <TestimonialCard testimonial={el} />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <TestimonialCard testimonial={el} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
