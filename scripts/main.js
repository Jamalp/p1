'use strict';

(function () {
	var photosText = document.getElementById('showPhotos');
	var photosGif = document.getElementById('photosGif');
	var showPhotoGif = function showPhotoGif(ev) {
		photosGif.classList.add('show');
	};
	var hidePhotoGif = function hidePhotoGif(ev) {
		photosGif.classList.remove('show');
	};
	photosText.addEventListener('mouseenter', showPhotoGif);
	photosText.addEventListener('mouseleave', hidePhotoGif);

	if (/Mobi/.test(navigator.userAgent)) {
		document.body.classList.add('mobile');
	}
})();
(function () {
	var songTitle = document.getElementById('songTitle');
	var songArtist = document.getElementById('songArtist');
	var songLink = document.getElementById('songLink');
	var playlist = [{
		song: 'Navajo',
		artist: 'Masego',
		link: 'https://open.spotify.com/track/4M8dMRUhr0ZQrpIJpi55cu'
	}, {
		song: 'Get Down',
		artist: 'Nas',
		link: 'https://open.spotify.com/track/3UYuDTslR35thjQzaVwRMe'
	}, {
		song: 'Football Head',
		artist: 'Flamingosis',
		link: 'https://open.spotify.com/track/6i3i8Mm2ul9SdYxPWVnoDp'
	}, {
		song: 'Lyk Dis',
		artist: 'NxWorries',
		link: 'https://open.spotify.com/track/6kSgsughJ1LFHaClLGleIR'
	}, {
		song: 'Red',
		artist: 'xxyyxx',
		link: 'https://open.spotify.com/track/1xAj0iDV5y4cqwU0grR6iG'
	}, {
		song: 'SUPER PREDATOR',
		artist: 'Joey bada$$',
		link: 'https://open.spotify.com/track/0dKLHSqcu9vuFgnb0O8rff'
	}, {
		song: 'Biking',
		artist: 'Frank Ocean',
		link: 'https://open.spotify.com/track/0dKLHSqcu9vuFgnb0O8rff'
	}, {
		song: 'John Muir',
		artist: 'Schoolboy Q',
		link: 'https://open.spotify.com/track/7sr74Bz3GBTNMQe1m4F5Ut'
	}, {
		song: 'DNA',
		artist: 'Kendrick Lamar',
		link: 'https://open.spotify.com/track/6HZILIRieu8S0iqY8kIKhj'
	}, {
		song: '4422',
		artist: 'Drake',
		link: 'https://open.spotify.com/track/2fkeWbM6iqTw7oGHTYm2lw'
	}, {
		song: 'I\'m Gone',
		artist: 'Maal A Goomba, P. Morris',
		link: 'https://open.spotify.com/track/3Wdjd7vMaa8yfIB3VNRNgb'
	}, {
		song: 'Anita',
		artist: 'Smino',
		link: 'https://open.spotify.com/track/09CqF6VVL6G7NwkCj3M2lU'
	}, {
		song: 'Amor No Morro',
		artist: 'Sango',
		link: 'https://open.spotify.com/track/5LLqgxSiRBL7lCHphsH06N'
	}, {
		song: 'I\'m Sorry',
		artist: 'Swell',
		link: 'https://open.spotify.com/track/6tuZKBiS1p6Ig0UtC0ii0Y'
	}, {
		song: 'High',
		artist: 'Little Dragon',
		link: 'https://open.spotify.com/track/4XvaPmSeNClan7Hn4e55wQ'
	}, {
		song: 'Blood On Me',
		artist: 'Sampha',
		link: 'https://open.spotify.com/track/4JJIj448WHVYw2kEYfIj94'
	}, {
		song: 'The Goings On',
		artist: 'Oddisee',
		link: 'https://open.spotify.com/track/4JJIj448WHVYw2kEYfIj94'
	}, {
		song: 'Redbone',
		artist: 'Childish Gambino',
		link: 'https://open.spotify.com/track/3kxfsdsCpFgN412fpnW85Y'
	}, {
		song: 'Get Along',
		artist: 'Anderson .Paak',
		link: 'https://open.spotify.com/track/5cfIibuUGxlrdXcNaWmAnQ'
	}, {
		song: 'Make You Wanna',
		artist: 'Ta-Ku',
		link: 'https://open.spotify.com/track/3F1cVurf5O2SBcJvSvY4cq'
	}, {
		song: 'Before I Move Off',
		artist: 'Mount Kimbie',
		link: 'https://open.spotify.com/track/6rcBB3zLdFn6RjEzienOdm'
	}, {
		song: 'Made To Stray',
		artist: 'Mount Kimbie',
		link: 'https://open.spotify.com/track/7M0GDtHcuJrTMWtnSs48I3'
	}, {
		song: 'Glowed Up',
		artist: 'Kaytranada',
		link: 'https://open.spotify.com/track/33pDmPx2pkJ7JCAQpRDQ9B'
	}, {
		song: 'Polaroids',
		artist: 'Jay Prince',
		link: 'https://open.spotify.com/track/7rNOe6TJhf2INSLF1fdlSk'
	}, {
		song: 'Never',
		artist: 'J.I.D',
		link: 'https://open.spotify.com/track/7hsulgRNgbyczeAg8tChCB'
	}, {
		song: 'Sensei',
		artist: 'Jetson',
		link: 'https://open.spotify.com/track/6n5lmkTrMZEJaKWzvU6Zvj'
	}, {
		song: 'Da Art of Storytellin\'',
		artist: 'OutKast',
		link: 'https://open.spotify.com/track/1KQymTxNJfWk6vCD5ywKW2'
	}, {
		song: 'Ramona Reborn',
		artist: 'Delicate Steve',
		link: 'https://open.spotify.com/track/4dMRURWuPZmjpAMeNqvUkt'
	}, {
		song: 'Love What Happened Here',
		artist: 'James Blake',
		link: 'https://open.spotify.com/track/2T5gsa0Yw7R8tyfwx15iXn'
	}, {
		song: 'Didn\'t I',
		artist: 'Darondo',
		link: 'https://open.spotify.com/track/3xBGFVU2b2PV556Q3ebsQH'
	}, {
		song: 'Realize',
		artist: 'Benny Sings',
		link: 'https://open.spotify.com/track/4MQmFYfiyNwho3H1UnQbO8'
	}, {
		song: 'Malukayi',
		artist: 'Mbongwana Star',
		link: 'https://open.spotify.com/track/6EMkSNeihAYqm7hiFTE6LC'
	}, {
		song: 'Baby',
		artist: 'Ariel Pink\'s Haunted Graffiti',
		link: 'https://open.spotify.com/track/2TUdxbIF3rpY887d8m0ZGV'
	}, {
		song: 'Grind',
		artist: 'Les Sins',
		link: 'https://open.spotify.com/track/6mRrCKQXduMCYFHNzd4FzL'
	}, {
		song: 'Tezeta (Nostalgia)',
		artist: 'Mulatu Astatke',
		link: 'https://open.spotify.com/track/414J8tKHbtF16XOiHGBEso'
	}, {
		song: 'Yègellé Tezeta',
		artist: 'Mulatu Astatke',
		link: 'https://open.spotify.com/track/0nIfIiTrlOeiFEYpVCJZtY'
	}, {
		song: 'Will I See You Again',
		artist: 'Onra',
		link: 'https://open.spotify.com/track/5LylzewBf8tzHNqAVqsCKZ'
	}, {
		song: 'Baltimore',
		artist: 'Nina Simone',
		link: 'https://open.spotify.com/track/39CyGKIFqMzSuynOR8uilD'
	}];

	var songOnDeck = playlist[Math.floor(Math.random() * playlist.length)];

	songTitle.innerText = songOnDeck.song;
	songLink.href = songOnDeck.link;
	songArtist.innerText = '- ' + songOnDeck.artist;
})();
(function () {
	if (typeof reallySimpleWeather !== 'undefined') {
		reallySimpleWeather.weather({
			wunderkey: '', // leave blank for Yahoo
			location: 'Los Angeles, CA', //your location
			woeid: '', // "Where on Earth ID"
			unit: 'f', // 'c' also works
			success: function success(weather) {
				var html = weather.temp + '° & ' + weather.currently;
				document.getElementById('weather').innerText = html;
			},
			error: function error(_error) {
				document.getElementById('weather').innerText = '72° & Sunny..probably';
			}
		});
	}
})();
(function () {
	var extend = function extend(a, b) {
		for (var key in b) {
			if (b.hasOwnProperty(key)) {
				a[key] = b[key];
			}
		}
		return a;
	};

	var getMousePos = function getMousePos(ev) {
		var posx = 0;
		var posy = 0;
		if (!ev) ev = window.event;
		if (ev.pageX || ev.pageY) {
			posx = ev.pageX;
			posy = ev.pageY;
		} else if (ev.clientX || ev.clientY) {
			posx = ev.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			posy = ev.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		return { x: posx, y: posy };
	};

	var TiltObj = function TiltObj(el, options) {
		this.el = el;
		this.options = extend({}, this.options);
		extend(this.options, options);
		this.DOM = {};
		this.DOM.img = this.el.querySelector('.work-image-wrapper');
		this.DOM.title = this.el.querySelector('.work-title');
		this._initEvents();
	};

	TiltObj.prototype.options = {
		movement: {
			img: { translation: { x: -10, y: -10 } },
			title: { translation: { x: 25, y: 25 } }
		}
	};

	TiltObj.prototype._initEvents = function () {
		var _this = this;

		this.mouseenterFn = function (ev) {
			anime.remove(_this.DOM.img);
			anime.remove(_this.DOM.title);
		};

		this.mousemoveFn = function (ev) {
			requestAnimationFrame(function () {
				return _this._layout(ev);
			});
		};

		this.mouseleaveFn = function (ev) {
			requestAnimationFrame(function () {
				anime({
					targets: [_this.DOM.img, _this.DOM.title],
					duration: 1500,
					easing: 'easeOutElastic',
					elasticity: 400,
					translateX: 0,
					translateY: 0
				});
			});
		};

		this.el.addEventListener('mousemove', this.mousemoveFn);
		this.el.addEventListener('mouseleave', this.mouseleaveFn);
		this.el.addEventListener('mouseenter', this.mouseenterFn);
	};

	TiltObj.prototype._layout = function (ev) {
		var mousepos = getMousePos(ev);

		var docScrolls = {
			left: document.body.scrollLeft + document.documentElement.scrollLeft,
			top: document.body.scrollTop + document.documentElement.scrollTop
		};

		var bounds = this.el.getBoundingClientRect();
		// Mouse position relative to the main element (this.DOM.el).
		var relmousepos = {
			x: mousepos.x - bounds.left - docScrolls.left,
			y: mousepos.y - bounds.top - docScrolls.top
		};

		var t = {
			img: this.options.movement.img.translation,
			title: this.options.movement.title.translation
		};

		var transforms = {
			img: {
				x: (-1 * t.img.x - t.img.x) / bounds.width * relmousepos.x + t.title.x,
				y: (-1 * t.img.y - t.img.y) / bounds.height * relmousepos.y + t.img.y
			},
			title: {
				x: (-1 * t.title.x - t.title.x) / bounds.width * relmousepos.x + t.title.x,
				y: (-1 * t.title.y - t.title.y) / bounds.height * relmousepos.y + t.title.y
			}
		};
		this.DOM.img.style.WebkitTransform = this.DOM.img.style.transform = 'translateX(' + transforms.img.x + 'px) translateY(' + transforms.img.y + 'px)';
		this.DOM.title.style.WebkitTransform = this.DOM.title.style.transform = 'translateX(' + transforms.title.x + 'px) translateY(' + transforms.title.y + 'px)';
	};

	var init = function init() {
		if (!document.body.classList.contains('mobile')) {
			Array.from(document.querySelectorAll('.work--layout')).forEach(function (el) {
				return new TiltObj(el);
			});
		}
		var rellax = new Rellax('.rellax');
	};
	init();
})();