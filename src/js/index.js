import '../style.css';

import {refreshData, addPlayer, createGame } from './interact-api'
const leaderboard = document.querySelector('.score-list');
const refreshBtn =document.getElementById('refresh');
const form = document.querySelector('form');
const names = document.getElementById('name');
const scores = document.getElementById('score');
let players;

window.addEventListener('DOMContentLoaded', ()=>{
    refreshData(players,leaderboard);
} );

refreshBtn.addEventListener('click', ()=>{
    refreshData(players, leaderboard);
});

form.addEventListener('submit', async (e) =>{
    const obj = {
        user: document.getElementById('name').value,
        score: document.getElementById('score').value
        
    }
    e.preventDefault();
     await addPlayer(obj);
    // refreshData(players, leaderboard);
    form.reset();
});