(function() {
	const photosText = document.getElementById('showPhotos');
	const photosGif = document.getElementById('photosGif');
	const showPhotoGif = (ev) => {
		photosGif.classList.add('show');
	};
	const hidePhotoGif = (ev) => {
		photosGif.classList.remove('show');
	};
	photosText.addEventListener('mouseenter', showPhotoGif);
	photosText.addEventListener('mouseleave', hidePhotoGif);
}());