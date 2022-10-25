function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550, 550);
    canvas.position(560,5);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('poseNet is Initialized!');
}
    function gotPoses(results)
    {
        if(results.length > 0)
        {
            console.log(results)
          
            leftwristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x; 
            
            difference = floor(leftWristX - rightWristX);
        }
    }

function draw() {
    background('#969A97');

    textSize(difference);
    fill('#49dbaf');
   text('jaylen', 50, 400);
}
