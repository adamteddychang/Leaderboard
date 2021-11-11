const scoreSrc = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/NNFdrdYO5isLUHbaJxs8/scores/';
const scores = document.querySelector('#score_list');
let scoresArr = [];

const gameScores = async () => {
  const response = await fetch(scoreSrc)
    .then((resp) => resp.json())
    .then((data) => data.result)
    .catch(() => 'error');
  return response;
};

const displayScores = async () => {
  await gameScores().then((resp) => {
    if (typeof resp === 'object') {
      scoresArr = Array.from(resp);
      scores.innerHTML = '';
      if (scoresArr.length > 0) {
        scoresArr.forEach((e) => {
          const scoresTemp = `<li class="score" >${e.user}: ${e.score}</li>`;
          scores.innerHTML += scoresTemp;
        });
      }
    }
  });
};

const addScore = async (data) => {
  await fetch(scoreSrc, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  }).then((response) => response.json());
};

exports.displayScores = displayScores;
exports.gameScores = gameScores;
exports.addScore = addScore;