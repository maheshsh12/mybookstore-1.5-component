var app = {
  templateUrl: './common.html',
  controller: 'CommonController'
};

angular
  .module('common')
  .component('app', app)
  .config(function ($stateProvider, $urlRouterProvider,$httpProvider,$locationProvider) {
    $urlRouterProvider.otherwise("/app");
    $stateProvider
      .state('app', {
        url: '/app',
        redirectTo: 'books',
        component: 'app'
      });

  });
