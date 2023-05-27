import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Hero from "#components/View/Hero";
export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
