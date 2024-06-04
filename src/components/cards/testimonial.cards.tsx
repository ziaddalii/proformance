import React from "react";
import { TestimonialModel } from "../home/Testimonials";
import Image from "next/image";

interface Props {
  testimonial: TestimonialModel;
}

function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="p-8 bg-[#0000005e] space-y-4">
      <div className="flex items-center gap-4">
        <Image
          className="object-contain"
          width={40}
          height={40}
          src={testimonial.client_image}
          alt={testimonial.name}
        />
        <div>
          <h2 className="text-base">{testimonial.name}</h2>
          <p className="text-slate-200 text-xs">{testimonial.job_title}</p>
        </div>
      </div>
      <p>{testimonial.quote}</p>
    </div>
  );
}

export default TestimonialCard;
