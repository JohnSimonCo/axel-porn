var censored = true;

var server = function() {
	for(var id in data.videos) {
		var video = data.videos[id];
		video.$href = '#/video/' + id;

<<<<<<< HEAD
		for(var sec in data.sections) {
			var section = data.sections[sec];
			if(!video.assigned) {
				if(section.assign(video)) {
					section.videos.push(video);
					video.assigned = true;
=======
var server = function(censored) {
	var data = {};

	data.actors = {
		axel: {
			name: 'Axel',
			title: 'AxXelPorn',
			description: 'The main star of our humble pornsite is Axel. Often apearing alone in his video, he teaches you everything there is to know, and more, about self-pleasing.',
			image: 'http://3.bp.blogspot.com/-0XDzY3q6Uok/UbnNtcMDilI/AAAAAAAAA8I/2N4M-liOPUk/s1600/02+Curtis+Axel.png',
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
		simon: {
			name: 'Simon',
			title: 'SiMmePorn',
			description: 'Simon is our girl magnet! He appears in our exlusive softcore premium videos. Some say he\'s secretly into bondage.',
			image: 'http://i1.mirror.co.uk/incoming/article2109256.ece/ALTERNATES/s615/simon-cowell-baby-2109256.png',
			links: [
				{
					name: 'Simons facebook',
					href: 'http://www.facebook.com/simon.halvdansson'
				}
			]
		},
		sara: {
			name: 'Sara',
			title: 'SaRaPorn',
			description: 'As our only female actor, this one blonde girl is responsible for making this pornsite non-gay.',
			image: 'http://www.eikonaphotography.com/gallery/large/Sara-Balint-by-Eikona-8961-APF.jpg',
			links: [
				{
					name: 'Saras facebook',
					href: 'http://www.facebook.com/sara.wiberg.18'
				}
			]
		},
		august: {
			name: 'August',
			title: 'aGGePorn',
			description: 'August is the ultimate MILF-hunter. When he\'s around, no mother is safe. You can choose from a selection of his videos when he takes on women you never could.',
			image: 'http://www.shootersmma.com/images/news/august_wallen_big.jpg',
			links: [
				{
					name: 'Agges facebook',
					href: 'http://www.shootersmma.com/images/news/august_wallen_big.jpg'
				}
			],
		},
		filip: {
			name: 'Filip',
			title: 'fiLLiePorn',
			description: 'Filip is our sites maniac. He is the one to take on the Brasillian dwarfs and the challanges you give him. He has no limits.',
			image: 'http://www.keek.fr/uploads/Image/filip%20nikolic.jpg',
			links: [
				{
					name: 'Filips facebook',
					href: 'http://www.shootersmma.com/images/news/august_wallen_big.jpg'
				}
			],
		},
		john: {
			name: 'John',
			title: 'JoHnyPorn',
			description: 'John is our hardcore legend, known for his daring videos. See his recent controversial videos.',
			image: 'http://upload.wikimedia.org/wikipedia/commons/d/dd/John_Cena_2010.jpeg',
			links: [
				{
					name: 'Johns facebook',
					href: 'http://www.facebook.com/johnrappfarnes'
				}
			]
		}
	};

	data.star = data.actors.simon;

	data.company = 'PornStarNetwork inc';


	data.tags = {
		premium: 'Premium',
		hot: 'Hot',
		watchedNow: 'Watched Now',
		milf: 'MILF',
		amateur: 'Amateur',
		bondage: 'Bondage',
		sneakyFilm:'Sneaky Film',
		mature: 'Mature',
		virgin: 'Virgin',
		fetish: 'Fetish',
		animal: 'Animal',
		john: 'John',
		sara: 'Sara',
		simon: 'Simon',
		august: 'August',
		axel: 'Axel',
		filip: 'Filip',
		anal: 'Anal',
		gay: 'Gay',
		blonde: 'Blonde',
		lesbian: 'Lesbian',
		hardcore: 'Hardcore',
		rough: 'Rough',
		bondage: 'Bondage',
		soloMale: 'Solo Male',
		BBW: 'BBW',
		smallTits: 'Small Tits',
		bigTits: 'Big Tits',
		bigDick: 'Big Dick',
		shemale: 'Shemale',
		hentai: 'Hentai',
		orgy: 'Orgy',
		simpsons: 'Simpsons',
		sensual: 'Sensual',
		soft: 'Soft',
		spiritual: 'Spirutal',
		cartoon: 'cartoon'
	};

	data.videos = [
		{
			name: data.actors.axel.name + ' i skogen',
			description: data.actors.axel.name + ' runkar sin mamma i skogen',
			src: 'videos/skogsmulle.mp4',
			thumbnail: 'http://l.yimg.com/a/i/us/shine/love/forest.jpg',
			views: 18905,
			tags: [
				data.tags.amateur,
				data.tags.premium,
				data.tags.watchedNow,
				data.tags.hot
				]
		},
		{
			name: data.actors.axel.name + '\'s första runkvideo',
			description: data.actors.axel.name + ' pappa visar hur man gör',
			src: 'videos/skogsmulle.mp4',
			thumbnail: 'http://cdn01.nyheter24.se/9b24e4c10802021d01/2012/11/09/767899/sp0bbfc4.jpg',
			views: 905,
			tags: [
				data.tags.amateur,
				data.tags.premium,
				data.tags.watchedNow,
				data.tags.hot,
				data.tags.soloMeal
				]
		},
		{
			name: data.actors.axel.name + '\'s pappas runkvideo',
			description: data.actors.axel.name + ' runkar sin mamma i skogen',
			src: 'videos/skogsmulle.mp4',
			thumbnail: 'http://www.1clickcd.com/files/NAS4/covers/art-226267-1367482051.jpg',
			views: 18905,
			tags: [
				data.tags.amateur,
				data.tags.premium,
				data.tags.watchedNow,
				data.tags.bigDick,
				data.tags.soloMale,
				data.tags.hardcore
				]
		},
		{
			name: data.actors.john.name + ' genom nyckelålet',
			description: data.actors.john.name + 's mammas födelsedagsknull',
			src: 'videos/parentsex.mp4',
			thumbnail: 'http://fc08.deviantart.net/fs71/f/2012/232/b/5/spy_through_the_keyhole__by_theteasingteacher-d5bqzpw.jpg',
			views: 675,
			tags: [
				data.tags.sneakyFilm,
				data.tags.premium,
				data.tags.hot,
				data.tags.bigTits,
				data.tags.hardcore,
				data.tags.bondage,
				data.tags.rough,
				data.tags.milf,
				data.tags.Mature
				]
		},
		{
			name: data.actors.august.name + ' i garderoben',
			description: data.actors.august.name + 's mamma byter om',
			src: 'videos/skogsmulle.mp4',
			thumbnail: 'http://dailykimchi.com/wp-content/uploads/2011/09/chinese-girls-publicly-changing-clothes-on-shanghai-metro-01.jpg',
			views: 6,
			tags: [
				data.tags.sneakyFilm,
				data.tags.premium,
				data.tags.bigTits,
				data.tags.milf,
				data.tags.Mature
				]
		},
		{ 
			name: data.actors.sara.name + ' på besök',
			description: data.actors.sara.name + 's farmor och farfar tagna på bar gärning',
			src: 'videos/skogsmulle.mp4',
			thumbnail: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSoUAub4omdnfVbvHTw0nsPnlXB4hIXov27HgGFN_vUThBIu6Ps7w',
			views: 67,
			tags: [
				data.tags.sneakyFilm,
				data.tags.premium,
				data.tags.smallTits,
				data.tags.bigDick,
				data.tags.mature,
				data.tags.rough,
				data.tags.hardcore,
				data.tags.bondage
				]
		},
		{
			name: data.actors.august.name + ' på toa',
			description: data.actors.august.name + ' och syrran i badkaret',
			src: 'videos/syrran.mp4',
			thumbnail: 'http://straightladsexposed.com/blog/images/naked-men-caught-in-the-toilet3.jpg',
			views: 65,
			tags: [
				data.tags.sneakyFilm,
				data.tags.virgin,
				data.tags.premium,
				data.tags.smallTits,
				data.tags.blonde,
				data.tags.shemale
				]
		},
		{
			name: data.actors.axel.name + '\'s tight pussy',
			description: data.actors.axel.name + ' visiting a friend',
			src: 'videos/skogsmulle.mp4',
			thumbnail: 'http://diyvagina.com/wp-content/uploads/2013/02/meat-fleshlight-pussy.jpg',
			views: 78,
			tags: [
				data.tags.virgin,
				data.tags.soloMale
				]
		},
		{
			name: 'Morgonrunk',
			description: data.actors.john.name + ' på toan',
			src: 'videos/skogsmulle.mp4',
			thumbnail: 'http://blogg.vk.se/Mexan/wp-content/uploads/sites/427/2013/07/IMG_60271.jpg',
			views: 13,
			tags: [
				data.tags.soloMale,
				data.tags.premium,
				data.tags.hot,
				data.tags.bigDick,
				data.tags.rough
				]
		},
		{
			name: data.actors.axel.name + ' on farm',
			description: 'Dogs, tools and horses',
			src: 'videos/skogsmulle.mp4',
			thumbnail: 'http://www.myspaceantics.com//images/myspace-graphics/funny-pictures/dog-porn.jpg',
			views: 45,
			tags: [
				data.tags.soloMale,
				data.tags.premium,
				data.tags.animal,
				data.tags.rough
				]
		},
		{
			name: data.actors.simon.name + ' with Rosa',
			description: 'Moaning MU!',
			src: 'videos/skogsmulle.mp4',
			thumbnail: 'http://www.leffesbilder.se/Bilder/album/Blandat/Roadside/ko.jpg',
			views: 71,
			tags: [
				data.tags.soloMale,
				data.tags.hot,
				data.tags.bigDick,
				data.tags.animal,
				data.tags.bondage
				]
		},
		{
			name: data.actors.john.name + ' fucked a goat',
			description: 'TAPED IT HIMSELF!',
			src: 'videos/skogsmulle.mp4',
			thumbnail: 'http://www.leffesbilder.se/Bilder/album/Blandat/Roadside/ko.jpg',
			views: 34,
			tags: [
				data.tags.soloMale,
				data.tags.premium,
				data.tags.bigDick,
				data.tags.rough,
				data.tags.bondage,
				data.tags.hardcore,
				data.tags.animal
				]
		},
		{
			name: data.actors.john.name + ' provar bondage',
			description: 'Familjeutflykten',
			src: 'videos/skogsmulle.mp4',
			thumbnail: 'http://cdnimg.visualizeus.com/thumbs/92/21/bunny,fun,rabbit-9221d06d312d93e767f50196a8b10013_h.jpg',
			views: 32,
			tags: [
				data.tags.bigDick,
				data.tags.rough,
				data.tags.bondage,
				data.tags.hardcore,
				data.tags.animal
				]
		},
		{
			name: data.actors.john.name + ' is back',
			description: 'Spain made him horny',
			src: 'videos/skogsmulle.mp4',
			thumbnail: 'http://ourfunfabhols.files.wordpress.com/2008/11/spain-flag.jpg',
			views: 45,
			tags: [
				data.tags.soloMale,
				data.tags.rough,
				data.tags.hardcore,
				data.tags.bigDick
				]
		},
		{
			name: data.actors.simon.name + ' in public',
			description: 'He isn\'t ashamed',
			src: 'videos/skogsmulle.mp4',
			thumbnail: 'http://www.in-public.com/store/image/file/3143/Maciej_Dakowicz_Cardiff_After_Dark_01.jpg?1362841496',
			views: 71,
			tags: [
				data.tags.soloMale,
				data.tags.hot,
				data.tags.smallTits,
				data.tags.bondage
				]
		},
		{
			name: data.actors.august.name + ' picks up MILF',
			description: 'Abandoing child for sex',
			src: 'videos/skogsmulle.mp4',
			thumbnail: 'http://www.bbc.co.uk/stoke/content/images/2006/07/20/carrying_420x270.jpg',
			views: 34,
			tags: [
				data.tags.premium,
				data.tags.rough,
				data.tags.hardcore,
				data.tags.milf,
				]
		},
		{
			name: data.actors.sara.name + ' at playground',
			description: 'Hot deperate fathers',
			src: 'videos/skogsmulle.mp4',
			thumbnail: 'http://nsrlive.co.uk/wp-content/uploads/2011/12/only_men_aloud.jpeg',
			views: 32,
			tags: [
				data.tags.premium,
				data.tags.bigDick,
				data.tags.rough,
				data.tags.bondage,
				data.tags.hardcore,
				data.tags.animal
				]
		},
		{
			name: data.actors.filip.name + ' gone mad',
			description: 'Exposing frog',
			src: 'videos/skogsmulle.mp4',
			thumbnail: 'http://www.joe-ks.com/archives_jul2011/FrogFood.jpg',
			views: 234,
			tags: [
				data.tags.hot,
				data.tags.bondage,
				data.tags.rough,
				data.tags.animal,
				data.tags.hardcore
				]
		},
		{
			name: data.actors.sara.name + ' joins cult',
			description: 'Trying something new',
			src: 'videos/skogsmulle.mp4',
			thumbnail: 'http://cdn.stereogum.com/files/2010/04/arizona.jpg',
			views: 2,
			tags: [
				data.tags.rough,
				data.tags.hardcore,
				data.tags.bondage,
				data.tags.hardcore,
				data.tags.blonde
				]
		},
		{
			name: data.actors.sara.name + ' meets dick',
			description: 'Had a pleasent conversation',
			src: 'videos/skogsmulle.mp4',
			thumbnail: 'http://2.bp.blogspot.com/_eW8U4L0niRE/R5_DS30NQZI/AAAAAAAAAr8/PMAndxsPuXE/s320/bush%2Bdick.jpg',
			views: 4767,
			tags: [
				data.tags.bigDick,
				data.tags.rough,
				data.tags.blonde
				]
		},
				{
			name: data.actors.simon.name + ' takes on HIM',
			description: 'He had seen his talents',
			src: 'videos/skogsmulle.mp4',
			thumbnail: 'http://upload.wikimedia.org/wikipedia/commons/7/7c/Cima_da_Conegliano,_God_the_Father.jpg',
			views: 71,
			tags: [
				data.tags.bigDick,
				data.tags.sensual,
				data.tags.soft,
				data.tags.spiritual
				]
		},
		{
			name: data.actors.august.name + ' enters cartoon',
			description: 'Abandoing child for sex',
			src: 'videos/skogsmulle.mp4',
			thumbnail: 'http://img4.vintage-cartoons-porn.com/scj/thumbs/galleries/0/639/3_713.jpg',
			views: 282,
			tags: [
				data.tags.premium,
				data.tags.rough,
				data.tags.hardcore,
				data.tags.milf,
				data.tags.cartoon
				]
		},
		{
			name: data.actors.sara.name + ' alone at home',
			description: 'Like if noone saw you',
			src: 'videos/skogsmulle.mp4',
			thumbnail: 'http://cdn.cutestpaw.com/wp-content/uploads/2012/07/Creative-Animal-Ads-003.jpg',
			views: 32,
			tags: [
				data.tags.premium,
				data.tags.animal
				]
		},
		{
			name: data.actors.filip.name + ' out on walk',
			description: 'With mom',
			src: 'videos/skogsmulle.mp4',
			thumbnail: 'http://i298.photobucket.com/albums/mm241/herbie0420/wierdo-2.jpg',
			views: 64,
			tags: [
				data.tags.hot,
				data.tags.soft,
				data.tags.sensual,
				data.tags.gay
				]
		},
		{
			name: data.actors.john.name + ' having drunk sex',
			description: 'Which hole is the right one',
			src: 'videos/skogsmulle.mp4',
			thumbnail: 'http://www.digitaldjtips.com/wp-content/uploads/2011/03/drunk-guy.jpg',
			views: 544,
			tags: [
				data.tags.premium,
				data.tags.rough,
				data.tags.hardcore,
				data.tags.bondage,
				data.tags.blonde
				]
		},
		{
			name: data.actors.simon.name + ' taking a nap',
			description: 'Had a pleasent conversation',
			src: 'videos/skogsmulle.mp4',
			thumbnail: 'http://nightclubsecurityconsulting.files.wordpress.com/2010/07/drunk-dude-1111.jpg',
			views: 654,
			tags: [
				data.tags.virgin,
				data.tags.soft
				]
		}
	];

	data.categories = {
		amateur: {
			name: 'Amateur',
			videos : [
				{
					name: data.actors.axel.name + ' i skogen',
					description: data.actors.axel.name + ' runkar sin mamma i skogen',
					src: 'videos/skogsmulle.mp4',
					thumbnail: 'http://l.yimg.com/a/i/us/shine/love/forest.jpg',
					views: 18905,
					feed: true,
					watched: true,
					hot: true,
					premium: true,
				},
				{
					name: data.actors.axel.name + '\'s första runkvideo',
					description: data.actors.axel.name + ' pappa visar hur man gör',
					src: 'videos/skogsmulle.mp4',
					thumbnail: 'http://cdn01.nyheter24.se/9b24e4c10802021d01/2012/11/09/767899/sp0bbfc4.jpg',
					views: 18905,
					feed: true,
					watched: true,
					hot: true,
					premium: true
				},
				{
					name: data.actors.axel.name + '\'s pappas runkvideo',
					description: data.actors.axel.name + ' runkar sin mamma i skogen',
					src: 'videos/skogsmulle.mp4',
					thumbnail: 'http://www.1clickcd.com/files/NAS4/covers/art-226267-1367482051.jpg',
					views: 18905,
					feed: true,
					watched: true,
					hot: false,
					premium: false
				}

			]
		},
		sneakyfilm: {
			name: 'Sneaky film',
			videos : [
				{ 
					name: data.actors.john.name + ' genom nyckelålet',
					desc: data.actors.john.name + 's mammas födelsedagsknull',
					src: 'videos/parentsex.mp4',
					thumbnail: 'http://fc08.deviantart.net/fs71/f/2012/232/b/5/spy_through_the_keyhole__by_theteasingteacher-d5bqzpw.jpg',
					views: 675,
					feed: true,
					watched: false,
					hot: true,
					premium: true
				}
			]
			},
			milf: {
			name: 'MILF',
			videos : [
				{
					name: data.actors.august.name + ' i garderoben',
					description: data.actors.august.name + 's mamma byter om',
					src: 'videos/skogsmulle.mp4',
					thumbnail: 'http://dailykimchi.com/wp-content/uploads/2011/09/chinese-girls-publicly-changing-clothes-on-shanghai-metro-01.jpg',
					views: 1,
					feed: true,
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
					name: data.actors.sara.name + ' på besök',
					description: data.actors.sara.name + 's farmor och farfar tagna på bar gärning',
					src: 'videos/skogsmulle.mp4',
					thumbnail: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSoUAub4omdnfVbvHTw0nsPnlXB4hIXov27HgGFN_vUThBIu6Ps7w',
					views: 1,
					feed: true,
					watched: false,
					hot: true,
					premium: false
				}
			]
		},
		virgin: {
			name: 'Virgin',
			videos : [
				{
					name: data.actors.august.name + ' på toa',
					description: data.actors.august.name + ' och syrran i badkaret',
					src: 'videos/syrran.mp4',
					thumbnail: 'http://straightladsexposed.com/blog/images/naked-men-caught-in-the-toilet3.jpg',
					views: 65,
					feed: true,
					watched: true,
					hot: false,
					premium: false
				},
				{
					name: data.actors.axel.name + '\'s tight pussy',
					description: data.actors.axel.name + ' visiting a friend',
					src: 'videos/skogsmulle.mp4',
					thumbnail: 'http://diyvagina.com/wp-content/uploads/2013/02/meat-fleshlight-pussy.jpg',
					views: 67,
					feed: true,
					watched: true,
					hot: true,
					premium: false
				},
				{
					name: 'Morgonrunk',
					description: data.actors.john.name + ' på toan',
					src: 'videos/skogsmulle.mp4',
					thumbnail: 'http://blogg.vk.se/Mexan/wp-content/uploads/sites/427/2013/07/IMG_60271.jpg',
					views: 18,
					feed: true,
					watched: true,
					hot: false,
					premium: false
				}
			]
		},
		fetish: {
			name: 'Fetish',
			videos : [
				{
					name: data.actors.john.name + ' provar bondage',
					description: 'Familjeutflykten',
					src: 'videos/skogsmulle.mp4',
					thumbnail: 'http://cdnimg.visualizeus.com/thumbs/92/21/bunny,fun,rabbit-9221d06d312d93e767f50196a8b10013_h.jpg',
					views: 32,
					feed: true,
					watched: true,
					hot: true,
					premium: false
				}
			]
		},
		animal: {
			name: 'Animal',
			videos : [
				{
					name: data.actors.axel.name + ' on farm',
					description: 'Dogs, tools and horses',
					src: 'videos/skogsmulle.mp4',
					thumbnail: 'http://www.myspaceantics.com//images/myspace-graphics/funny-pictures/dog-porn.jpg',
					views: 78,
					feed: true,
					watched: true,
					hot: false,
					premium: true
				},
				{
					name: data.actors.simon.name + ' with Rosa',
					description: 'Moaning MU!',
					src: 'videos/skogsmulle.mp4',
					thumbnail: 'http://www.leffesbilder.se/Bilder/album/Blandat/Roadside/ko.jpg',
					views: 78,
					feed: true,
					watched: true,
					hot: true,
					premium: false
				},
				{
					name: data.actors.john.name + ' fucked a goat',
					description: 'TAPED IT HIMSELF!',
					src: 'videos/skogsmulle.mp4',
					thumbnail: 'http://www.leffesbilder.se/Bilder/album/Blandat/Roadside/ko.jpg',
					views: 78,
					feed: true,
					watched: true,
					hot: true,
					premium: false
				}
			]
		}
	};

	data.defaultCategory = 'amateur';

	data.sections = {
		premium: new Section('Premium', function(video) {
			return video.premium;
		}),
		hot: new Section('Hot', function(video) {
			return video.hot;
		}),
		mostWatched: new Section('Most watched', function(video) {
			return video.views > 100;
		}),
		watchedNow: new Section('Watched right now', function(video) {
			return video.watched;
		})
	};

	for(var category in data.categories) {
		data.categories[category].href = '#/category/' + category;
		for(var id in data.categories[category].videos) {
			var video = data.categories[category].videos[id];
			video.href = '#/video/' + category + '/' + id;

			for(var sec in data.sections) {
				var section = data.sections[sec];
				if(!video.assigned) {
					if(section.assign(video)) {
						section.videos.push(video);
						video.assigned = true;
					}
>>>>>>> 3e3207e0a6c59ebc6f8c7014fcd287598e53ff87
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
