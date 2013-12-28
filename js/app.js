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

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}
function getCookie(name) {
    if (document.cookie.length > 0) {
        start = document.cookie.indexOf(name + "=");
        if (start != -1) {
            start = start + name.length + 1;
            end = document.cookie.indexOf(";", start);
            if (end == -1) {
                end = document.cookie.length;
            }
            return unescape(document.cookie.substring(start, end));
        }
    }
    return "pippi";
}