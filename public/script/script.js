(function () {
	$(document).ready(function () {
		$(".owl-carousel").owlCarousel({
			items: 1,
			loop: true,
			dots: false,
			nav: true,
			autoplay: true,
			autoplayHoverPause: true,
			autoplaySpeed: 1500,
			smartSpeed: 1500
		});
		$("#topnav").on("click", "a", function (event) {
			event.preventDefault();
			let id = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({
				scrollTop: top
			}, 1000);
		});
	});

	document.getElementById('menu').addEventListener('click', hamburgerMenu);

	function hamburgerMenu() {
		let x = document.getElementById('topnav');

		if (x.className === "topnav") {
			x.className += " responsive";
		} else {
			x.className = "topnav";
		}
	}
})();
