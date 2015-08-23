  bmApp.controller('BookDetailsCtrl', function($scope) {
    $scope.book = {
      title : 'JavaScript für Enterprise-Entwickler',
      subtitle: 'Professionell programmieren im Browser...',
      isbn: '978-3-89864-728-1',
      abstract: 'JavaScript ist längst nicht mehr ur für klassische Webprogrammierer interessant.',
      numPages: 302,
      author: 'Oliver Ochs',
      publisher: {
        name : 'dpunkt.verlag',
        url : 'http://dpunkt.de'
      }
    };
  });
