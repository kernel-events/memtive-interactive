import React from "react";

import { ScrollAnimation } from "memtive-interactive";
import animation from "./animation.json";

const App = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: document.documentElement.clientHeight * 5 + "px",
        "padding-top": (document.documentElement.clientHeight / 2 - 29) + "px",
      }}
    >
      <div
        style={{
          position: "-webkit-sticky",
          position: "sticky",
          top: "5px",
          display: "flex",
          width: "100%",
          "justify-content": "center",
          "align-items": "center",
        }}
      >
        <div style={{
          background: "#636366",
          border: "5px solid #AEAEB2",
          "border-radius": "15px",
          padding: "15px",
          "padding-left": "30px",
          "padding-right": "30px",
          "font-family": "Menlo-Regular",
          "font-size": "15px",
          "color": "#FFFFFF",
          "text-align": "center",
        }}>
          npm install <span style={{"color": "#8E8E93"}}>--save</span> memtive-interactive
        </div>
      </div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          top: "0px",
        }}
      >
        <ScrollAnimation
          data={animation}
          scrollArea={document.documentElement.clientHeight * 4}
        />
      </div>
    </div>
  );
};

export default App
