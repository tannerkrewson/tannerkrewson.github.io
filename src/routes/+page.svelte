<script>
  import { base } from '$app/paths';
  import Modal from '$lib/Modal.svelte';
  import Listening from '$lib/Listening.svelte';

  let showOutdated = $state(false);

  // --- Projects ---
  const allProjects = [
    {
      title: 'rocketcrab',
      date: '2020',
      description: 'rocketcrab is a lobby service and launcher for mobile web party games. It hosts Drawphone, Spyfall, Snakeout, and more. Built with React, Node.js, and socket.io, it provides a seamless drop-in experience for getting a group of friends into a game together.',
      links: [
        { href: 'https://rocketcrab.com/', text: 'Try it out' },
        { href: 'https://github.com/tannerkrewson/rocketcrab', text: 'View on GitHub' }
      ]
    },
    {
      title: 'Drawphone',
      date: '2020',
      description: 'A simple game of draw what you see, and guess what your friends drew. Over 7 million drawings and guesses have been submitted to date! Grab four or more of your friends, and play Drawphone right in your phone\'s web browser.',
      links: [
        { href: 'https://drawphone.tannerkrewson.com/', text: 'Play Drawphone' },
        { href: 'https://github.com/tannerkrewson/drawphone', text: 'View on GitHub' }
      ]
    },
    {
      title: 'Spyfall',
      date: '2020',
      description: 'The game that inspired Drawphone, spyfall.crabhat.com, was removed from the Internet. So, I recovered the old code, rewrote most of it, and added a few new features.',
      links: [
        { href: 'https://spyfall.tannerkrewson.com/', text: 'Play Spyfall' },
        { href: 'https://github.com/tannerkrewson/spyfall', text: 'View on GitHub' }
      ]
    },
    {
      title: 'Snakeout',
      date: '2020',
      description: 'A recreation of the board game The Resistance, made in the style of Drawphone and Spyfall. Gather 5 to 10 of your friends, and prepare yourself for major trust issues.',
      links: [
        { href: 'https://snakeout.tannerkrewson.com/', text: 'Play Snakeout' },
        { href: 'https://github.com/tannerkrewson/snakeout', text: 'View on GitHub' }
      ]
    },
    {
      title: 'Connect 4',
      date: '2016',
      description: 'A multi-year effort between myself and my friend, Kevin Shannon. Try the local and online multiplayer modes, or test your skills against the wicked-smart AI in single player.',
      links: [
        { href: 'https://kevinshannon.com/connect4/', text: 'Play Connect 4' },
        { href: 'https://github.com/kevin-shannon/connect4', text: 'View on GitHub' }
      ]
    },
    {
      title: 'PTSU Exposed',
      date: '2018',
      description: 'Apple and Google have been secretly installing a microchip in smartphones that sends psychoelectric waves into the minds of their users, allowing the highest bidding advertisers to influence consumers\' brand preferences. Discover the biggest conspiracy in the history of mankind with PTSU Exposed.',
      links: [
        { href: 'https://www.tannerkrewson.com/ptsu/', text: 'Go to PTSU Exposed' }
      ]
    },
    {
      title: 'A Kiosk That\'s Not Trash',
      date: '2018',
      description: 'When I was in college, I volunteered for an organization called SAB that plans events and concerts for the students. The website we were using to track ticket sales was born from the depths of hell, so I created a better one that records sales into a Google Sheet.',
      links: [
        { href: 'https://www.tannerkrewson.com/a-kiosk-thats-not-trash/', text: 'Try it out' },
        { href: 'https://github.com/tannerkrewson/a-kiosk-thats-not-trash', text: 'View on GitHub' }
      ]
    },
    {
      title: 'Backspace Bowling',
      date: '2015',
      description: 'This game was made exclusively on a computer in my Personal Finance class during my senior year of high school when I should have been doing other things. It\'s okay though, I got an A in the class. Even though it\'s barebones, it\'s still pretty fun. Hold down Backspace to bowl!',
      links: [
        { href: 'https://www.tannerkrewson.com/backspace-bowling/', text: 'Try it out' },
        { href: 'https://github.com/tannerkrewson/backspace-bowling', text: 'View on GitHub' }
      ]
    },
    {
      title: 'Calorie Countdown',
      date: '2016',
      description: 'Calorie Countdown represents the cutting edge of calorie counting research, and is the pinnacle of diet and nutrition tracking software today. Just kidding; it\'s really just a calculator with nothing but a minus button that I used every day at the buffet dining halls in college.',
      links: [
        { href: 'https://www.tannerkrewson.com/calorie-countdown/', text: 'Try it out' },
        { href: 'https://github.com/tannerkrewson/calorie-countdown', text: 'View on GitHub' }
      ]
    }
  ];

  const outdatedProjects = [
    {
      title: 'Mutual Music',
      date: '2018',
      description: 'Using your Spotify accounts, Mutual Music creates a playlist of songs you and a friend both love. No more fighting over whose music to play!',
      links: [
        { href: 'https://www.tannerkrewson.com/mutual-music/', text: 'Try it out' },
        { href: 'https://github.com/tannerkrewson/mutual-music', text: 'View on GitHub' }
      ]
    },
    {
      title: 'Spotify-in-Common',
      date: '2018',
      description: 'Mutual Music\'s more flexible predecessor. Select two or more Spotify playlists, and Spotify-in-Common will generate a new playlist containing the songs present in all of the selected playlists.',
      links: [
        { href: 'https://www.tannerkrewson.com/sic/', text: 'Try it out' },
        { href: 'https://github.com/tannerkrewson/sic/', text: 'View on GitHub' }
      ]
    },
    {
      title: 'Vidocracy',
      date: '2018',
      description: 'Bring democracy to your party\'s YouTube videos! Open Vidocracy in your phone\'s browser, and start voting on videos and songs to be played on the big screen.',
      links: [
        { href: 'http://vidocracy.tannerkrewson.com/', text: 'Try Vidocracy' },
        { href: 'https://github.com/tannerkrewson/vidocracy', text: 'View on GitHub' }
      ]
    },
    {
      title: 'Lansite',
      date: '2017',
      description: 'Connect your LAN party attendees with announcements, private messaging, custom votes, and matchmaking. Lansite is fully modular and features extensive documentation, so hosts can effortlessly extend it to fit their needs.',
      links: [
        { href: 'https://github.com/tannerkrewson/lansite', text: 'View on GitHub' }
      ]
    },
    {
      title: 'Red Team LAN',
      date: '2013-2020',
      description: 'The group I founded to play computer games with my friends from high school. We had 32 events from 2013 to 2020. Check out the timelapses of the parties on the website; they\'re pretty neat!',
      links: [
        { href: 'https://www.tannerkrewson.com/redteamlan', text: 'View the website' }
      ]
    },
    {
      title: 'COVID-19 Stimulus Calculator',
      date: '2020',
      description: 'A simple quiz to see the difference in the stimulus check amount that one would receive under the final CARES act, versus the Democrats\' original, failed act.',
      links: [
        { href: 'https://www.tannerkrewson.com/coronacalc', text: 'Try it out' },
        { href: 'https://github.com/tannerkrewson/coronacalc', text: 'View on GitHub' }
      ]
    }
  ];

  // --- Internships ---
  const internships = [

    { org: 'Disney Streaming', role: 'Software Engineer Intern', year: 'Fall 2019', modal: 'dss-intern' },
    { org: 'Goldman Sachs', role: 'Technology Analyst Intern', year: 'Summer 2019', modal: 'gs' },
    { org: 'Disney Parks', role: 'Software Engineer Intern', year: 'Summer 2018', modal: 'disney' },
    { org: 'ESPN', role: 'Software Engineer Intern', year: 'Summer 2017', modal: 'espn' }
  ];

  let intModal = $state(null);

  const internshipModals = {
    'dss-full': {
      title: 'Disney Streaming — Senior Software Engineer',
      body: `
        <p>After graduating in May 2020, I returned to Disney Streaming as a
        full-time software engineer. I onboarded remotely due to the COVID-19
        pandemic, but in July 2021, I moved to New York City. I am on the Web
        Playback Experience team, which develops the web browser video player
        for Disney+, Hulu, ESPN+, Star+, and NHL.TV.</p>
        <img src="https://i.imgur.com/wsHJaI0.jpg" alt="Disney Streaming office view" />
      `
    },
    'dss-intern': {
      title: 'Disney Streaming — Software Engineer Intern',
      body: `
        <p>For my fourth and final internship, I spent my fall semester at
        Disney Streaming in NYC for the launch of Disney+. I joined the Web
        Platform Architecture team, which manages the servers for
        disneyplus.com on AWS. I also created an internal tool with Next.js
        and React to quickly find and view information about any microservice
        in the company.</p>
        <img src="https://i.imgur.com/dmIzkPU.png" alt="Disney Streaming office" />
      `
    },
    'gs': {
      title: 'Goldman Sachs — Technology Analyst Intern',
      body: `
        <p>My third internship was at Goldman Sachs in NYC. It was an awesome
        experience going from never having taken an econ class to working on
        Wall Street! I worked on the Goldman Sachs Asset Management Compliance
        Automation team. My project was to redesign an existing dashboard for
        compliance officers to easily see what trades they need to review. I
        did it with React, Redux, and a bit of Java.</p>
        <img src="https://i.imgur.com/hYkR64w.jpg" alt="Goldman Sachs office" />
      `
    },
    'disney': {
      title: 'Disney Parks — Software Engineer Intern',
      body: `
        <p>My second internship was at Disney's Seattle office. I worked on
        Studio Northstar, a team that develops the attraction and show pages
        for the Disney parks. Our main task for the summer was a redesign of
        the attractions pages from PHP to Angular 5.</p>
        <ul>
          <li>Worked on a full stack redesign of the Disney attractions pages in Angular 5 and Node</li>
          <li>Created four major UI components in Angular 5 and ensured 100% unit test coverage</li>
          <li>Wrote a feature that themes the UI by extracting colors from an attraction's image</li>
          <li>Took the initiative to refactor and document the Angular 5 project as it grew</li>
          <li>Designed an easter egg that reveals the developers' names when activated</li>
          <li>Made many bug fixes and minor features across legacy PHP and Angular 1 codebases</li>
        </ul>
        <img src="https://i.imgur.com/Rzpnv4A.jpg" alt="Disney office in Seattle" />
      `
    },
    'espn': {
      title: 'ESPN — Software Engineer Intern',
      body: `
        <p>ESPN was my first internship! I worked out of ESPN Headquarters in
        Bristol, Connecticut. I spent the first 6 weeks on the Consumer Tech
        Ops team, diagnosing and fixing bugs across ESPN.com. I spent the
        remaining 4 weeks on the ESPN.com feature development team, working on
        the homepage news feed, a redesign for MLB Gamecast, and an internal
        tool called Feed Manager.</p>
        <ul>
          <li>Designed and implemented live updating for news feeds on ESPN.com</li>
          <li>Recognized and corrected a deployment flaw that could have taken down the site</li>
          <li>Resolved long-standing major UI issues with an internal translations tool</li>
          <li>Wrote new features in React for a tool used by editors to write and publish articles</li>
          <li>Navigated a legacy code base written with a proprietary back-end language called Tea</li>
        </ul>
        <img src="https://i.imgur.com/aYKfZ62.jpg" alt="ESPN headquarters" />
      `
    }
  };
</script>

<svelte:head>
  <title>Tanner Krewson</title>
  <meta name="description" content="Software Engineer in New York City." />
</svelte:head>

<!-- ========== INTRO ========== -->
<section id="intro" aria-label="Introduction">
  <h1 class="intro-name">Tanner Krewson</h1>
  <p class="intro-tag">Software Engineer · New York City</p>
  <div class="listening-wrapper">
    <Listening />
  </div>

  <nav class="site-nav" aria-label="Navigation">
    <a href={`${base}/blog`} class="link-accent">blog</a>
    <span class="contact-sep">/</span>
    <a href="mailto:tannerkrewson@gmail.com" class="link-accent">email</a>
    <span class="contact-sep">/</span>
    <a href="https://github.com/tannerkrewson/" target="_blank" class="link-accent">github</a>
    <span class="contact-sep">/</span>
    <a href="https://www.linkedin.com/in/tannerkrewson/" target="_blank" class="link-accent">linkedin</a>
    <span class="contact-sep">/</span>
    <a href="https://vsco.co/tannerkrewson/gallery" target="_blank" class="link-accent">vsco</a>
    <span class="contact-sep">/</span>
    <a href="https://www.last.fm/user/TankTan38" target="_blank" class="link-accent">last.fm</a>
    <span class="contact-sep">/</span>
    <a href="https://letterboxd.com/tannerkrewson/" target="_blank" class="link-accent">letterboxd</a>
  </nav>
</section>

<div class="divider">==============================</div>

<!-- ========== CURRENT ROLE ========== -->
<section id="current-role" aria-label="Current role">
  <h2 class="section-title">Current Role</h2>
  <p class="role-org">
    <!-- svelte-ignore a11y_invalid_attribute -->
    <a
      href="#"
      class="role-link"
      onclick={(e) => { e.preventDefault(); intModal = 'dss-full'; }}
      role="button"
      tabindex="0"
      onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); intModal = 'dss-full'; } }}
    >Disney Streaming</a>
  </p>
  <p class="role-title">Senior Software Engineer <span class="role-year">/ 2020-Present</span></p>
</section>

<div class="divider">==============================</div>

<!-- ========== PROJECTS ========== -->
<section id="projects" aria-label="Projects">
  <h2 class="section-title">Pre-AI Projects</h2>

  {#each allProjects as project}
    <article class="project-entry">
      <p class="project-head">
        <span class="project-name">{project.title}</span>
        <span class="project-date"> / {project.date}</span>
      </p>
      <p class="project-description">{project.description}</p>
      <p class="project-links">
        {#each project.links as link, i}
          {#if i > 0}
            <span class="link-sep">/</span>
          {/if}
          <a href={link.href} target="_blank" class="link-accent">{link.text} →</a>
        {/each}
      </p>
    </article>
  {/each}

  <!-- Outdated toggle -->
  <div class="outdated-toggle">
    <!-- svelte-ignore a11y_invalid_attribute -->
    <a
      href="#"
      class="link-accent outdated-link"
      onclick={(e) => { e.preventDefault(); showOutdated = !showOutdated; }}
      role="button"
      tabindex="0"
      onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showOutdated = !showOutdated; } }}
    >{showOutdated ? 'show less ↑' : 'out-of-date projects ↓'}</a>
  </div>

  {#if showOutdated}
    {#each outdatedProjects as project}
      <article class="project-entry outdated-entry">
        <p class="project-head">
          <span class="project-name">{project.title}</span>
          <span class="project-date"> / {project.date}</span>
        </p>
        <p class="project-description">{project.description}</p>
        <p class="project-links">
          {#each project.links as link, i}
            {#if i > 0}
              <span class="link-sep">/</span>
            {/if}
            <a href={link.href} target="_blank" class="link-accent">{link.text} →</a>
          {/each}
        </p>
      </article>
    {/each}
  {/if}
</section>

<div class="divider">==============================</div>

<!-- ========== INTERNSHIPS ========== -->
<section id="internships" aria-label="Internships">
  <h3 class="section-title internships-title">Internships</h3>

  <div class="internships-list">
    {#each internships as intern}
      <p class="intern-entry">
        <!-- svelte-ignore a11y_invalid_attribute -->
        <a
          href="#"
          class="intern-link"
          onclick={(e) => { e.preventDefault(); intModal = intern.modal; }}
          role="button"
          tabindex="0"
          onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); intModal = intern.modal; } }}
        >{intern.org}</a>
        <span class="intern-role"> — {intern.role}</span>
        <span class="intern-year"> / {intern.year}</span>
      </p>
    {/each}
  </div>
</section>



<!-- ========== INTERNSHIP MODAL ========== -->
<Modal bind:isOpen={intModal} title={intModal ? internshipModals[intModal]?.title || '' : ''}>
  {#if intModal}
    {@html internshipModals[intModal]?.body || ''}
  {/if}
</Modal>

<style>
  /* --- Intro --- */
  .intro-name {
    font-family: var(--font-serif);
    font-size: 1.75rem;
    font-weight: 400;
    color: var(--text-strong);
    margin-bottom: 0.25rem;
    line-height: 1.2;
  }

  .intro-tag {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--text-muted);
    margin-bottom: 0.5rem;
  }

  .listening-wrapper {
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }

  .site-nav {
    margin-top: 1.5rem;
    font-family: var(--font-mono);
    font-size: 0.8rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
  }

  /* --- Current Role --- */
  .role-org {
    margin-bottom: 0.15rem;
  }

  .role-link {
    font-family: var(--font-serif);
    font-size: 1.1rem;
    color: var(--text-strong);
  }

  .role-link:hover {
    color: var(--text-display-accent);
  }

  .role-title {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--text-muted);
    margin-bottom: 0;
  }

  .role-year {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--text-muted);
  }

  /* --- Section dividers --- */
  .divider {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    color: rgba(114, 122, 137, 0.25);
    letter-spacing: 0.05em;
    margin: 2.5rem 0;
    user-select: none;
  }

  /* --- Section titles --- */
  .section-title {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--text-muted);
    letter-spacing: 0.05em;
    margin-bottom: 1.5rem;
  }

  .internships-title {
    font-size: 0.65rem;
    color: var(--text-muted);
    margin-bottom: 1rem;
  }

  /* --- Project entries --- */
  .project-entry {
    margin-bottom: 1.75rem;
  }

  .project-entry:last-child {
    margin-bottom: 0;
  }

  .outdated-entry {
    opacity: 0.65;
  }

  .project-head {
    margin-bottom: 0.2rem;
  }

  .project-name {
    font-family: var(--font-serif);
    font-size: 1.05rem;
    color: var(--text-strong);
  }

  .project-date {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--text-muted);
  }

  .project-description {
    font-size: 0.85rem;
    line-height: 1.6;
    color: var(--text-default);
    margin-bottom: 0.25rem;
  }

  .project-links {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
  }

  .link-sep {
    color: var(--text-muted);
  }

  /* --- Outdated toggle --- */
  .outdated-toggle {
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .outdated-link {
    font-family: var(--font-mono);
    font-size: 0.75rem;
  }

  /* --- Internships --- */
  .internships-list {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .intern-entry {
    font-size: 0.8rem;
    color: var(--text-muted);
  }

  .intern-link {
    color: var(--text-default);
  }

  .intern-link:hover {
    color: var(--text-display-accent);
  }

  .intern-role {
    color: var(--text-muted);
  }

  .intern-year {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--text-muted);
  }

  .contact-sep {
    color: var(--text-muted);
    margin: 0 0.25rem;
  }


</style>
