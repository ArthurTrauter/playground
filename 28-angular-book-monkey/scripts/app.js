  var bmApp = angular.module('bmApp', ['ngRoute']);

  bmApp.config(function($routeProvider) {
    $routeProvider.when('/books/:isbn', {
      templateUrl: './scripts/templates/book_details.html',
      controller: 'BookDetailsCtrl'
    });
  });
