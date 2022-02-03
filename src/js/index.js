import '../style.css';

import { refreshData, addPlayer } from './interact-api.js';

const leaderboard = document.querySelector('.score-list');
const refreshBtn = document.getElementById('refresh');
const form = document.querySelector('form');
const names = document.getElementById('name');
const scores = document.getElementById('score');
let players;

window.addEventListener('DOMContentLoaded', () => {
  refreshData(players, leaderboard);
});

refreshBtn.addEventListener('click', () => {
  refreshData(players, leaderboard);
});

form.addEventListener('submit', async (e) => {
  const obj = {
    user: names.value,
    score: scores.value,
  };
  e.preventDefault();
  await addPlayer(obj);
  form.reset();
});