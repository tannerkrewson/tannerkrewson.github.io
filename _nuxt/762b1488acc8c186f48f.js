(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{190:function(t,e,n){var content=n(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("47b42b77",content,!0,{sourceMap:!1})},191:function(t,e,n){var content=n(200);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("751af70f",content,!0,{sourceMap:!1})},192:function(t,e,n){var content=n(202);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("f4c0b9da",content,!0,{sourceMap:!1})},193:function(t,e,n){var content=n(204);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("6759f5ab",content,!0,{sourceMap:!1})},197:function(t,e,n){"use strict";var o=n(190);n.n(o).a},198:function(t,e,n){(e=n(62)(!1)).push([t.i,"#current-song{margin-top:22px}#current-song a{text-decoration:underline}",""]),t.exports=e},199:function(t,e,n){"use strict";var o=n(191);n.n(o).a},200:function(t,e,n){(e=n(62)(!1)).push([t.i,".card-col{display:flex;padding:.8em}.card{background-color:rgba(4,4,5,.2);border:none;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);display:flex;justify-content:center;width:100%;padding:1.5em 1em}",""]),t.exports=e},201:function(t,e,n){"use strict";var o=n(192);n.n(o).a},202:function(t,e,n){(e=n(62)(!1)).push([t.i,".card-title{font-family:Jost,sans-serif;font-size:2rem;font-weight:500}.card-subtitle,.card-title{font-style:italic}.rocketcrab-superscript{display:inline-block;overflow:hidden;width:1.6em;margin-left:-.4em;margin-bottom:.4em;margin-top:-1em}.rocketcrab-superscript img{margin:-1.4em -.2em -1.6em}",""]),t.exports=e},203:function(t,e,n){"use strict";var o=n(193);n.n(o).a},204:function(t,e,n){(e=n(62)(!1)).push([t.i,'body{padding-bottom:2rem;color:#ddd;text-align:center}.gradient-background{background-image:linear-gradient(135deg,#667eea,#764ba2)}.stationary-background{background:#140d33;background-repeat:no-repeat;width:100%;top:-80px;bottom:-80px;position:fixed;z-index:-1}#dark-start{opacity:1;position:fixed;width:100%;height:100%;top:0;left:0;z-index:1;pointer-events:none}#dark-start:before{content:"";position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);border-radius:100%;-webkit-animation-duration:1s;animation-duration:1s;box-shadow:0 0 0 100vmax #ddd;width:150vmax;height:150vmax}.transition:before{-webkit-animation-name:spotlight;animation-name:spotlight}.nonexistent{display:none}@-webkit-keyframes spotlight{0%{width:0;height:0}to{width:150vmax;height:150vmax}}@keyframes spotlight{0%{width:0;height:0}to{width:150vmax;height:150vmax}}.full-title{padding-top:.5rem;padding-bottom:1rem;font-size:1.1rem}.profile{display:inline-block;margin:1rem 0}.breathe:before,.profile-pic{height:130px;border-radius:50%}.breathe:before{content:"";position:absolute;z-index:-1;width:130px;box-shadow:inset 0 0 0 16px rgba(0,0,0,.3);-webkit-animation:breathe 16s infinite;animation:breathe 16s infinite}@-webkit-keyframes breathe{0%,75%,to{transform:scale(1)}25%,50%{transform:scale(1.25)}}@keyframes breathe{0%,75%,to{transform:scale(1)}25%,50%{transform:scale(1.25)}}.full-title a,a:active,a:visited{display:inline-block;color:#ddd;transition:all .2s ease-in-out}a:hover{transform:scale(1.05)}body{font-family:Jost,sans-serif;font-weight:400}.full-title .display-4{font-family:Jost,sans-serif;font-weight:500;font-size:2.5em;font-style:italic}span.avoidwrap{display:inline-block}#typing-title{position:relative;margin-bottom:12px;transition:all .2s ease-in}.company-logo{max-width:62.5%;max-height:105px}.card a:hover{color:transparent}.card-buttons{margin-top:.8em}.btn-outline-light{color:#ddd;border-color:#ddd;margin-bottom:.3em}#swal2-content{text-align:left;font-weight:400}#swal2-content a{color:#140d33}#swal2-content a:hover{text-decoration:underline}.swal2-image{margin-top:-1.25em;margin-left:-1.25em;max-width:calc(100% + 2.5em);border-radius:5px 5px 0 0}.typed-cursor{opacity:1;-webkit-animation:blink .7s infinite;animation:blink .7s infinite}@-webkit-keyframes blink{0%{opacity:1}50%{opacity:0}to{opacity:1}}@keyframes blink{0%{opacity:1}50%{opacity:0}to{opacity:1}}',""]),t.exports=e},205:function(t,e,n){"use strict";n.r(e);var o=n(194),r=n.n(o),l=n(195),c=n.n(l),d=n(196),h=n.n(d),f=(n(16),n(144),n(12),{data:function(){return{listenText:"",theTitle:"",theArtist:""}},mounted:function(){this.getCurrentSong()},methods:{getCurrentSong:function(t){var e=this;!function(t,e){var n=new XMLHttpRequest;n.onreadystatechange=function(){4===n.readyState&&200===n.status&&e(n.responseText)},n.open("GET",t,!0),n.send(null)}("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=TankTan38&api_key=c68ea49b4e861204b0e6b6607a77c542&format=json&limit=1",(function(data){var t=JSON.parse(data).recenttracks.track[0],n=t.artist["#text"],o=t.name,r="";if(t["@attr"]&&t["@attr"].nowplaying)r="Right now, I'm listening to ";else{var l=e.timeSince(t.date.uts);l.startsWith("1 ")||(l+="s"),r=l+" ago, I listened to "}o=o.split(" - ")[0].split(" (")[0].trim().substring(0,32),e.listenText=r,e.theTitle=o,e.theArtist=n}))},timeSince:function(t){var e=Math.floor((new Date).getTime()/1e3-t),n=Math.floor(e/31536e3);return n>1?n+" year":(n=Math.floor(e/2592e3))>1?n+" minute":(n=Math.floor(e/86400))>=1?n+" day":(n=Math.floor(e/3600))>=1?n+" hour":(n=Math.floor(e/60))>1?n+" minute":Math.floor(e)+" second"}}}),m=(n(197),n(42)),v=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"current-song"}},[n("span",{staticClass:"avoidwrap"},[t._v(t._s(t.listenText))]),t._v(" "),n("span",{staticClass:"avoidwrap"},[n("a",{attrs:{target:"_blank",href:"//www.youtube.com/results?search_query="+t.theTitle+"+"+t.theArtist}},[t._v(t._s(t.theTitle))]),t._v(" "),t.theArtist?n("span",[t._v("by")]):t._e(),t._v(" "),n("i",[t._v(t._s(t.theArtist))])])])}),[],!1,null,null,null).exports,w={props:{cardWidth:{type:String,default:"6"}}},y=(n(199),{components:{Card:Object(m.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:"col-md-"+this.cardWidth+" card-col"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-block"},[this._t("default")],2)])])}),[],!1,null,null,null).exports},props:{title:{type:String,default:""},leftButtonHref:{type:String,default:""},leftButtonText:{type:String,default:""},rightButtonHref:{type:String,default:""},rightButtonText:{type:String,default:""},cardWidth:{type:String,default:"6"},rocketcrab:{type:Boolean,default:!1}}}),_=(n(201),Object(m.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("card",{attrs:{"card-width":t.cardWidth}},[n("h3",{staticClass:"card-title"},[t._v("\n    "+t._s(t.title)+"\n    "),t.rocketcrab?n("div",{staticClass:"rocketcrab-superscript"},[n("img",{attrs:{src:"https://rocketcrab.com/rocketcrab-logo-text.svg"}})]):t._e()]),t._v(" "),n("p",{staticClass:"card-text"},[t._t("default")],2),t._v(" "),n("div",[n("a",{attrs:{href:t.leftButtonHref,target:"_blank"}},[n("button",{staticClass:"btn btn-outline-light",attrs:{type:"button"}},[t._v("\n        "+t._s(t.leftButtonText)+"\n      ")])]),t._v(" "),t.rightButtonHref?n("a",{attrs:{href:t.rightButtonHref,target:"_blank"}},[n("button",{staticClass:"btn btn-outline-light",attrs:{type:"button"}},[t._v("\n        "+t._s(t.rightButtonText)+"\n      ")])]):t._e()])])}),[],!1,null,null,null).exports),k=h.a.mixin({confirmButtonColor:"#140D33"}),x={components:{Listening:v,ProjectCard:_},data:function(){return{year:(new Date).getFullYear(),titleText:"",typingTitleZIndex:function(){return 100},typingTitleColor:function(){return"#DDDDDD"},projectCardsNonexistent:!0,startBackgroundColor:"#DDDDDD",startTransition:!1}},mounted:function(){var t=this,e=!("true"===r.a.get("typed"));r.a.set("typed","true",{expires:16/24}),e?(this.typingTitleZIndex=100,this.typingTitleColor="#212529",new c.a(".title",{strings:["Tanner Krewson"],typeSpeed:100,onComplete:function(){setTimeout((function(){return t.showPage()}),300)}})):(this.titleText="Tanner Krewson",this.showPage())},methods:{showPage:function(){this.projectCardsNonexistent=!1,this.startBackgroundColor="transparent",this.typingTitleColor="#DDDDDD",this.startTransition=!0},popupEmail:function(){k.fire({title:"Email me!",html:'<div style="color: #140D33; text-align:center;"><a href="mailto:tannerkrewson@gmail.com">tannerkrewson@gmail.com</a></div>'})},popupESPN:function(){k.fire({html:'ESPN was my first internship! I worked out of ESPN Headquarters in Bristol, Connecticut. I spent the first ​6​ ​weeks​ on ​the​ ​Consumer​ ​Tech​ ​Ops​ ​team,​ ​diagnosing​ ​and​ ​fixing​ ​bugs across​ ​ESPN.com​. I spent the remaining ​4​ ​weeks​ ​on​ ​the​ ESPN.com ​feature​ ​development​ ​team,​ ​working on the homepage news feed, a redesign for MLB Gamecast, and an internal tool called Feed Manager. Here\'s what I put on my resume about it:<br><br><ul style="text-align: left;"><li>Designed​ ​and​ ​implemented​ ​live​ ​updating​ ​for​ ​news​ ​feeds​ ​on​ ​ESPN.com</li><li>Recognized and corrected a deployment flaw that could have taken down the site</li><li>Resolved​ ​long-standing​ ​major​ ​UI​ ​issues​ ​with​ ​an​ ​internal​ ​translations​ ​tool</li><li>Wrote new features in React for a tool used by editors to write and publish articles</li><li>Navigated a legacy code base written with a proprietary back-end language called Tea</li></ul>',imageUrl:"https://i.imgur.com/aYKfZ62.jpg"})},popupDisney:function(){k.fire({html:"<p>My second internship was at Disney's Seattle office. I worked on Studio Northstar, a team that develops ​the attraction and show pages for the Disney parks. Our main task for the summer was a redesign of the attractions pages from PHP to Angular 5. Here's what I put on my resume about it:<br><br><ul style=\"text-align: left;\"><li>Worked on a full stack redesign of the Disney attractions pages in Angular 5 and Node</li><li>Created four major UI components in Angular 5 and ensured 100% unit test coverage</li><li>Wrote a feature that themes the UI by extracting colors from an attraction's image</li><li>Took the initiative to refactor and document the Angular 5 project as it grew</li><li>Designed an easter egg that reveals the developers' names when activated</li><li>Made many bug fixes and minor features across legacy PHP and Angular 1 codebases</li></ul></p>",imageUrl:"https://i.imgur.com/Rzpnv4A.jpg"})},popupGS:function(){k.fire({html:"<p>My third internship was at Goldman Sachs in NYC. It was an awesome experience going from never having taken an econ class to working on Wall Street! I worked on the Goldman Sachs Asset Management Compliance Automation team. My project was to redesign an existing dashboard for compliance officers to easily see what trades they need to review. I did it with React, Redux, and a bit of Java.​</p>",imageUrl:"https://i.imgur.com/hYkR64w.jpg"})},popupDSSIntern:function(){k.fire({html:"<p>For my fourth and final internship, I spent my fall semester at Disney Streaming in NYC for the launch of Disney+. I joined the Web Platform Architecture team, which manages the servers for disneyplus.com on AWS. I also created an internal tool with Next.js and React to quickly find and view information about any microservice in the company.</p>",imageUrl:"https://i.imgur.com/dmIzkPU.png"})},popupDSSFull:function(){k.fire({html:"<p>After graduating in May 2020, I returned to Disney Streaming as a full-time software engineer. I onboarded remotely due to the COVID-19 pandemic, but in July 2021, I moved to New York City. I am on the Web Playback Experience team, which develops the web browser video player for Disney+, Hulu ESPN+, Star+, and NHL.TV.</p>"})},onTitleClick:function(){this.projectCardsNonexistent?(this.titleText="Tanner Krewson",this.showPage()):this.popupReplayAnimation()},popupReplayAnimation:function(){k.fire({title:"Want to see the typing intro animation again?",type:"question",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No"}).then((function(t){t.value&&(r.a.set("typed","false"),location.reload())}))}}},C=(n(203),Object(m.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{class:{transition:t.startTransition},style:{backgroundColor:t.startBackgroundColor},attrs:{id:"dark-start"}}),t._v(" "),n("div",{staticClass:"stationary-background",attrs:{id:"vanta"}}),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"full-title"},[t._m(0),t._v(" "),n("h1",{staticClass:"display-4",style:{zIndex:t.typingTitleZIndex,color:t.typingTitleColor},attrs:{id:"typing-title"},on:{click:t.onTitleClick}},[n("span",{staticClass:"title"},[t._v(t._s(t.titleText))])]),t._v(" "),n("div",[n("span",[n("a",{attrs:{href:"#"},on:{click:t.popupEmail}},[t._v("Email")])]),t._v("\n        •\n        "),t._m(1),t._v("\n        •\n        "),t._m(2),t._v("\n        •\n        "),t._m(3),t._v(" "),n("br"),t._v(" "),t._m(4),t._v("\n        •\n        "),t._m(5),t._v("\n        •\n        "),t._m(6),t._v("\n        •\n        "),t._m(7),t._v(" "),n("listening")],1)]),t._v(" "),n("div",{class:{nonexistent:t.projectCardsNonexistent},attrs:{id:"project-cards"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-2"}),t._v(" "),n("div",{staticClass:"col-md-8 card-col",staticStyle:{"justify-content":"center"}},[n("div",{staticClass:"card",staticStyle:{width:"40em"}},[n("div",{staticClass:"card-block"},[t._m(8),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6"},[n("div",{staticStyle:{margin:"1em"}},[n("h5",{staticClass:"card-subtitle"},[t._v("Software Engineer II")]),t._v(" "),n("div",{staticClass:"card-text"},[t._v("\n                      Since June 2020 - New York City\n                    ")]),t._v(" "),n("div",{staticClass:"card-buttons"},[n("button",{staticClass:"btn btn-outline-light",attrs:{type:"button"},on:{click:t.popupDSSFull}},[t._v("\n                        More Info\n                      ")])])])]),t._v(" "),n("div",{staticClass:"col-lg-6"},[n("div",{staticStyle:{margin:"1em"}},[n("h5",{staticClass:"card-subtitle"},[t._v("Software Engineer Intern")]),t._v(" "),n("div",{staticClass:"card-text"},[t._v("Fall 2019 - New York City")]),t._v(" "),n("div",{staticClass:"card-buttons"},[n("button",{staticClass:"btn btn-outline-light",attrs:{type:"button"},on:{click:t.popupDSSIntern}},[t._v("\n                        More Info\n                      ")])])])])])])])]),t._v(" "),n("div",{staticClass:"col-md-2"})]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4 card-col"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-block"},[n("div",{staticClass:"card-title",staticStyle:{"margin-top":"8px"}},[n("img",{staticClass:"company-logo",attrs:{src:"gs-light.svg"},on:{click:t.popupGS}})]),t._v(" "),n("br"),t._v(" "),n("h5",{staticClass:"card-subtitle"},[t._v("Technology Analyst Intern")]),t._v(" "),n("div",{staticClass:"card-text"},[t._v("Summer 2019 - New York City")]),t._v(" "),n("div",{staticClass:"card-buttons"},[n("button",{staticClass:"btn btn-outline-light",attrs:{type:"button"},on:{click:t.popupGS}},[t._v("\n                  More Info\n                ")])])])])]),t._v(" "),n("div",{staticClass:"col-md-4 card-col"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-block"},[n("div",{staticClass:"card-title",staticStyle:{"margin-top":"8px"}},[n("img",{staticClass:"company-logo",attrs:{src:"disney-parks-light.svg"},on:{click:t.popupDisney}})]),t._v(" "),n("br"),t._v(" "),n("h5",{staticClass:"card-subtitle"},[t._v("Software Engineer Intern")]),t._v(" "),n("div",{staticClass:"card-text"},[t._v("Summer 2018 - Seattle, WA")]),t._v(" "),n("div",{staticClass:"card-buttons"},[n("button",{staticClass:"btn btn-outline-light",attrs:{type:"button"},on:{click:t.popupDisney}},[t._v("\n                  More Info\n                ")])])])])]),t._v(" "),n("div",{staticClass:"col-md-4 card-col"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-block"},[n("div",{staticClass:"card-title",staticStyle:{"margin-top":"8px"}},[n("img",{staticClass:"company-logo",attrs:{src:"espn-light.svg"},on:{click:t.popupESPN}})]),t._v(" "),n("br"),t._v(" "),n("h5",{staticClass:"card-subtitle"},[t._v("Software Engineer Intern")]),t._v(" "),n("div",{staticClass:"card-text"},[t._v("Summer 2017 - Bristol, CT")]),t._v(" "),n("div",{staticClass:"card-buttons"},[n("button",{staticClass:"btn btn-outline-light",attrs:{type:"button"},on:{click:t.popupESPN}},[t._v("\n                  More Info\n                ")])])])])])]),t._v(" "),t._m(9),t._v(" "),n("div",{staticClass:"row"},[n("project-card",{attrs:{title:"Drawphone","left-button-href":"https://drawphone.tannerkrewson.com/","left-button-text":"Play Drawphone","right-button-href":"https://github.com/tannerkrewson/drawphone","right-button-text":"View on GitHub",rocketcrab:"true"}},[t._v("\n          A simple game of draw what you see, and guess what your friends\n          drew. Over 7 million drawings and guesses have been submitted to\n          date! Grab four or more of your friends, and play Drawphone right in\n          your phone's web browser.\n        ")]),t._v(" "),n("project-card",{attrs:{title:"Spyfall","left-button-href":"https://spyfall.tannerkrewson.com/","left-button-text":"Play Spyfall","right-button-href":"https://github.com/tannerkrewson/spyfall","right-button-text":"View on GitHub",rocketcrab:"true"}},[t._v("\n          The game that inspired Drawphone, spyfall.crabhat.com, was removed\n          from the Internet. So, I recovered the old code, rewrote most of it,\n          and added a few new features. Give it a shot!\n        ")])],1),t._v(" "),n("div",{staticClass:"row"},[n("project-card",{attrs:{title:"PTSU Exposed","left-button-href":"https://www.tannerkrewson.com/ptsu/secret","left-button-text":"I'm confused","right-button-href":"https://www.tannerkrewson.com/ptsu/","right-button-text":"Go to PTSU Exposed"}},[t._v("\n          Apple and Google have been secretly installing a microchip in\n          smartphones that sends psychoelectric waves into the minds of their\n          users, allowing the highest bidding advertisers to influence\n          consumers' brand preferences. Discover the biggest conspiracy in the\n          history of mankind with PTSU Exposed.\n        ")]),t._v(" "),n("project-card",{attrs:{title:"Connect 4","left-button-href":"https://kevinshannon.dev/connect4/","left-button-text":"Play Connect 4","right-button-href":"https://github.com/kevin-shannon/connect4","right-button-text":"View on GitHub"}},[t._v("\n          A multi-year effort between myself and my friend, Kevin Shannon. Try\n          the local and online multiplayer modes, or test your skills against\n          the wicked-smart AI in single player.\n        ")])],1),t._v(" "),n("div",{staticClass:"row"},[n("project-card",{attrs:{title:"Mutual Music","left-button-href":"https://www.tannerkrewson.com/mutual-music/","left-button-text":"Try it out","right-button-href":"https://github.com/tannerkrewson/mutual-music","right-button-text":"View on GitHub"}},[t._v("\n          Using your Spotify accounts, Mutual Music creates a playlist of\n          songs you and a friend both love. No more fighting over whose music\n          to play! It's like mutual friends on Facebook, but for your favorite\n          songs.\n        ")]),t._v(" "),n("project-card",{attrs:{title:"Spotify-in-Common","left-button-href":"https://www.tannerkrewson.com/sic/","left-button-text":"Try it out","right-button-href":"https://github.com/tannerkrewson/sic/","right-button-text":"View on GitHub"}},[t._v("\n          Mutual Music's more flexible predecessor. Select two or more Spotify\n          playlists, and Spotify-in-Common will generate a new playlist\n          containing the songs present in all of the selected playlists.\n        ")])],1),t._v(" "),n("div",{staticClass:"row"},[n("project-card",{attrs:{title:"Snakeout","left-button-href":"https://snakeout.tannerkrewson.com/","left-button-text":"Play Snakeout","right-button-href":"https://github.com/tannerkrewson/snakeout","right-button-text":"View on GitHub",rocketcrab:"true"}},[t._v("\n          A recreation of the board game The Resistance, made in the style of\n          Drawphone and Spyfall. Gather 5 to 10 of your friends, and prepare\n          yourself for major trust issues.\n        ")]),t._v(" "),n("project-card",{attrs:{title:"COVID-19 Stimulus Calculator","left-button-href":"https://www.tannerkrewson.com/coronacalc","left-button-text":"Try it out","right-button-href":"https://github.com/tannerkrewson/coronacalc","right-button-text":"View on GitHub"}},[t._v("\n          A simple quiz to see the difference in the stimulus check amount\n          that one would receive under the final CARES act, versus the\n          Democrats' original, failed act.\n        ")])],1),t._v(" "),n("div",{staticClass:"row"},[n("project-card",{attrs:{title:"Vidocracy","left-button-href":"http://vidocracy.tannerkrewson.com/","left-button-text":"Try Vidocracy","right-button-href":"https://github.com/tannerkrewson/vidocracy","right-button-text":"View on GitHub"}},[t._v("\n          Bring democracy to your party's YouTube videos! Open Vidocracy in\n          your phone's browser, and start voting on videos and songs to be\n          played on the big screen.\n        ")]),t._v(" "),n("project-card",{attrs:{title:"A Kiosk That's Not Trash","left-button-href":"https://www.tannerkrewson.com/a-kiosk-thats-not-trash/","left-button-text":"Try it out","right-button-href":"https://github.com/tannerkrewson/a-kiosk-thats-not-trash","right-button-text":"View on GitHub"}},[t._v("\n          When I was in college, I volunteered for an organization called SAB\n          that plans events and concerts for the students. The website we were\n          using to track ticket sales was born from the depths of hell, so I\n          created a better one that records sales into a Google Sheet.\n        ")])],1),t._v(" "),n("div",{staticClass:"row"},[n("project-card",{attrs:{title:"Backspace Bowling","left-button-href":"https://www.tannerkrewson.com/backspace-bowling/","left-button-text":"Try it out","right-button-href":"https://github.com/tannerkrewson/backspace-bowling","right-button-text":"View on GitHub"}},[t._v("\n          This game was made exclusively on a computer in my Personal Finance\n          class during my senior year of high school when I should have been\n          doing other things. It's okay though, I got an A in the class. Even\n          though it's barebones, it's still pretty fun. Hold down Backspace to\n          bowl!\n        ")]),t._v(" "),n("project-card",{attrs:{title:"Calorie Countdown","left-button-href":"https://www.tannerkrewson.com/calorie-countdown/","left-button-text":"Try it out","right-button-href":"https://github.com/tannerkrewson/calorie-countdown","right-button-text":"View on GitHub"}},[t._v("\n          Calorie Countdown represents the cutting edge of calorie counting\n          research, and is the pinnacle of diet and nutrition tracking\n          software today. Just kidding; it's really just a calculator with\n          nothing but a minus button that I used every day at the buffet\n          dining halls in college.\n        ")])],1),t._v(" "),n("div",{staticClass:"row"},[n("project-card",{attrs:{title:"Red Team LAN","left-button-href":"https://www.tannerkrewson.com/redteamlan","left-button-text":"View the website"}},[t._v("\n          The group I founded to play computer games with my friends from high\n          school. We had had 32 events from 2013 to 2020. Check out the\n          timelapses of the parties on the website; they're pretty neat!\n        ")]),t._v(" "),n("project-card",{attrs:{title:"Lansite","left-button-href":"https://github.com/tannerkrewson/lansite","left-button-text":"View on GitHub"}},[t._v("\n          Connect your LAN party attendees with announcements, private\n          messaging, custom votes, and matchmaking. Lansite is fully modular\n          and features extensive documentation, so hosts can effortlessly\n          extend it to fit their needs.\n        ")])],1),t._v(" "),n("br"),t._v(" "),n("footer",[t._v("\n        tannerkrewson,\n        "),n("span",{attrs:{id:"footer-year"}},[t._v(t._s(t.year))]),t._v(" "),n("br"),t._v(" "),n("a",{attrs:{href:"https://github.com/tannerkrewson/tannerkrewson.github.io",target:"_blank"}},[t._v("View on GitHub")])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"profile"},[e("img",{staticClass:"profile-pic",attrs:{src:"me.jpg",alt:"Tanner Krewson"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("a",{attrs:{target:"_blank",href:"https://github.com/tannerkrewson/"}},[this._v("GitHub")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("a",{attrs:{target:"_blank",href:"https://www.linkedin.com/in/tannerkrewson/"}},[this._v("LinkedIn")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("a",{attrs:{target:"_blank",href:"https://www.facebook.com/tannermkrewson/"}},[this._v("Facebook")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("a",{attrs:{target:"_blank",href:"https://vsco.co/tannerkrewson/gallery"}},[this._v("VSCO")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("a",{attrs:{target:"_blank",href:"https://open.spotify.com/user/1241777067"}},[this._v("Spotify")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("a",{attrs:{target:"_blank",href:"https://www.last.fm/user/TankTan38"}},[this._v("Last.fm")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("a",{attrs:{target:"_blank",href:"https://letterboxd.com/tannerkrewson/"}},[this._v("Letterboxd")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-title",staticStyle:{"margin-top":"1.5em 0"}},[e("img",{staticStyle:{"max-width":"18em",margin:".3em 0"},attrs:{src:"ds-long-light.svg"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-2"}),t._v(" "),n("div",{staticClass:"col-md-8 card-col",staticStyle:{"justify-content":"center"}},[n("div",{staticClass:"card",staticStyle:{width:"35em"}},[n("div",{staticClass:"card-block"},[n("div",{staticClass:"card-title",staticStyle:{"margin-top":"-1.5em","margin-bottom":".4em"}},[n("img",{staticClass:"company-logo",staticStyle:{"max-height":"5em"},attrs:{src:"rocketcrab-logo-text-light.svg"}})]),t._v(" "),n("p",{staticClass:"card-text"},[t._v("\n                rocketcrab is a lobby service and launcher for mobile web\n                party games.\n              ")]),t._v(" "),n("div",{staticClass:"card-buttons"},[n("a",{attrs:{href:"https://rocketcrab.com/",target:"_blank"}},[n("button",{staticClass:"btn btn-outline-light",attrs:{type:"button"}},[t._v("\n                    Try it out\n                  ")])]),t._v(" "),n("a",{attrs:{href:"https://github.com/tannerkrewson/rocketcrab",target:"_blank"}},[n("button",{staticClass:"btn btn-outline-light",attrs:{type:"button"}},[t._v("\n                    View on GitHub\n                  ")])])])])])]),t._v(" "),n("div",{staticClass:"col-md-2"})])}],!1,null,null,null));e.default=C.exports}}]);