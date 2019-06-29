angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('pesquisar', {
    url: '/page2',
    templateUrl: 'templates/pesquisar.html',
    controller: 'pesquisarCtrl'
  })

  .state('cartTabDefaultPage', {
    url: '/page3',
    templateUrl: 'templates/cartTabDefaultPage.html',
    controller: 'cartTabDefaultPageCtrl'
  })

  .state('cloudTabDefaultPage', {
    url: '/page4',
    templateUrl: 'templates/cloudTabDefaultPage.html',
    controller: 'cloudTabDefaultPageCtrl'
  })

  .state('page1', {
    url: '/page1',
    templateUrl: 'templates/page1.html',
    abstract:true
  })

  .state('cardapio', {
    url: '/page5',
    templateUrl: 'templates/cardapio.html',
    controller: 'cardapioCtrl'
  })

  .state('perfilIFOME', {
    url: '/',
    templateUrl: 'templates/perfilIFOME.html',
    controller: 'perfilIFOMECtrl'
  })

$urlRouterProvider.otherwise('')


});