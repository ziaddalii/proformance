import React from "react";

interface AdvantageModel {
  id: number;
  name: string;
  desc: string;
  color: string;
}

const advantages: AdvantageModel[] = [
  {
    id: 0,
    name: "User-Friendly Interface",
    desc: "Our platform is designed with the user in mind. It's intuitive, easy to navigate, and requires minimal training, ensuring that your team can hit the ground running.",
    color: "via-[#FF6EC7]",
  },
  {
    id: 1,
    name: "Comprehensive Features",
    desc: "We offer a complete suite of tools that cover all aspects of project management, from task tracking to performance analytics. No need for multiple subscriptions or integrations.",
    color: "via-[#0FF0FC]",
  },
  {
    id: 2,
    name: "Scalability",
    desc: "Whether you're a small startup or a large enterprise, our platform scales with your needs. Add as many users as you want and manage multiple projects with ease.",
    color: "via-[#FF073A]",
  },
  {
    id: 3,
    name: "Security",
    desc: "We prioritize your data's security. Our platform is built with robust security measures to protect your sensitive information and ensure compliance with industry standards.",
    color: "via-[#FFFF01]",
  },
  {
    id: 4,
    name: "Cost-Effective",
    desc: "Our services are free, offering unbeatable value without compromising on quality. Experience all the benefits of a premium tool without the hefty price tag.",
    color: "via-[#FF007F]",
  },
];
function WhyWe() {
  return (
    <section className="container py-12">
      <header className="space-y-2 mb-8">
        <h2 className="text-center md:text-6xl text-4xl">Why Choose Us</h2>
        <p className="text-slate-400 text-center text-sm">
          The Proformance Advantage
        </p>
      </header>
      <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:grid-rows-2 grid-rows-1">
        {advantages.map((advantage, i) => {
          return (
            <div
              key={advantage.id}
              className={`group/advantage col-span-1 ${i=== 0 ? "sm:row-span-2 row-span-1" : "row-span-1"} relative bg-[#00000074] text-center md:p-8 p-8 flex-shrink-0 rounded-2xl`}
            >
              <div
                className={`absolute group-hover/advantage:w-full transition-all duration-300 inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent ${advantage.color} to-transparent`}
              />
              <div
                className={`absolute group-hover/advantage:w-full transition-all duration-300 inset-x-0 h-px w-1/2 mx-auto -bottom-px shadow-2xl bg-gradient-to-r from-transparent ${advantage.color} to-transparent`}
              />

              <h2 className="bottom-4 mb-2 font-bold md:text-xl text-lg left-4 text-white">
                {advantage.name}
              </h2>
              <p className="text-slate-400 text-sm">{advantage.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WhyWe;
