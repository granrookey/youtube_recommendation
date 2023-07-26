// 썸네일 api 연결, 동영상 id 지정 // 신지수 7.26

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
        viewsElement.textContent = views;
        
    })
      
      .catch(error => {
        console.error('에러:', error);
        alert('에러');
      });
  }
  
  function handleThumbnailClick(videoId) {
    let thumbnailImg = document.querySelector(`[data-video-id="${videoId}"] .thumbnailImage`);
    let videoPlayer = document.querySelector(`[data-video-id="${videoId}"] .videoPlayer`);
    let activeThumbnail = document.querySelector('.thumbnail-img.active');
  
    if (activeThumbnail !== null) {
        // 현재 재생 중인 비디오가 있다면 정지시키기
        let activeVideoPlayer = activeThumbnail.querySelector('.videoPlayer');
        activeVideoPlayer.pause();
        activeThumbnail.classList.remove('active');
    }
  
    thumbnailImg.style.display = 'none';
    videoPlayer.style.display = 'block';
    videoPlayer.play();
    videoPlayer.setAttribute('data-src', ''); 
    thumbnailImg.parentElement.classList.add('active');
  }
  
  for (let videoId = 1; videoId <= 16; videoId++) {
    getVideoInfo(videoId);
  }
  
  
  