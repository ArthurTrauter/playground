describe("E2E: book details view", function() {

  beforeEach(function() {
    browser.get('http://localhost:8080/');
  });

  it('should show the correct book details', function() {
    // browser().navigateTo('#/books/978-3-89864-728-1');
    browser.get('http://localhost:8080/#/books/978-3-89864-728-1');

    expect(element('.bm-book-title').html())
      .toBe('JavaScript für Enterprise-Entwickler');
    expect(element('.bm-book-subtitle').html())
      .toBe('Professionell programmieren im Browser und auf dem Server');
    expect(element('.bm-book-isbn').html())
      .toBe('978-3-89864-728-1');

  });
});
