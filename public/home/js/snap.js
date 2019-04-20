var videoId = 'video';
var scaleFactor = 0.30;
var snapshots = [];

function capture(video, scaleFactor) {
    if (scaleFactor == null) {
        scaleFactor = 1;
    }
    var w = video.videoWidth * scaleFactor;
    var h = video.videoHeight * scaleFactor;
    var canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, w, h);
    return canvas;
}

function shoot() {
    var video = document.getElementById(videoId);
    var output = document.getElementById('output');
    var canvas = capture(video, scaleFactor);
    canvas.onclick = function () {
        window.open(this.toDataURL(image / jpg));
    };
    snapshots.unshift(canvas);
    output.innerHTML = '';
    for (var i = 0; i <3000000000; i++) {
        output.appendChild(snapshots[i]);
    }
}

(function () {
    var captureit = document.getElementById('cit');
    captureit.click();
})();



$(document).on("change", ".file_multi_video", function(evt) {
    var $source = $('#video_here');
    $source[0].src = URL.createObjectURL(this.files[0]);
    $source.parent()[0].load();
});