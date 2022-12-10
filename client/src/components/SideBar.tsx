import React, { MouseEventHandler } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { logo, sun } from "../assets";
import { navlinks } from "../constants";

type Props = {};

type IconProps = {
  styles?: string;
  name?: string;
  imageUrl?: string;
  isActive?: string;
  disabled?: boolean;
  handleClick?: MouseEventHandler;
};

const Icon = (iconProps: IconProps): JSX.Element => (
  <div
    className={`w-12 h-12 rounded-xl ${
      iconProps.isActive &&
      iconProps.isActive === iconProps.name &&
      "bg-[#2c2f32]"
    } flex justify-center items-center ${
      !iconProps.disabled && "cursor-pointer"
    } ${iconProps.styles}`}
    onClick={iconProps.handleClick}
  >
    {!iconProps.isActive ? (
      <img src={iconProps.imageUrl} alt="logo1" className="w-1/2 h-1/2 " />
    ) : (
      <img
        src={iconProps.imageUrl}
        alt="logo1"
        className={`w-1/2 h-1/2 ${
          iconProps.isActive !== iconProps.name && "grayscale"
        }`}
      />
    )}
  </div>
);

const SideBar = (props: Props): JSX.Element => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = React.useState<string>("dashboard");
  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link to={"/"}>
        <Icon styles="w-12 h-12 bg-[#2c2f32]" imageUrl={logo}></Icon>
      </Link>
      <div className="flex-1 justify-center flex flex-col items-center bg-[#1c1c24] rounded-3xl w-20 py-4 mt-12 ">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map(
            (link: any): JSX.Element => (
              <Icon
                key={link.name}
                {...link}
                handleClick={() => {
                  if (!link.disabled) {
                    setIsActive(link.name);
                    navigate(link.link);
                  }
                }}
              ></Icon>
            )
          )}
        </div>
        <Icon styles="bg-[#1c1c24] shadow-secondary" imageUrl={sun}></Icon>
      </div>
    </div>
  );
};

export default SideBar;
