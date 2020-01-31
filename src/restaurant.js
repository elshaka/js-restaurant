const restaurant = (() => {
  const run = () => {
    document.querySelector('body').innerHTML = '<h1 class="display-1">Hello restaurant!</h1>';
  };
  return { run };
})();

export default restaurant;
