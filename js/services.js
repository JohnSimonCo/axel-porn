var pornServices = angular.module('pornServices', [])

.provider('routeListener',
	function() {
		var provider = this;
		var listeners = [];
		this.listen = function(listener) {
			listener.path.split('/');
			listeners.push(listener);
			return this;
		}
		this.$get = function() {
			var matchedCache = {};
			var callMatched = function(path, action) {
				if(matchedCache[path] && matchedCache[path].length > 0) {
					for(var listener in matchedCache[path]) {
						action(matchedCache[path][listener]);
					}
				} else {
					matchedCache[path] = [];
					var splitPath = path.split('/');
					for(var index in listeners) {
						var listener = listeners[index], match = false;
						if(listener.path.length <= splitPath.length) {
							match = true;
							for(var i in listener.path) {
								if(listener.path[i] !== splitPath[i] && listener.path[i] !== '*') {
									match = false;
									break;
								}
							}
							if(match && listener.path.length < splitPath.length) {
								match = listener.path[listener.path.length - 1] === '*';
							}
						}
						if(match) {
							action(listener);
							matchedCache[path].push(listener);
						}
					}
				}
			}
			return {
				startHandler: function(angularEvent, next, current) {
					if(current.originalPath) {
						callMatched(current.originalPath, function(listener) {
							listener.callback(current);
						});
					}
				}
				sucessHandler: function(angularEvent, current) {
					if(current.originalPath) {
						callMatched(current.originalPath, function(listener) {
							listener.callback(current);
						});
					}
				}
			}
		};
	}
)
.run(['$rootScope', 'routeListener',
	function($rootScope, routeListener) {
		$rootScope.$on('$routeChangeStart', routeListener.startHandler);
		$rootScope.$on('$routeChangeSuccess', routeListener.sucessHandler);
	}
]);