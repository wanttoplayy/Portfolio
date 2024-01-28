import { ModeToggle } from "@/components/darkmode";
import { NavPort } from "@/components/nav";
import * as React from "react";

export default function Home() {
  return (
    <div>
      <ModeToggle></ModeToggle>
      <NavPort />
    </div>
  );
}
