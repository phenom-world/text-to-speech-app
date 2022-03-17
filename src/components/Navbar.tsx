import React, { useState } from "react";

type Props = {
  onChange: (value: boolean) => void;
  isNavOpen: boolean;
};

const Navbar: React.FC<Props> = ({ isNavOpen, onChange }) => {
  
  const handleNavBtn = () => {
    onChange(!isNavOpen);
  };

  console.log(isNavOpen);
  return (
    <div>
      <button
        className="sm:hidden inline-block  absolute top-5 right-4 text-lg bg-transparent text-white border-none p-1 focus:outline-none focus:border-none hover:box-shadow-2xl z-20"
        onClick={handleNavBtn}
      >
        <i className={isNavOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </button>
    </div>
  );
};

export default Navbar;
