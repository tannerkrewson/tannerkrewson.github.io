<script>
  import { onMount } from 'svelte';

  let listenText = $state('');
  let theTitle = $state('');
  let theArtist = $state('');

  onMount(() => {
    getCurrentSong();
  });

  function getCurrentSong() {
    const url =
      'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=TankTan38&api_key=c68ea49b4e861204b0e6b6607a77c542&format=json&limit=1';

    fetch(url)
      .then((res) => res.json())
      .then((currentSong) => {
        const theTrack = currentSong.recenttracks.track[0];
        const artist = theTrack.artist['#text'];
        let title = theTrack.name;
        const nowPlaying = theTrack['@attr'] && theTrack['@attr'].nowplaying;

        let text = '';

        if (nowPlaying) {
          text = "Right now, I'm listening to ";
        } else {
          let timeSinceText = timeSince(theTrack.date.uts);
          if (!timeSinceText.startsWith('1 ')) {
            timeSinceText += 's';
          }
          text = timeSinceText + ' ago, I listened to ';
        }

        title = title
          .split(' - ')[0]
          .split(' (')[0]
          .trim()
          .substring(0, 32);

        listenText = text;
        theTitle = title;
        theArtist = artist;
      });
  }

  function timeSince(date) {
    const seconds = Math.floor(new Date().getTime() / 1000 - date);
    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) return interval + ' year';
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return interval + ' minute';
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return interval + ' day';
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return interval + ' hour';
    interval = Math.floor(seconds / 60);
    if (interval > 1) return interval + ' minute';

    return Math.floor(seconds) + ' second';
  }
</script>

<div id="current-song">
  <span class="avoidwrap">{listenText}</span>
  <span class="avoidwrap">
    <a
      target="_blank"
      href={'//www.youtube.com/results?search_query=' + theTitle + '+' + theArtist}
      >{theTitle}</a
    >
    {#if theArtist}by{/if}
    <i>{theArtist}</i>
  </span>
</div>

<style>
  #current-song {
    margin-top: 22px;
  }

  #current-song a {
    text-decoration: underline;
  }
</style>
