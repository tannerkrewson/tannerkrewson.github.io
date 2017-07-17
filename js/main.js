var TITLE_TEXT = "Hi, I'm Tanner.";

$('#footer-year').text((new Date()).getFullYear());

var shouldPlayAnimation = !Cookies.get('typed');
if (shouldPlayAnimation) {
	$(".title").typed({
		strings: [TITLE_TEXT],
		typeSpeed: 100,
		callback: showPage 
	});
} else {
	var title = $(".title");
	
	// we don't fade the title when doing the typed
	// animation... but we're not doing it anymore,
	// so let's fade it
	title.addClass("to-fade");
	title.text(TITLE_TEXT);
	showPage();
}

var sixteenHours = 16/24;
Cookies.set('typed', 'true', { expires: sixteenHours });

function showPage() {
	// make the elements take up space by removing
	// display: none, without removing opacity 0
	$(".non-existant").removeClass("non-existant");

	// if it has less than an 11ms delay, the fade
	// animation won't play
	// 11ms would only work sometimes, so I made
	// it wait longer
	setTimeout(function () {
		var elemsToFade = $(".to-fade");
		elemsToFade.removeClass("to-fade");
		elemsToFade.addClass("fade");
	}, 30);
}
