import React, { createContext, useState } from "react";

export const GlobalContext = createContext<any>(null);

//a provider
export const GlobalProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [currentVoice, setCurrentVoice] = useState<any>([]);
  const [currentVolume, setCurrentVolume] = useState<String | Number>(1);
  const [currentPitch, setCurrentPitch] = useState<String | Number>(1);
  const [currentRate, setCurrentRate] = useState<String | Number>(1);
  const [voices, setVoices] = useState(speechSynthesis.getVoices());

  return (
    <GlobalContext.Provider
      value={{
        voices,
        setVoices,
        currentVoice,
        setCurrentVoice,
        currentPitch,
        setCurrentPitch,
        currentRate,
        setCurrentRate,
        currentVolume,
        setCurrentVolume,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
