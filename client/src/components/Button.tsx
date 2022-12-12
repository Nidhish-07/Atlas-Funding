import React, { ButtonHTMLAttributes } from "react";

type Props = {
  type: "submit" | "button" | "reset";
  title: string;
  styles: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = (props: Props) => {
  return (
    <button
      type={props.type}
      className={`${props.styles} font-epilogue font-semibold text-base leading-6 text-white min-h-[52px] px-4 rounded-xl`}
      onClick={props.handleClick}
    >
      {props.title}
    </button>
  );
};

export default Button;
