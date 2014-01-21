var pornDirectives = angular.module('pornDirectives', [])

.directive('scroll', function() {
	return {
		restrict: 'AC',
		scope: {scrollMargin: '@'},
		link: function link(scope, element, attrs) {
			element.css('position', 'fixed');
			var $window = $(window),
				position = $(element).position().top - (scope.scrollMargin || 0),
				
				listener = function() {
					if(window.scrollY < position) {
						element.css('margin-top', -window.scrollY + 'px');
		            } else {
						element.css('margin-top', -position + 'px');
		            }
				};	

			$window.scroll(listener);
			scope.$on("$destroy", function() {
				$window.off('scroll', listener);
    		});
		}
	};
});