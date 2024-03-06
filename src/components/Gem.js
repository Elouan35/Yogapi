import React from "react";
import { ReactComponent as GemImage } from "../Images/Elements/Gem.svg";

const Gem = () => {
    return (
        <div className="gem-bar">
            <p>20</p>
            <GemImage className="gem" />
        </div>
    );
};

export default Gem;
