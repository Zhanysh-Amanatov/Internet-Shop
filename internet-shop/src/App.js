import "./App.scss";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      </Router>
      <Slider/>
    </div>
  );
}

export default App;
