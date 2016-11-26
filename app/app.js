'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'ui.bootstrap'
]).
config(['$locationProvider', '$routeProvider',function($locationProvider, $routeProvider,$dialog) {
  $locationProvider.hashPrefix('!');
  

  $routeProvider.otherwise({redirectTo: '/view1'});

  

  

  }]).controller('ModalCtrl',['$scope','$uibModal',function($scope,$uibModal){

  	$uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'loginModal.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      //size: size,
      //appendTo: parentElem,
      resolve: {
        //items: function () {
        //  return $ctrl.items;
        }
      });

  }]).controller('ModalInstanceCtrl',['$scope','$uibModalInstance',function($scope,$uibModalInstance){
  	$scope.confirm = function(){
  		$uibModalInstance.close('checkIt');
  	};
  }]);