import React, { useState } from "react";

const TrafficLight = () => {

    const [selectedColor, setSelectedColor] = useState("red");

    return (
            <div className="traffic-light">
                <div id="circle" className={"light red" + (selectedColor === "red" ? " on" : "")} onClick={() => setSelectedColor("red")}></div>
                <div id="circle" className={"light yellow" + (selectedColor === "yellow" ? " on" : "")} onClick={() => setSelectedColor("yellow")}></div>
                <div id="circle" className={"light green" + (selectedColor === "green" ? " on" : "")} onClick={() => setSelectedColor("green")}></div>
            </div>
    );
}

export default TrafficLight;