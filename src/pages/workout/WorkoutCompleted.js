import React, { useEffect } from "react";
import Character from "../../components/Character";
import { useNavigate } from "react-router-dom";

const WorkoutCompleted = () => {
    const navigate = useNavigate();

    const addGems = () => {
        var series = parseInt(localStorage.getItem("series"));
        var gems = parseInt(localStorage.getItem("gems"));
        localStorage.setItem("gems", `${gems + 10 * (series % 7)}`);
    };

    useEffect(() => {
        var storageDate = localStorage.getItem("date");
        if (storageDate) {
            var date = new Date();
            var strDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
            if (storageDate !== strDate) {
                addGems();
                localStorage.setItem("date", strDate);
            }
        } else {
            var strDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
            localStorage.setItem("date", strDate);
        }
    }, []);

    return (
        <div className="workout-completed">
            <div className="confetti">
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
            </div>

            <h1>
                Entrainement
                <br /> Terminé
            </h1>
            <Character />
            <button
                className="main-button"
                onClick={() => {
                    navigate("/");
                }}
            >
                Continuer
            </button>
        </div>
    );
};

export default WorkoutCompleted;
