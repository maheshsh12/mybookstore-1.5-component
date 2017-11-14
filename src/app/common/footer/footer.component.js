var footer = {
  template:`<footer class="footer">
	<div class="container">
		<p class="copyright-text">2017 &copy MyBookStore</p>
	</div>
</footer>`
};

angular
  .module('common')
  .component('footerBar', footer);
