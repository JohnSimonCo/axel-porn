pornApp.config(['routeListenerProvider',
  function(routeListenerProvider) {
    routeListenerProvider.
    /*listen(function() {
        var $window = $(window);
        var MARGIN = 20;
        var listener = function() {
            var $container = $('#news-scroll-container');
            var position = $container.position().top - MARGIN;
            if(window.scrollY < position) {
              var marginCobo = -window.scrollY + 'px';
              $container.css('margin-top', marginCobo);
            } else {
              $container.css('margin-top', -position +'px');
            }
        }

        return {
            path: '/feed',
            to: function(route) {
                $window.scroll(listener);
            },
            from: function(route) {
                $window.off('scroll', listener);
            }
        }
    }).*/
    listen({
        path: '/video/*',
        to: function(route) {
            alert('Welcome to ' + route.params.videoId);
        },
        from: function(route) {
            alert(route.params.videoId + ' left');
        }
    });
  }
]);


