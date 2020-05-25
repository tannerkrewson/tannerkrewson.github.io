<template>
  <div>
    <div
      id="dark-start"
      :style="{ backgroundColor: darkStartBackgroundColor }"
      :class="{ transition: darkStartTransition }"
    ></div>
    <div class="gradient-background"></div>
    <div class="container">
      <div class="full-title">
        <div class="profile">
          <img src="me.jpg" class="profile-pic" alt="Tanner Krewson" />
        </div>
        <h1
          id="typing-title"
          class="display-4"
          :style="{ zIndex: typingTitleZIndex, color: typingTitleColor }"
          @click="onTitleClick"
        >
          <span class="title"></span>
        </h1>
        <div>
          <div class="full-name">Tanner Krewson</div>
          <span>
            <a href="#" @click="popupEmail">Email</a>
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
            <a target="_blank" href="https://www.facebook.com/tannermkrewson/"
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
              Last.fm
            </a>
          </span>
          <div id="current-song"></div>
        </div>
      </div>

      <div id="project-cards" :class="{ nonexistent: projectCardsNonexistent }">
        <div class="row">
          <div class="col-md-6 card-col">
            <div class="card">
              <div class="card-block">
                <div class="card-title" style="margin-top: 8px;">
                  <a href="#" @click="popupDSS">
                    <img class="company-logo" src="dss-dark.svg" />
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
                    @click="popupDSS"
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
                  <a href="#" @click="popupGS">
                    <img class="company-logo" src="gs-dark.svg" />
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
                    @click="popupGS"
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
                  <a href="#" @click="popupDisney">
                    <img class="company-logo" src="disney-parks-dark.svg" />
                  </a>
                </div>
                <h5 class="card-subtitle">Software Engineer Intern</h5>
                <div class="card-text">Summer 2018 - Seattle, WA</div>
                <br />
                <div class="card-buttons">
                  <button
                    type="button"
                    class="btn btn-outline-dark"
                    @click="popupDisney"
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
                  <a href="#" @click="popupESPN">
                    <img class="company-logo" src="espn-dark.svg" />
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
                    @click="popupESPN"
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
          <span id="footer-year">{{ year }}</span>
        </footer>
      </div>
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
import Typed from 'typed.js'
import Swal from 'sweetalert2'
const Popup = Swal.mixin({
  confirmButtonColor: '#45c299'
})

export default {
  data: () => ({
    year: new Date().getFullYear(),
    titleText: '',
    typingTitleZIndex: () => 100,
    typingTitleColor: () => 'white',
    projectCardsNonexistent: true,
    darkStartBackgroundColor: '#212529',
    darkStartTransition: false
  }),
  mounted() {
    const shouldPlayAnimation = true
    if (shouldPlayAnimation) {
      // start the title above the shadow, and as white text
      this.typingTitleZIndex = 100
      this.typingTitleColor = 'white'

      // execute the animation
      new Typed('.title', {
        strings: ['Tanner Krewson'],
        typeSpeed: 100,
        onComplete: () => {
          // wait a bit, then show the page
          setTimeout(() => this.showPage(), 300)
        }
      })
    } else {
      // forgo the animation, and just show the page
      this.titleText = 'Tanner Krewson'
      this.showPage()
    }
  },
  methods: {
    showPage() {
      // make the elements take up space by removing
      // display: none, without removing opacity 0
      this.projectCardsNonexistent = false

      // get rid of the solid color covering the page
      this.darkStartBackgroundColor = 'transparent'

      // invert title text color
      this.typingTitleColor = '#212529'

      // begin the circle transition
      this.darkStartTransition = true
    },
    popupEmail() {
      Popup.fire({
        title: 'Email me!',
        html:
          '<div style="color: light-blue; text-align:center;"><a href="mailto:tannerkrewson@gmail.com">tannerkrewson@gmail.com</a></div>'
      })
    },

    popupESPN() {
      const innerHTML =
        'ESPN was a great first internship! I spent the first ​6​ ​weeks​ on ​the​ ​Consumer​ ​Tech​ ​Ops​ ​team,​ ​' +
        'diagnosing​ ​and​ ​fixing​ ​bugs across​ ​ESPN.com​. I spent the ' +
        'remaining ​4​ ​weeks​ ​on​ ​the​ ESPN.com ​feature​ ​development​ ​team,​ ​working on the homepage news feed, a redesign ' +
        "for MLB Gamecast, and an internal tool called Feed Manager. Here's " +
        'what I put on my resume about it:<br><br>' +
        '<ul style="text-align: left;"><li>Designed​ ​and​ ​implemented​ ​live​ ​updating​ ​for​ ​news​ ​feeds​ ​on​ ​ESPN.com</li>' +
        '<li>Recognized and corrected a deployment flaw that could have taken down the site</li>' +
        '<li>Resolved​ ​long-standing​ ​major​ ​UI​ ​issues​ ​with​ ​an​ ​internal​ ​translations​ ​tool</li>' +
        '<li>Wrote new features in React for a tool used by editors to write and publish articles</li>' +
        '<li>Navigated a legacy code base written with a proprietary back-end language called Tea</li>' +
        '</ul>'
      Popup.fire({
        html: innerHTML,
        imageUrl: 'https://i.imgur.com/aYKfZ62.jpg'
      })
    },

    popupDisney() {
      const innerHTML =
        "<p>My second internship was at Disney's Seattle office. I worked on Studio Northstar, a team that develops ​" +
        'the attraction and show pages for the Disney parks. Our main task for the summer was a redesign of the ' +
        "attractions pages from PHP to Angular 5. Here's what I put on my resume about it:<br><br>" +
        '<ul style="text-align: left;"><li>Worked on a full stack redesign of the Disney attractions pages in Angular 5 and Node</li>' +
        '<li>Created four major UI components in Angular 5 and ensured 100% unit test coverage</li>' +
        "<li>Wrote a feature that themes the UI by extracting colors from an attraction's image</li>" +
        '<li>Took the initiative to refactor and document the Angular 5 project as it grew</li>' +
        "<li>Designed an easter egg that reveals the developers' names when activated</li>" +
        '<li>Made many bug fixes and minor features across legacy PHP and Angular 1 codebases</li>' +
        '</ul></p>'
      Popup.fire({
        html: innerHTML,
        imageUrl: 'https://i.imgur.com/Rzpnv4A.jpg'
      })
    },

    popupGS() {
      const innerHTML =
        '<p>My third internship was at Goldman Sachs in NYC. It ' +
        'was an awesome experience going from never having taken an econ class ' +
        'to working on Wall Street! I worked on the Goldman Sachs Asset ' +
        'Management Compliance Automation team. My project was to redesign an ' +
        'existing dashboard for compliance officers to easily see what trades ' +
        'they need to review. I did it with React, Redux, and a bit of Java.​' +
        '</p>'
      Popup.fire({
        html: innerHTML,
        imageUrl: 'https://i.imgur.com/hYkR64w.jpg'
      })
    },

    popupDSS() {
      const innerHTML =
        '<p>For my fourth and final internship, I joined the ' +
        'team at Disney Streaming Services in NYC for the launch of Disney+. ' +
        'What a cool experience!' +
        '</p>'
      Popup.fire({
        html: innerHTML,
        imageUrl: 'https://i.imgur.com/dmIzkPU.png'
      })
    },

    onTitleClick() {
      if (this.projectCardsNonexistent) {
        // forgo the animation, and just show the page
        this.titleText = 'Tanner Krewson'
        this.showPage()
      } else {
        this.popupReplayAnimation()
      }
    },

    popupReplayAnimation() {
      Popup.fire({
        title: 'Want to see the cool typing intro animation again?',
        type: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          // Cookies.set('typed', 'false')
          location.reload()
        }
      })
    }
  }
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
