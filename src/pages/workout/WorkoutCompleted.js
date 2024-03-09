import React from "react";
import Character from "../../components/Character";
import { useNavigate } from "react-router-dom";

const WorkoutCompleted = () => {
    const navigate = useNavigate();

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
