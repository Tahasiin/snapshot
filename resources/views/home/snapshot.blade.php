<!DOCTYPE html>
<html>
<head>
    <title>HOME</title>
    <link rel="icon" type="jpeg/png" href="{{asset('/home/images')}}/icon.png "/>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

    <link rel="stylesheet" href="{{asset('/home/css/')}}/snap.css">

</head>
<body>

<div class="wrap">

    <video  id="video" width="400" controls>
        <source src="mov_bbb.mp4" id="video_here">
    </video>
    <br/>

    <input type="file" name="file[]" class="file_multi_video" accept="video/*">
    <br/>

    <button id="cit" onclick="shoot()" class="button">Capture</button>
    <br/>

    <div id="output"></div>

</div>

<script src="{{asset('/home/js')}}/snap.js"></script>

</body>
</html>
