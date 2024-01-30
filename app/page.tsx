import Hero from "@/components/Hero";
import About from "@/components/About";

import * as React from "react";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Work />
    </div>
  );
}
