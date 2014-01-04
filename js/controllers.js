$( ".feed-video-title" ).hover(
  function() {
  	alert('hover');
  }, function() {
  	alert('loljk');
  }
);

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
		$scope.videos = server.videos;
		$scope.tags = server.tags;

		var selectedTags = $location.search().tags;
		if(typeof selectedTags !== 'object') {
			var old = selectedTags;
			selectedTags = [];
			if(old) selectedTags.push(old);
		} 

		var updateUrl = function() {
			$location.search('tags', selectedTags).replace();
		}
		$scope.selected = function(tag) {
			return contains(selectedTags, tag);
		}
		$scope.showTag = function(tag) {
			return !$scope.tagQuery || $scope.tagQuery.length <= 0 || contains(tag.toLowerCase(), $scope.tagQuery.toLowerCase());
		}
		$scope.showVideo = function(tags) {
			if(selectedTags.length > 0) {
				for(var tag in tags) {
					if(contains(selectedTags, tags[tag])) return true;
				}
				return false;
			} else {
				return true;
			}
		}
		$scope.showTagQueryClear = function() {
			return $scope.tagQuery && $scope.tagQuery.length > 0; 
		}
		$scope.showTagsClear = function() {
			return selectedTags.length > 0; 
		}
		$scope.toggleTag = function(tag, state) {
			state = !state;
			if(state) {
				selectedTags.push(tag);
			} else if(contains(selectedTags, tag)) {
				selectedTags.splice(selectedTags.indexOf(tag), 1);
			}
			updateUrl();
		};
		$scope.clearTags = function() {
			selectedTags.splice(0, selectedTags.length);
			updateUrl();
		}
		$scope.clearTagQuery = function() {
			$scope.tagQuery = '';
		}
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