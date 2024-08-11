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

function submitData() {
    data = {
        matchid: window.location.pathname.split('/').pop(),
        team1score: document.getElementById("team1score").valueAsNumber,
        team2score: document.getElementById("team2score").valueAsNumber,
        team1games: document.getElementById("team1games") ? document.getElementById("team1games").valueAsNumber : null,
        team2games: document.getElementById("team2games") ? document.getElementById("team2games").valueAsNumber : null,
        team1penscore: document.getElementById("team1penscore") ? document.getElementById("team1penscore").valueAsNumber : null,
        team2penscore: document.getElementById("team2penscore") ? document.getElementById("team2penscore").valueAsNumber : null,
        team1sets: [],
        team2sets: []
    };
    for (let i = 1; i <= 6; i++) {
        set1 = document.getElementById(`team1set${i}`);
        set2 = document.getElementById(`team2set${i}`);
        if (set1) data.team1sets.push(set1.value);
        if (set2) data.team2sets.push(set2.value);
    }
    fetch('/portal/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    }).catch((error) => {
        console.error('Error:', error);
    });
}