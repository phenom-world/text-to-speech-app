import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="md:w-1/3 z-30">
      <h1 className="text-2xl py-2 mb-2  tracking-widest uppercase">
        <span className="whitespace-nowrap font-bold inline-block">
          Text to
        </span>
        <span> </span>
        <div className="glitch inline-block">
          <span> Speech</span>
          <span> Speech</span> Speech
        </div>
      </h1>
    </div>
  );
};

export default Header;
