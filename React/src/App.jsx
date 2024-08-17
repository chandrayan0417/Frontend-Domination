import React, { useState } from "react";
import Card from "./Components/Card";

function App() {
  const [score, setScore] = useState(0);
  return <div>{score}</div>;
}

export default App;
