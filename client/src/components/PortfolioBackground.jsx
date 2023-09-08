import React from "react";
import "./css/PortfolioBackground.css"

export default function PortfolioBackground() {
    return (
        <div className="container" style={{ backgroundImage: `url(/portfolio-background.jpg)`, height: "20vh" }}>
            <div className="title">Cabinet of Curiosities</div>
        </div>
    )
}