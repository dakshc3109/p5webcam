function preload(){
    
};

function setup(){
 var canvas = createCanvas(640, 480);
 canvas.position(110, 250);
 var video = createCapture(VIDEO);
 video.hide();

 var tint_color = ""; 
};

function draw(){
    image(video, 0, 0, canvas.width, canvas.height);
    tint(tint_color);
};

function take_snapshot(){
    save('student_name.png');
};

function apply_filter(){
    tint_color = document.getElementById("color_name");
};