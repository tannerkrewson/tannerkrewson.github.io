<template>
  <div>
    <div id="dark-start"></div>
    <div class="gradient-background"></div>
    <div class="container">
      <div class="full-title">
        <div class="profile">
          <img src="static/me.jpg" class="profile-pic" alt="Tanner Krewson" />
        </div>
        <h1 id="typing-title" class="display-4">
          <span class="title"></span>
        </h1>
        <div>
          <div class="full-name">Tanner Krewson</div>
          <span>
            <a href="#" onclick="popupEmail()">Email</a>
          </span>
          •
          <span>
            <a target="_blank" href="https://github.com/tannerkrewson/"
              >GitHub</a
            >
          </span>
          •
          <span>
            <a target="_blank" href="https://www.linkedin.com/in/tannerkrewson/"
              >LinkedIn</a
            >
          </span>
          <br />
          <span>
            <a target="_blank" href="https://www.facebook.com/tannerkrewson/"
              >Facebook</a
            >
          </span>
          •
          <span>
            <a target="_blank" href="https://open.spotify.com/user/1241777067"
              >Spotify</a
            >
          </span>
          •
          <span>
            <a target="_blank" href="https://www.last.fm/user/TankTan38">
              Last .fm
            </a>
          </span>
          <div id="current-song"></div>
        </div>
      </div>

      <div id="project-cards" class="nonexistent">
        <div class="row">
          <div class="col-md-6 card-col">
            <div class="card">
              <div class="card-block">
                <div class="card-title" style="margin-top: 8px;">
                  <a href="#" onclick="popupDSS();">
                    <img class="company-logo" src="static/dss-dark.svg" />
                  </a>
                </div>
                <br />
                <h5 class="card-subtitle">Software Engineer Intern</h5>
                <div class="card-text">Fall 2019 - New York City</div>
                <br />
                <div class="card-buttons">
                  <button
                    type="button"
                    class="btn btn-outline-dark"
                    onclick="popupDSS();"
                  >
                    More Info
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 card-col">
            <div class="card">
              <div class="card-block">
                <div class="card-title" style="margin-top: 8px;">
                  <a href="#" onclick="popupGS();">
                    <img class="company-logo" src="static/gs-dark.svg" />
                  </a>
                </div>
                <br />
                <h5 class="card-subtitle">Technology Analyst Intern</h5>
                <div class="card-text">Summer 2019 - New York City</div>
                <br />
                <div class="card-buttons">
                  <button
                    type="button"
                    class="btn btn-outline-dark"
                    onclick="popupGS();"
                  >
                    More Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 card-col">
            <div class="card">
              <div class="card-block">
                <div class="card-title" style="margin-top: 8px;">
                  <a href="#" onclick="popupDisney();">
                    <img
                      class="company-logo"
                      src="static/disney-parks-dark.svg"
                    />
                  </a>
                </div>
                <h5 class="card-subtitle">Software Engineer Intern</h5>
                <div class="card-text">Summer 2018 - Seattle, WA</div>
                <br />
                <div class="card-buttons">
                  <button
                    type="button"
                    class="btn btn-outline-dark"
                    onclick="popupDisney();"
                  >
                    More Info
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 card-col">
            <div class="card">
              <div class="card-block">
                <div class="card-title" style="margin-top: 8px;">
                  <a href="#" onclick="popupESPN();">
                    <img class="company-logo" src="static/espn-dark.svg" />
                  </a>
                </div>
                <br />
                <h5 class="card-subtitle">Software Engineer Intern</h5>
                <div class="card-text">Summer 2017 - Bristol, CT</div>
                <br />
                <div class="card-buttons">
                  <button
                    type="button"
                    class="btn btn-outline-dark"
                    onclick="popupESPN();"
                  >
                    More Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 card-col">
            <div class="card">
              <div class="card-block">
                <h3 class="card-title">Drawphone</h3>
                <p class="card-text">
                  A simple game of draw what you see, and guess what your
                  friends drew. Over 100,000 drawings and guesses have been
                  submitted to date! Grab four or more of your friends, and play
                  Drawphone right in your phone's web browser.
                </p>
                <div class="card-buttons">
                  <a
                    href="https://drawphone.tannerkrewson.com/"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-dark">
                      Play Drawphone
                    </button>
                  </a>
                  <a
                    href="https://github.com/tannerkrewson/drawphone"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-dark">
                      View on GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 card-col">
            <div class="card">
              <div class="card-block">
                <h3 class="card-title">Mutual Music</h3>
                <p class="card-text">
                  Using your Spotify accounts, Mutual Music creates a playlist
                  of songs you and a friend both love. No more fighting over
                  whose music to play! It's like mutual friends on Facebook, but
                  for your favorite songs.
                </p>
                <div class="card-buttons">
                  <a
                    href="https://www.tannerkrewson.com/mutual-music/"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-dark">
                      Try it Out
                    </button>
                  </a>
                  <a
                    href="https://github.com/tannerkrewson/mutual-music"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-dark">
                      View on GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 card-col">
            <div class="card">
              <div class="card-block">
                <h3 class="card-title">PTSU Exposed</h3>
                <p class="card-text">
                  Apple and Google have been secretly installing a microchip in
                  smartphones that sends psychoelectric waves into the minds of
                  their users, allowing the highest bidding advertisers to
                  influence consumers' brand preferences. Discover the biggest
                  conspiracy in the history of mankind with PTSU Exposed.
                </p>
                <div class="card-buttons">
                  <a
                    href="https://www.tannerkrewson.com/ptsu/secret"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-dark">
                      I'm confused
                    </button>
                  </a>
                  <a href="https://www.tannerkrewson.com/ptsu/" target="_blank">
                    <button type="button" class="btn btn-outline-dark">
                      Go to PTSU Exposed
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 card-col">
            <div class="card">
              <div class="card-block">
                <h3 class="card-title">Connect 4</h3>
                <p class="card-text">
                  A multi-year effort between myself and my friend, Kevin
                  Shannon. Try the local and online multiplayer modes, or test
                  your skills against the wicked-smart AI in single player.
                </p>
                <div class="card-buttons">
                  <a href="https://kevinshannon.dev/connect4/" target="_blank">
                    <button type="button" class="btn btn-outline-dark">
                      Play Connect 4
                    </button>
                  </a>
                  <a
                    href="https://github.com/kevin-shannon/connect4"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-dark">
                      View on GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 card-col">
            <div class="card">
              <div class="card-block">
                <h3 class="card-title">Spyout</h3>
                <p class="card-text">
                  A recreation of the board game The Resistance, made in the
                  style of my previous game, Drawphone. Gather 5 to 10 of your
                  friends, and prepare yourself for major trust issues.
                </p>
                <div class="card-buttons">
                  <a href="https://spyout.tannerkrewson.com/" target="_blank">
                    <button type="button" class="btn btn-outline-dark">
                      Play Spyout
                    </button>
                  </a>
                  <a
                    href="https://github.com/tannerkrewson/spyout"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-dark">
                      View on GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 card-col">
            <div class="card">
              <div class="card-block">
                <h3 class="card-title">Spotify-in-Common</h3>
                <p class="card-text">
                  Mutual Music's more flexible predecessor. Select two or more
                  Spotify playlists, and Spotify-in-Common will generate a new
                  playlist containing the songs present in all of the selected
                  playlists.
                </p>
                <a href="https://www.tannerkrewson.com/sic/" target="_blank">
                  <button type="button" class="btn btn-outline-dark">
                    Try it Out
                  </button>
                </a>
                <a href="https://github.com/tannerkrewson/sic/" target="_blank">
                  <button type="button" class="btn btn-outline-dark">
                    View on GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 card-col">
            <div class="card">
              <div class="card-block">
                <h3 class="card-title">Vidocracy</h3>
                <p class="card-text">
                  Bring democracy to your party's YouTube videos! Open Vidocracy
                  in your phone's browser, and start voting on videos and songs
                  to be played on the big screen.
                </p>
                <div class="card-buttons">
                  <a href="http://vidocracy.tannerkrewson.com/" target="_blank">
                    <button type="button" class="btn btn-outline-dark">
                      Try Vidocracy
                    </button>
                  </a>
                  <a
                    href="https://github.com/tannerkrewson/vidocracy"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-dark">
                      View on GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 card-col">
            <div class="card">
              <div class="card-block">
                <h3 class="card-title">A Kiosk That's Not Trash</h3>
                <p class="card-text">
                  I volunteer for an organization called SAB at my university
                  that plans events and concerts for the students. The website
                  we were using to track ticket sales was born from the depths
                  of hell, so I created a better one that records sales into a
                  Google Sheet.
                </p>
                <div class="card-buttons">
                  <a
                    href="https://www.tannerkrewson.com/a-kiosk-thats-not-trash/"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-dark">
                      Try it Out
                    </button>
                  </a>
                  <a
                    href="https://github.com/tannerkrewson/a-kiosk-thats-not-trash"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-dark">
                      View on GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 card-col">
            <div class="card">
              <div class="card-block">
                <h3 class="card-title">Backspace Bowling</h3>
                <p class="card-text">
                  Experience a "game" that was conceived on a computer in my
                  personal finance class in high school. Even though it's
                  barebones, it's still pretty fun. Hold down Backspace to bowl!
                </p>
                <div class="card-buttons">
                  <a
                    href="https://www.tannerkrewson.com/backspace-bowling/"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-dark">
                      Try it Out
                    </button>
                  </a>
                  <a
                    href="https://github.com/tannerkrewson/backspace-bowling"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-dark">
                      View on GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 card-col">
            <div class="card">
              <div class="card-block">
                <h3 class="card-title">Calorie Countdown</h3>
                <p class="card-text">
                  Calorie Countdown represents the cutting edge of calorie
                  counting research, and is the pinnacle of diet and nutrition
                  tracking software today. Just kidding; it's really just a
                  calculator with nothing but a minus button that I use every
                  day at my college dining halls.
                </p>
                <div class="card-buttons">
                  <a
                    href="https://www.tannerkrewson.com/calorie-countdown/"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-dark">
                      Try it Out
                    </button>
                  </a>
                  <a
                    href="https://github.com/tannerkrewson/calorie-countdown"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-dark">
                      View on GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 card-col">
            <div class="card">
              <div class="card-block">
                <h3 class="card-title">Red Team LAN</h3>
                <p class="card-text">
                  The group I founded to play computer games with my friends.
                  We've had over 30 events since 2013. Check out the timelapses
                  of the parties on the website; they're pretty neat!
                </p>
                <div class="card-buttons">
                  <a
                    href="https://www.tannerkrewson.com/redteamlan/"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-dark">
                      View the website
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 card-col">
            <div class="card">
              <div class="card-block">
                <h3 class="card-title">Lansite</h3>
                <p class="card-text">
                  Connect your LAN party attendees with announcements, private
                  messaging, custom votes, and matchmaking. Lansite is fully
                  modular and features extensive documentation, so hosts can
                  extend it to fit their needs effortlessly.
                </p>
                <a
                  href="https://github.com/tannerkrewson/lansite"
                  target="_blank"
                >
                  <button type="button" class="btn btn-outline-dark">
                    View on GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <br />
        <footer>
          tannerkrewson,
          <span id="footer-year"></span>
        </footer>
      </div>
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  components: {}
}
</script>

<style>
/*
 *	Main
 */
body {
  padding-bottom: 2rem;
  color: #212529;
  text-align: center;
}

.gradient-background {
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-repeat: no-repeat;
  width: 100%;
  top: -80px;
  bottom: -80px;
  position: fixed;
  z-index: -1;
}

#dark-start {
  opacity: 1;
  background-color: #212529;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1;
  pointer-events: none;
}

#dark-start:before {
  content: '';
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  animation-duration: 1s;
  box-shadow: 0px 0px 0px 100vmax #212529;
  width: 150vmax;
  height: 150vmax;
}

.transition:before {
  animation-name: spotlight;
}

.nonexistent {
  display: none;
}

@keyframes spotlight {
  from {
    width: 0vmin;
    height: 0vmin;
  }

  to {
    width: 150vmax;
    height: 150vmax;
  }
}

/*
 *	Header
 */
.full-title {
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  font-size: 1.1rem;
}

.profile {
  display: inline-block;
  margin: 1rem 0;
}

.profile-pic {
  height: 130px;
  border-radius: 50%;
}

.breathe::before {
  content: '';
  position: absolute;
  z-index: -1;
  height: 130px;
  width: 130px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 16px rgba(0, 0, 0, 0.3);
  animation: breathe 16s infinite;
}

@keyframes breathe {
  from,
  75%,
  to {
    transform: scale(1, 1);
  }

  25%,
  50% {
    transform: scale(1.25, 1.25);
  }
}

.full-title a,
a:active,
a:visited {
  color: #212529;
}

.full-title a:hover {
  color: grey;
}

.full-title .display-4 {
  font-family: 'Lato', sans-serif;
}

#current-song {
  margin-top: 22px;
}

#current-song a {
  text-decoration: underline;
}

span.avoidwrap {
  display: inline-block;
}

#typing-title {
  position: relative;
  margin-bottom: 12px;
  transition: all 0.2s ease-in;
}

.full-name {
  font-size: 1.2rem;
}

/*
 *	Project Cards
 */
.card-col {
  display: flex;
  padding: 0.5em;
}

.card {
  background-color: rgba(200, 200, 255, 0.2);
  border: none;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1.25rem;
}

.card-title {
  font-family: 'Lato', sans-serif;
  font-size: 2rem;
  font-weight: 300;
}

.card-subtitle {
  font-family: 'Lato', sans-serif;
}

.company-logo {
  max-width: 62.5%;
  max-height: 105px;
}

/* fix line appearing between buttons */
.card a:hover {
  color: transparent;
}

.btn-outline-dark {
  color: #212529;
  border-color: #212529;
  margin-bottom: 0.3em;
}

/*
 *	SweetAlert
 */
#swal2-content {
  text-align: left;
  font-weight: normal;
}

#swal2-content a {
  color: #45c299;
}

#swal2-content a:hover {
  text-decoration: underline;
}

.swal2-image {
  margin-top: -1.25em;
  margin-left: -1.25em;
  max-width: calc(100% + 2.5em);
  border-radius: 5px 5px 0px 0px;
}

/*
 *	Typed.js
 */
.typed-cursor {
  opacity: 1;
  -webkit-animation: blink 0.7s infinite;
  -moz-animation: blink 0.7s infinite;
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
