const nav = (menuItems) => {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  nav.id = 'nav';
  menuItems.forEach((menuItem) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.id = menuItem;
    a.appendChild(document.createTextNode(menuItem));
    li.appendChild(a);
    li.className = 'tab';
    ul.appendChild(li);
  });
  nav.appendChild(ul);
  return nav;
};

export default nav;
