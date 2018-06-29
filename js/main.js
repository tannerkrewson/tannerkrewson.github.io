var TITLE_TEXT = "Hi, I'm Tanner.";

$('#footer-year').text((new Date()).getFullYear());

var shouldPlayAnimation = !Cookies.get('typed');
if (shouldPlayAnimation) {
	$('#typing-title').css('z-index', 100);
	var waitAndDisplay = () => {
		setTimeout(showPage, 500);
	}
	$(".title").typed({
		strings: [TITLE_TEXT],
		typeSpeed: 100,
		callback: waitAndDisplay
	});
} else {
	var title = $("#typing-title .title");
	title.text(TITLE_TEXT);
	showPage();
}

getCurrentSong();

var sixteenHours = 16/24;
Cookies.set('typed', 'true', { expires: sixteenHours });

function showPage() {
	// make the elements take up space by removing
	// display: none, without removing opacity 0
	$("#project-cards").removeClass("nonexistent");

	// get rid of the solid black
	$("#dark-start").css('background-color', 'transparent');

	// begin the transition
	$("#dark-start").addClass("transition");
}

function getCurrentSong() {
	var url = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=TankTan38&api_key=c68ea49b4e861204b0e6b6607a77c542&format=json&limit=1';
	httpGetAsync(url, function( data ) {
		var currentSong = JSON.parse(data);
		var theTrack = currentSong.recenttracks.track[0];
		var theArtist = theTrack.artist['#text'];
		var theTitle = theTrack.name;
		var nowPlaying = theTrack["@attr"] && theTrack["@attr"].nowplaying;
		
		var listenText = nowPlaying ? "Now Listening to" : "Last Song I Listened To:";

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
		finalHTML += theTitle + '</a> by<i> ' + theArtist + '</i>'
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
	'<li>Navigated a monolithic legacy code base with a proprietary PHP-like back-end language</li>' +
	'</ul>';
	swal({
		content: {
			element: 'p',
			attributes: { innerHTML }
		},
		icon: 'https://i.imgur.com/aYKfZ62.jpg'
	});
}
