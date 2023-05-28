import React from "react";

interface ButtonProps {
  btn_name: string;
  isOutline?: boolean;
}

const Button: React.FC<ButtonProps> = ({ btn_name, isOutline }) => {
  return (
    <button
      className={`${
        isOutline ? "bg-white text-danger hover:bg-danger hover:text-white transition-all px-6" : "bg-danger text-white px-10"
      } py-4 font-semibold text-lg rounded-sm shadow-sm border-danger border-2 border-solid`}
    >
      {btn_name}
    </button>
  );
};

export default Button;
