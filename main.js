noseX = 0;
noseY = 0;
diffrence = 0;
LeftWrist = 0;
RightWrist = 0;

function draw() {
    background("green")
    document.getElementById("square_sides").innerHTML = "width and height of square will be = " + diffrence +"px";
    stroke("pink")
    fill("red")
    square(noseX, noseY, diffrence);

}

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(600, 110);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialised!")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log(" noseX = " + noseX + " noseY = " + noseY)
        LeftWrist = results[0].pose.leftWrist.x;
        RightWrist = results[0].pose.rightWrist.x;
        diffrence = floor(LeftWrist - RightWrist);
    }
}
