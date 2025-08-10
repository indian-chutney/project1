import React from "react";
import logo from "./../../assets/logo.svg";

interface LogoProps {
  size?: "small" | "medium" | "large";
}

const sizeMap: Record<NonNullable<LogoProps["size"]>, string> = {
  small: "h-15",
  medium: "h-20",
  large: "h-32",
};

const textSizeMap: Record<NonNullable<LogoProps["size"]>, string> = {
  small: "text-[20px] -mt-[10px]", // as you have now
  medium: "text-[28px] -mt-[12px]", // slightly bigger
  large: "text-[36px] -mt-[14px]", // big for large
};

const Logo: React.FC<LogoProps> = ({ size = "medium" }) => {
  return (
    <div className="flex items-center gap-[8px] cursor-pointer">
      <img src={logo} alt="Logo" className={`${sizeMap[size]}`} />

      <div className={`flex gap-[2px] tracking-tighter ${textSizeMap[size]}`}>
        <div className="text-orange-500 font-extrabold mr-[4px]">BHARAT</div>
        <div className="text-blue-500 font-extrabold">PAYE</div>
      </div>
    </div>
  );
};

export default Logo;
