import React from "react";
import { Outlet, Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <Outlet />
            <nav>
                <li>
                    <ul>
                        <Link to="/">Accueil</Link>
                    </ul>
                    <ul>
                        <Link to="/exercices">Exercices</Link>
                    </ul>
                    <ul>
                        <Link to="/preferences">Préférences</Link>
                    </ul>
                    <ul>
                        <Link to="/shop">Boutique</Link>
                    </ul>
                </li>
            </nav>
        </>
    );
};

export default Nav;
