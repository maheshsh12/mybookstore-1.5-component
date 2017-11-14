var books = {
  templateUrl: './books.html',
  controller: 'BooksController'
};

angular
  .module('components.book')
  .component('books', books)
  .config(function ($stateProvider) {
     $stateProvider
      .state('books', {
        parent: 'app',
        url: '/books',
        component: 'books'
      });
  }
);
