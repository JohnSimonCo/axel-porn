var pornApp = angular.module('pornApp', [
  'ngRoute',
  'pornControllers',
  'pornServices'
])
.run(function() {
  createData();
})
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/feed', {
        templateUrl: 'templates/feed.html',
        controller: 'FeedController'
      }).
      when('/video/:videoId', {
        templateUrl: 'templates/video.html',
        controller: 'VideoController'
      }).
      when('/article/:articleId', {
        templateUrl: 'templates/article.html',
        controller: 'ArticleController'
      }).
      when('/videos/', {
        templateUrl: 'templates/videos.html',
        controller: 'VideosController',
        reloadOnSearch: false
      }).
      when('/category/:categoryId', {
        templateUrl: 'templates/category.html',
        controller: 'CategoryController'
      }).
      when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'AboutController'
      }).
      when('/links', {
        templateUrl: 'templates/links.html',
        controller: 'LinksController'
      }).
      otherwise({
        redirectTo: '/feed'
      });
  }
]);