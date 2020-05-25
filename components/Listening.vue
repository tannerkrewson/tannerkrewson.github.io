<template>
  <div id="current-song">
    <span class="avoidwrap">{{ listenText }}</span>
    <span class="avoidwrap"
      ><a
        target="_blank"
        href="//www.youtube.com/results?search_query=kusuri o takusan+Taeko Onuki"
        >{{ theTitle }}</a
      >
      <span v-if="theArtist">by</span><i> {{ theArtist }}</i></span
    >
  </div>
</template>
<script>
export default {
  data: () => ({ listenText: '', theTitle: '', theArtist: '' }),
  mounted() {
    this.getCurrentSong()
  },
  methods: {
    getCurrentSong(callback) {
      const that = this
      const url =
        'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=TankTan38&api_key=c68ea49b4e861204b0e6b6607a77c542&format=json&limit=1'
      httpGetAsync(url, function(data) {
        const currentSong = JSON.parse(data)
        const theTrack = currentSong.recenttracks.track[0]
        const theArtist = theTrack.artist['#text']
        let theTitle = theTrack.name
        const nowPlaying = theTrack['@attr'] && theTrack['@attr'].nowplaying

        let listenText = ''

        if (nowPlaying) {
          listenText = "Right now, I'm listening to "
        } else {
          // converts 9712739817 ms to "4 minute" ago
          let timeSinceText = that.timeSince(theTrack.date.uts)

          // if it's not 1, make it plural
          if (!timeSinceText.startsWith('1 ')) {
            timeSinceText += 's'
          }

          listenText = timeSinceText + ' ago, I listened to '
        }

        /* split at the part in front of any hyphen or parenthese
         * to take a song title like this:
         *     (I Can't Get No) Satisfaction - Mono Version / Remastered 2002
         * and turn it into:
         *     (I Can't Get No) Satisfaction
         * and also cut it off at 32 characters for those songs that be like:
         *     Piano Sonata No. 14 in C-Sharp Minor, Op. 27 No. 2 "Moonlight": I. Adagio sostenuto
         */
        theTitle = theTitle
          .split(' - ')[0]
          .split(' (')[0]
          .trim()
          .substring(0, 32)

        that.listenText = listenText
        that.theTitle = theTitle
        that.theArtist = theArtist
      })

      function httpGetAsync(theUrl, callback) {
        const xmlHttp = new XMLHttpRequest()
        xmlHttp.onreadystatechange = function() {
          if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            callback(xmlHttp.responseText)
        }
        xmlHttp.open('GET', theUrl, true) // true for asynchronous
        xmlHttp.send(null)
      }
    },

    // https://stackoverflow.com/a/8247097
    timeSince(date) {
      const seconds = Math.floor(new Date().getTime() / 1000 - date)
      let interval = Math.floor(seconds / 31536000)

      if (interval > 1) return interval + ' year'

      interval = Math.floor(seconds / 2592000)
      if (interval > 1) return interval + ' minute'

      interval = Math.floor(seconds / 86400)
      if (interval >= 1) return interval + ' day'

      interval = Math.floor(seconds / 3600)
      if (interval >= 1) return interval + ' hour'

      interval = Math.floor(seconds / 60)
      if (interval > 1) return interval + ' minute'

      return Math.floor(seconds) + ' second'
    }
  }
}
</script>
<style>
#current-song {
  margin-top: 22px;
}

#current-song a {
  text-decoration: underline;
}
</style>
