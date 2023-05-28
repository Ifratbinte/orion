import Certification from "#/components/View/Certification";
import Product from "#/components/View/Product";
import SafetyShop from "#/components/View/SafetyShop";
import Protection from "#components/View/Protection"
import { Inter } from "next/font/google";
import Slider from "#components/View/Slider";
import NewsLetter from "#/components/View/NewsLetter";

export default function Home() {
  return (
    <>
      <SafetyShop />
      <Certification/>
      <Product/>
      <Protection/>
      {/* <Slider/> */}
      <NewsLetter/>
    </>
  );
}
