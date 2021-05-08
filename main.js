canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_w=100;
rover_h=100;

rover_x=10;
rover_y=10;

rover_img="rover.png";

mars_img="mars.jpg";

function doit(){
    background_image=new Image();
    background_image.onload=load;
    background_image.src=mars_img;

    rover_image=new Image();
    rover_image.onload=play;
    rover_image.src=rover_img;
}
function load(){
    ctx.drawImage(background_image,0,0,canvas.width,canvas.height);
}
function play(){
    ctx.drawImage(rover_image,rover_x,rover_y,rover_w,rover_h);
}
window.addEventListener("keydown",kp);
function kp(e){
    var keys=e.keyCode;
    console.log(keys);
    if(keys=="87"){
        up();
        console.log("up");
    }
    if(keys=="83"){
        down();
        console.log("down");
    }
    if(keys=="65"){
        left();
        console.log("left");
    }
    if(keys=="68"){
        right();
        console.log("right");
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-5;
        console.log("when w is pressed: x= "+rover_x+"y="+rover_y);
        load();
        play();
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+5;
        console.log("when s is pressed: x="+rover_x+"y="+rover_y);
        load();
        play();
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-5;
        console.log("when a is pressed: x="+rover_x+"y="+rover_y);
        load();
        play();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+5;
        console.log("when d is pressed: x="+rover_x+"y="+rover_y)
    }
}