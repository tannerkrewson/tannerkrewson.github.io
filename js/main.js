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

getCurrentSong();

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

function getCurrentSong() {
	httpGetAsync('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=TankTan38&api_key=c68ea49b4e861204b0e6b6607a77c542&format=json&limit=1', function( data ) {
		var currentSong = JSON.parse(data);
		var theTrack = currentSong.recenttracks.track[0];
		var theArtist = theTrack.artist['#text'];
		var theTitle = theTrack.name;

		/* take the part in front of any hyphen or parenthese
		 * to turn a song title like this:
		 *     (I Can't Get No) Satisfaction - Mono Version / Remastered 2002
		 * and turn it into:
		 *     (I Can't Get No) Satisfaction
		 * and also cut it off at 32 characters for those songs that be like:
		 *     Piano Sonata No. 14 in C-Sharp Minor, Op. 27 No. 2 "Moonlight": I. Adagio sostenuto
		*/
		theTitle = theTitle.split(' - ')[0].split(' (')[0].trim().substring(0, 32);

		var finalHTML = '<span class="avoidwrap">Last Song I Listened To:</span> '
		finalHTML += '<span class="avoidwrap"><i>';
		finalHTML += '<a class="title-link" target="_blank" ';
		finalHTML += 'href="//www.youtube.com/results?search_query=' + theTitle + '+' + theArtist + '">';
		finalHTML += theTitle + '</a> </i>by<i> ' + theArtist + '</i>'
		finalHTML += '</span>';
		$('#current-song').html(finalHTML);
	});

	function httpGetAsync(theUrl, callback) {
	    var xmlHttp = new XMLHttpRequest();
	    xmlHttp.onreadystatechange = function() {
	        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
	            callback(xmlHttp.responseText);
	    }
	    xmlHttp.open("GET", theUrl, true); // true for asynchronous
	    xmlHttp.send(null);
	}
}

function popupEmail() {
	swal({
		title: 'Email me!',
		html: '<a href="mailto:tannerkrewson@gmail.com" style="color: blue;">tannerkrewson@gmail.com</a>'
	});
}

function popup2018() {
	swal({
		title: 'Advertise your company here!',
		html: 'I\'m looking for a company to advertise in this box. ' +
			'Your company\'s logo will be at the top of this website, which gets <b>tens</b> of views a month!<br><br>' +
			'And if you act now, I will <i>personally </i> fly out to your company for 10 to 12 weeks this summer ' +
			'and write software as an intern. <b>What a steal!</b><br><br>' +
			'Contact me now to take advantage of this once-in-a-lifetime oppurtunity. Time is running out!',
		type: 'warning',
		confirmButtonText: 'Email me!',
		showCancelButton: true
	}).then((result) => {
	  if (result.value) {
	    popupEmail();
	  }
	});
}
