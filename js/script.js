pornApp.config(['routeListenerProvider',
  function(routeListenerProvider) {
    routeListenerProvider.
    listen(function() {
        var $window = $(window);
        var listener = function() {
            var HEADER_HEIGHT = $('#header').height(); //80
            console.log($('#news-scroll-container').offset().top);
            if(window.scrollY < HEADER_HEIGHT) {
              var marginCobo = -window.scrollY + 'px';
              $('#news-scroll-container').css('margin-top', marginCobo);
            } else {
              $('#news-scroll-container').css('margin-top', -HEADER_HEIGHT +'px');
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
    }).
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


