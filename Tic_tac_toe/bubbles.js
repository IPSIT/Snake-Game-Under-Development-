var canvas = document.getElementById("screen");
var c=canvas.getContext("2d");
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;

function Circle(x,y,radius,dx,dy){
  this.x=x;
  this.y=y;
  this.dx=dx;
  this.dy=dy;
  this.radius=radius;
  this.minradius=radius;
  this.color=colors[Math.floor(Math.random()*colors.length)];
  this.draw = function(){
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
    c.fillStyle=this.color;
    c.fill();

  }
  this.move=function(){
    if (this.x>(innerWidth-this.radius) || this.x<this.radius){this.dx=-this.dx}
    if (this.y>(innerHeight-this.radius)|| this.y<this.radius){this.dy=-this.dy}
    this.x+=this.dx;
      this.y+=this.dy;
      if(Math.abs(mouse.x-this.x)<50 && this.radius<30){
        this.radius+=1;
      }
      else if(this.radius>this.minradius){
        this.radius-=1;
      }
      if(Math.abs(mouse.y-this.y)<50 && this.radius<30){
        this.radius+=1;
      }
      else if(this.radius>this.minradius){
        this.radius-=1;
      }
      this.draw();
  }

}
var colors=[
  "#133046",
  "#15959F",
  "#F1E4B3",
  "#F4A090",
  "#F26144"
]
var mouse={
  x : undefined,
  y : undefined
}

window.addEventListener('mousemove',function(event){
  mouse.x=event.x;
  mouse.y=event.y;

})
var array=[];
for(var i=0;i<600;i++){
  var x=Math.random() * innerWidth;
  var y=Math.random() * innerHeight;

  var radius = (Math.random()*2)+2;
  var dx=(Math.random()-0.5)*2;
  var dy=(Math.random()-0.5)*2;
  var circle = new Circle(x,y,radius,dx,dy) ;
  array.push(circle);
}

function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth,innerHeight);
  for(var i=0;i<array.length;i++){
    array[i].move();
  }



}
animate();
// var i;
// for(i=0;i<50;i++){
// 	var x=Math.random()*window.innerWidth;
// 	var y =Math.random()*window.innerHeight;
// 	var r=Math.random() * 255;
// 	var g=Math.random() * 255;
// 	var b=Math.random() * 255;

// 	console.log("x=",x,"y=",y);
// 	c.beginPath();
// 	c.arc(x,y,50,0,Math.PI *2,false);
// 	c.fillStyle="rgb("+r+","+g+","+b+")";
// 	c.fill();


// }
