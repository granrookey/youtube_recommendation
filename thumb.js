
function getVideoInfo(videoId) {
  // API URL
  let apiUrl = 'http://oreumi.appspot.com/video/getVideoInfo?video_id=' + videoId;

  fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Accept': 'application/json'
      }
  })
  .then(response => response.json())
  .then(data => {

      let videoTitle = data.video_title;
      let videoChannel = data.video_channel;
      let views = data.views;
      let imageLink = data.image_link;
      let videoLink = data.video_link;

      let thumbnailImage = document.querySelector(`[data-video-id="${videoId}"] .thumbnailImage`);
      let videoFrame = document.querySelector(`[data-video-id="${videoId}"] .videoFrame`);
      let titleElement = document.querySelector(`[data-video-id="${videoId}"] .thumb-title`);
      let channelElement = document.querySelector(`[data-video-id="${videoId}"] .chanelname`);
      let viewsElement = document.querySelector(`[data-video-id="${videoId}"] .views`);

      thumbnailImage.src = imageLink;
      videoFrame.src = videoLink;
      titleElement.textContent = videoTitle;
      channelElement.textContent = videoChannel;
      viewsElement.textContent = views + " Views";
      // viewsElement.textContent = views + " Views. " + timeAgo + " ago";  업로드 시간 계산해야 함

  })

  .catch(error => {
      console.error('에러:', error);
      alert('에러');
  });
}

for (let videoId = 1; videoId <= 16; videoId++) {
  getVideoInfo(videoId);
}