import "./App.css";
import ToggleImages from "./components/ToggleImages.js";
import React, { useState } from "react";
import ButtonText from "./components/ButtonText.js";

function App() {
  const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive((current) => !current);
  };

  return (
    <div className="App">
      <div className="Box">
        <p className="Title">Light the bbbuld</p>
        <ToggleImages active={active} />
        <button onClick={handleChangeActive}>
          <ButtonText active={active} />
        </button>
      </div>
    </div>
  );
}

export default App;
