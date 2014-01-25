var orderClosure = function() {
	var order = -1;
	return function() {
		this.order = ++order;
	}
};

var Section = function(name, assign) {
	this.name = name;
	this.assign = assign;
	this.videos = [];
	this.getOrder();
}
Section.prototype = {getOrder: orderClosure()};

var createData = function() {
	var data = {};
	data.actors = {
		axel: {
			name: 'Axel',
			title: c('AxXxelPorn', 'Axels hemsida'),
			description: c('The main star of our humble pornsite is Axel. Often apearing alone in his video, he teaches you everything there is to know, and more, about self-pleasing.'),
			image: c('http://3.bp.blogspot.com/-0XDzY3q6Uok/UbnNtcMDilI/AAAAAAAAA8I/2N4M-liOPUk/s1600/02+Curtis+Axel.png'),
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
			title: c('SiMmePorn'),
			description: c('Simon is our girl magnet! He appears in our exlusive softcore premium videos. Some say he\'s secretly into bondage.'),
			image: c('http://i1.mirror.co.uk/incoming/article2109256.ece/ALTERNATES/s615/simon-cowell-baby-2109256.png'),
			links: [
				{
					name: 'Simons facebook',
					href: 'http://www.facebook.com/simon.halvdansson'
				}
			]
		},
		sara: {
			name: 'Sara',
			title: c('SaRaPorn'),
			description: c('As our only female actor, this one blonde girl is responsible for making this pornsite non-gay.'),
			image: c('http://www.eikonaphotography.com/gallery/large/Sara-Balint-by-Eikona-8961-APF.jpg'),
			links: [
				{
					name: 'Saras facebook',
					href: 'http://www.facebook.com/sara.wiberg.18'
				}
			]
		},
		august: {
			name: 'August',
			title: c('aGGePorn'),
			description: c('August is the ultimate MILF-hunter. When he\'s around, no mother is safe. You can choose from a selection of his videos when he takes on women you never could.'),
			image: c('http://www.shootersmma.com/images/news/august_wallen_big.jpg'),
			links: [
				{
					name: 'Agges facebook',
					href: 'http://www.shootersmma.com/images/news/august_wallen_big.jpg'
				}
			],
		},
		filip: {
			name: 'Filip',
			title: c('fiLLiePorn'),
			description: c('Filip is our sites maniac. He is the one to take on the Brasillian dwarfs and the challanges you give him. He has no limits.'),
			image: c('http://www.keek.fr/uploads/Image/filip%20nikolic.jpg'),
			links: [
				{
					name: 'Filips facebook',
					href: 'http://www.shootersmma.com/images/news/august_wallen_big.jpg'
				}
			],
		},
		john: {
			name: 'John',
			title: c('JoHnyPorn'),
			description: c('John is our hardcore legend, known for his daring videos. See his recent controversial videos.'),
			image: c('http://upload.wikimedia.org/wikipedia/commons/d/dd/John_Cena_2010.jpeg'),
			links: [
				{
					name: 'Johns facebook',
					href: 'http://www.facebook.com/johnrappfarnes'
				}
			]
		}
	};

	data.star = data.actors.axel;

	data.company = c('PornStarNetwork inc');

	data.tags = {
		premium: c('Premium'),
		hot: c('Hot'),
		watchedNow: c('Watched Now'),
		milf: c('MILF'),
		amateur: c('Amateur'),
		bondage: c('Bondage'),
		sneakyFilm: c('Sneaky Film'),
		mature: c('Mature'),
		virgin: c('Virgin'),
		fetish: c('Fetish'),
		animal: c('Animal'),
		john: c('John'),
		sara: c('Sara'),
		simon: c('Simon'),
		august: c('August'),
		axel: c('Axel'),
		filip: c('Filip'),
		anal: c('Anal'),
		gay: c('Gay'),
		blonde: c('Blonde'),
		lesbian: c('Lesbian'),
		hardcore: c('Hardcore'),
		rough: c('Rough'),
		bondage: c('Bondage'),
		soloMale: c('Solo Male'),
		BBW: c('BBW'),
		smallTits: c('Small Tits'),
		bigTits: c('Big Tits'),
		bigDick: c('Big Dick'),
		shemale: c('Shemale'),
		hentai: c('Hentai'),
		orgy: c('Orgy'),
		simpsons: c('Simpsons')
	};

	data.videos = [
		{
			name: c(data.actors.axel.name + ' i skogen'),
			description: c(data.actors.axel.name + ' runkar sin mamma i skogen'),
			src: c('videos/skogsmulle.mp4'),
			thumbnail: c('http://l.yimg.com/a/i/us/shine/love/forest.jpg'),
			views: 18905,
			tags: [
				data.tags.amateur,
				data.tags.premium,
				data.tags.watchedNow,
				data.tags.hot
			]
		},
		{
			name: c(data.actors.axel.name + '\'s första runkvideo'),
			description: c(data.actors.axel.name + ' pappa visar hur man gör'),
			src: c('videos/skogsmulle.mp4'),
			thumbnail: c('http://cdn01.nyheter24.se/9b24e4c10802021d01/2012/11/09/767899/sp0bbfc4.jpg'),
			views: 95,
			tags: [
				data.tags.amateur,
				data.tags.watchedNow,
				data.tags.soloMeal
			]
		},
		{
			name: c(data.actors.axel.name + '\'s pappas runkvideo'),
			description: c(data.actors.axel.name + ' runkar sin mamma i skogen'),
			src: c('videos/skogsmulle.mp4'),
			thumbnail: c('http://www.1clickcd.com/files/NAS4/covers/art-226267-1367482051.jpg'),
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
			name: c(data.actors.john.name + ' genom nyckelålet'),
			description: c(data.actors.john.name + 's mammas födelsedagsknull'),
			src: c('videos/parentsex.mp4'),
			thumbnail: c('http://fc08.deviantart.net/fs71/f/2012/232/b/5/spy_through_the_keyhole__by_theteasingteacher-d5bqzpw.jpg'),
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
			name: c(data.actors.august.name + ' i garderoben'),
			description: c(data.actors.august.name + 's mamma byter om'),
			src: c('videos/skogsmulle.mp4'),
			thumbnail: c('http://dailykimchi.com/wp-content/uploads/2011/09/chinese-girls-publicly-changing-clothes-on-shanghai-metro-01.jpg'),
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
			name: c(data.actors.sara.name + ' på besök'),
			description: c(data.actors.sara.name + 's farmor och farfar tagna på bar gärning'),
			src: c('videos/skogsmulle.mp4'),
			thumbnail: c('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSoUAub4omdnfVbvHTw0nsPnlXB4hIXov27HgGFN_vUThBIu6Ps7w'),
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
			name: c(data.actors.august.name + ' på toa'),
			description: c(data.actors.august.name + ' och syrran i badkaret'),
			src: c('videos/syrran.mp4'),
			thumbnail: c('http://straightladsexposed.com/blog/images/naked-men-caught-in-the-toilet3.jpg'),
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
			name: c(data.actors.axel.name + '\'s tight pussy'),
			description: c(data.actors.axel.name + ' visiting a friend'),
			src: c('videos/skogsmulle.mp4'),
			thumbnail: c('http://diyvagina.com/wp-content/uploads/2013/02/meat-fleshlight-pussy.jpg'),
			views: 78,
			tags: [
				data.tags.virgin,
				data.tags.soloMale
			]
		},
		{
			name: c('Morgonrunk'),
			description: c(data.actors.john.name + ' på toan'),
			src: c('videos/skogsmulle.mp4'),
			thumbnail: c('http://blogg.vk.se/Mexan/wp-content/uploads/sites/427/2013/07/IMG_60271.jpg'),
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
			name: c(data.actors.axel.name + ' on farm'),
			description: c('Dogs, tools and horses'),
			src: c('videos/skogsmulle.mp4'),
			thumbnail: c('http://www.myspaceantics.com//images/myspace-graphics/funny-pictures/dog-porn.jpg'),
			views: 45,
			tags: [
				data.tags.soloMale,
				data.tags.premium,
				data.tags.animal,
				data.tags.rough
			]
		},
		{
			name: c(data.actors.simon.name + ' with Rosa'),
			description: c('Moaning MU!'),
			src: c('videos/skogsmulle.mp4'),
			thumbnail: c('http://www.leffesbilder.se/Bilder/album/Blandat/Roadside/ko.jpg'),
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
			name: c(data.actors.john.name + ' fucked a goat'),
			description: c('TAPED IT HIMSELF!'),
			src: c('videos/skogsmulle.mp4'),
			thumbnail: c('http://www.leffesbilder.se/Bilder/album/Blandat/Roadside/ko.jpg'),
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
			name: c(data.actors.john.name + ' provar bondage'),
			description: c('Familjeutflykten'),
			src: c('videos/skogsmulle.mp4'),
			thumbnail: c('http://cdnimg.visualizeus.com/thumbs/92/21/bunny,fun,rabbit-9221d06d312d93e767f50196a8b10013_h.jpg'),
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
			name: c(data.actors.john.name + ' is back'),
			description: c('Spain made him horny'),
			src: c('videos/skogsmulle.mp4'),
			thumbnail: c('http://ourfunfabhols.files.wordpress.com/2008/11/spain-flag.jpg'),
			views: 45,
			tags: [
				data.tags.soloMale,
				data.tags.rough,
				data.tags.hardcore,
				data.tags.bigDick
			]
		},
		{
			name: c(data.actors.simon.name + ' in public'),
			description: c('He isn\'t ashamed'),
			src: c('videos/skogsmulle.mp4'),
			thumbnail: c('http://www.in-public.com/store/image/file/3143/Maciej_Dakowicz_Cardiff_After_Dark_01.jpg?1362841496'),
			views: 71,
			tags: [
				data.tags.soloMale,
				data.tags.hot,
				data.tags.smallTits,
				data.tags.bondage
			]
		},
		{
			name: c(data.actors.august.name + ' picks up MILF'),
			description: c('Abandoing child for sex'),
			src: c('videos/skogsmulle.mp4'),
			thumbnail: c('http://www.bbc.co.uk/stoke/content/images/2006/07/20/carrying_420x270.jpg'),
			views: 34,
			tags: [
				data.tags.premium,
				data.tags.rough,
				data.tags.hardcore,
				data.tags.milf,
			]
		},
		{
			name: c(data.actors.sara.name + ' at playground'),
			description: c('Hot deperate fathers'),
			src: c('videos/skogsmulle.mp4'),
			thumbnail: c('http://nsrlive.co.uk/wp-content/uploads/2011/12/only_men_aloud.jpeg'),
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
			name: c(data.actors.filip.name + ' gone mad'),
			description: c('Exposing frog'),
			src: c('videos/skogsmulle.mp4'),
			thumbnail: c('http://www.joe-ks.com/archives_jul2011/FrogFood.jpg'),
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
			name: data.actors.sara.name + c(' joins cult'),
			description: c('Trying something new'),
			src: c('videos/skogsmulle.mp4'),
			thumbnail: c('http://cdn.stereogum.com/files/2010/04/arizona.jpg'),
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
			name: c(data.actors.sara.name + ' meets dick'),
			description: c('Had a pleasent conversation'),
			src: c('videos/skogsmulle.mp4'),
			thumbnail: c('http://2.bp.blogspot.com/_eW8U4L0niRE/R5_DS30NQZI/AAAAAAAAAr8/PMAndxsPuXE/s320/bush%2Bdick.jpg'),
			views: 4767,
			tags: [
				data.tags.bigDick,
				data.tags.rough,
				data.tags.blonde
			]
		}
	];

	data.sections = [
		new Section('Hot', function(video) {
			return contains(video.tags, data.tags.hot);
		}),
		new Section('Premium', function(video) {
			return contains(video.tags, data.tags.premium);
		}),
		new Section('Most watched', function(video) {
			return video.views > 100;
		}),
		new Section('Watched right now', function(video) {
			return contains(video.tags, data.tags.watchedNow);
		})
	];

	data.news = [
		{
			headline: c(data.actors.john.name + ' fucked a goat!'),
			summary: c('TAPED IT HIMSELF!'),
			content: c('It\'s maddafakking mental!'),
			image: c('http://angelforisrael.files.wordpress.com/2013/04/ahmadinejad-goat-fuck.jpg'),
			href: c('file:///C:/Users/Sara/Documents/GitHub/axel-porn/index.html#/video/animal/2')
		},
		{
			headline: c(data.actors.axel.name + ' jerked off!'),
			summary: c('Watch that cum!'),
			content: c('This must be the ultimate self-pleasing-method.'),
			image: c('http://art.ngfiles.com/images/154/myfuckinmess_dick-vader.jpg'),
			href: c('file:///C:/Users/Sara/Documents/GitHub/axel-porn/index.html#/video/amateur/1c')
		},
		{
			headline: c(data.actors.simon.name + ' is acting INSANE!'),
			summary: c('Click to watch!'),
			content: c('We are not going to tell you why because we simply can\'t explain it! Why would anyone do somthing like that, we just can\'t understand.'),
			image: c('http://1.bp.blogspot.com/-55QPbB5MZsY/TjIEVQCS4sI/AAAAAAAAAK4/-RiHle8WmsI/s1600/monkey-with-his-penis-in-his-mouth.jpg'),
			href: c('')
		},
		{
			headline: c('You have done well'),
			summary: c('More views per day than ever!'),
			content: c('Today we can proudly present new all time records! We have had 2527583 unique visitors this month, which means an average of 84252 unique visitors a day! Our most popular clip is amazlingly still' + name + 'i skogen!'),
			image: c('http://www.colourbox.com/preview/4297446-685999-vector-diagram-with-red-arrow-going-up.jpg'),
			href: c('')
		},
		{
			headline: c('New premium Video!'),
			summary: c('CAUTION! SUPER SEXY!'),
			content: c('We have added a new, mindblowingly sexy video you just can\'t believe is real! By going premium, you will unlock a new world of daring videos. You will gain access to live web cameras and a lot more'),
			image: c('http://creditspreadslayer.com/wp-content/uploads/2013/12/premium1.jpg'),
			href: c('')
		},
		{
			headline: 'GO PREMIUM',
			summary: 'Unluck exclusive videos!',
			content: c('By going premium, you will unlock a new world of daring videos. You will gain access to live web cameras and a lot more.'),
			image: 'http://creditspreadslayer.com/wp-content/uploads/2013/12/premium1.jpg',
			href: c('')
		},
		{
			headline: c('Inspire us!'),
			summary: c('This is your chance!'),
			content: c('By going premium you will be able to contact us data.starally and tell us about your data.staral preferences. We lissen to our visitors and make changes. Dont miss your chance to be a part of the developement of this sight.'),
			image: c('http://www.weareprivate.net/blog/wp-content/uploads/fetish-chair.jpg'),
			href: c('')
		},
		{
			headline: c('New premium video!'),
			summary: c('How to fap like a GOD!'),
			content: c('Learn about this amazing new method! Watch him please himself like no man before him. He will teach you the tecknics you did not even no exist!'),
			image: c('http://creditspreadslayer.com/wp-content/uploads/2013/12/premium1.jpg'),
			href: c('')
		},
		{
			headline: c('Want to be seen?'),
			summary: c('We want new stars!'),
			content: c('If you like being seen, we have a offer you simply can\'t refuse! Join us and earn some big money. We are right now searching for new stars ready to show it all for our cameras. Any age, bodyshape and fetish is accepted here.'),
			image: c('http://3.bp.blogspot.com/_YvpXQckVIuk/Se7WoQvxv2I/AAAAAAAAAI0/azbZNN41PpA/s200/gold+star+sxc'),
			href: c('')
		},
		{
			headline: c(data.actors.sara.name + ' experiences nature'),
			summary: c('Fucked by a tree!'),
			content: c('After reading a article in Expressen, Sara decides to give eko-sex a try.'),
			image: c('http://th04.deviantart.net/fs70/PRE/i/2012/070/a/f/mean_tree_____bad_family___internal_art_1_by_floating_eyeball-d4shflx.jpg'),
			href: c('')
		},
		{
			headline: c(data.actors.john.name + ' returns'),
			summary: c('Making new exlusive video!'),
			content: c('Coming back from his celibat life in Spain he is hornier than ever, watch out for his new hot videos.'),
			image: c('http://upload.wikimedia.org/wikipedia/commons/3/31/Highland_Cattle_bull.jpg'),
			href: c('')
		}
	];

	data.premium = false;

	data.footer = c('By using ' + data.star.title + ' you are agreeing to our Terms of Service which means we have full rights to your soul and your firstborn child. You can cancel this deal by emailing us. Unfortunately our email service does not currently exist nor will it ever do so, too fucking bad. Copyright © 2013 ' + data.company + '.');

	data.about = c(data.star.title + ' is a project designed to help people all around the world access our wide collection of ' + data.star.name + ' porn. We consider it a basic human  right to have access to pornographic content with ' + data.star.name + ' in it. This statement is supported by the UN, NATO and the Republic of North Korea. This mission was taken upon by three brave data.actors commonly refered to as "the three gods". Their real names are Simon, John and Sara. Heil them.');
	
	initServer(data);	
};