import LoginView from './views/login/login.js';

function router() {
  const routes = [
    { path: '/', view: 'Home' },
    { path: '/login', view: 'Login' },
    { path: '/dash', view: 'Dashboard' },
    { path: '/contact', view: 'Contact' },
    { path: '/setting', view: 'Setting' },
  ];

  let matchedRoute;
  routes.map((route) => {
    if (location.pathname == route.path) {
      matchedRoute = route;
    }
  });
  return matchedRoute;
}

function navigateTo(url) {
  history.pushState(null, null, url);
}

function renderView(view) {
  document.querySelector('div#renderer').innerHTML = view;
}

window.addEventListener('DOMContentLoaded', () => {
  navigateTo(router().path);
  renderView(router().view);

  console.log(LoginView.html());
});

document.addEventListener('click', (e) => {
  if (e.target.hasAttribute('page-link')) {
    e.preventDefault();
    navigateTo(e.target.href);
    renderView(router().view);
  }
});

window.onpopstate = (e) => {
  console.log(e);
};
