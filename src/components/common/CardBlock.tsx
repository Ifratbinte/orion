import React from "react";
import Button from "../Button/BtnPrimary";

interface Props {
  icon?: string;
  thumb?: string;
  title: string;
  content: string;
  content2?: string;
  isCenter?: boolean;
  isBtn?: boolean;
}

const TextPlate: React.FC<Props> = ({ icon, thumb, title = "text-2xl", content, content2, isCenter, isBtn }) => {
  return (
    <div className={`${isCenter ? "text-center" : ""}`}>
      <img src={icon} alt="" />
      <div className="text-4xl font-bold mb-10">{title}</div>
      <p className={`${isCenter ? 'mx-16' : ""} text-base text-paragraph leading-loose`}>{content}</p>
    </div>
  );
};

export default TextPlate;
