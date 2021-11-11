import './style.css';
import { addScore, displayScores } from './api.js';

const form = document.querySelector('#form');
const refresh = document.getElementById('refresh_btn');
const yourname = document.querySelector("#yourname")
const yourscore = document.querySelector("#yourscore")

refresh.addEventListener('click', displayScores)

form.addEventListener('submit', (e) => {    
  const name = yourname.value;
  const score = yourscore.value;
  if (name !== '' && score !== '') {
    const data = {
      user: name,
      score: score,
    };
    addScore(data);
    yourname.value = '';
    yourscore.value = '';   
  }
  e.preventDefault();
  displayScores();
});