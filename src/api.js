// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
//   method: 'POST',
//   body: JSON.stringify({name:'myLeadGame'
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// }).then((response) => response.json())
//   .then((json) => console.log(json));
// {result: 'Game with ID: YooLA4oSa1dXs7SRArpW added.'}




const scoreSrc = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YooLA4oSa1dXs7SRArpW/scores/'
const nameInp = document.querySelector('#yourname');
const scoreInp = document.querySelector("#yourscore");

const getApi = async () => {
  const getScores = await fetch(scoreSrc, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return getScores.json();
};

const postApi = async () => {
  const postScores = await fetch(scoreSrc,{
    method:'POST',
    body: JSON.stringify(
      {
      name: nameInp.value,
      score: scoreInp.value,
    }),
    headers:{
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return postScores.json()
}


