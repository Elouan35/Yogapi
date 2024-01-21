import React from "react";
import Character from "../../components/Character";
import Gem from "../../components/Gem";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section className="home">
            <header>
                <div className="workout-day-bar">
                    <p>0/7</p>
                </div>
                <Gem />
            </header>
            <Character />
            <Link to="/workout">
                <button>Commencer la session</button>
            </Link>
        </section>
    );
};

export default Home;
