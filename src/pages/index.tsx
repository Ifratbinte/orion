import Certification from "#/components/View/Certification";
import Product from "#/components/View/Product";
import SafetyShop from "#/components/View/SafetyShop";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <>
      <SafetyShop />
      <Certification/>
      <Product/>
    </>
  );
}
