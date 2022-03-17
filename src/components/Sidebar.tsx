import React from "react";
import { Settings } from ".";

type Props = {
  isNavOpen: boolean;
};

const Sidebar: React.FC<Props> = ({ isNavOpen }) => {
  return (
    <div
      className={
        isNavOpen
          ? " sm:p-4 sm:relative p-8 pt-20 w-full gradient-bg z-10 fixed top-0 right-0 p-6 shadow-2xl sm:bg-transparent blue-glassmorphism animate-slide-in"
          : "sm:block hidden sm:mt-8 sm:w-[90%]"
      }
    >
      <Settings />
    </div>
  );
};

export default Sidebar;
