<script>
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import WAVES from 'vanta/dist/vanta.waves.min';
  import Cookies from 'js-cookie';
  import Typed from 'typed.js';
  import Swal from 'sweetalert2';

  import Listening from '$lib/Listening.svelte';
  import ProjectCard from '$lib/ProjectCard.svelte';

  const Popup = Swal.mixin({
    confirmButtonColor: '#8a614c'
  });

  let titleText = $state('');
  let typingTitleZIndex = $state(100);
  let typingTitleColor = $state('#DDDDDD');
  let projectCardsNonexistent = $state(true);
  let startBackgroundColor = $state('#113946');
  let startTransition = $state(false);
  let year = $state(new Date().getFullYear());

  let typed;
  let vantaEffect;

  onMount(() => {
    vantaEffect = WAVES({
      el: document.getElementById('vanta'),
      THREE,
      mouseControls: false,
      touchControls: false,
      color: '#bca37f'
    });

    const shouldPlayAnimation = !(Cookies.get('typed') === 'true');
    const sixteenHours = 16 / 24;
    Cookies.set('typed', 'true', { expires: sixteenHours });

    if (shouldPlayAnimation) {
      typingTitleZIndex = 100;
      typingTitleColor = '#ead7bb';

      typed = new Typed('#typing-title .title', {
        strings: ['Tanner Krewson'],
        typeSpeed: 100,
        onComplete: () => {
          setTimeout(() => showPage(), 300);
        }
      });
    } else {
      titleText = 'Tanner Krewson';
      showPage();
    }

    return () => {
      if (typed) typed.destroy();
      if (vantaEffect) vantaEffect.destroy();
    };
  });

  function showPage() {
    projectCardsNonexistent = false;
    startBackgroundColor = 'transparent';
    typingTitleColor = '#113946';
    startTransition = true;
  }

  function popupEmail() {
    Popup.fire({
      title: 'Email me!',
      html:
        '<div style="color: #8a614c; text-align:center;"><a href="mailto:tannerkrewson@gmail.com">tannerkrewson@gmail.com</a></div>'
    });
  }

  function popupESPN() {
    Popup.fire({
      html:
        'ESPN was my first internship! I worked out of ESPN Headquarters in Bristol, Connecticut. I spent the first 6 weeks on the Consumer Tech Ops team, ' +
        'diagnosing and fixing bugs across ESPN.com. I spent the ' +
        'remaining 4 weeks on the ESPN.com feature development team, working on the homepage news feed, a redesign ' +
        "for MLB Gamecast, and an internal tool called Feed Manager. Here's " +
        'what I put on my resume about it:<br><br>' +
        '<ul style="text-align: left;"><li>Designed and implemented live updating for news feeds on ESPN.com</li>' +
        '<li>Recognized and corrected a deployment flaw that could have taken down the site</li>' +
        '<li>Resolved long-standing major UI issues with an internal translations tool</li>' +
        '<li>Wrote new features in React for a tool used by editors to write and publish articles</li>' +
        '<li>Navigated a legacy code base written with a proprietary back-end language called Tea</li>' +
        '</ul>',
      imageUrl: 'https://i.imgur.com/aYKfZ62.jpg'
    });
  }

  function popupDisney() {
    Popup.fire({
      html:
        "<p>My second internship was at Disney's Seattle office. I worked on Studio Northstar, a team that develops " +
        'the attraction and show pages for the Disney parks. Our main task for the summer was a redesign of the ' +
        "attractions pages from PHP to Angular 5. Here's what I put on my resume about it:<br><br>" +
        '<ul style="text-align: left;"><li>Worked on a full stack redesign of the Disney attractions pages in Angular 5 and Node</li>' +
        '<li>Created four major UI components in Angular 5 and ensured 100% unit test coverage</li>' +
        "<li>Wrote a feature that themes the UI by extracting colors from an attraction's image</li>" +
        '<li>Took the initiative to refactor and document the Angular 5 project as it grew</li>' +
        "<li>Designed an easter egg that reveals the developers' names when activated</li>" +
        '<li>Made many bug fixes and minor features across legacy PHP and Angular 1 codebases</li>' +
        '</ul></p>',
      imageUrl: 'https://i.imgur.com/Rzpnv4A.jpg'
    });
  }

  function popupGS() {
    Popup.fire({
      html:
        '<p>My third internship was at Goldman Sachs in NYC. It ' +
        'was an awesome experience going from never having taken an econ class ' +
        'to working on Wall Street! I worked on the Goldman Sachs Asset ' +
        'Management Compliance Automation team. My project was to redesign an ' +
        'existing dashboard for compliance officers to easily see what trades ' +
        'they need to review. I did it with React, Redux, and a bit of Java.' +
        '</p>',
      imageUrl: 'https://i.imgur.com/hYkR64w.jpg'
    });
  }

  function popupDSSIntern() {
    Popup.fire({
      html:
        '<p>For my fourth and final internship, I spent my fall semester ' +
        'at Disney Streaming in NYC for the launch of Disney+. ' +
        'I joined the Web Platform Architecture team, which manages ' +
        'the servers for disneyplus.com on AWS. I also created an internal ' +
        'tool with Next.js and React to quickly find and view information ' +
        'about any microservice in the company.' +
        '</p>',
      imageUrl: 'https://i.imgur.com/dmIzkPU.png'
    });
  }

  function popupDSSFull() {
    Popup.fire({
      html:
        '<p>After graduating in May 2020, I returned to Disney Streaming ' +
        'as a full-time software engineer. I onboarded ' +
        'remotely due to the COVID-19 pandemic, but in July 2021, I moved to ' +
        'New York City. I am on the Web Playback Experience ' +
        'team, which develops the web browser video player for Disney+, Hulu ' +
        "ESPN+, Star+, and NHL.TV." +
        '</p>',
      imageUrl: 'https://i.imgur.com/wsHJaI0.jpg'
    });
  }

  function onTitleClick() {
    if (projectCardsNonexistent) {
      titleText = 'Tanner Krewson';
      showPage();
    } else {
      popupReplayAnimation();
    }
  }

  function popupReplayAnimation() {
    Popup.fire({
      title: 'Want to see the typing intro animation again?',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        Cookies.set('typed', 'false');
        location.reload();
      }
    });
  }
</script>

<svelte:head>
  <title>Tanner Krewson</title>
  <meta name="description" content="Software Engineer at Disney Streaming. Rocketcrab, Drawphone..." />
</svelte:head>

<div>
  <div
    id="dark-start"
    style="background-color: {startBackgroundColor};"
    class:transition={startTransition}
  ></div>
  <div id="vanta" class="stationary-background"></div>
  <div class="container">
    <div class="full-title">
      <div class="profile">
        <img src="me.jpg" class="profile-pic" alt="Tanner Krewson" />
      </div>
      <h1
        id="typing-title"
        class="display-4"
        style="z-index: {typingTitleZIndex}; color: {typingTitleColor};"
        onclick={onTitleClick}
      >
        <span class="title">{titleText}</span>
      </h1>
      <div>
        <span>
          <a href="#" onclick={popupEmail}>Email</a>
        </span>
        •
        <span>
          <a target="_blank" href="https://github.com/tannerkrewson/">GitHub</a>
        </span>
        •
        <span>
          <a target="_blank" href="https://www.linkedin.com/in/tannerkrewson/">LinkedIn</a>
        </span>
        •
        <span>
          <a target="_blank" href="https://www.facebook.com/tannermkrewson/">Facebook</a>
        </span>
        <br />
        <span>
          <a target="_blank" href="https://vsco.co/tannerkrewson/gallery">VSCO</a>
        </span>
        •
        <span>
          <a target="_blank" href="https://open.spotify.com/user/1241777067">Spotify</a>
        </span>
        •
        <span>
          <a target="_blank" href="https://www.last.fm/user/TankTan38">Last.fm</a>
        </span>
        •
        <span>
          <a target="_blank" href="https://letterboxd.com/tannerkrewson/">Letterboxd</a>
        </span>
        <Listening />
      </div>
    </div>

    <div id="project-cards" class:nonexistent={projectCardsNonexistent}>
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8 card-col" style="justify-content: center;">
          <div class="card" style="width: 40em;">
            <div class="card-block">
              <div class="card-title" style="margin-top: 1.5em 0;">
                <img
                  src="ds-long-dark.svg"
                  style="max-width: 18em; margin: .3em 0;"
                  alt="Disney Streaming"
                />
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div style="margin:1em;">
                    <h5 class="card-subtitle">Software Engineer II</h5>
                    <div class="card-text">
                      Since June 2020 - New York City
                    </div>
                    <div class="card-buttons">
                      <button
                        type="button"
                        class="btn btn-outline-light"
                        onclick={popupDSSFull}
                      >
                        More Info
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div style="margin:1em;">
                    <h5 class="card-subtitle">Software Engineer Intern</h5>
                    <div class="card-text">Fall 2019 - New York City</div>
                    <div class="card-buttons">
                      <button
                        type="button"
                        class="btn btn-outline-light"
                        onclick={popupDSSIntern}
                      >
                        More Info
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>

      <div class="row">
        <div class="col-md-4 card-col">
          <div class="card">
            <div class="card-block">
              <div class="card-title" style="margin-top: 8px;">
                <img
                  class="company-logo"
                  src="gs-dark.svg"
                  onclick={popupGS}
                  alt="Goldman Sachs"
                />
              </div>
              <br />
              <h5 class="card-subtitle">Technology Analyst Intern</h5>
              <div class="card-text">Summer 2019 - New York City</div>
              <div class="card-buttons">
                <button
                  type="button"
                  class="btn btn-outline-light"
                  onclick={popupGS}
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 card-col">
          <div class="card">
            <div class="card-block">
              <div class="card-title" style="margin-top: 8px;">
                <img
                  class="company-logo"
                  src="disney-parks-dark.svg"
                  onclick={popupDisney}
                  alt="Disney"
                />
              </div>
              <br />
              <h5 class="card-subtitle">Software Engineer Intern</h5>
              <div class="card-text">Summer 2018 - Seattle, WA</div>
              <div class="card-buttons">
                <button
                  type="button"
                  class="btn btn-outline-light"
                  onclick={popupDisney}
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 card-col">
          <div class="card">
            <div class="card-block">
              <div class="card-title" style="margin-top: 8px;">
                <img
                  class="company-logo"
                  src="espn-dark.svg"
                  onclick={popupESPN}
                  alt="ESPN"
                />
              </div>
              <br />
              <h5 class="card-subtitle">Software Engineer Intern</h5>
              <div class="card-text">Summer 2017 - Bristol, CT</div>
              <div class="card-buttons">
                <button
                  type="button"
                  class="btn btn-outline-light"
                  onclick={popupESPN}
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8 card-col" style="justify-content: center;">
          <div class="card" style="width: 35em;">
            <div class="card-block">
              <div
                class="card-title"
                style="margin-top: -1.5em; margin-bottom: .4em;"
              >
                <img
                  class="company-logo"
                  src="rocketcrab-logo-text-dark.svg"
                  style="max-height: 5em;"
                  alt="rocketcrab"
                />
              </div>
              <p class="card-text">
                rocketcrab is a lobby service and launcher for mobile web
                party games.
              </p>
              <div class="card-buttons">
                <a href="https://rocketcrab.com/" target="_blank">
                  <button type="button" class="btn btn-outline-light">
                    Try it out
                  </button>
                </a>
                <a
                  href="https://github.com/tannerkrewson/rocketcrab"
                  target="_blank"
                >
                  <button type="button" class="btn btn-outline-light">
                    View on GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>

      <div class="row">
        <ProjectCard
          title="Drawphone"
          leftButtonHref="https://drawphone.tannerkrewson.com/"
          leftButtonText="Play Drawphone"
          rightButtonHref="https://github.com/tannerkrewson/drawphone"
          rightButtonText="View on GitHub"
          rocketcrab={true}
        >
          A simple game of draw what you see, and guess what your friends
          drew. Over 7 million drawings and guesses have been submitted to
          date! Grab four or more of your friends, and play Drawphone right in
          your phone's web browser.
        </ProjectCard>

        <ProjectCard
          title="Spyfall"
          leftButtonHref="https://spyfall.tannerkrewson.com/"
          leftButtonText="Play Spyfall"
          rightButtonHref="https://github.com/tannerkrewson/spyfall"
          rightButtonText="View on GitHub"
          rocketcrab={true}
        >
          The game that inspired Drawphone, spyfall.crabhat.com, was removed
          from the Internet. So, I recovered the old code, rewrote most of it,
          and added a few new features. Give it a shot!
        </ProjectCard>
      </div>

      <div class="row">
        <ProjectCard
          title="PTSU Exposed"
          leftButtonHref="https://www.tannerkrewson.com/ptsu/secret"
          leftButtonText="I'm confused"
          rightButtonHref="https://www.tannerkrewson.com/ptsu/"
          rightButtonText="Go to PTSU Exposed"
        >
          Apple and Google have been secretly installing a microchip in
          smartphones that sends psychoelectric waves into the minds of their
          users, allowing the highest bidding advertisers to influence
          consumers' brand preferences. Discover the biggest conspiracy in the
          history of mankind with PTSU Exposed.
        </ProjectCard>

        <ProjectCard
          title="Connect 4"
          leftButtonHref="https://kevinshannon.dev/connect4/"
          leftButtonText="Play Connect 4"
          rightButtonHref="https://github.com/kevin-shannon/connect4"
          rightButtonText="View on GitHub"
        >
          A multi-year effort between myself and my friend, Kevin Shannon. Try
          the local and online multiplayer modes, or test your skills against
          the wicked-smart AI in single player.
        </ProjectCard>
      </div>
      <div class="row">
        <ProjectCard
          title="Mutual Music"
          leftButtonHref="https://www.tannerkrewson.com/mutual-music/"
          leftButtonText="Try it out"
          rightButtonHref="https://github.com/tannerkrewson/mutual-music"
          rightButtonText="View on GitHub"
        >
          Using your Spotify accounts, Mutual Music creates a playlist of
          songs you and a friend both love. No more fighting over whose music
          to play! It's like mutual friends on Facebook, but for your favorite
          songs.
        </ProjectCard>
        <ProjectCard
          title="Spotify-in-Common"
          leftButtonHref="https://www.tannerkrewson.com/sic/"
          leftButtonText="Try it out"
          rightButtonHref="https://github.com/tannerkrewson/sic/"
          rightButtonText="View on GitHub"
        >
          Mutual Music's more flexible predecessor. Select two or more Spotify
          playlists, and Spotify-in-Common will generate a new playlist
          containing the songs present in all of the selected playlists.
        </ProjectCard>
      </div>

      <div class="row">
        <ProjectCard
          title="Snakeout"
          leftButtonHref="https://snakeout.tannerkrewson.com/"
          leftButtonText="Play Snakeout"
          rightButtonHref="https://github.com/tannerkrewson/snakeout"
          rightButtonText="View on GitHub"
          rocketcrab={true}
        >
          A recreation of the board game The Resistance, made in the style of
          Drawphone and Spyfall. Gather 5 to 10 of your friends, and prepare
          yourself for major trust issues.
        </ProjectCard>

        <ProjectCard
          title="COVID-19 Stimulus Calculator"
          leftButtonHref="https://www.tannerkrewson.com/coronacalc"
          leftButtonText="Try it out"
          rightButtonHref="https://github.com/tannerkrewson/coronacalc"
          rightButtonText="View on GitHub"
        >
          A simple quiz to see the difference in the stimulus check amount
          that one would receive under the final CARES act, versus the
          Democrats' original, failed act.
        </ProjectCard>
      </div>

      <div class="row">
        <ProjectCard
          title="Vidocracy"
          leftButtonHref="http://vidocracy.tannerkrewson.com/"
          leftButtonText="Try Vidocracy"
          rightButtonHref="https://github.com/tannerkrewson/vidocracy"
          rightButtonText="View on GitHub"
        >
          Bring democracy to your party's YouTube videos! Open Vidocracy in
          your phone's browser, and start voting on videos and songs to be
          played on the big screen.
        </ProjectCard>
        <ProjectCard
          title="A Kiosk That's Not Trash"
          leftButtonHref="https://www.tannerkrewson.com/a-kiosk-thats-not-trash/"
          leftButtonText="Try it out"
          rightButtonHref="https://github.com/tannerkrewson/a-kiosk-thats-not-trash"
          rightButtonText="View on GitHub"
        >
          When I was in college, I volunteered for an organization called SAB
          that plans events and concerts for the students. The website we were
          using to track ticket sales was born from the depths of hell, so I
          created a better one that records sales into a Google Sheet.
        </ProjectCard>
      </div>

      <div class="row">
        <ProjectCard
          title="Backspace Bowling"
          leftButtonHref="https://www.tannerkrewson.com/backspace-bowling/"
          leftButtonText="Try it out"
          rightButtonHref="https://github.com/tannerkrewson/backspace-bowling"
          rightButtonText="View on GitHub"
        >
          This game was made exclusively on a computer in my Personal Finance
          class during my senior year of high school when I should have been
          doing other things. It's okay though, I got an A in the class. Even
          though it's barebones, it's still pretty fun. Hold down Backspace to
          bowl!
        </ProjectCard>

        <ProjectCard
          title="Calorie Countdown"
          leftButtonHref="https://www.tannerkrewson.com/calorie-countdown/"
          leftButtonText="Try it out"
          rightButtonHref="https://github.com/tannerkrewson/calorie-countdown"
          rightButtonText="View on GitHub"
        >
          Calorie Countdown represents the cutting edge of calorie counting
          research, and is the pinnacle of diet and nutrition tracking
          software today. Just kidding; it's really just a calculator with
          nothing but a minus button that I used every day at the buffet
          dining halls in college.
        </ProjectCard>
      </div>

      <div class="row">
        <ProjectCard
          title="Red Team LAN"
          leftButtonHref="https://www.tannerkrewson.com/redteamlan"
          leftButtonText="View the website"
        >
          The group I founded to play computer games with my friends from high
          school. We had had 32 events from 2013 to 2020. Check out the
          timelapses of the parties on the website; they're pretty neat!
        </ProjectCard>
        <ProjectCard
          title="Lansite"
          leftButtonHref="https://github.com/tannerkrewson/lansite"
          leftButtonText="View on GitHub"
        >
          Connect your LAN party attendees with announcements, private
          messaging, custom votes, and matchmaking. Lansite is fully modular
          and features extensive documentation, so hosts can effortlessly
          extend it to fit their needs.
        </ProjectCard>
      </div>

      <br />
      <footer>
        tannerkrewson,
        <span id="footer-year">{year}</span>
        <br />
        <a
          href="https://github.com/tannerkrewson/tannerkrewson.github.io"
          target="_blank"
          >View on GitHub</a
        >
      </footer>
    </div>
  </div>
</div>

<style>
  :global(body) {
    padding-bottom: 2rem;
    color: #113946;
    text-align: center;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
  }

  :global(span.avoidwrap) {
    display: inline-block;
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
    box-shadow: 0px 0px 0px 100vmax #113946;
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

  .full-title a,
  a:active,
  a:visited {
    display: inline-block;
    color: #113946;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    transform: scale(1.05);
  }

  .full-title .display-4 {
    font-family: 'Jost', sans-serif;
    font-weight: 500;
    font-size: 2.5em;
    font-style: italic;
  }

  #typing-title {
    position: relative;
    margin-bottom: 12px;
    transition: all 0.2s ease-in;
  }

  .company-logo {
    max-width: 62.5%;
    max-height: 105px;
  }

  :global(#swal2-content) {
    text-align: left;
    font-weight: normal;
  }

  :global(#swal2-content a) {
    color: #8a614c;
  }

  :global(#swal2-content a:hover) {
    text-decoration: underline;
  }

  :global(.swal2-image) {
    margin-top: -1.25em;
    margin-left: -1.25em;
    max-width: calc(100% + 2.5em);
    border-radius: 5px 5px 0px 0px;
  }

  :global(.typed-cursor) {
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
