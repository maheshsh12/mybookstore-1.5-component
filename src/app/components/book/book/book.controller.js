function BookController($localStorage,$filter) {
  var ctrl = this;
  ctrl.constructor =function($scope) {
      ctrl.$scope = $scope;
  }
  ctrl.addToWishlist = function (book) {
    var wishlistItems = $localStorage.mybooks || [];
    wishlistItems.push(book);
    $localStorage.mybooks = wishlistItems;
  };
  ctrl.isAdded = function(book){
    
    var wishlistItems = $localStorage.mybooks || [];
    if(wishlistItems.length){
      var item = $filter('filter')(wishlistItems, {id: book.id})[0];
      if(item)
        return true;
      else
        return false;
    }
    else{
      return false;
    }
  }
}

angular
  .module('components.book')
  .controller('BookController', BookController);
