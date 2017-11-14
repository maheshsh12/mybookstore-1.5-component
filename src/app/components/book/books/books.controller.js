function BooksController(BookService,$localStorage) {
  var ctrl = this;
  ctrl.books = [];
  ctrl.isInitiated = false;
  ctrl.isProcessed = false;
  ctrl.$onInit = function() {
    ctrl.mybooks = $localStorage.mybooks || [];
  };
  ctrl.filterBookList =  function(query){
    if(query.length >=3){
      ctrl.isInitiated = true;
      ctrl.isProcessed = true;
      BookService.getAllBooks(query).then(function(response){
        ctrl.books = response.data.items;
        ctrl.isProcessed = false;
        console.log(ctrl.books);
      });
    }
  }
}

angular
  .module('components.book')
  .controller('BooksController', BooksController);
