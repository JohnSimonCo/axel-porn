var pornApp = angular.module('pornApp', [
  'ngRoute',
  'pornControllers'
]);

pornApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/feed', {
        templateUrl: 'partials/feed.html',
        controller: 'FeedController'
      }).
      when('/video/:category/:videoId', {
        templateUrl: 'partials/video.html',
        controller: 'VideoController'
      }).
      when('/article/:articleId', {
        templateUrl: 'partials/article.html',
        controller: 'ArticleController'
      }).
      when('/category/:category', {
        templateUrl: 'partials/category.html',
        controller: 'CategoryController'
      }).
      when('/categories', {
        templateUrl: 'partials/categories.html',
        controller: 'CategoriesController'
      }).
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutController'
      }).
      when('/links', {
        templateUrl: 'partials/links.html',
        controller: 'LinksController'
      }).
      otherwise({
        redirectTo: '/feed'
      });
  }]);