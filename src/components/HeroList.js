import React, { useEffect, useState } from 'react';
import { fetchHeroes } from '../services/api';
import SearchBar from './SearchBar';
import WinnerModal from './WinnerModal';
import './HeroList.css';

const HeroList = () => {
  const [heroes, setHeroes] = useState([]);
  const [filteredHeroes, setFilteredHeroes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const getHeroes = async () => {
      const data = await fetchHeroes();
      setHeroes(data);
      setFilteredHeroes(data);
    };
    getHeroes();
  }, []);

  useEffect(() => {
    const results = heroes.filter(hero =>
      hero.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredHeroes(results);
  }, [searchTerm, heroes]);

  const toggleHeroSelection = (hero) => {
    setSelectedHeroes((prevSelectedHeroes) =>
      prevSelectedHeroes.includes(hero)
        ? prevSelectedHeroes.filter((h) => h !== hero)
        : [...prevSelectedHeroes, hero]
    );
  };

  const calculateWinner = () => {
    setModalOpen(true);
  };

  return (
    <div className="hero-list-container">
      <div className="header">
        <h1>Listagem de Heróis</h1>
        <SearchBar className="search-bar" onSearch={setSearchTerm} />
        {selectedHeroes.length >= 2 && (
          <button 
            className="calculate-winner-button show"
            onClick={calculateWinner}
          >
            Calcular Vencedor
          </button>
        )}
      </div>
      <ul className="hero-list">
        {filteredHeroes.map((hero) => (
          <li
            key={hero.id}
            onClick={() => toggleHeroSelection(hero)}
            className={`hero-item ${selectedHeroes.includes(hero) ? 'selected' : ''}`}
          >
            <img src={hero.images.lg} alt={hero.name} className="hero-image" />
            <div className="hero-info">
              <h2>{hero.name}</h2>
              {selectedHeroes.includes(hero) && " (Selecionado)"}
              <p>Inteligência: {hero.powerstats.intelligence}</p>
              <p>Força: {hero.powerstats.strength}</p>
              <p>Velocidade: {hero.powerstats.speed}</p>
              <p>Durabilidade: {hero.powerstats.durability}</p>
              <p>Poder: {hero.powerstats.power}</p>
              <p>Combate: {hero.powerstats.combat}</p>
            </div>
          </li>
        ))}
      </ul>
      <WinnerModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedHeroes={selectedHeroes}
      />
    </div>
  );
};

export default HeroList;
