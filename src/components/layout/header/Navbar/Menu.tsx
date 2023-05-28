import { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FiAlignRight } from "react-icons/fi";
import styles from "./menu.module.css";
import Navigation from "./NavComponent";

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="container absolute z-20 py-4 px-2 lg:px-0 mx-64">
      <div className="flex items-center justify-between">
          <div className="logo w-[300px]">
            <img src="/images/logo/logo.png" alt="" />
          </div>
          <div className={`${styles.header_menu} ${isVisible ? styles.responsive_menu : ""}`}>
            <button onClick={() => setIsVisible((prevState) => !prevState)} className="lg:hidden">
              <FaArrowAltCircleLeft className="text-2xl lg:relative absolute top-4 right-4 text-primary" />
            </button>
            <img src="/images/logo/logo.png" alt="" className="mb-5 lg:hidden block" />
            <Navigation />
          </div>
        </div>
        <button className="btn visible lg:hidden" onClick={() => setIsVisible((prevState) => !prevState)}>
          <FiAlignRight className="text-2xl lg:relative text-primary"/>
        </button>
    </div>
  );
};

export default Menu;
