"use client";
import React from "react";
import { MultiStepLoader as Loader } from "../ui/multi-step-loader";

const loadingStates = [
  {
    text: "Buying a condo",
  },
  {
    text: "Travelling in a flight",
  },
  {
    text: "Meeting Tyler Durden",
  },
  {
    text: "He makes soap",
  },
  {
    text: "We goto a bar",
  },
  {
    text: "Start a fight",
  },
  {
    text: "We like it",
  },
  {
    text: "Welcome to F**** C***",
  },
];

export function MultiStepLoaderDemo() {
  return (
    <div className="w-full absolute left-0 top-1/2">
      <Loader loadingStates={loadingStates} loading={true} duration={2000} />
    </div>
  );
}
