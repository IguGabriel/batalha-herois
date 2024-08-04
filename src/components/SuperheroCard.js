import React from 'react';

const SuperheroCard = ({ superhero }) => {
    return (
        <div className="superhero-card">
            <h2>{superhero.name}</h2>
            <img src={superhero.images.md} alt={superhero.name} />
            <p>Inteligência: {superhero.powerstats.intelligence}</p>
            <p>força: {superhero.powerstats.strength}</p>
            <p>Velocidade: {superhero.powerstats.speed}</p>
            <p>Durabilidade: {superhero.powerstats.durability}</p>
            <p>Poder: {superhero.powerstats.power}</p>
            <p>Combate: {superhero.powerstats.combat}</p>
        </div>
    );
};

export default SuperheroCard;
