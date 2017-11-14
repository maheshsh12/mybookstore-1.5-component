function BooksController(BookService,$localStorage) {
  var ctrl = this;
  ctrl.books = [];
  ctrl.$onInit = function() {
    BookService.getAllBooks().then(function(response){
      ctrl.books = response.data.items;
    });

    ctrl.mybooks = $localStorage.mybooks || [];
    console.log(ctrl.mybooks);
  };
  ctrl.filterBookList =  function(query){
    if(query.length >=3){
      BookService.getAllBooks(query).then(function(response){
        ctrl.books = response.data.items;
      });
    }
  }
}

angular
  .module('components.book')
  .controller('BooksController', BooksController);
