
;(function() {


  /**
   * Definition of the main app module and its dependencies
   */
  angular
    .module('diagnal', [
      'ui.router','ui.router.state.events','ui.bootstrap'
    ])
    .config(config);


  /** App routing section */

  config.$inject = ['$stateProvider','$urlRouterProvider','$locationProvider', '$httpProvider'];

  function config($stateProvider,$urlRouterProvider) {

      $stateProvider
          .state('login', {
              url: '/',
              templateUrl: 'views/home.html',
              controller: 'HomeController'
          })
          .state('search', {
              url: '/search',
              templateUrl: 'views/search.html',
              controller: 'SearchController'
          });
      $urlRouterProvider.otherwise('/');
  }


})();
