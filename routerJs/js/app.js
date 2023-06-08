window.addEventListener('DOMContentLoaded', function() {
    Router.init('app');
  });

  // 添加路由規則
  Router.addRoute('/', function(contentDiv) {
    contentDiv.innerHTML = '<h1>Welcome to the Home Page</h1>';
  });

  Router.addRoute('/about', function(contentDiv) {
    contentDiv.innerHTML = '<h1>About Us</h1><p>We are a company that...</p>';
  });

  Router.addRoute('/contact', function(contentDiv) {
    contentDiv.innerHTML = '<h1>Contact Us</h1><p>You can reach us at...</p>';
  });
