import './style.css';
import { scoreList, loadList } from './load.js';

const ulContain = document.querySelector('#score_list');

loadList(scoreList, ulContain);
