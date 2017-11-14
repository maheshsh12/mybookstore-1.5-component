var bookDetail = {
	bindings: {
    	book: '<'
  	},
  	templateUrl: './book-detail.html',
};

angular
  .module('components.book')
  .component('bookDetail', bookDetail);