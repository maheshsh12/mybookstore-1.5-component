function BookService($http) {
  var api_key = 'AIzaSyDwJEIHxvudlfkakSAOvU9n8-jsbZtTtT4';
  return {
    getAllBooks: function(query){
      query = query?query:'angularjs';
      return $http.get('https://www.googleapis.com/books/v1/volumes?q='+query+'&maxResults=10&projection=full&key='+api_key);
    }
  };
}

angular
  .module('components.book')
  .factory('BookService', BookService);
