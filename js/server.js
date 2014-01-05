var censored = true;

var server = function() {
	for(var id in data.videos) {
		var video = data.videos[id];
		video.$href = '#/video/' + id;

		for(var sec in data.sections) {
			var section = data.sections[sec];
			if(!video.assigned) {
				if(section.assign(video)) {
					section.videos.push(video);
					video.assigned = true;
				}
			}
		}
	}

	for(var article in data.news) {
		data.news[article].$href = '#/article/' + article;
	}

	if(censored) {
		var censore = function(object) {
			var add = {}, del = [];
			for(var key in object) {
				var prop = object[key];
				if(typeof prop === 'string') {
					var firstChar = key.charAt(0);
					if(firstChar === '$') {
						add[key.substring(1, key.length)] = prop;
						del.push(key);
					} else if(firstChar !== '_') {
						var altKey = '_' + key;
						if(object[altKey]) {
							object[key] = object[altKey];
							del.push(altKey);
						} else {
							object[key] = lorum.get(prop.length);
						}
					}
				} else if(typeof prop === 'object') {
					censore(prop);
				}
			}
			for(var key in add) {
				object[key] = add[key];
			}
			for(var i in del) {
				delete object[del[i]];
			}
		}
		censore(data);
	}

	return data;
}();