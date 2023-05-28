import Certification from "#/components/View/Certification";
import SafetyShop from "#/components/View/SafetyShop";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <>
      <SafetyShop />
      <Certification/>
    </>
  );
}
