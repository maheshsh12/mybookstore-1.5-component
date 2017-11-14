var header = {
  template:`<header>
	<div  class="container">
	  <!-- LOGO -->
	  <div class="topbar-left">
		<a href="/" class="logo">
		  <span>MyBookStore</span>
		</a>
	  </div>
    </div>
  </header>`
};

angular
  .module('common')
  .component('headerBar', header);
