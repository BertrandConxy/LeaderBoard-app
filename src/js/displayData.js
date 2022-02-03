const displayData = (player, display) => {
  const apiData = player.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
  display.innerHTML = '';
  apiData.forEach((play) => {
    display.innerHTML += `<p class='rank'>${play.user} : ${play.score} </p>`;
  });
};

export default displayData;