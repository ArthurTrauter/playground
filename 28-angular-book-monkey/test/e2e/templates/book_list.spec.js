describe("E2E: book list view", function() {

  // Define the array of books in the expected order,
  // Sorted by title
  var expectedBooks = [{
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

  // Derive an array that only contains titles
  // for easier expectation cehcks
  var oderedTitles = expectedBooks.map(function(book) {
    return book.title;
  });

  beforeEach(function() {
    browser().navigateTo('#/books');
    browser().reload();
  });

  var selector = 'table.bm-book-list tr';

  it('should show the correct number of books', function() {
    expect(repeater(selector).count()).toEqual(expectedBooks.length);
  });

  it('should show the books in the proper order', function() {
    // Are they in the expected order
    // ascending sorted by title
    expect(repeater(selector).column('book.title')).toEqual(orderedTitles);
  });

  it('should show the correct book information', function () {
    // do the other book details (isbn, author) match?
    for (var i = 0, n = expectedBooks.length; i < n; i++) {
      expect(repeater(selector).row(i))
        .toEqual([
          expectedBooks[i].title,
          expectedBooks[i].author,
          expectedBooks[i].isbn
        ]);
    }
  });

});
