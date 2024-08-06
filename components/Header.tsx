import React from "react";

interface HeaderProps {
  title: string;
  description: string;
}

const Header = ({ title, description }: HeaderProps) => {
  return (
    <div className="w-full h-[100px] bg-gray-200 flex-col flex justify-center items-center rounded-md mb-3 sticky top-0 z-40 shadow shadow-gray-500">
      <h2 className="font-bold text-3xl">{title}</h2>
      <p className="mt-3 text-gray-500 text-xl">{description}</p>
    </div>
  );
};

export default Header;
