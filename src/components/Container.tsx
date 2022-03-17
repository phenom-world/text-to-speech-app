import React, { useState } from "react";
import { Header, Sidebar, TextContainer } from ".";

type Props = {
  isNavOpen: boolean;
};

const Container: React.FC<Props> = ({ isNavOpen }) => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex sm:flex-row flex-col items-start justify-between w-full py-3 md:px-24 px-4 sm:space-x-8">
        <div className="flex-1 flex flex-col justify-start items-start d-none">
          <Header />
          <Sidebar isNavOpen={isNavOpen} />
        </div>
        <div className="flex-[2_2_0%] flex flex-col justify-center w-full items-center">
          <TextContainer />
        </div>
      </div>
    </div>
  );
};

export default Container;
