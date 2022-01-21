var right=document.querySelector("#right");
var song=document.querySelectorAll("audio");
var current=document.querySelector("#icon");
var jhanda=0;
current.addEventListener("click",function(){
    if(jhanda===0){
        song[0].currentTime=0;
        song[0].play()
        jhanda=1;
        current.innerHTML= `<i class="ri-pause-circle-fill"></i>`
    
    }
    else{
       song[0].pause()
       jhanda=0;
       current.innerHTML= `<i class="ri-play-circle-fill"></i>`
    }
});


var temp=``;
var currentplayingsong=0;
var songName=document.querySelector("#songName");


function showcode(){
  
  song.forEach(function(vals,index){
     temp=temp+`<div id="me">${vals.getAttribute('src')}
     <h2>Naina Yeh</h2>
     <h5>yasser Desai</h5>
     <button id="${index}">play</button>
     </div>`
   });


 document.querySelector("#right").innerHTML=temp;
}
showcode();



function playsong(indexOfsong){
         song[indexOfsong].play()
}
 
function pausesong(indexOfsong){
        song[indexOfsong].pause()
        song[indexOfsong].currentTime = 0
}
function main(){
right.addEventListener("click",function(dets){
       var currentsong = [Number(dets.target.id)]
       pausesong(currentplayingsong);
       playsong(currentsong);
       currentplayingsong=currentsong;
       showdata();
})
}
main();
function showdata(){
  
         var showsong=song[currentplayingsong].getAttribute('src');
         songName.textContent=showsong;
}









