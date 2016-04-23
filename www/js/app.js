// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.service'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.myinfo', {
      url: '/myinfo',
      views: {
        'menuContent': {
          templateUrl: 'templates/myinfo.html',
          controller: 'MyInfoCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/myinfo/:roadId',
    views: {
      'menuContent': {
        templateUrl: 'templates/road.html',
        controller: 'MyInfoCtrl'
      }
    }
  })

  .state('app.ranking', {
    url: '/ranking',
    views: {
      'menuContent': {
        templateUrl: 'templates/ranking.html'
      }
    }
  })

  .state('app.magic', {
    url: '/magic',
    views: {
      'menuContent': {
        templateUrl: 'templates/magic.html'
      }
    }
  })

  .state('app.landing', {
    url: '/landing',
    views: {
      'menuContent': {
        templateUrl: 'templates/landing.html'
      }
    }
  })

  .state('app.addvehicule', {
    url: '/addvehicule',
    views: {
      'menuContent': {
        templateUrl: 'templates/addvehicule.html'
      }
    }
  })

  .state('app.applecare', {
    url: '/applecare',
    views: {
      'menuContent': {
        templateUrl: 'templates/applecare.html'
      }
    }
  })

  .state('app.tuto', {
    url: '/tuto',
    views: {
      'menuContent': {
        templateUrl: 'templates/tuto.html'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/landing');
});
