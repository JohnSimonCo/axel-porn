pornApp.config(['routeListenerProvider',
  function(routeListenerProvider) {
    routeListenerProvider.
    listen({
        path: '/feed',
        success: function(route) {
            var HEADER_HEIGHT = 80;
            window.addEventListener("scroll", function() {
               if(window.scrollY < HEADER_HEIGHT) {
                  var margin_cobo = -window.scrollY + 'px';

                  $('#news-scroll-container').css('margin-top', margin_cobo);
               }
               else {
                  $('#news-scroll-container').css('margin-top', -HEADER_HEIGHT +'px');
               }
            }, false);
        }
    }).
    listen('/videos/*', function() {
    });
  }
]);


