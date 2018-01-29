'use strict';

angular.module('emission.main.bear',['nvd3', 'emission.services', 'ionic-datepicker', 'emission.main.metrics.factory', 'angularLocalStorage', 'emission.plugin.logger'])

.controller('BearCtrl', function($scope, $ionicActionSheet, $ionicLoading,
                                    CommHelper, $window, $ionicPopup,
                                    FootprintHelper, CalorieCal, $ionicModal, $timeout, storage,
                                    $ionicScrollDelegate, $rootScope, $location,  $state, ReferHelper, $http, Logger) {
  $scope.onLoad = function(){
      CommHelper.getHappiness().then(function(response) {
          console.log("Success!");
          console.log(response);
          refreshInfo();
      }, function(error) {
          console.log(error);
          console.log("Failed");
      });
  };
});
