import './style.css';
import { scoreList, loadList } from './load.js';
import './api.js'

const ulContain = document.querySelector('#score_list');

loadList(scoreList, ulContain);
