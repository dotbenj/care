angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $careApi, $state, $ionicPopup) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/signup.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalSign = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.signup = function(){
    $scope.modalSign.show();
  };

  $scope.closeSignup = function() {
    $scope.modalSign.hide();
  };

  // Open the login modal
  $scope.logout = function() {
    $scope.loginData = {};
  };

  $scope.goAppleCare = function(){
    if(ionic.Platform.isIOS()){
      $state.go('app.applecare');
    }else{
      $state.go('app.tuto');
    }
  };

  $scope.goTuto = function(){
    $state.go('app.tuto');
  };

  $scope.goMyInfo = function(){
    $state.go('app.myinfo');
  }

  $scope.doSignUp = function(){
    //test without server
    /*$scope.loginData.id = "00000000001";
    $scope.modalSign.hide();
    $state.go('app.addvehicule');*/

    $careApi.signup($scope.loginData.username,$scope.loginData.email,$scope.loginData.password).then(
      function(success){
        console.log("Signup success:",success);
        $scope.loginData.id = success.user_id;
        $scope.modalSign.hide();
        $state.go('app.addvehicule');
      },
      function(error){
        console.log("Signup error:",error);
        $scope.loginData = {};
        var myPopup = $ionicPopup.show({
          template: error,
          title: 'Error',
          scope: $scope,
          buttons: [{ text: 'Cancel' }]
        });
      }
    );
  }

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    $careApi.login($scope.loginData.username,$scope.loginData.password).then(
      function(success){
        console.log("login success:",success);
        $scope.loginData.id = success.user_id;
        $scope.modal.hide();
      },
      function(error){
        console.log("login error:",error);
        $scope.loginData = {};
      }
    );
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('MyInfoCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
