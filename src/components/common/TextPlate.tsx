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
  isDark?: boolean
  title_style?: string
}

const TextPlate: React.FC<Props> = ({ icon, thumb, title , title_style= "text-4xl", content, content2, isCenter, isBtn, isDark }) => {
  return (
    <div className={`${isCenter ? "text-center" : ""} ${isDark ? 'text-slate-100' : 'text-black'}`}>
      {thumb && <img src={thumb} alt="" className="mx-auto mb-5"/>}
      {icon && <img src={icon} alt="" className="mx-auto h-[200px]"/>}

      <div className={`${title_style} font-bold mb-8`}>{title}</div>
      <p className="leading-loose">{content}</p>
      <br />
      <p className="leading-loose">{content2}</p>
      {isBtn && <Button btn_name="Learn More" />}
    </div>
  );
};

export default TextPlate;
