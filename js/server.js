var name = 'Simon';
var Section = function(name, populate) {
	this.name = name;
	this.populate = populate;
	this.videos = [];
}
var server = function() {
	var data = {
		categories: {
			amateur: {
				name: 'Amateur',
				videos : [
					{
						name: name + ' i skogen',
						description: name + ' runkar sin mamma i skogen',
						src: 'videos/skogsmulle.mp4',
						thumbnail: 'http://l.yimg.com/a/i/us/shine/love/forest.jpg',
						views: 18905,
						watched: true,
						hot: true
					}
				]
			},
			sneakyfilm: {
				name: 'Sneaky film',
				videos : [
					{ 
						name: name + ' genom nyckelålet',
						desc: name + 's mammas födelsedagsknull',
						src: 'videos/parentsex.mp4',
						thumbnail: 'thumbnails/parentsex.jpg',
						views: 675,
						watched: false,
						hot: true
					}
				]
			},
			milf: {
				name: 'MILF',
				videos : [
					{
						name: name + ' i garderoben',
						description: name + 's mamma byter om',
						src: 'videos/nakedmom.mp4',
						thumbnail: 'thumbnails/nakedmom.jpg',
						views: 1,
						watched: true,
						hot: false
					}
				]
			},
			mature: {
				name: 'Mature',
				videos : [
					{ 
						name: name + ' på besök',
						description: name + 's farmor och farfar tagna på bar gärning',
						src: 'videos/hotgrandma.mp4',
						thumbnail: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSoUAub4omdnfVbvHTw0nsPnlXB4hIXov27HgGFN_vUThBIu6Ps7w',
						views: 1,
						watched: true,
						hot: false
					}
				]
			},
			virgin: {
				name: 'Virgin',
				videos : [
					{
						name: name + ' i badkaret',
						description: name + ' och syrran på toa',
						src: 'videos/syrran.mp4',
						thumbnail: 'thumbnails/syrran.jpg',
						views: 65,
						watched: true,
						hot: false
					}
				]
			}
		},
		news: [
			{
				headline: name + ' just fucked a goat!',
				summary: 'TAPED IT HIMSELF',
				content: 'It\'s maddafakking mental!',
				image: 'image/goatfuck.jpg'
			},
			{
				headline: name + ' juerked off!',
				summary: 'Watch that cum!',
				content: 'This must be the ultimate self-pleasing-method.',
				image: 'image/mycum.jpg'
			},
			{
				headline: name + ' did something INSANE!',
				summary: 'Click to watch!',
				content: 'We are not going to tell you why because we simply can not explain it! Why would anyone do somthing like that, we just can not understand.',
				image: 'image/insanebehavior.jpg'
			},
			{
				headline: 'You have done well',
				summary: 'More views per day than ever!',
				content: 'fdhgrthrst',
				image: 'image/visitors.jpg'
			}
		],
		sections: {
			hot: new Section('Hot', function(video) {
				if (video.hot) {
					this.videos.push(video);
				};
			}),
			watched: new Section('Most watched', function(video) {
				if (video.watched && !video.hot) {
					this.videos.push(video);
				};
			})
		},
		links: [
			{
				name: name + '\'s facebook',
				href: 'http://www.facebook.com/axel.k.lindgren'
			},
			{
				name: name + '\'s youtube',
				href: 'http://www.youtube.com/user/swifTyBobCaT'
			}
		],
		premium: false
	};
	for(var category in data.categories) {
		data.categories[category].href = '#/category/' + category;
		for(var id in data.categories[category].videos) {
			var video = data.categories[category].videos[id];
			video.href = '#/video/' + category + '/' + id;

			for(var section in data.sections) {
				data.sections[section].populate(video);
			}
		}
	}
	for(var article in data.news) {
		data.news[article].href = '#/article/' + article;
	}
	return data;
}();


	

