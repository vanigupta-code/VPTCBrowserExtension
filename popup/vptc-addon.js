// browser.storage.local.clear()
var playbackSpeed = document.getElementById("video_speed");
var videoTimeDisplay = document.getElementById("video_time");

function setVideoSpeedStorage(e) {
  console.log("set video speed: ", e);
  browser.storage.local.set({
    currentVideoSpeed: e,
  });
}

playbackSpeed.addEventListener("click", (e) => {
  setVideoSpeedStorage(e.target.value);
  updateVideoData();
});

function updateVideoData() {
  browser.storage.local.get().then((data) => {
    console.log(data);
    var playbackSpeed = data.currentVideoSpeed;
    var videoLength = data.videoLength.length;
    var rawDuration = data.newTime[videoLength].duration / playbackSpeed;
    console.log("raw Duration: ", rawDuration);

    var hrs = 0;
    var mins = parseInt(rawDuration / 60);
    while (mins >= 60) {
      hrs += 1;
      mins -= 60;
    }

    finalTime = `${hrs}:hr ${mins}mins: ${(rawDuration % 60).toFixed(0)}secs`;
    videoTimeDisplay.innerText = finalTime;
    console.log("Final Time: ", finalTime);
  });
}

browser.tabs.onActivated.addListener(updateVideoData);

function reportExecuteScriptError(error) {
  console.error(`Failed to execute script ${error}`);
}

browser.tabs
  .executeScript({ file: "/src/content-script.js" })
  .then(updateVideoData)
  .catch(reportExecuteScriptError);
