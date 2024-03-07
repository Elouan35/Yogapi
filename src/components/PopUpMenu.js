import React from "react";

const PopUpMenu = ({ setTimerOn, navigate }) => {
    return (
        <div className="pop-up-menu">
            <div className="box">
                <button
                    onClick={() => {
                        setTimerOn(true);
                    }}
                >
                    Reprendre
                </button>
                <button
                    onClick={() => {
                        setTimerOn(false);
                        navigate("/");
                    }}
                >
                    Quitter
                </button>
            </div>
        </div>
    );
};

export default PopUpMenu;
