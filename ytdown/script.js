function downloadVideo() {
    var videoUrl = document.getElementById('videoUrl').value;
    var videoId = extractVideoId(videoUrl);
    var downloadUrl = 'https://www.youtube.com/watch?v=' + videoId;
    
    // Open the download link in a new tab
    window.open(downloadUrl, '_blank');
  }
  
  function extractVideoId(url) {
    var videoId = '';
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[7].length === 11) {
      videoId = match[7];
    } else {
      console.error("Invalid YouTube URL");
    }
    return videoId;
  }
  