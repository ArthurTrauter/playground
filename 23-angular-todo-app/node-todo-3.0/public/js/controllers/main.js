(function() {
  'use strict';

  angular.module('todoController', [])

  .controller('mainController', function($scope, $http, Todos) {
    $scope.formData = {};

    // when landing on the page, get all todos and show them
    Todos.get('/api/todos')
      .success(function(data) {
        $scope.todos = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {

      if (!$.isEmptyObject($scope.formData)) {

        Todos.create($scope.formData)
          .success(function(data) {
            $scope.formData = {}; // clear the form so our user is ready to enter another
            $scope.todos = data;
          })
          .error(function(data) {
            console.log('Error: ' + data);
          });
      }
    };

    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
      Todos.delete(id)
        .success(function(data) {
          $scope.todos = data;
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };

  });

}());
