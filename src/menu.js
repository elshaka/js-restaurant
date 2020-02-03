import './css/menu.scss';

const menu = document.createElement('div');
const h2 = document.createElement('h2');
const grid = document.createElement('div');
const items = [
  'Hummus',
  'Manakeesh',
  'Grilled halloumi',
  'Foul meddamas',
  'Falafel',
  'Tabouleh',
  'Moutabal/baba ghanoush',
  'Fattoush',
  'Umm ali',
  'Shanklish',
  'Shawarma',
  'Shish tawook',
  'Dolma',
  'Kofta',
  'Quwarmah Al Dajaj',
  'Mansaf',
  'Kebab karaz',
];

menu.id = 'menu';
h2.appendChild(document.createTextNode('Our menu'));
items.forEach(item => {
  const itemDiv = document.createElement('div');
  itemDiv.appendChild(document.createTextNode(item));
  grid.appendChild(itemDiv);
});
menu.appendChild(h2);
menu.appendChild(grid);

export default menu;
