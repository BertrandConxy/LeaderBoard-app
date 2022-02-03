 const displayData = (player, display) => {
    const apiData = player.sort((a,b) => parseFloat(b.score) - parseFloat(a.score));
    apiData.forEach((play) => {
        const leaderboard = document.querySelector('.score-list');
        display.innerHTML = `<p class='rank'>${play.user} : ${play.score} </p>`;
        leaderboard.appendChild(display);
    })
}

export default displayData;