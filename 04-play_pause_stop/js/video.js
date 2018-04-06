function getVideo() {
    return document.getElementById("video");
}

function play() {
    var video = getVideo();
    video.play();
}
function pause() {
    var video = getVideo();
    video.pause();
}

function stop() {
    var video = getVideo();
    // Método 1
    // video.pause();
    // video.currentTime = 0;

    // Método 2
    video.load();
    //video.pause(); // se usar o autoplay 
}