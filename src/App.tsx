import { ReactHTML, useState } from "react";
import "./App.css";
import { Container, Navbar } from "./components";

function App() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  function handleChange(value: boolean) {
    setIsNavOpen(value);
  }

  return (
    <div className="gradient-bg h-screen">
      <Navbar onChange={handleChange} isNavOpen={isNavOpen} />

      <div className="text-white">
        <Container isNavOpen={isNavOpen} />
      </div>
    </div>
  );
}

export default App;
