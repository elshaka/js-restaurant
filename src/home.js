import './css/home.scss';
import Falafel from './images/falafel.png';

const home = document.createElement('div');
const h2 = document.createElement('h2');
const p1 = document.createElement('p');
const falafel = document.createElement('img');

home.id = 'home';
h2.appendChild(document.createTextNode('Since 2020'));
p1.appendChild(document.createTextNode('The greatest and tastiest middle eastern food.'));
falafel.src = Falafel;
home.appendChild(h2);
home.appendChild(p1);
home.appendChild(falafel);

export default home;
