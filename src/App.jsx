import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive"); // State for background color
  const [isDarkMode, setIsDarkMode] = useState(false); // State for toggle button

  // Toggle function for dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setColor(isDarkMode ? "olive" : "#333"); // Switch between default color and dark mode
  };

  return (
    <div
      className="w-full h-screen duration-200 flex items-center justify-center"
      style={{
        background: color,
        color: isDarkMode ? "white" : "black", // Adjust text color for visibility
        transition: "background 0.5s, color 0.5s",
      }}
    >
      <div className="fixed flex justify-center bottom-12 inset-x-0 px-2">
        <div className="flex items-center justify-center shadow-lg bg-white px-3 py-2 rounded-2xl gap-4">
          {/* Color Buttons */}
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("linear-gradient(to right, black, pink)")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{
              background: "linear-gradient(to right, red, orange)",
              border: "1px solid white",
            }}
          >
            Gradient
          </button>

          {/* Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{
              backgroundColor: isDarkMode ? "white" : "black",
              color: isDarkMode ? "black" : "white",
            }}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
