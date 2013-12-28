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
      when('/category/:categoryId', {
        templateUrl: 'partials/category.html',
        controller: 'CategoryController'
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

function createCookie(name, value, days) {
  var expires = '';
  if(days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toGMTString();
  }
  
  document.cookie = name + '=' + value + expires + '; path=/';
}
function getCookie(name) {
  if (document.cookie.length > 0) {
    start = document.cookie.indexOf(name + '=');
    if (start != -1) {
      start = start + name.length + 1;
      end = document.cookie.indexOf(';', start);
      if (end == -1) {
        end = document.cookie.length;
      }
      return unescape(document.cookie.substring(start, end));
      }
  }
}