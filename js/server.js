var censored = true;

function c(obj, alt) {
	if(typeof obj === 'string') {
		if(censored) return alt ? alt : lorum.get(obj.length);
		else return str;
	} else if(typeof obj === 'object') {
		if(censored) return alt ? alt : censore(obj);
		else return obj;
	}
}

function censore(object) {
	for(var key in object) {
		var prop = object[key];
		if(typeof prop === 'string') {
			object[key] = lorum.get(prop.length);
		} else if(typeof prop === 'object') {
			censore(prop);
		}
	}
	return object;
}

function initServer(data) {
	for(var id in data.videos) {
		var video = data.videos[id];
		video.href = '#/video/' + id;

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
		data.news[article].href = '#/article/' + article;
	}

	window.server = data;
}

/*if(censored) {
	var censore = function(object) {
		for(var key in object) {
			var prop = object[key];
				if(typeof prop === 'string') {
					object[key] = lorum.get(prop.length);
				} else if(typeof prop === 'object') {
					censore(prop);
				}
		}
	}
	censore(data);
}*/

/*if(censored) {
	var censore = function(object) {
		var add = {}, del = [];
		for(var key in object) {
			if(key === 'star')
				key = key;
			var firstChar = key.charAt(0), prop = object[key];
			if(firstChar === '$') {
				add[key.substring(1, key.length)] = prop;
				del.push(key);
			} else if(firstChar !== '_') {
				var altKey = '_' + key;
				if(object[altKey]) {
					object[key] = object[altKey];
					del.push(altKey);
				} else if(typeof prop === 'string') {
					object[key] = lorum.get(prop.length);
				} else if(typeof prop === 'object') {
					censore(prop);
				}
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
}*/