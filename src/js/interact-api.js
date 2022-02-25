import displayData from './displayData.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/A9GgGr2ZTgKdQScdJRGi/scores/';

export const refreshData = (players, leaderboard) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      players = json.result;
      displayData(players, leaderboard);
    });
};

export const addPlayer = async (data) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  });

  const { result } = await response.json();
  return result;
};
