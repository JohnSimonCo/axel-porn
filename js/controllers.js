var pornControllers = angular.module('pornControllers', []);
 
pornControllers.controller('DefaultController', ['$scope',
	function ($scope) {
		$scope.star = server.star;

		$scope.premium = function() { return server.premium; };
		$scope.goPremium = function() {
			server.premium = true;
		};

		$scope.togglePremiumSignup = function(state) {
			$scope.premiumSignup = state;
		};

		$scope.footer = server.footer;
	}
])

pornControllers.controller('FeedController', ['$scope',
	function ($scope) {
		$scope.sections = server.sections;
		$scope.news = server.news;
	}
]);
 
pornControllers.controller('VideoController', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		$scope.video = server.categories[$routeParams.category].videos[$routeParams.videoId];
		$scope.found = typeof $scope.video !== 'undefined';
	}
]);

pornControllers.controller('ArticleController', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		$scope.article = server.news[$routeParams.articleId];
		$scope.found = typeof $scope.article !== 'undefined';
	}
]);

pornControllers.controller('VideosController', ['$scope', '$location',
	function($scope, $location) {
		var currentTags;
		$scope.videos = server.videos;
		$scope.selected = function() {

		}
		$scope.show = function(tags) {

		}
		$scope.toggleTag = function(tag, state) {

		};
	}
]);

pornControllers.controller('CategoryController', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		$scope.categories = server.categories;
		$scope.currentCategory = server.categories[$routeParams.categoryId] || server.categories[server.defaultCategory];
	}
]);
	
pornControllers.controller('AboutController', ['$scope', 
	function($scope) {
		$scope.about = server.about;
	}
]);
	
pornControllers.controller('LinksController', ['$scope', 
	function($scope) {
		$scope.links = server.star.links;
	}
]);