import './css/index.scss';
import Logo from './images/logo.png';
import nav from './nav';
import home from './home';
import menu from './menu';
import contact from './contact';

const index = (() => {
  const container = document.createElement('div');
  const logo = document.createElement('img');
  const content = document.createElement('div');
  const pages = { home, menu, contact };

  const setActiveTab = (tab) => {
    document.querySelectorAll('.tab').forEach(tab => {
      tab.className = 'tab';
    });
    tab.className = 'tab active';
  };
  const load = () => {
    container.id = 'container';
    container.className = 'container';
    content.id = 'content';
    content.className = 'content';
    logo.id = 'logo';
    logo.src = Logo;
    container.appendChild(logo);
    container.appendChild(nav(Object.keys(pages)));
    container.appendChild(content);
    document.body.appendChild(container);

    content.appendChild(home);
    setActiveTab(document.querySelector('nav li'));

    Object.entries(pages).forEach((entry) => {
      const id = entry[0];
      const page = entry[1];
      const link = document.getElementById(id);
      link.addEventListener('click', (e) => {
        setActiveTab(e.target.parentNode);
        content.removeChild(content.firstChild);
        content.appendChild(page);
      });
    });
  };

  return { load };
})();

index.load();
