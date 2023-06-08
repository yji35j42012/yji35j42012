(function() {
    var Router = {
      routes: {},
      rootDiv: null,

      addRoute: function(route, callback) {
        this.routes[route] = callback;
      },

      navigateTo: function(route) {
        history.pushState(null, null, route);
        this.handleRoute(route);
      },

      handleRoute: function(route) {
        var contentDiv = this.rootDiv.querySelector('#content');
        contentDiv.innerHTML = '';

        if (this.routes.hasOwnProperty(route)) {
          this.routes[route](contentDiv);
        } else {
          contentDiv.innerHTML = '<h1>Page Not Found</h1>';
        }
      },

      init: function(rootId) {
        this.rootDiv = document.getElementById(rootId);
        var self = this;

        window.addEventListener('popstate', function() {
          self.handleRoute(window.location.pathname);
        });

        this.handleRoute(window.location.pathname);
      }
    };

    // 將 Router 加入全局對象
    window.Router = Router;
  })();
