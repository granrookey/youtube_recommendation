function thumnailInfo(){
    let vedeoTitle = document.getElementsByClassName("thumb-title").value;
        if (vedeoTitle===''){
            return;
        }

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = JSON.parse(xhr.responseText)
                if (data.Response ==='False'){
                    alert('에러')
                }else{
                    let thumnailInfo = '';
                    thumnailInfo += video_id;
                    thumnailInfo += image_link;
                    thumnailInfo += video_title;
                    thumnailInfo += video_channel;
                    thumnailInfo += views;
                    document.getElementById('thumbnail-item').innerHTML = thumnailInfo;
                }
            }
            xhr.open('GET', 'http://oreumi.appspot.com/video/getVideoList' + encodeURIComponent(thumnailInfo), true);
        }
    }
}