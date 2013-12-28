var people = [
	{
		name: 'Axel',
		title: 'AxXelPorn',
		links: [
			{
				name: 'Axels facebook',
				href: 'http://www.facebook.com/axel.k.lindgren'
			},
			{
				name: 'Axels youtube',
				href: 'http://www.youtube.com/user/swifTyBobCaT'
			}
		]
	},
	{
		name: 'Simon',
		title: 'SiMmePorn',
		links: [
			{
				name: 'Simons facebook',
				href: 'http://www.facebook.com/simon.halvdansson'
			}
		]
	},
	{
		name: 'Sara',
		title: 'SaRaPorn',
		links: [
			{
				name: 'Saras facebook',
				href: 'http://www.facebook.com/sara.wiberg.18'
			}
		]
	}
];
var person = people[2];
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
						name: person.name + ' i skogen',
						description: person.name + ' runkar sin mamma i skogen',
						src: 'videos/skogsmulle.mp4',
						thumbnail: 'http://l.yimg.com/a/i/us/shine/love/forest.jpg',
						views: 18905,
						watched: true,
						hot: true,
						premium: true
					}
				]
			},
			sneakyfilm: {
				name: 'Sneaky film',
				videos : [
					{ 
						name: person.name + ' genom nyckelålet',
						desc: person.name + 's mammas födelsedagsknull',
						src: 'videos/parentsex.mp4',
						thumbnail: 'http://fc08.deviantart.net/fs71/f/2012/232/b/5/spy_through_the_keyhole__by_theteasingteacher-d5bqzpw.jpg',
						views: 675,
						watched: false,
						hot: true,
						premium: false
					}
				]
			},
			milf: {
				name: 'MILF',
				videos : [
					{
						name: person.name + ' i garderoben',
						description: person.name + 's mamma byter om',
						src: 'videos/nakedmom.mp4',
						thumbnail: 'thumbnails/nakedmom.jpg',
						views: 1,
						watched: true,
						hot: false,
						premium: true
					}
				]
			},
			mature: {
				name: 'Mature',
				videos : [
					{ 
						name: person.name + ' på besök',
						description: person.name + 's farmor och farfar tagna på bar gärning',
						src: 'videos/hotgrandma.mp4',
						thumbnail: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSoUAub4omdnfVbvHTw0nsPnlXB4hIXov27HgGFN_vUThBIu6Ps7w',
						views: 1,
						watched: true,
						hot: false,
						premium: false
					}
				]
			},
			virgin: {
				name: 'Virgin',
				videos : [
					{
						name: person.name + ' i badkaret',
						description: person.name + ' och syrran på toa',
						src: 'videos/syrran.mp4',
						thumbnail: 'http://straightladsexposed.com/blog/images/naked-men-caught-in-the-toilet3.jpg',
						views: 65,
						watched: true,
						hot: false,
						premium: false
					}
				]
			}
		},
		news: [
			{
				headline: person.name + ' just fucked a goat!',
				summary: 'TAPED IT HIMSELF',
				content: 'It\'s maddafakking mental!',
				image: 'http://angelforisrael.files.wordpress.com/2013/04/ahmadinejad-goat-fuck.jpg'
			},
			{
				headline: person.name + ' juerked off!',
				summary: 'Watch that cum!',
				content: 'This must be the ultimate self-pleasing-method.',
				image: 'http://art.ngfiles.com/images/154/myfuckinmess_dick-vader.jpg'
			},
			{
				headline: person.name + ' did something INSANE!',
				summary: 'Click to watch!',
				content: 'We are not going to tell you why because we simply can not explain it! Why would anyone do somthing like that, we just can not understand.',
				image: 'http://1.bp.blogspot.com/-55QPbB5MZsY/TjIEVQCS4sI/AAAAAAAAAK4/-RiHle8WmsI/s1600/monkey-with-his-penis-in-his-mouth.jpg'
			},
			{
				headline: 'You have done well',
				summary: 'More views per day than ever!',
				content: 'Today we can proudly present new all time records! We have had 2527583 unique visitors this month, an average of 84252 unique visitors a day! Our most popular clip is amazlingly still' + name + 'i skogen!',
				image: 'http://www.colourbox.com/preview/4297446-685999-vector-diagram-with-red-arrow-going-up.jpg'
			},
			{
				headline: 'GO PREMIUM',
				summary: 'Unluck exclusive videos!',
				content: 'By going premium, you will unlock a new world of daring videos. You will gain access to live web cameras and a lot more',
				image: 'http://creditspreadslayer.com/wp-content/uploads/2013/12/premium1.jpg'
			}
		],
		sections: {
			hot: new Section('Hot', function(video) {
				if (video.hot) {
					this.videos.push(video);
				};
			}),
			watched: new Section('Most watched', function(video) {
				if (video.watched) {
					this.videos.push(video);
				};
			}),
			premium: new Section('Premium', function(video) {
				if (video.premium) {
					this.videos.push(video);
				};
			})
		},
		links: [
			{
				name: person.name + '\'s facebook',
				href: person.facebook
			},
			{
				name: person.name + '\'s youtube',
				href: person.youtube
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
				if(!video.assigned) {
					data.sections[section].populate(video);
					video.assigned = true;
				}
			}
		}
	}
	for(var article in data.news) {
		data.news[article].href = '#/article/' + article;
	}
	return data;
}();


	

