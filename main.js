function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(400,400);
    canvas.position(430,130);  
    
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelDone() {
    console.log('PoseNet Is Initialized!')
}

function draw() {
    background('#969A97');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}