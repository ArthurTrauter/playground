bmApp.controller('BookListCtrl', function($scope) {
  $scope.books = [{
    title: 'CoffeeScript',
    isbn: '978-9-86490-050-1',
    author: 'Andreas Schubert'
  }, {
    title: 'JavaScript für Enterprise-Entwickler',
    isbn: '978-3-89864-728-1',
    author: 'Oliver Ochs'
  }, {
    title: 'CoffeeScript',
    isbn: '978-3-89864-829-5',
    author: 'Golo Roden'
  }];
})
