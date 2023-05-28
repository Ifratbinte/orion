import React from "react";

interface ButtonProps {
  btn_name: string;
  btn_name_outline: string;
  isOutline?: boolean;
}

const Button: React.FC<ButtonProps> = ({ btn_name, btn_name_outline, isOutline }) => {
  return (
    <button className="relative mb-3">
      <span className=" hover:bg-danger hover:text-white transition-all bg-danger text-white px-6 py-4 font-semibold text-lg rounded-sm shadow-sm border-danger border-2 border-solid">{btn_name}</span>
      <span className=" hover:bg-danger hover:text-white transition-all bg-white text-text-danger px-6 py-4 font-semibold text-lg rounded-sm shadow-sm border-danger border-2 border-solid">{btn_name_outline}</span>
    </button>
  );
};

export default Button;
