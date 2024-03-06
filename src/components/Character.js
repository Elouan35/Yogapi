import React, { useEffect, useState } from "react";
import { ReactComponent as Simple } from "../Images/Characters/character-simple.svg";
import { ReactComponent as Wonder } from "../Images/Characters/character-wonder.svg";

const Character = () => {
    const [character, setCharacter] = useState();

    useEffect(() => {
        setCharacter("simple");
    }, []);

    window.addEventListener("mousemove", (e) => {
        var positions;
        var px;

        if (document.querySelector("#character")) {
            const eye1 = document.querySelector(
                ".character #character #head #eyes #eye-1 #pupil_2"
            );

            const eye2 = document.querySelector(
                ".character #character #head #eyes #eye-2 #pupil"
            );

            var x = e.clientX;

            positions = eye1.getBoundingClientRect();
            positions.x += positions.width / 2;

            if (x - positions.x > 0) {
                px = (x - positions.x) / (window.innerWidth - positions.x);
            } else {
                px = ((x - positions.x) / positions.x) * 5;
            }

            eye1.style.transform = `translateX(${px}%)`;

            positions = eye2.getBoundingClientRect();

            if (x - positions.x > 0) {
                px =
                    ((x - positions.x) / (window.innerWidth - positions.x)) * 5;
            } else {
                px = (x - positions.x) / positions.x;
            }

            eye2.style.transform = `translateX(${px}%)`;
        }
    });

    if (character === "simple") {
        return (
            <div className="character">
                <Simple />
            </div>
        );
    } else if (character === "wonder") {
        return (
            <div className="character">
                <Wonder />
            </div>
        );
    }
};

export default Character;
