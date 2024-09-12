import Link from "next/link";
import React from "react";
import { CircularText } from "./Icons";

export const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center 
      overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute">
      <div className="w-48 h-48 flex items-center justify-center relative md:w-24 md:h-24">
        <CircularText className="absolute fill-dark animate-spin-slow" />
        <Link
          href="mailto:nialusby@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md border border-solid bg-dark rounded-full text-white w-20 h-20 font-semibold hover:bg-light hover:border-dark hover:text-dark dark:text-dark dark:bg-light dark:hover:bg-dark dark:hover:text-light dark:hover:border-light dark:shadow-light/25 md:w-12 md:h-12 md:text-[10px]"
        >
          LetsTalk!
        </Link>
      </div>
    </div>
  );
};




