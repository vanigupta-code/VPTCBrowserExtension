console.log("Content Script");
const regex = /\d{2}|\d{1}/g;
// current video duration
var timeDuration = document.getElementsByClassName("ytp-time-duration")[0].firstChild.textContent;
var playBackRate = document.getElementsByTagName("video")[0].playbackRate; // current video playback rate
var videoLength = timeDuration.match(regex); // array with individual time units

const newTime = {
  1: {
    duration: parseInt(videoLength[0]),
  },
  2: {
    duration: parseInt(videoLength[0] * 60 + parseInt(videoLength[1])),
  },
  3: {
    duration: parseInt(
      videoLength[0] * 3600 +
        parseInt(videoLength[1]) * 60 +
        parseInt(videoLength[2])
    ),
  },
};

browser.storage.local.set({
  timeDuration,
  playBackRate,
  videoLength,
  newTime,
});

console.log("duration:", timeDuration, "playbackrate:", playBackRate);

browser.storage.onChanged.addListener((changes, area) => {
  console.log("storage changed")
})
