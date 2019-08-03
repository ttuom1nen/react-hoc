import React from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

function App() {
  return (
    <div className="App">
      <ClickCounter name="testname" />
      <HoverCounter />
    </div>
  );
}

export default App;
