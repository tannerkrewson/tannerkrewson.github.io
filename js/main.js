const TITLE_TEXT = "Hi, I'm Tanner.";

$('#footer-year').text((new Date()).getFullYear());

// swal defaults
const Popup = Swal.mixin({
	confirmButtonColor: '#45c299'
});

$('.profile-pic').click(function () {
	Popup.fire('', 'If you\'re feeling stressed, breathe in as the circle expands, and breathe out as it shrinks. 😊');
});

var shouldPlayAnimation = !Cookies.get('typed');
if (shouldPlayAnimation) {

	// start the title above the shadow, and as white text
	$('#typing-title').css('z-index', 100);
	$('#typing-title').css('color', 'white');

	// execute the animation
	new Typed(".title", {
		strings: [TITLE_TEXT],
		typeSpeed: 100,
		onComplete: () => {
			// wait a bit, then show the page
			setTimeout(showPage, 300);
		}
	});

} else {
	// forgo the animation, and just show the page
	var title = $("#typing-title .title");
	title.text(TITLE_TEXT);
	showPage();
}

getCurrentSong();

const sixteenHours = 16/24;
Cookies.set('typed', 'true', { expires: sixteenHours });

function showPage() {
	// make the elements take up space by removing
	// display: none, without removing opacity 0
	$("#project-cards").removeClass("nonexistent");

	// get rid of the solid black
	$("#dark-start").css('background-color', 'transparent');

	// change title text color
	$('#typing-title').css('color', '#212529');

	// begin the transition
	$("#dark-start").addClass("transition");

	$(".profile").addClass("breathe");
}

function getCurrentSong() {
	var url = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=TankTan38&api_key=c68ea49b4e861204b0e6b6607a77c542&format=json&limit=1';
	httpGetAsync(url, function( data ) {
		var currentSong = JSON.parse(data);
		var theTrack = currentSong.recenttracks.track[0];
		var theArtist = theTrack.artist['#text'];
		var theTitle = theTrack.name;
		var nowPlaying = theTrack["@attr"] && theTrack["@attr"].nowplaying;

		var listenText = "";

		if (nowPlaying) {
			listenText = "Right now, I'm listening to "
		} else {
				
			// converts 9712739817 ms to "4 minute" ago
			var timeSinceText = timeSince(theTrack.date.uts);

			// if it's not 1, make it plural
			if (!timeSinceText.startsWith('1 ')) {
				timeSinceText += 's';
			}

			listenText = timeSinceText + " ago, I listened to "
		}

		/* split at the part in front of any hyphen or parenthese
		 * to take a song title like this:
		 *     (I Can't Get No) Satisfaction - Mono Version / Remastered 2002
		 * and turn it into:
		 *     (I Can't Get No) Satisfaction
		 * and also cut it off at 32 characters for those songs that be like:
		 *     Piano Sonata No. 14 in C-Sharp Minor, Op. 27 No. 2 "Moonlight": I. Adagio sostenuto
		*/
		theTitle = theTitle.split(' - ')[0].split(' (')[0].trim().substring(0, 32);

		var finalHTML = '<span class="avoidwrap">' + listenText + '</span> ';
		finalHTML += '<span class="avoidwrap">';
		finalHTML += '<a target="_blank" ';
		finalHTML += 'href="//www.youtube.com/results?search_query=' + theTitle + '+' + theArtist + '">';
		finalHTML += theTitle + '</a> by<i> ' + theArtist + '</i>';
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

// https://stackoverflow.com/a/8247097
function timeSince(date) {

    var seconds = Math.floor(((new Date().getTime()/1000) - date)),
    interval = Math.floor(seconds / 31536000);

    if (interval > 1) return interval + " year";

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return interval + " minute";

    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return interval + " day";

    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return interval + " hour";

    interval = Math.floor(seconds / 60);
    if (interval > 1) return interval + " minute";

    return Math.floor(seconds) + " second";
}

function popupEmail() {
	Popup.fire({
		title: 'Email me!',
		content: {
			element: 'div',
			attributes: {
				style: 'text-align: center;',
				innerHTML: '<a href="mailto:tannerkrewson@gmail.com" style="color: light-blue;">tannerkrewson@gmail.com</a>'
			}
		}
	});
}

function popupESPN() {
	var innerHTML = 'ESPN was a great first internship! I spent the first ​6​ ​weeks​ on ​the​ ​Consumer​ ​Tech​ ​Ops​ ​team,​ ​' +
	'diagnosing​ ​and​ ​fixing​ ​bugs across​ ​ESPN.com​. I spent the ' +
	'remaining ​4​ ​weeks​ ​on​ ​the​ ESPN.com ​feature​ ​development​ ​team,​ ​working on the homepage news feed, a redesign ' +
	'for MLB Gamecast, and an internal tool called Feed Manager. Here\'s ' +
	'what I put on my resume about it:<br><br>' +
	'<ul style="text-align: left;"><li>Designed​ ​and​ ​implemented​ ​live​ ​updating​ ​for​ ​news​ ​feeds​ ​on​ ​ESPN.com</li>' +
	'<li>Recognized and corrected a deployment flaw that could have taken down the site</li>' +
	'<li>Resolved​ ​long-standing​ ​major​ ​UI​ ​issues​ ​with​ ​an​ ​internal​ ​translations​ ​tool</li>' +
	'<li>Wrote new features in React for a tool used by editors to write and publish articles</li>' +
	'<li>Navigated a legacy code base written with a proprietary back-end language called Tea</li>' +
	'</ul>';
	Popup.fire({
		html: innerHTML,
		imageUrl: 'https://i.imgur.com/aYKfZ62.jpg'
	});
}

function popupDisney() {
	var innerHTML = '<p>My second internship was at Disney\'s Seattle office. I worked on Studio Northstar, a team that develops ​' +
	'the attraction and show pages for the Disney parks. Our main task for the summer was a redesign of the ' +
	'attractions pages from PHP to Angular 5. Here\'s what I put on my resume about it:<br><br>' +
	'<ul style="text-align: left;"><li>Worked on a full stack redesign of the Disney attractions pages in Angular 5 and Node</li>' +
	'<li>Created four major UI components in Angular 5 and ensured 100% unit test coverage</li>' +
	'<li>Wrote a feature that themes the UI by extracting colors from an attraction\'s image</li>' +
	'<li>Took the initiative to refactor and document the Angular 5 project as it grew</li>' +
	'<li>Designed an easter egg that reveals the developers\' names when activated</li>' +
	'<li>Made many bug fixes and minor features across legacy PHP and Angular 1 codebases</li>' +
	'</ul></p>';
	Popup.fire({
		html: innerHTML,
		imageUrl: 'https://i.imgur.com/Rzpnv4A.jpg'
	});
}
