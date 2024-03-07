import React from "react";
import Gem from "../../components/Gem";

const Shop = () => {
    return (
        <section className="shop">
            <header>
                <h1>Boutique</h1>
                <Gem />
                <img src="./Images/travaux.gif" alt="Travaux en cours" />
            </header>
        </section>
    );
};

export default Shop;
