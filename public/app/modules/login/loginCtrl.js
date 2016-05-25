(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:loginCtrl
   * @description
   * # loginCtrl
   * Controller of the app
   */

  angular
    .module('login')
    .controller('LoginCtrl', Login);

  /*
   * recommend
   * Using function declarations
   * and bindable members up top.
   */

  Login.$inject = ['$firebaseAuth', '$firebaseObject', '$state', 'firebaseUrl', '$log'];

  function Login($firebaseAuth, $firebaseObject, $state, firebaseUrl, $log, $mdToast) {

    var vm = this;
    vm.isLoggedIn = false;

    var ref = new Firebase(firebaseUrl);
    var authObj = $firebaseAuth(ref);

    //initialize and get current authenticated state:
    init();

    function authDataCallback(authData) {
      if (authData) {
        console.log("User " + authData.uid + " is logged in with " + authData.provider);
      } else {
        console.log("User is logged out");
      }
    }

    ref.onAuth(authDataCallback);

    function init() {
      authObj.$onAuth(authDataCallback);
      if (authObj.$getAuth()) {
        vm.isLoggedIn = true;
      }

      var authData = ref.getAuth();
      if (authData) {
        console.log("User " + authData.uid + " is logged in with " + authData.provider);
      } else {
        console.log("User is logged out");
      }

    }

    function authDataCallback(authData) {
      if (authData) {
        console.log("User " + authData.uid + " is logged in with " + authData.provider);
        vm.isLoggedIn = true;
        var user = $firebaseObject(ref.child('users').child(authData.uid));
        user.$loaded().then(function() {
          if (user.name == undefined) {
            var newUser = {
              rooms: [],
              maxRooms: 5
            };
            if (authData.google) {
              newUser.name = authData.google.displayName;
            }
            if (authData.github) {
              newUser.name = authData.github.username;
            }

            user.$ref().set(newUser);

          }
        });

      } else {
        console.log("User is logged out");
        vm.isLoggedIn = false;
      }
    }

    vm.logout = function() {
      ref.unauth();
      $state.go('home.dashboard');
    }

    vm.createUser = function(userObject) {
      ref.createUser({
        email: userObject.email,
        password: userObject.password
      }, function(err, user) {
        if (err) {
          $log.warn("Error creating user: ", err);
        } else {
          ref.authWithPassword({
            email: userObject.email,
            password: userObject.password
          }, function(err, data) {
            if (err) $log.warn("Error logging in")

          });

          $log.log("created user: ", user);
          $mdToast.show(
            $mdToast.simple()
            .content('Thanks for signing up!')
            .position('top right')
            .hideDelay(2000)
          );

          $state.go('home');
        }
      })
    }

    vm.loginUser = function(user, $mdToast) {
      ref.authWithPassword({
        email: user.email,
        password: user.password
      }, function(err, user) {
        if (err) {
          $log.warn("Error creating user: ", err);
          $state.go('home.dashboard');
        } else {
          $state.go('home.dashboard');
          $log.log("Auth data: ", user);
        }
      })
    }

    var firebaseAuthLogin = function(provider) {
      authObj.$authWithOAuthPopup(provider).then(function(authData) {
        console.log("Authenticated successfully with provider " + provider + " with payload:", authData);
      }).catch(function(error) {
        console.error("Authentication failed:", error);
      });

    }

    vm.googleLogin = function() {
      firebaseAuthLogin('google');
    }

    vm.githubLogin = function() {
      firebaseAuthLogin('github');
    }


  }




})();
