function CommonController($state,$localStorage) {
  var ctrl = this;
  var mybooks = $localStorage.mybooks || [];
  $localStorage.mybooks  = mybooks;
}
angular
  .module('common')
  .controller('CommonController', CommonController);
