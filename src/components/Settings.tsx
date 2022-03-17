import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "./Settings.css";

const Settings = () => {
  const {
    voices,

    setVoices,
    setCurrentVoice,
    currentPitch,
    setCurrentPitch,
    currentRate,
    setCurrentRate,
    currentVolume,
    setCurrentVolume,
  } = useContext(GlobalContext);

  const [isCurrentVoiceSet, setIsCurrentVoiceSet] = useState(false);

  useEffect(() => {
    (document.getElementById("pitch-slider") as HTMLFormElement).value = 1;
    (document.getElementById("rate-slider") as HTMLFormElement).value = 1;
    (document.getElementById("volume-slider") as HTMLFormElement).value = 1;
  }, []);

  speechSynthesis.addEventListener("voiceschanged", () => {
    let gottenVoices = speechSynthesis.getVoices();
    setVoices(gottenVoices);
    if (!isCurrentVoiceSet) {
      setCurrentVoice(gottenVoices[0]);
      setIsCurrentVoiceSet(true);
    }
  });

  const handleVoiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let voice = voices.find((voice: any) => voice.name === e.target.value);
    setCurrentVoice(voice);
  };

  const handlePitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPitch(e.target.value);
    console.log(setCurrentPitch);
  };

  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentRate(e.target.value);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentVolume(e.target.value);
  };

  return (
    <div>
      <h1 className="md:text-3xl font-bold text-xl">Utterance Setting</h1>
      <div>
        <div className="speech-voice mt-4 mb-8  text-sm">
          <label htmlFor="voice-select border-none text-xs ">
            Change Voice
          </label>
          <select
            id="voice-select"
            className="rounded-md p-2 w-full mt-1.5 max-w-full focus:outline-[#0a88db] text-black"
            onChange={handleVoiceChange}
          >
            {voices.map((voice: any, idx: any) => (
              <option key={idx} value={voice.name}>
                {voice.name + " - " + voice.lang}
              </option>
            ))}
          </select>
        </div>
        <div className="speech-pitch mt-6 mb-8 text-sm">
          <label htmlFor="pitch-slider">Pitch ({currentPitch})</label>
          <input
            type="range"
            className="slider"
            id="pitch-slider"
            step="0.1"
            min="0"
            max="2"
            onChange={handlePitchChange}
          />
        </div>
        <div className="speech-rate mt-6 mb-8 text-sm">
          <label htmlFor="rate-slider">Rate ({currentRate})</label>
          <input
            type="range"
            className="slider"
            id="rate-slider"
            step="0.1"
            min="0.1"
            max="10"
            onChange={handleRateChange}
          />
        </div>
        <div className="speech-volume mt-6 mb-8 text-sm">
          <label htmlFor="volume-slider">Volume ({currentVolume})</label>
          <input
            type="range"
            className="slider"
            id="volume-slider"
            step="0.1"
            min="0"
            max="1"
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
