// src/services/api.js
const API_URL = 'https://homologacao3.azapfy.com.br/api/ps/metahumans';

export const fetchHeroes = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Erro ao buscar heróis');
    return await response.json();
  } catch (error) {
    console.error('Erro:', error);
    return [];
  }
};