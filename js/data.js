var Section = function(name, assign) {
	this.name = name;
	this.assign = assign;
	this.videos = [];
}

var createData = function() {
	var data = {};
	data.actors = {
		axel: {
			name: cs('Axel'),
			title: cs('AxXelPorn'),
			description: cs('The main star of our humble pornsite is Axel. Often apearing alone in his video, he teaches you everything there is to know, and more, about self-pleasing.'),
			image: cs('http://3.bp.blogspot.com/-0XDzY3q6Uok/UbnNtcMDilI/AAAAAAAAA8I/2N4M-liOPUk/s1600/02+Curtis+Axel.png'),
			links: [
				{
					name: cs('Axels facebook'),
					href: cs('http://www.facebook.com/axel.k.lindgren')
				},
				{
					name: cs('Axels youtube'),
					href: cs('http://www.youtube.com/user/swifTyBobCaT')
				}
			]
		},
		simon: {
			name: cs('Simon'),
			title: cs('SiMmePorn'),
			description: cs('Simon is our girl magnet! He appears in our exlusive softcore premium videos. Some say he\'s secretly into bondage.'),
			image: cs('http://i1.mirror.co.uk/incoming/article2109256.ece/ALTERNATES/s615/simon-cowell-baby-2109256.png'),
			links: [
				{
					name: cs('Simons facebook'),
					href: cs('http://www.facebook.com/simon.halvdansson')
				}
			]
		},
		sara: {
			name: cs('Sara'),
			title: cs('SaRaPorn'),
			description: cs('As our only female actor, this one blonde girl is responsible for making this pornsite non-gay.'),
			image: cs('http://www.eikonaphotography.com/gallery/large/Sara-Balint-by-Eikona-8961-APF.jpg'),
			links: [
				{
					name: cs('Saras facebook'),
					href: cs('http://www.facebook.com/sara.wiberg.18')
				}
			]
		},
		august: {
			name: cs('August'),
			title: cs('aGGePorn'),
			description: cs('August is the ultimate MILF-hunter. When he\'s around, no mother is safe. You can choose from a selection of his videos when he takes on women you never could.'),
			image: cs('http://www.shootersmma.com/images/news/august_wallen_big.jpg'),
			links: [
				{
					name: cs('Agges facebook'),
					href: cs('http://www.shootersmma.com/images/news/august_wallen_big.jpg')
				}
			],
		},
		filip: {
			name: cs('Filip'),
			title: cs('fiLLiePorn'),
			description: cs('Filip is our sites maniac. He is the one to take on the Brasillian dwarfs and the challanges you give him. He has no limits.'),
			image: cs('http://www.keek.fr/uploads/Image/filip%20nikolic.jpg'),
			links: [
				{
					name: cs('Filips facebook'),
					href: cs('http://www.shootersmma.com/images/news/august_wallen_big.jpg')
				}
			],
		},
		john: {
			name: cs('John'),
			title: cs('JoHnyPorn'),
			description: cs('John is our hardcore legend, known for his daring videos. See his recent controversial videos.'),
			image: cs('http://upload.wikimedia.org/wikipedia/commons/d/dd/John_Cena_2010.jpeg'),
			links: [
				{
					name: cs('Johns facebook'),
					href: cs('http://www.facebook.com/johnrappfarnes')
				}
			]
		}
	};

	data.star = data.actors.axel;

	data.company = cs('PornStarNetwork inc');

	data.tags = {
		premium: cs('Premium'),
		hot: cs('Hot'),
		watchedNow: cs('Watched Now'),
		milf: cs('MILF'),
		amateur: cs('Amateur'),
		bondage: cs('Bondage'),
		sneakyFilm: cs('Sneaky Film'),
		mature: cs('Mature'),
		virgin: cs('Virgin'),
		fetish: cs('Fetish'),
		animal: cs('Animal'),
		john: cs('John'),
		sara: cs('Sara'),
		simon: cs('Simon'),
		august: cs('August'),
		axel: cs('Axel'),
		filip: cs('Filip'),
		anal: cs('Anal'),
		gay: cs('Gay'),
		blonde: cs('Blonde'),
		lesbian: cs('Lesbian'),
		hardcore: cs('Hardcore'),
		rough: cs('Rough'),
		bondage: cs('Bondage'),
		soloMale: cs('Solo Male'),
		BBW: cs('BBW'),
		smallTits: cs('Small Tits'),
		bigTits: cs('Big Tits'),
		bigDick: cs('Big Dick'),
		shemale: cs('Shemale'),
		hentai: cs('Hentai'),
		orgy: cs('Orgy'),
		simpsons: cs('Simpsons')
	};

	data.videos = [
		{
			name: cs(data.actors.axel.name + ' i skogen'),
			description: cs(data.actors.axel.name + ' runkar sin mamma i skogen'),
			src: cs('videos/skogsmulle.mp4'),
			thumbnail: cs('http://l.yimg.com/a/i/us/shine/love/forest.jpg'),
			views: 18905,
			tags: [
				data.tags.amateur,
				data.tags.premium,
				data.tags.watchedNow,
				data.tags.hot
			]
		},
		{
			name: cs(data.actors.axel.name + '\'s första runkvideo'),
			description: cs(data.actors.axel.name + ' pappa visar hur man gör'),
			src: cs('videos/skogsmulle.mp4'),
			thumbnail: cs('http://cdn01.nyheter24.se/9b24e4c10802021d01/2012/11/09/767899/sp0bbfc4.jpg'),
			views: 95,
			tags: [
				data.tags.amateur,
				data.tags.watchedNow,
				data.tags.soloMeal
			]
		},
		{
			name: cs(data.actors.axel.name + '\'s pappas runkvideo'),
			description: cs(data.actors.axel.name + ' runkar sin mamma i skogen'),
			src: cs('videos/skogsmulle.mp4'),
			thumbnail: cs('http://www.1clickcd.com/files/NAS4/covers/art-226267-1367482051.jpg'),
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
			name: cs(data.actors.john.name + ' genom nyckelålet'),
			description: cs(data.actors.john.name + 's mammas födelsedagsknull'),
			src: cs('videos/parentsex.mp4'),
			thumbnail: cs('http://fc08.deviantart.net/fs71/f/2012/232/b/5/spy_through_the_keyhole__by_theteasingteacher-d5bqzpw.jpg'),
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
			name: cs(data.actors.august.name + ' i garderoben'),
			description: cs(data.actors.august.name + 's mamma byter om'),
			src: cs('videos/skogsmulle.mp4'),
			thumbnail: cs('http://dailykimchi.com/wp-content/uploads/2011/09/chinese-girls-publicly-changing-clothes-on-shanghai-metro-01.jpg'),
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
			name: cs(data.actors.sara.name + ' på besök'),
			description: cs(data.actors.sara.name + 's farmor och farfar tagna på bar gärning'),
			src: cs('videos/skogsmulle.mp4'),
			thumbnail: cs('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSoUAub4omdnfVbvHTw0nsPnlXB4hIXov27HgGFN_vUThBIu6Ps7w'),
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
			name: cs(data.actors.august.name + ' på toa'),
			description: cs(data.actors.august.name + ' och syrran i badkaret'),
			src: cs('videos/syrran.mp4'),
			thumbnail: cs('http://straightladsexposed.com/blog/images/naked-men-caught-in-the-toilet3.jpg'),
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
			name: cs(data.actors.axel.name + '\'s tight pussy'),
			description: cs(data.actors.axel.name + ' visiting a friend'),
			src: cs('videos/skogsmulle.mp4'),
			thumbnail: cs('http://diyvagina.com/wp-content/uploads/2013/02/meat-fleshlight-pussy.jpg'),
			views: 78,
			tags: [
				data.tags.virgin,
				data.tags.soloMale
			]
		},
		{
			name: cs('Morgonrunk'),
			description: cs(data.actors.john.name + ' på toan'),
			src: cs('videos/skogsmulle.mp4'),
			thumbnail: cs('http://blogg.vk.se/Mexan/wp-content/uploads/sites/427/2013/07/IMG_60271.jpg'),
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
			name: cs(data.actors.axel.name + ' on farm'),
			description: cs('Dogs, tools and horses'),
			src: cs('videos/skogsmulle.mp4'),
			thumbnail: cs('http://www.myspaceantics.com//images/myspace-graphics/funny-pictures/dog-porn.jpg'),
			views: 45,
			tags: [
				data.tags.soloMale,
				data.tags.premium,
				data.tags.animal,
				data.tags.rough
			]
		},
		{
			name: cs(data.actors.simon.name + ' with Rosa'),
			description: cs('Moaning MU!'),
			src: cs('videos/skogsmulle.mp4'),
			thumbnail: cs('http://www.leffesbilder.se/Bilder/album/Blandat/Roadside/ko.jpg'),
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
			name: cs(data.actors.john.name + ' fucked a goat'),
			description: cs('TAPED IT HIMSELF!'),
			src: cs('videos/skogsmulle.mp4'),
			thumbnail: cs('http://www.leffesbilder.se/Bilder/album/Blandat/Roadside/ko.jpg'),
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
			name: cs(data.actors.john.name + ' provar bondage'),
			description: cs('Familjeutflykten'),
			src: cs('videos/skogsmulle.mp4'),
			thumbnail: cs('http://cdnimg.visualizeus.com/thumbs/92/21/bunny,fun,rabbit-9221d06d312d93e767f50196a8b10013_h.jpg'),
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
			name: cs(data.actors.john.name + ' is back'),
			description: cs('Spain made him horny'),
			src: cs('videos/skogsmulle.mp4'),
			thumbnail: cs('http://ourfunfabhols.files.wordpress.com/2008/11/spain-flag.jpg'),
			views: 45,
			tags: [
				data.tags.soloMale,
				data.tags.rough,
				data.tags.hardcore,
				data.tags.bigDick
			]
		},
		{
			name: cs(data.actors.simon.name + ' in public'),
			description: cs('He isn\'t ashamed'),
			src: cs('videos/skogsmulle.mp4'),
			thumbnail: cs('http://www.in-public.com/store/image/file/3143/Maciej_Dakowicz_Cardiff_After_Dark_01.jpg?1362841496'),
			views: 71,
			tags: [
				data.tags.soloMale,
				data.tags.hot,
				data.tags.smallTits,
				data.tags.bondage
			]
		},
		{
			name: cs(data.actors.august.name + ' picks up MILF'),
			description: cs('Abandoing child for sex'),
			src: cs('videos/skogsmulle.mp4'),
			thumbnail: cs('http://www.bbc.co.uk/stoke/content/images/2006/07/20/carrying_420x270.jpg'),
			views: 34,
			tags: [
				data.tags.premium,
				data.tags.rough,
				data.tags.hardcore,
				data.tags.milf,
			]
		},
		{
			name: cs(data.actors.sara.name + ' at playground'),
			description: cs('Hot deperate fathers'),
			src: cs('videos/skogsmulle.mp4'),
			thumbnail: cs('http://nsrlive.co.uk/wp-content/uploads/2011/12/only_men_aloud.jpeg'),
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
			name: cs(data.actors.filip.name + ' gone mad'),
			description: cs('Exposing frog'),
			src: cs('videos/skogsmulle.mp4'),
			thumbnail: cs('http://www.joe-ks.com/archives_jul2011/FrogFood.jpg'),
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
			name: data.actors.sara.name + cs(' joins cult'),
			description: cs('Trying something new'),
			src: cs('videos/skogsmulle.mp4'),
			thumbnail: cs('http://cdn.stereogum.com/files/2010/04/arizona.jpg'),
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
			name: cs(data.actors.sara.name + ' meets dick'),
			description: cs('Had a pleasent conversation'),
			src: cs('videos/skogsmulle.mp4'),
			thumbnail: cs('http://2.bp.blogspot.com/_eW8U4L0niRE/R5_DS30NQZI/AAAAAAAAAr8/PMAndxsPuXE/s320/bush%2Bdick.jpg'),
			views: 4767,
			tags: [
				data.tags.bigDick,
				data.tags.rough,
				data.tags.blonde
			]
		}
	];

	data.sections = {
		premium: new Section(cs('Premium'), function(video) {
			return contains(video.tags, data.tags.premium);
		}),
		hot: new Section(cs('Hot'), function(video) {
			return contains(video.tags, data.tags.hot);
		}),
		mostWatched: new Section(cs('Most watched'), function(video) {
			return video.views > 100;
		}),
		watchedNow: new Section(cs('Watched right now'), function(video) {
			return contains(video.tags, data.tags.watchedNow);
		})
	};


	/*data.categories = {
		amateur: {
			name: cs('Amateur'),
			videos : [
				{
					name: data.actors.axel.name + cs(' i skogen'),
					description: data.actors.axel.name + cs(' runkar sin mamma i skogen'),
					src: cs('videos/skogsmulle.mp4'),
					thumbnail: cs('http://l.yimg.com/a/i/us/shine/love/forest.jpg'),
					views: 18905,
					feed: true,
					watched: true,
					hot: true,
					premium: true,
				},
				{
					name: data.actors.axel.name + cs('\'s första runkvideo'),
					description: data.actors.axel.name + cs(' pappa visar hur man gör'),
					src: cs('videos/skogsmulle.mp4'),
					thumbnail: cs('http://cdn01.nyheter24.se/9b24e4c10802021d01/2012/11/09/767899/sp0bbfc4.jpg'),
					views: 18905,
					feed: true,
					watched: true,
					hot: true,
					premium: true
				},
				{
					name: data.actors.axel.name + cs('\'s pappas runkvideo'),
					description: data.actors.axel.name + cs(' runkar sin mamma i skogen'),
					src: cs('videos/skogsmulle.mp4'),
					thumbnail: cs('http://www.1clickcd.com/files/NAS4/covers/art-226267-1367482051.jpg'),
					views: 18905,
					feed: true,
					watched: true,
					hot: false,
					premium: false
				}

			]
		},
		sneakyfilm: {
			name: cs('Sneaky film'),
			videos : [
				{ 
					name: data.actors.john.name + cs(' genom nyckelålet'),
					desc: data.actors.john.name + cs('s mammas födelsedagsknull'),
					src: cs('videos/parentsex.mp4'),
					thumbnail: cs('http://fc08.deviantart.net/fs71/f/2012/232/b/5/spy_through_the_keyhole__by_theteasingteacher-d5bqzpw.jpg'),
					views: 675,
					feed: true,
					watched: false,
					hot: true,
					premium: true
				}
			]
			},
			milf: {
			name: cs('MILF'),
			videos : [
				{
					name: data.actors.august.name + cs(' i garderoben'),
					description: data.actors.august.name + cs('s mamma byter om'),
					src: cs('videos/skogsmulle.mp4'),
					thumbnail: cs('http://dailykimchi.com/wp-content/uploads/2011/09/chinese-girls-publicly-changing-clothes-on-shanghai-metro-01.jpg'),
					views: 1,
					feed: true,
					watched: true,
					hot: false,
					premium: true
				}
			]
		},
		mature: {
			name: cs('Mature'),
			videos : [
				{ 
					name: data.actors.sara.name + cs(' på besök'),
					description: data.actors.sara.name + cs('s farmor och farfar tagna på bar gärning'),
					src: cs('videos/skogsmulle.mp4'),
					thumbnail: cs('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSoUAub4omdnfVbvHTw0nsPnlXB4hIXov27HgGFN_vUThBIu6Ps7w'),
					views: 1,
					feed: true,
					watched: false,
					hot: true,
					premium: false
				}
			]
		},
		virgin: {
			name: cs('Virgin'),
			videos : [
				{
					name: data.actors.august.name + cs(' på toa'),
					description: data.actors.august.name + cs(' och syrran i badkaret'),
					src: cs('videos/syrran.mp4'),
					thumbnail: cs('http://straightladsexposed.com/blog/images/naked-men-caught-in-the-toilet3.jpg'),
					views: 65,
					feed: true,
					watched: true,
					hot: false,
					premium: false
				},
				{
					name: data.actors.axel.name + cs('\'s tight pussy'),
					description: data.actors.axel.name + cs(' visiting a friend'),
					src: cs('videos/skogsmulle.mp4'),
					thumbnail: cs('http://diyvagina.com/wp-content/uploads/2013/02/meat-fleshlight-pussy.jpg'),
					views: 67,
					feed: true,
					watched: true,
					hot: true,
					premium: false
				},
				{
					name: cs('Morgonrunk'),
					description: data.actors.john.name + cs(' på toan'),
					src: cs('videos/skogsmulle.mp4'),
					thumbnail: cs('http://blogg.vk.se/Mexan/wp-content/uploads/sites/427/2013/07/IMG_60271.jpg'),
					views: 18,
					feed: true,
					watched: true,
					hot: false,
					premium: false
				}
			]
		},
		fetish: {
			name: cs('Fetish'),
			videos : [
				{
					name: data.actors.john.name + cs(' provar bondage'),
					description: cs('Familjeutflykten'),
					src: cs('videos/skogsmulle.mp4'),
					thumbnail: cs('http://cdnimg.visualizeus.com/thumbs/92/21/bunny,fun,rabbit-9221d06d312d93e767f50196a8b10013_h.jpg'),
					views: 32,
					feed: true,
					watched: true,
					hot: true,
					premium: false
				}
			]
		},
		animal: {
			name: cs('Animal'),
			videos : [
				{
					name: data.actors.axel.name + cs(' on farm'),
					description: cs('Dogs, tools and horses'),
					src: cs('videos/skogsmulle.mp4'),
					thumbnail: cs('http://www.myspaceantics.com//images/myspace-graphics/funny-pictures/dog-porn.jpg'),
					views: 78,
					feed: true,
					watched: true,
					hot: false,
					premium: true
				},
				{
					name: data.actors.simon.name + cs(' with Rosa'),
					description: cs('Moaning MU!'),
					src: cs('videos/skogsmulle.mp4'),
					thumbnail: cs('http://www.leffesbilder.se/Bilder/album/Blandat/Roadside/ko.jpg'),
					views: 78,
					feed: true,
					watched: true,
					hot: true,
					premium: false
				},
				{
					name: data.actors.john.name + cs(' fucked a goat'),
					description: cs('TAPED IT HIMSELF!'),
					src: cs('videos/skogsmulle.mp4'),
					thumbnail: cs('http://www.leffesbilder.se/Bilder/album/Blandat/Roadside/ko.jpg'),
					views: 78,
					feed: true,
					watched: true,
					hot: true,
					premium: false
				}
			]
		}
	};

	data.defaultCategory = cs('amateur';*/

	data.news = [
		{
			headline: cs(data.actors.john.name + ' fucked a goat!'),
			summary: cs('TAPED IT HIMSELF!'),
			content: cs('It\'s maddafakking mental!'),
			image: cs('http://angelforisrael.files.wordpress.com/2013/04/ahmadinejad-goat-fuck.jpg'),
			href: cs('file:///C:/Users/Sara/Documents/GitHub/axel-porn/index.html#/video/animal/2')
		},
		{
			headline: cs(data.actors.axel.name + ' jerked off!'),
			summary: cs('Watch that cum!'),
			content: cs('This must be the ultimate self-pleasing-method.'),
			image: cs('http://art.ngfiles.com/images/154/myfuckinmess_dick-vader.jpg'),
			href: cs('file:///C:/Users/Sara/Documents/GitHub/axel-porn/index.html#/video/amateur/1c')
		},
		{
			headline: cs(data.actors.simon.name + ' is acting INSANE!'),
			summary: cs('Click to watch!'),
			content: cs('We are not going to tell you why because we simply can\'t explain it! Why would anyone do somthing like that, we just can\'t understand.'),
			image: cs('http://1.bp.blogspot.com/-55QPbB5MZsY/TjIEVQCS4sI/AAAAAAAAAK4/-RiHle8WmsI/s1600/monkey-with-his-penis-in-his-mouth.jpg'),
			href: cs('')
		},
		{
			headline: cs('You have done well'),
			summary: cs('More views per day than ever!'),
			content: cs('Today we can proudly present new all time records! We have had 2527583 unique visitors this month, which means an average of 84252 unique visitors a day! Our most popular clip is amazlingly still' + name + 'i skogen!'),
			image: cs('http://www.colourbox.com/preview/4297446-685999-vector-diagram-with-red-arrow-going-up.jpg'),
			href: cs('')
		},
		{
			headline: cs('New premium Video!'),
			summary: cs('CAUTION! SUPER SEXY!'),
			content: cs('We have added a new, mindblowingly sexy video you just can\'t believe is real! By going premium, you will unlock a new world of daring videos. You will gain access to live web cameras and a lot more'),
			image: cs('http://creditspreadslayer.com/wp-content/uploads/2013/12/premium1.jpg'),
			href: cs('')
		},
		{
			headline: cs('GO PREMIUM'),
			summary: cs('Unluck exclusive videos!'),
			content: cs('By going premium, you will unlock a new world of daring videos. You will gain access to live web cameras and a lot more.'),
			image: cs('http://creditspreadslayer.com/wp-content/uploads/2013/12/premium1.jpg'),
			href: cs('')
		},
		{
			headline: cs('Inspire us!'),
			summary: cs('This is your chance!'),
			content: cs('By going premium you will be able to contact us data.starally and tell us about your data.staral preferences. We lissen to our visitors and make changes. Dont miss your chance to be a part of the developement of this sight.'),
			image: cs('http://www.weareprivate.net/blog/wp-content/uploads/fetish-chair.jpg'),
			href: cs('')
		},
		{
			headline: cs('New premium video!'),
			summary: cs('How to fap like a GOD!'),
			content: cs('Learn about this amazing new method! Watch him please himself like no man before him. He will teach you the tecknics you did not even no exist!'),
			image: cs('http://creditspreadslayer.com/wp-content/uploads/2013/12/premium1.jpg'),
			href: cs('')
		},
		{
			headline: cs('Want to be seen?'),
			summary: cs('We want new stars!'),
			content: cs('If you like being seen, we have a offer you simply can\'t refuse! Join us and earn some big money. We are right now searching for new stars ready to show it all for our cameras. Any age, bodyshape and fetish is accepted here.'),
			image: cs('http://3.bp.blogspot.com/_YvpXQckVIuk/Se7WoQvxv2I/AAAAAAAAAI0/azbZNN41PpA/s200/gold+star+sxc'),
			href: cs('')
		},
		{
			headline: cs(data.actors.sara.name + ' experiences nature'),
			summary: cs('Fucked by a tree!'),
			content: cs('After reading a article in Expressen, Sara decides to give eko-sex a try.'),
			image: cs('http://th04.deviantart.net/fs70/PRE/i/2012/070/a/f/mean_tree_____bad_family___internal_art_1_by_floating_eyeball-d4shflx.jpg'),
			href: cs('')
		},
		{
			headline: cs(data.actors.john.name + ' returns'),
			summary: cs('Making new exlusive video!'),
			content: cs('Coming back from his celibat life in Spain he is hornier than ever, watch out for his new hot videos.'),
			image: cs('http://upload.wikimedia.org/wikipedia/commons/3/31/Highland_Cattle_bull.jpg'),
			href: cs('')
		}
	];

	data.premium = false;

	data.footer = cs('By using ' + data.star.title + ' you are agreeing to our Terms of Service which means we have full rights to your soul and your firstborn child. You can cancel this deal by emailing us. Unfortunately our email service does not currently exist nor will it ever do so, too fucking bad. Copyright © 2013 ' + data.company + '.');

	data.about = cs(data.star.title + ' is a project designed to help data.actors all around the world access our wide collection of ' + data.star.name + ' porn. We consider it a basic human  right to have access to pornographic content with ' + data.star.name + ' in it. This statement is supported by the UN, NATO and the Republic of North Korea. This mission was taken upon by three brave data.actors commonly refered to as "the three gods". Their real names are Simon, John and Sara. Heil them.');
	
	initServer(data);	
}();