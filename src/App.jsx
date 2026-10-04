import { useState } from "react";
import "./App.css";

const colors = [
  "#FF3B30", "#007AFF", "#34C759", "#AF52DE", "#FF9500",
  "#5856D6", "#FF2D55", "#00C7BE", "#FFD60A", "#64D2FF",
  "#FF453A", "#30D158", "#5E5CE6", "#BF5AF2", "#FF9F0A",
  "#0A84FF", "#AC8E68", "#32ADE6", "#FF375F", "#64D2FF",
  "#FF6961", "#77DD77", "#836FFF", "#FFB347", "#F49AC2",
  "#87CEEB", "#C23B22", "#966FD6", "#03DAC6", "#FF6B6B",
  "#4D96FF", "#6BCB77", "#FFD93D", "#9B5DE5", "#F15BB5",
  "#00BBF9", "#00F5D4", "#FEE440", "#FB5607", "#8338EC",
  "#3A86FF", "#FF006E", "#8AC926", "#1982C4", "#6A4C93",
  "#FF595E", "#FFCA3A", "#52B788", "#4361EE", "#F72585",
  "#7209B7", "#3F37C9", "#4895EF", "#4CC9F0", "#F77F00",
  "#D62828", "#003049", "#2A9D8F", "#E76F51", "#264653",
  "#E63946", "#457B9D", "#1D3557", "#A8DADC", "#F1FAEE",
  "#06D6A0", "#118AB2", "#073B4C", "#EF476F", "#FFD166",
  "#833AB4", "#FD1D1D", "#F77737", "#FCB045", "#405DE6",
  "#5851DB", "#C13584", "#E1306C", "#FFDC80", "#FCAF45",
  "#00B4D8", "#0077B6", "#023E8A", "#03045E", "#90E0EF",
  "#48CAE4", "#ADE8F4", "#CAF0F8", "#F72585", "#B5179E",
  "#7209B7", "#560BAD", "#480CA8", "#3A0CA3", "#4361EE",
  "#4CC9F0", "#4895EF", "#F8F9FA", "#212529", "#6C757D"
];

function App() {
  const [number, setNumber] = useState(null);

  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNumber);
  }

  const selectedColor = number ? colors[number - 1] : null;

  return (
    <div className="app">

      <h1>Random Color</h1>

      <p className="subtitle">
        Generate a number and discover its color
      </p>

      <div className="randomizer-container">

        {/* LEFT - NUMBER */}
        <div className="number-section">

          <span>RANDOM NUMBER</span>

          <div className="number">
            {number ?? "?"}
          </div>

        </div>

        {/* RIGHT - COLOR */}
        <div
          className="color-section"
          style={{
            backgroundColor: selectedColor || "#1a1a22"
          }}
        >

          {number ? (
            <>
              <span>COLOR</span>

              <div className="color-value">
                {selectedColor}
              </div>
            </>
          ) : (
            <>
              <div className="color-question">?</div>

              <p>
                Generate a number to discover its color
              </p>
            </>
          )}

        </div>

      </div>

      <button onClick={generateRandomNumber}>
        RANDOMIZE
      </button>

    </div>
  );
}

export default App;