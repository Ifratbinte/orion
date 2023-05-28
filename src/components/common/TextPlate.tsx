import React from "react";
import Button from "../Button/btnPrimary";

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
      {thumb && <img src={thumb} alt="" className="mx-auto mb-5"/>}
      {icon && <img src={icon} alt="" />}

      <div className="text-4xl font-bold mb-10">{title}</div>
      <p className={`${isCenter ? 'mx-16' : ""} text-base text-paragraph leading-loose`}>{content}</p>
      <br />
      <p className="text-base text-paragraph leading-loose">{content2}</p>
      {isBtn && <Button btn_name="Learn More" />}
    </div>
  );
};

export default TextPlate;
