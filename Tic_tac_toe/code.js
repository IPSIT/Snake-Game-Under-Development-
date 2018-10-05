document.getElementById("btn").addEventListener('click',function(){
  clear();
});

function clear(){
  var board=document.getElementById("board");
  for(var i=0;i<board.childElementCount;i++){
    
    var p = document.getElementsByClassName("box")[i];
    var h = p.childNodes[0];
    if (p.childElementCount>0){
      p.removeChild(h);
    }
  }
}

var pcount=0;

var arr=[0,1,2,3,4,5,6,7,8];
var pos=[0,1,2,3,4,5,6,7,8];


var boxes = document.getElementsByClassName("box");


function put(i){
  if(boxes[i].childElementCount==0){
    var h=document.createElement("h1");
    var text=document.createTextNode("O");
    h.innerHTML="O"; 
    boxes[i].appendChild(h);
    arr[i]="O";
    pos.splice(pos.indexOf(i),1);

  }
  if(check()){
    setTimeout(function(){alert("YOU WON ! ");},100)
    setTimeout(function(){clear()},500)
    pcount+=10;

    var p1=document.getElementById("p1");
    var score = parseInt(p1.value);
    score+=10;
    p1.value=score;
    arr=[0,1,2,3,4,5,6,7,8];
    pos=[0,1,2,3,4,5,6,7,8];


    
  }
  
  
  var pc=Math.floor(Math.random() * pos.length);
  if(boxes[pos[pc]].childElementCount==0){
    var h=document.createElement("h1");
    var text=document.createTextNode("O");
    h.innerHTML="X"; 
    boxes[pos[pc]].appendChild(h);
    arr[pos[pc]]="X";
    pos.splice(pc,1);

   }
}
function a(n){
  var m = parseInt(n);
  return(boxes[m].children[0].innerHTML)
}


function check(){

  if(arr[0]=="O" &&  arr[1]=="O" && arr[2]=="O"){return true;}
  else if(arr[3]=="O" &&  arr[4]=="O" && arr[5]=="O"){return true;}
  else if(arr[6]=="O" &&  arr[7]=="O" && arr[8]=="O"){return true;}
  else if(arr[0]=="O" &&  arr[3]=="O" && arr[6]=="O"){return true;}
  else if(arr[1]=="O" &&  arr[4]=="O" && arr[7]=="O"){return true;}
  else if(arr[2]=="O" &&  arr[5]=="O" && arr[8]=="O"){return true;}
  else if(arr[0]=="O" &&  arr[4]=="O" && arr[8]=="O"){return true;}
  else if(arr[2]=="O" &&  arr[4]=="O" && arr[6]=="O"){return true;}
  

}




