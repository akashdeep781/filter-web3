lipx=0;
lipy=0;

function preload()
{
    lip=loadImage("https://i.postimg.cc/wvWPgryV/images-removebg-preview-1.png");
}

function setup(){
    canvas = createCanvas(350,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function draw()
{
    image(video,0,0,350,300);
    image(lip,lipx-20,lipy+15,40,20);
}

function take_snapshot(){
    save("my_picture.png");
}

function modelLoaded()
{
   console.log("PoseNet Is Initialized");
}

function gotPoses(results)
{
    if(results.length>0){
        console.log(results);
        lipx=results[0].pose.nose.x;
        lipy=results[0].pose.nose.y;
        console.log("lip_x:"+lipx);
        console.log("lip_y:"+lipy);
    }
}
