<script>
  import Swal from 'sweetalert2';
  import Listening from '$lib/Listening.svelte';
  import ProjectCard from '$lib/ProjectCard.svelte';

  const Popup = Swal.mixin({
    confirmButtonColor: '#155dfc',
    background: '#181a1f',
    color: '#a8adb7'
  });

  let year = $state(new Date().getFullYear());

  function popupEmail() {
    Popup.fire({
      title: 'Email me!',
      html: '<div style="text-align:center;"><a href="mailto:tannerkrewson@gmail.com" style="color:#8ec5ff">tannerkrewson@gmail.com</a></div>'
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
</script>

<svelte:head>
  <title>Tanner Krewson</title>
  <meta name="description" content="Software Engineer at Disney Streaming. Rocketcrab, Drawphone..." />
</svelte:head>

<!-- Hero -->
<section class="framed-section hero" style="min-height: 448px; background: url('#fine-grid');">
  <!-- rails with nodes -->
  <div class="rail-left">
    <div class="rail-rule"></div>
    <div class="node" style="top: 0; right: -3px;"></div>
    <div class="node" style="bottom: 0; right: -3px;"></div>
  </div>
  <div class="rail-right">
    <div class="rail-rule"></div>
    <div class="node" style="top: 0; left: -3px;"></div>
    <div class="node" style="bottom: 0; left: -3px;"></div>
  </div>

  <div class="hero-content content-pad" style="text-align: center;">
    <img
      src="me.jpg"
      alt="Tanner Krewson"
      style="width: 130px; height: 130px; border-radius: 50%; margin-bottom: 24px; border: 1px solid var(--line-subtle);"
    />
    <h1 style="
      font-family: var(--font-serif);
      font-size: clamp(44px, 8vw, 48px);
      line-height: 1.2;
      font-weight: 300;
      font-style: italic;
      letter-spacing: -0.02em;
      color: var(--text-strong);
      margin-bottom: 24px;
    ">Tanner Krewson</h1>
    <nav style="display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; margin-bottom: 16px;" aria-label="Social links">
      <a class="social-link" href="#" onclick={(e) => { e.preventDefault(); popupEmail(); }}>Email</a>
      <span style="color: var(--text-muted);">•</span>
      <a class="social-link" target="_blank" href="https://github.com/tannerkrewson/">GitHub</a>
      <span style="color: var(--text-muted);">•</span>
      <a class="social-link" target="_blank" href="https://www.linkedin.com/in/tannerkrewson/">LinkedIn</a>
      <span style="color: var(--text-muted);">•</span>
      <a class="social-link" target="_blank" href="https://www.facebook.com/tannermkrewson/">Facebook</a>
      <span style="color: var(--text-muted);">•</span>
      <a class="social-link" target="_blank" href="https://vsco.co/tannerkrewson/gallery">VSCO</a>
      <span style="color: var(--text-muted);">•</span>
      <a class="social-link" target="_blank" href="https://open.spotify.com/user/1241777067">Spotify</a>
      <span style="color: var(--text-muted);">•</span>
      <a class="social-link" target="_blank" href="https://www.last.fm/user/TankTan38">Last.fm</a>
      <span style="color: var(--text-muted);">•</span>
      <a class="social-link" target="_blank" href="https://letterboxd.com/tannerkrewson/">Letterboxd</a>
    </nav>
    <Listening />
  </div>
</section>

<!-- Section divider -->
<div class="framed-section">
  <div class="section-divider full-bleed">
    <svg aria-hidden="true" width="100%" height="14" style="position: absolute; inset: 0;">
      <rect width="100%" height="100%" fill="url(#slash-divider)" />
    </svg>
  </div>
</div>

<!-- Work Experience -->
<section class="framed-section">
  <div class="rail-left">
    <div class="rail-rule"></div>
  </div>
  <div class="rail-right">
    <div class="rail-rule"></div>
  </div>

  <div class="content-pad">
    <div class="section-heading-row">
      <div>
        <h2>Work Experience</h2>
      </div>
    </div>

    <!-- Disney Streaming -->
    <div class="work-spotlight" style="text-align: center; margin-bottom: 48px;">
      <img src="ds-long-dark.svg" alt="Disney Streaming" style="max-height: 28px; margin-bottom: 20px; filter: brightness(0) invert(1);" />
      <div class="feature-grid">
        <div class="feature-item">
          <h4>Software Engineer II</h4>
          <p>Since June 2020 — New York City</p>
          <button type="button" class="btn-secondary" onclick={popupDSSFull}>More Info</button>
        </div>
        <div class="feature-item">
          <h4>Software Engineer Intern</h4>
          <p>Fall 2019 — New York City</p>
          <button type="button" class="btn-secondary" onclick={popupDSSIntern}>More Info</button>
        </div>
      </div>
    </div>

    <!-- Other internships -->
    <div class="feature-grid" style="grid-template-columns: repeat(3, 1fr);">
      <div class="feature-item">
        <img src="gs-dark.svg" alt="Goldman Sachs" class="company-icon" style="filter: brightness(0) invert(1);" />
        <h4>Technology Analyst Intern</h4>
        <p>Summer 2019 — New York City</p>
        <button type="button" class="btn-secondary" onclick={popupGS}>More Info</button>
      </div>
      <div class="feature-item">
        <img src="disney-parks-dark.svg" alt="Disney" class="company-icon" style="filter: brightness(0) invert(1);" />
        <h4>Software Engineer Intern</h4>
        <p>Summer 2018 — Seattle, WA</p>
        <button type="button" class="btn-secondary" onclick={popupDisney}>More Info</button>
      </div>
      <div class="feature-item">
        <img src="espn-dark.svg" alt="ESPN" class="company-icon" style="filter: brightness(0) invert(1);" />
        <h4>Software Engineer Intern</h4>
        <p>Summer 2017 — Bristol, CT</p>
        <button type="button" class="btn-secondary" onclick={popupESPN}>More Info</button>
      </div>
    </div>
  </div>
</section>

<!-- Section divider -->
<div class="framed-section">
  <div class="section-divider full-bleed">
    <svg aria-hidden="true" width="100%" height="14" style="position: absolute; inset: 0;">
      <rect width="100%" height="100%" fill="url(#slash-divider)" />
    </svg>
  </div>
</div>

<!-- rocketcrab -->
<section class="framed-section">
  <div class="rail-left">
    <div class="rail-rule"></div>
  </div>
  <div class="rail-right">
    <div class="rail-rule"></div>
  </div>

  <div class="subsection-pad" style="text-align: center;">
    <img src="rocketcrab-logo-text-dark.svg" alt="rocketcrab" style="max-height: 40px; margin-bottom: 12px; filter: brightness(0) invert(1);" />
    <p style="max-width: 420px; margin: 0 auto 16px; color: var(--text-default);">
      rocketcrab is a lobby service and launcher for mobile web party games.
    </p>
    <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">
      <a href="https://rocketcrab.com/" target="_blank"><button type="button" class="btn-secondary">Try it out</button></a>
      <a href="https://github.com/tannerkrewson/rocketcrab" target="_blank"><button type="button" class="btn-secondary">View on GitHub</button></a>
    </div>
  </div>
</section>

<!-- Section divider -->
<div class="framed-section">
  <div class="section-divider full-bleed">
    <svg aria-hidden="true" width="100%" height="14" style="position: absolute; inset: 0;">
      <rect width="100%" height="100%" fill="url(#slash-divider)" />
    </svg>
  </div>
</div>

<!-- Projects -->
<section class="framed-section">
  <div class="rail-left">
    <div class="rail-rule"></div>
  </div>
  <div class="rail-right">
    <div class="rail-rule"></div>
  </div>

  <div class="content-pad">
    <div class="section-heading-row">
      <h2>Projects</h2>
    </div>

    <div class="project-grid">
      <ProjectCard
        title="Drawphone"
        leftButtonHref="https://drawphone.tannerkrewson.com/"
        leftButtonText="Play Drawphone"
        rightButtonHref="https://github.com/tannerkrewson/drawphone"
        rightButtonText="View on GitHub"
        rocketcrab={true}
      >
        A simple game of draw what you see, and guess what your friends drew. Over 7 million drawings and guesses have been submitted to date! Grab four or more of your friends, and play Drawphone right in your phone's web browser.
      </ProjectCard>

      <ProjectCard
        title="Spyfall"
        leftButtonHref="https://spyfall.tannerkrewson.com/"
        leftButtonText="Play Spyfall"
        rightButtonHref="https://github.com/tannerkrewson/spyfall"
        rightButtonText="View on GitHub"
        rocketcrab={true}
      >
        The game that inspired Drawphone, spyfall.crabhat.com, was removed from the Internet. So, I recovered the old code, rewrote most of it, and added a few new features. Give it a shot!
      </ProjectCard>

      <ProjectCard
        title="PTSU Exposed"
        leftButtonHref="https://www.tannerkrewson.com/ptsu/secret"
        leftButtonText="I'm confused"
        rightButtonHref="https://www.tannerkrewson.com/ptsu/"
        rightButtonText="Go to PTSU Exposed"
      >
        Apple and Google have been secretly installing a microchip in smartphones that sends psychoelectric waves into the minds of their users, allowing the highest bidding advertisers to influence consumers' brand preferences. Discover the biggest conspiracy in the history of mankind with PTSU Exposed.
      </ProjectCard>

      <ProjectCard
        title="Connect 4"
        leftButtonHref="https://kevinshannon.dev/connect4/"
        leftButtonText="Play Connect 4"
        rightButtonHref="https://github.com/kevin-shannon/connect4"
        rightButtonText="View on GitHub"
      >
        A multi-year effort between myself and my friend, Kevin Shannon. Try the local and online multiplayer modes, or test your skills against the wicked-smart AI in single player.
      </ProjectCard>

      <ProjectCard
        title="Mutual Music"
        leftButtonHref="https://www.tannerkrewson.com/mutual-music/"
        leftButtonText="Try it out"
        rightButtonHref="https://github.com/tannerkrewson/mutual-music"
        rightButtonText="View on GitHub"
      >
        Using your Spotify accounts, Mutual Music creates a playlist of songs you and a friend both love. No more fighting over whose music to play!
      </ProjectCard>

      <ProjectCard
        title="Spotify-in-Common"
        leftButtonHref="https://www.tannerkrewson.com/sic/"
        leftButtonText="Try it out"
        rightButtonHref="https://github.com/tannerkrewson/sic/"
        rightButtonText="View on GitHub"
      >
        Mutual Music's more flexible predecessor. Select two or more Spotify playlists, and Spotify-in-Common will generate a new playlist containing the songs present in all of the selected playlists.
      </ProjectCard>

      <ProjectCard
        title="Snakeout"
        leftButtonHref="https://snakeout.tannerkrewson.com/"
        leftButtonText="Play Snakeout"
        rightButtonHref="https://github.com/tannerkrewson/snakeout"
        rightButtonText="View on GitHub"
        rocketcrab={true}
      >
        A recreation of the board game The Resistance, made in the style of Drawphone and Spyfall. Gather 5 to 10 of your friends, and prepare yourself for major trust issues.
      </ProjectCard>

      <ProjectCard
        title="COVID-19 Stimulus Calculator"
        leftButtonHref="https://www.tannerkrewson.com/coronacalc"
        leftButtonText="Try it out"
        rightButtonHref="https://github.com/tannerkrewson/coronacalc"
        rightButtonText="View on GitHub"
      >
        A simple quiz to see the difference in the stimulus check amount that one would receive under the final CARES act, versus the Democrats' original, failed act.
      </ProjectCard>

      <ProjectCard
        title="Vidocracy"
        leftButtonHref="http://vidocracy.tannerkrewson.com/"
        leftButtonText="Try Vidocracy"
        rightButtonHref="https://github.com/tannerkrewson/vidocracy"
        rightButtonText="View on GitHub"
      >
        Bring democracy to your party's YouTube videos! Open Vidocracy in your phone's browser, and start voting on videos and songs to be played on the big screen.
      </ProjectCard>

      <ProjectCard
        title="A Kiosk That's Not Trash"
        leftButtonHref="https://www.tannerkrewson.com/a-kiosk-thats-not-trash/"
        leftButtonText="Try it out"
        rightButtonHref="https://github.com/tannerkrewson/a-kiosk-thats-not-trash"
        rightButtonText="View on GitHub"
      >
        When I was in college, I volunteered for an organization called SAB that plans events and concerts for the students. The website we were using to track ticket sales was born from the depths of hell, so I created a better one that records sales into a Google Sheet.
      </ProjectCard>

      <ProjectCard
        title="Backspace Bowling"
        leftButtonHref="https://www.tannerkrewson.com/backspace-bowling/"
        leftButtonText="Try it out"
        rightButtonHref="https://github.com/tannerkrewson/backspace-bowling"
        rightButtonText="View on GitHub"
      >
        This game was made exclusively on a computer in my Personal Finance class during my senior year of high school when I should have been doing other things. It's okay though, I got an A in the class. Even though it's barebones, it's still pretty fun. Hold down Backspace to bowl!
      </ProjectCard>

      <ProjectCard
        title="Calorie Countdown"
        leftButtonHref="https://www.tannerkrewson.com/calorie-countdown/"
        leftButtonText="Try it out"
        rightButtonHref="https://github.com/tannerkrewson/calorie-countdown"
        rightButtonText="View on GitHub"
      >
        Calorie Countdown represents the cutting edge of calorie counting research, and is the pinnacle of diet and nutrition tracking software today. Just kidding; it's really just a calculator with nothing but a minus button that I used every day at the buffet dining halls in college.
      </ProjectCard>

      <ProjectCard
        title="Red Team LAN"
        leftButtonHref="https://www.tannerkrewson.com/redteamlan"
        leftButtonText="View the website"
      >
        The group I founded to play computer games with my friends from high school. We had 32 events from 2013 to 2020. Check out the timelapses of the parties on the website; they're pretty neat!
      </ProjectCard>

      <ProjectCard
        title="Lansite"
        leftButtonHref="https://github.com/tannerkrewson/lansite"
        leftButtonText="View on GitHub"
      >
        Connect your LAN party attendees with announcements, private messaging, custom votes, and matchmaking. Lansite is fully modular and features extensive documentation, so hosts can effortlessly extend it to fit their needs.
      </ProjectCard>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="framed-section" style="background: var(--brand-blue); color: rgba(255,255,255,0.9);">
  <div class="content-pad" style="text-align: center; font-size: 14px;">
    <p style="margin-bottom: 8px;">tannerkrewson, {year}</p>
    <a href="https://github.com/tannerkrewson/tannerkrewson.github.io" target="_blank" style="color: rgba(255,255,255,0.8);">View on GitHub</a>
  </div>
</footer>

<style>
  /* hero grid background */
  .hero {
    background: url('#fine-grid') 0 0 / auto, var(--surface-page);
  }

  .hero-content {
    position: relative;
    z-index: 1;
  }

  .social-link {
    color: var(--text-display-accent);
    font-family: var(--font-sans);
    font-size: 14px;
    letter-spacing: -0.35px;
    transition: color 0.15s ease;
  }
  .social-link:hover {
    color: var(--text-strong);
  }

  /* Section heading */
  .section-heading-row {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding-bottom: 24px;
    margin-bottom: 32px;
    border-bottom: 1px solid var(--line-subtle);
  }
  .section-heading-row h2 {
    font-size: 25.6px;
    line-height: 32px;
    font-weight: 300;
    color: var(--text-strong);
  }

  /* Work spotlight */
  .work-spotlight {
    background: var(--surface-deep);
    border: 1px solid var(--line-subtle);
    border-radius: 4px;
    padding: 32px 24px;
  }

  /* Feature grids */
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
  }

  @media (max-width: 640px) {
    .feature-grid {
      grid-template-columns: 1fr;
    }
  }

  .feature-item {
    padding: 20px;
    border-right: 1px solid var(--line-subtle);
  }
  .feature-item:last-child {
    border-right: none;
  }
  @media (max-width: 640px) {
    .feature-item {
      border-right: none;
      border-bottom: 1px solid var(--line-subtle);
    }
    .feature-item:last-child {
      border-bottom: none;
    }
  }

  .feature-item h4 {
    font-family: var(--font-serif);
    font-size: 16.8px;
    line-height: 1.1;
    font-weight: 400;
    color: var(--text-strong);
    margin-bottom: 4px;
  }

  .feature-item p {
    font-size: 14px;
    color: var(--text-muted);
    margin-bottom: 12px;
  }

  .company-icon {
    max-height: 28px;
    margin-bottom: 12px;
  }

  /* Project grid */
  .project-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  @media (max-width: 640px) {
    .project-grid {
      grid-template-columns: 1fr;
    }
  }

  /* SweetAlert2 dark theme */
  :global(.swal2-popup) {
    font-family: var(--font-sans) !important;
    border-radius: 4px !important;
    border: 1px solid var(--line-subtle) !important;
  }
  :global(.swal2-title) {
    font-family: var(--font-serif) !important;
    color: var(--text-strong) !important;
    font-weight: 400 !important;
  }
  :global(.swal2-html-container) {
    color: var(--text-default) !important;
    font-size: 14px !important;
    text-align: left !important;
  }
  :global(.swal2-html-container a) {
    color: var(--text-display-accent) !important;
  }
  :global(.swal2-html-container a:hover) {
    text-decoration: underline !important;
  }
  :global(.swal2-image) {
    margin-top: -1.25em !important;
    margin-left: -1.25em !important;
    max-width: calc(100% + 2.5em) !important;
    border-radius: 4px 4px 0 0 !important;
  }
</style>
