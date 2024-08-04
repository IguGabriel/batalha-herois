// src/store/heroStore.js
import create from 'zustand';

export const useHeroStore = create((set) => ({
  heroes: [],
  setHeroes: (heroes) => set({ heroes }),
  selectedHeroes: [],
  setSelectedHeroes: (selectedHeroes) => set({ selectedHeroes }),
  winner: null,
  setWinner: (winner) => set({ winner }),
}));
