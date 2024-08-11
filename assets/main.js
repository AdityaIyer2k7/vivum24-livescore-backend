changeScore1 = (score) => {
    score1 = document.getElementById("team1score");
    if (!score1.valueAsNumber) score1.value = 0;
    score1.value = score1.valueAsNumber + score;
}

changeScore2 = (score) => {
    score2 = document.getElementById("team2score");
    if (!score2.valueAsNumber) score2.value = 0;
    score2.value = score2.valueAsNumber + score;
}

setScore1 = (score) => {
    score1 = document.getElementById("team1score");
    score1.value = score;
}

setScore2 = (score) => {
    score2 = document.getElementById("team2score");
    score2.value = score;
}

changePenScore1 = (score) => {
    score1 = document.getElementById("team1penscore");
    if (!score1.valueAsNumber) score1.value = 0;
    score1.value = score1.valueAsNumber + score;
}

changePenScore2 = (score) => {
    score2 = document.getElementById("team2penscore");
    if (!score2.valueAsNumber) score2.value = 0;
    score2.value = score2.valueAsNumber + score;
}

setPenScore1 = (score) => {
    score1 = document.getElementById("team1penscore");
    score1.value = score;
}

setPenScore2 = (score) => {
    score2 = document.getElementById("team2penscore");
    score2.value = score;
}

winGame1 = () => {
    score1 = document.getElementById("team1score");
    score2 = document.getElementById("team2score");
    score1.value = 0;
    score2.value = 0;
    games1 = document.getElementById("team1games");
    if (!games1.valueAsNumber) games1.value = 0;
    games1.value = games1.valueAsNumber + 1;
}

winGame2 = () => {
    score1 = document.getElementById("team1score");
    score2 = document.getElementById("team2score");
    score1.value = 0;
    score2.value = 0;
    games2 = document.getElementById("team2games");
    if (!games2.valueAsNumber) games2.value = 0;
    games2.value = games2.valueAsNumber + 1;
}
