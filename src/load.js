const scoreList = [{
  name: 'Adam',
  score: 100,
},
{
  name: 'Adam2',
  score: 90,
},
{
  name: 'Adam3',
  score: 80,
},
{
  name: 'Adam4',
  score: 70,
},
{
  name: 'Adam5',
  score: 60,
},
];

const loadList = (items, container) => {
  items.forEach((e) => {
    const liItem = document.createElement('li');
    liItem.classList.add('score');
    container.appendChild(liItem);
    liItem.innerHTML = `${e.name}: ${e.score}`;
  });
};

export { scoreList, loadList };