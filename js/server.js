var people = {
	axel: {
		name: 'Axel',
		title: 'AxXelPorn',
		description: 'The main star of our humble pornsite is Axel. Often apearing alone in his video, he teaches you everything there is to know, and more, about self-pleasing.',
		image: '',
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
		image: '',
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
		image: '',
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
		image: '',
		links: [
			{
				name: 'Agges facebook',
				href: 'http://www.facebook.com/agge21?ref=ts&fref=ts'
			}
		],
	},
	john: {
		name: 'John',
		title: 'JoHnyPorn',
		description: 'John is our hardcore legend, known for his daring videos. ',
		image: '',
		links: [
			{
				name: 'Johns facebook',
				href: 'http://www.facebook.com/john.rapp.3'
			}
		]
	}
};
var person = people.john;
var Section = function(name, assign) {
	this.name = name;
	this.assign = assign;
	this.videos = [];
}
var server = function() {
	var data = {
		categories: {
			amateur: {
				name: 'Amateur',
				videos : [
					{
						name: people.axel.name + ' i skogen',
						description: people.axel.name + ' runkar sin mamma i skogen',
						src: 'videos/skogsmulle.mp4',
						thumbnail: 'http://l.yimg.com/a/i/us/shine/love/forest.jpg',
						views: 18905,
						feed: true,
						watched: true,
						hot: true,
						premium: true,
					},
					{
						name: people.axel.name + '\'s första runkvideo',
						description: people.axel.name + ' pappa visar hur man gör',
						src: 'videos/skogsmulle.mp4',
						thumbnail: 'http://cdn01.nyheter24.se/9b24e4c10802021d01/2012/11/09/767899/sp0bbfc4.jpg',
						views: 18905,
						feed: true,
						watched: true,
						hot: true,
						premium: true
					},
					{
						name: people.axel.name + '\'s pappas runkvideo',
						description: people.axel.name + ' runkar sin mamma i skogen',
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
						name: people.john.name + ' genom nyckelålet',
						desc: people.john.name + 's mammas födelsedagsknull',
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
						name: people.august.name + ' i garderoben',
						description: people.august.name + 's mamma byter om',
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
						name: people.sara.name + ' på besök',
						description: people.sara.name + 's farmor och farfar tagna på bar gärning',
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
						name: people.august.name + ' på toa',
						description: people.august.name + ' och syrran i badkaret',
						src: 'videos/syrran.mp4',
						thumbnail: 'http://straightladsexposed.com/blog/images/naked-men-caught-in-the-toilet3.jpg',
						views: 65,
						feed: true,
						watched: true,
						hot: false,
						premium: false
					},
					{
						name: people.axel.name + '\'s tight pussy',
						description: people.axel.name + ' visiting a friend',
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
						description: people.john.name + ' på toan',
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
						name: people.axel.name + ' provar bondage',
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
						name: people.axel.name + ' on farm',
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
						name: people.simon.name + ' with Rosa',
						description: 'Moaning MU!',
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
		},

		defaultCategory: 'amateur',
		news: [
			{
				headline: people.john.name + ' fucked a goat!',
				summary: 'TAPED IT HIMSELF!',
				content: 'It\'s maddafakking mental!',
				image: 'http://angelforisrael.files.wordpress.com/2013/04/ahmadinejad-goat-fuck.jpg',
				href: ''
			},
			{
				headline: people.axel.name + ' jerked off!',
				summary: 'Watch that cum!',
				content: 'This must be the ultimate self-pleasing-method.',
				image: 'http://art.ngfiles.com/images/154/myfuckinmess_dick-vader.jpg',
				href: ''
			},
			{
				headline: people.simon.name + ' acting INSANE!',
				summary: 'Click to watch!',
				content: 'We are not going to tell you why because we simply can\'t explain it! Why would anyone do somthing like that, we just can\'t understand.',
				image: 'http://1.bp.blogspot.com/-55QPbB5MZsY/TjIEVQCS4sI/AAAAAAAAAK4/-RiHle8WmsI/s1600/monkey-with-his-penis-in-his-mouth.jpg',
				href: ''
			},
			{
				headline: 'You have done well',
				summary: 'More views per day than ever!',
				content: 'Today we can proudly present new all time records! We have had 2527583 unique visitors this month, which means an average of 84252 unique visitors a day! Our most popular clip is amazlingly still' + name + 'i skogen!',
				image: 'http://www.colourbox.com/preview/4297446-685999-vector-diagram-with-red-arrow-going-up.jpg',
				href: ''
			},
			{
				headline: 'New premium Video!',
				summary: 'CAUTION! SUPER SEXY!',
				content: 'We have added a new, mindblowingly sexy video you just can\'t believe is real! By going premium, you will unlock a new world of daring videos. You will gain access to live web cameras and a lot more',
				image: 'http://creditspreadslayer.com/wp-content/uploads/2013/12/premium1.jpg',
				href: ''
			},
			{
				headline: 'GO PREMIUM',
				summary: 'Unluck exclusive videos!',
				content: 'By going premium, you will unlock a new world of daring videos. You will gain access to live web cameras and a lot more.',
				image: 'http://creditspreadslayer.com/wp-content/uploads/2013/12/premium1.jpg',
				href: ''
			},
			{
				headline: 'Inspire us!',
				summary: 'This is your chance!',
				content: 'By going premium you will be able to contact us personally and tell us about your personal preferences. We lissen to our visitors and make changes. Dont miss your chance to be a part of the developement of this sight.',
				image: 'http://www.weareprivate.net/blog/wp-content/uploads/fetish-chair.jpg',
				href: ''
			},
			{
				headline: 'New premium video!',
				summary: 'How to fap like a GOD!',
				content: 'Learn about this amazing new method! Watch him please himself like no man before him. He will teach you the tecknics you did not even no exist!',
				image: 'http://creditspreadslayer.com/wp-content/uploads/2013/12/premium1.jpg',
				href: ''
			},
			{
				headline: 'Want to be seen?',
				summary: 'We want new stars!',
				content: 'If you like being seen, we have a offer you simply can\'t refuse! Join us and earn some big money. We are right now searching for new stars ready to show it all for our cameras. Any age, bodyshape and fetish is accepted here.',
				image: 'http://3.bp.blogspot.com/_YvpXQckVIuk/Se7WoQvxv2I/AAAAAAAAAI0/azbZNN41PpA/s200/gold+star+sxc',
				href: ''
			}
		],
		sections: {
			premium: new Section('Premium', function(video) {
				return video.premium;
			}),
			hot: new Section('Hot', function(video) {
				return video.hot;
			}),
			watched: new Section('Most watched', function(video) {
				return video.watched;
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
	}
	for(var article in data.news) {
		data.news[article].href = '#/article/' + article;
	}
	return data;
}();


	

