import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Character from "../../components/Character";

const Workout = () => {
    const navigate = useNavigate();

    const workoutDuration = 5;
    const breakDuration = 2;
    const maxPosition = 10;

    const [seconds, setSeconds] = useState(workoutDuration);
    const [position, setPosition] = useState(0);
    const [timerOn, setTimerOn] = useState(true);
    const [timerStyle, setTimerStyle] = useState("workout");
    const [images, setImages] = useState([]);

    const maxSeconds = maxPosition * workoutDuration;

    useEffect(() => {
        let temp = [];
        for (var i = 0; i < maxPosition; i++) {
            temp.push(i);
        }
        setImages(temp);
    }, []);

    useEffect(() => {
        let interval;
        if (timerOn) {
            if (
                position === maxPosition - 1 &&
                seconds <= 0 &&
                timerStyle === "workout"
            ) {
                setTimerOn(false);
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            } else {
                interval = setInterval(() => {
                    setSeconds((prevSeconds) => prevSeconds - 1);

                    if (seconds <= 0) {
                        if (timerStyle === "workout") {
                            setPosition((prevPosition) => prevPosition + 1);
                            setSeconds(breakDuration);
                            setTimerStyle("break");
                        } else {
                            setSeconds(workoutDuration);
                            setTimerStyle("workout");
                        }
                    }
                }, 1000);
            }
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timerOn, seconds, position, timerStyle, navigate]);

    return (
        <section className="workout">
            <p>{seconds}</p>

            <div className="display">
                <Character />
                <div className="images">
                    {images.map((image) => (
                        <img
                            key={image + 1}
                            src={`./Images/Workout/Positions/${image + 1}.png`}
                            alt=""
                            style={{
                                display:
                                    images.indexOf(image) === position
                                        ? "block"
                                        : "none",
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="progress-bar">
                <div
                    className="progress-cursor"
                    style={{
                        transform:
                            timerStyle === "break"
                                ? `scaleX(${position / maxPosition})`
                                : `scaleX(${
                                      (position * workoutDuration +
                                          (workoutDuration - seconds)) /
                                      maxSeconds
                                  })`,
                    }}
                ></div>
            </div>

            <button
                className="play"
                onClick={() => {
                    setTimerOn(!timerOn);
                }}
            >
                {timerOn ? "Pause" : "Play"}
            </button>
        </section>
    );
};

export default Workout;
