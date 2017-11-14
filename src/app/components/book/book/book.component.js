var book = {
  bindings: {
    book: '<'
  },
  templateUrl: './book.html',
  controller: 'BookController'
};
angular
  .module('components.book')
  .component('book', book);