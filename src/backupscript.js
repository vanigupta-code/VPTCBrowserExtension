// let timeDuration = document.getElementsByClassName('ytp-time-duration')
// console.log(timeDuration[0].textCon  tent)

// let videoSpeed = document.getElementsByTagName("video")[0].playbackRate
// console.log(videoSpeed)



// /* TODO:check regex 
//         make time more accurate hrs:mins
// */
// const apiKey = "apikey"
// // const videoID = "MLSD_ba2Xfs"   // sec
// // const videoID = "rhzKDrUiJVk"   // mins secs
// const videoID = "eKFTSSKCzWA"      // hrs mins secs
// var playbackSpeed = ""
// var vDuration = ""

// async function getVideoData() {
//   try {
//     const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoID}&key=${apiKey}&part=contentDetails`)
//     return response.json();
//   }
//   catch (err) {
//     console.log(err)
//   }
// }

// async function main() {
//   const duration = await getVideoData()
//   vDuration = duration.items[0].contentDetails.duration

//   // FIXME
//   // REVIEW 
//   const regex = /\d{2}|\d{1}/g
//   var timeArr = vDuration.match(regex)
//   var timeString = timeArr.toString().replace(/,/g, ":")

//   document.getElementById("videoTime").innerText = timeString
//   document.getElementById("video_speed").addEventListener("change", ({target}) => {
//     playbackSpeed = target.value
    
//     console.log(timeArr.length)
//     console.log(vDuration)
//     console.log(timeArr)

//     var newTime = ""
//     var units = ""

//     // REVIEW 
//     // FIXME
//     switch(timeArr.length) {
//       case 1:   newTime = parseInt(timeArr[0]) / playbackSpeed  
//                 units = "sec"
//                 console.log("new time:", newTime, units)
//                 break
//       case 2:   newTime = parseInt(timeArr[0] * 60 + parseInt(timeArr[1])) / playbackSpeed / 60
//                 units = "mins"
//                 console.log("new time:", newTime, units)
//                 break
//       case 3:   newTime = parseInt(timeArr[0] * 3600 + parseInt(timeArr[1]) * 60 + parseInt(timeArr[2])) / playbackSpeed / 3600
//                 units = "hrs"     
//                 console.log("new time:", newTime, units)       
//                 break
//     }
//   })

// }


// main()
