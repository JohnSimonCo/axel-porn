var pornDirectives = angular.module('pornDirectives', [])

.directive('scrollis', function() {
	return {
		restrict: 'AC',
		scope: {margin: '@scrollMargin'},
		link: function link(scope, element, attrs) {
			element.css('position', 'fixed');
			var position = $(element).position().top - (scope.margin || 0);
			$(window).scroll(function() {
				if(window.scrollY < position) {
					element.css('margin-top', -window.scrollY + 'px');
	            } else {
					element.css('margin-top', -position + 'px');
	            }
			});
		}
	};
});