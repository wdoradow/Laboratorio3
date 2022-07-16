import { useState } from 'react';
import './App.css';
function App() {
  const [temperatureColor, setTemperatureColor] = useState("cold");
  const [temperatureValue, setTemperatureValue] = useState(10);
  function incrementTemperature() {
    if (temperatureValue === 30) return
    if (temperatureValue + 1 >= 20) {
      setTemperatureColor("hot")
    } else {
      setTemperatureColor("cold")
    }
    setTemperatureValue(temperatureValue + 1)
  }
  function decrementTemperature() {
    if (temperatureValue === 0) return
    if (temperatureValue - 1 >= 20) {
      setTemperatureColor("hot")
    } else {
      setTemperatureColor("cold")
    }
    setTemperatureValue(temperatureValue - 1)
  }
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={incrementTemperature}>+</button>
        <button onClick={decrementTemperature}>-</button>
      </div>
    </div>
  );
}
export default App;
