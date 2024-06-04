"use client";
import { ParallaxScroll } from "../ui/parallax-scroll";
import userImage from "@/assets/images/user_img.png";

export function TestimonialsSection() {
  return (
    <section className="container">
      <div className="text-center md:text-4xl text-2xl space-y-4 font-bold">
        <h2>Dont&apos;t take our word for it</h2>
        <p
          className="bg-clip-text text-transparent font-bold"
          style={{
            background: "linear-gradient(to right, #0FE3CA 0%, #016BE1 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Trust our customers
        </p>
      </div>
      <ParallaxScroll testimonials={testimonials} />
    </section>
  );
}
export interface TestimonialModel {
  id: number;
  quote: string;
  name: string;
  job_title:string;
  client_image: string;
}

const testimonials: TestimonialModel[] = [
    {
        id: 0,
        quote: "Proformance has doubled our productivity! We can manage tasks more efficiently and communicate seamlessly.",
        name: "John D.",
        job_title: "CEO of TechCorp",
        client_image: userImage.src,
    },
    {
        id: 1,
        quote: "The performance analytics are a game-changer. We've seen a 100% increase in team efficiency.",
        name: "Sarah K.",
        job_title: "Project Manager at InnovateX",
        client_image: userImage.src,
    },
    {
        id: 2,
        quote: "With Proformance, remote work has never been easier. Our team stays connected and productive no matter where we are.",
        name: "Alex P.",
        job_title: "Team Lead at RemoteWorks",
        client_image: userImage.src,
    },
    {
        id: 3,
        quote: "Proformance's user-friendly interface and powerful features have transformed our workflow. Highly recommended!",
        name: "Emily R.",
        job_title: "COO of DevSolutions",
        client_image: userImage.src,
    },
    {
        id: 4,
        quote: "Using Proformance, we've reduced project completion times by 40%. The real-time collaboration tools are fantastic.",
        name: "Michael B.",
        job_title: "Product Manager at SoftWareHouse",
        client_image: userImage.src,
    },
    {
        id: 5,
        quote: "The task management and time tracking features have significantly improved our team’s performance.",
        name: "Jessica L.",
        job_title: "HR Manager at BizStream",
        client_image: userImage.src,
    },
    {
        id: 6,
        quote: "Proformance has made our remote work setup seamless. It's like we're all in the same office!",
        name: "David W.",
        job_title: "CTO of CloudNet",
        client_image: userImage.src,
    },
    {
        id: 7,
        quote: "Our team collaboration has improved dramatically thanks to Proformance’s communication tools.",
        name: "Sophia M.",
        job_title: "Lead Developer at CodeCrafters",
        client_image: userImage.src,
    },
    {
        id: 8,
        quote: "The analytics provided by Proformance have given us valuable insights into our productivity.",
        name: "James T.",
        job_title: "Data Analyst at DataDynamo",
        client_image: userImage.src,
    },
    {
        id: 9,
        quote: "Managing tasks and tracking time has never been easier. Proformance is a must-have for any team.",
        name: "Linda A.",
        job_title: "Operations Manager at FastTrack",
        client_image: userImage.src,
    },
    {
        id: 10,
        quote: "The integration with our existing tools was seamless and has boosted our overall productivity.",
        name: "Robert F.",
        job_title: "IT Manager at NetSolutions",
        client_image: userImage.src,
    },
    {
        id: 11,
        quote: "Proformance's features have revolutionized the way we handle projects. Our efficiency has skyrocketed.",
        name: "Karen W.",
        job_title: "Project Lead at CreativeWorks",
        client_image: userImage.src,
    },
    {
        id: 12,
        quote: "The user interface is intuitive and the support team is incredibly helpful. Highly recommend!",
        name: "Steven H.",
        job_title: "Support Manager at HelpDeskPro",
        client_image: userImage.src,
    },
    {
        id: 13,
        quote: "Our team's productivity has increased significantly since we started using Proformance.",
        name: "Nancy S.",
        job_title: "Team Manager at WorkflowGenius",
        client_image: userImage.src,
    },
    {
        id: 14,
        quote: "Proformance has streamlined our processes and improved our team's collaboration.",
        name: "Thomas R.",
        job_title: "Operations Director at EfficientOps",
        client_image: userImage.src,
    }
];