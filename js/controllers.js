var pornControllers = angular.module('pornControllers', []);
 
pornControllers.controller('DefaultController', ['$scope',
        function ($scope) {
                $scope.person = person;

                $scope.premium = function() { return server.premium; };
                $scope.goPremium = function() {
                        server.premium = true;
                };

<<<<<<< HEAD
                $scope.togglePremiumSignup = function(state) {
                        $scope.premiumSignup = state;
                        setScrolling(!state);
                };
=======
		$scope.togglePremiumSignup = function(state) {
			$scope.premiumSignup = state;
			setScrolling(!state);
		};
>>>>>>> 42603111620d777284ab3c5271cf7b9feaf7ee0c

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

pornControllers.controller('CategoryController', ['$scope', '$routeParams', 
        function($scope, $routeParams) {
                $scope.category = server.categories[$routeParams.category];
                $scope.found = typeof $scope.category !== 'undefined';
        }
]);
        
pornControllers.controller('CategoriesController', ['$scope', 
        function($scope) {
                $scope.categories = server.categories;
        }
]);
        
pornControllers.controller('AboutController', ['$scope', 
        function($scope) {
                
        }
]);
        
pornControllers.controller('LinksController', ['$scope', 
        function($scope) {
                $scope.links = person.links;
        }
]);