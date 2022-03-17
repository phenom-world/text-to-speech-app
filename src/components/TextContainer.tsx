import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const TextContainer = () => {
  const [value, setValue] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const { currentPitch, currentRate, currentVolume, voices } =
    useContext(GlobalContext);

  let utterThis = new SpeechSynthesisUtterance();
  utterThis.addEventListener("start", () => {
    setIsStarted(true);
    setIsPaused(false);
  });

  utterThis.addEventListener("pause", () => {
    setIsPaused(true);
    setIsStarted(false);
  });

  utterThis.addEventListener("resume", () => {
    setIsStarted(true);
    setIsPaused(false);
  });

  utterThis.addEventListener("end", () => {
    speechSynthesis.cancel();
    setIsStarted(false);
    setIsPaused(false);
  });

  //if error occurs
  utterThis.addEventListener("error", (e) => {
    console.log("An error has occurred with the speech synthesis: " + e.error);
  });

  //initial play
  const handleRead = () => {
    speechSynthesis.cancel();
    utterThis.text = value;
    utterThis.pitch = currentPitch;
    utterThis.rate = currentRate;
    utterThis.volume = currentVolume;
    utterThis.voice = voices.find(
      (voice: any) =>
        voice.name ===
        (document.querySelector("#voice-select") as HTMLFormElement).value
    );
    speechSynthesis.speak(utterThis);
  };

  //pause the speech
  const handlePause = () => {
    speechSynthesis.pause();
  };
  //resume the speech
  const handleResume = () => {
    speechSynthesis.resume();
  };
  //reset the synthesis
  const handleReset = () => {
    speechSynthesis.cancel();
  };

  //play & pause handling
  const handleControl = () => {
    if (!speechSynthesis.speaking) {
      console.log("Handle Read");
      handleRead();
    } else if (!isPaused) {
      console.log("Paused");
      handlePause();
    } else {
      console.log("resumed");
      handleResume();
    }
  };

  const handleCount = (e: React.FormEvent<EventTarget>) => {
    let target = e.target as HTMLInputElement;
    setValue(target.value);
  };
  const wordArr = value.trim().split(/\s+/);
  return (
    <>
      <>
        <textarea
          onChange={handleCount}
          className="sm:h-[calc(100vh-7rem)] [calc(100vh-15rem)] min-h-[calc(35rem-10rem)] z-2 w-full block text-base bg-white bg-clip-padding border border-solid border-gray-300 resize-none px-4 py-4 drop-shadow-2xl rounded-t-lg focus:text-gray-700 text-gray-700 focus:bg-white focus:border-none focus:outline-none"
          placeholder="Enter text here..."
        ></textarea>
      </>
      <div className="bg-gray-200 text-gray w-full rounded-lg h-16 -mt-2 text-black py-6 px-8 flex flex justify-between">
        <div>
          <span className=" ">
            Char: {value.length} {""}
          </span>
          <span className="">
            Word: {value.trim().length === 0 ? 0 : wordArr.length}
          </span>
        </div>
        <div className="flex space-x-2">
          <div>
            <button
              className=" rounded-large text-3xl -mt-1.5 hover:animate-spinn hover:text-4xl over-flow-hidden"
              onClick={handleControl}
            >
              <i
                className={
                  isPaused
                    ? "fas fa-play-circle bg-[#0a88db]  rounded-full text-white"
                    : isStarted
                    ? "fas fa-pause-circle bg-[#0a88db]  rounded-full text-white"
                    : "fas fa-play-circle bg-[#0a88db]  rounded-full text-white"
                }
              ></i>
            </button>
          </div>
          <div>
            <button
              className=" text-3xl -mt-1.5 rounded-large "
              onClick={handleReset}
            >
              <i className="fas fa-stop-circle bg-[red]  rounded-full text-white"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextContainer;
