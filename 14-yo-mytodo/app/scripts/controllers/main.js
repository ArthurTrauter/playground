'use strict';

/**
 * @ngdoc function
 * @name 14YoMytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 14YoMytodoApp
 */
angular.module('14YoMytodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
