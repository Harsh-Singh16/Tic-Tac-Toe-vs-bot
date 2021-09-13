allbox = document.querySelectorAll(".box");
let resultbox = document.querySelector(".result");
let wintext = document.querySelector(".won");
let replay = document.querySelector(".btn");
 window.onload = ()=>{
    let start = document.getElementById("start");
    start.addEventListener("click",funct = ()=>{
         let inp = document.getElementById("in1");
         let str =inp.value;
       //  for(let e of inp){
       //      str += `${e.value}`;
       //  }
        let st = 'Welcome ' + str + ' , you start first. ' + '<br>' + str + ' : X '+ '&nbsp &nbsp &nbsp'+ 'BOT : O ' + '<br>' + 'All the best  !!!';
        document.querySelector("#inst").innerHTML = st;
    document.querySelector("#temp1").setAttribute("style","display:none;");
    document.querySelector("#temp2").setAttribute("style","display:block;");
    })
  for(let i=0;i<allbox.length;i++){
      allbox[i].setAttribute("onclick","check(this)");
  }
 }
 function check(e){
     if((e.innerHTML!='X') && (e.innerHTML!='O'))
    { e.innerHTML='X';
     e.style.pointerEvent = "none";
    e.setAttribute("style","background-color: cornflowerblue;");
    let stop = selectwin('X');
    let delay = 250; 
    setTimeout(function(){
    bot(stop);
    },delay);
 }
}
 function bot(stop){
     if(stop == false){
let array = [];
for(let i=0;i<allbox.length;i++)
if((allbox[i].innerHTML!='X')&&(allbox[i].innerHTML!='O'))
{array.push(i);
}
let random = array[Math.floor(Math.random() * array.length + 0)];
console.log(random);
if(array.length > 0){
    allbox[random].innerHTML = 'O';
}
allbox[random].style.pointerEvent= "none";
selectwin('O');
     }
 }
 function getrs(x){
     return document.querySelector(".box"+x).innerHTML;
 }
 //checking winning cases
 function checkcases(a1,a2,a3,sign){
     if((getrs(a1)==sign)&&(getrs(a2)==sign)&&(getrs(a3)==sign)){
         return true;
     }
 }

 //checking winner
 function selectwin(sign){
     if((checkcases(1,2,3,sign))||(checkcases(4,5,6,sign))||(checkcases(7,8,9,sign))||(checkcases(1,4,7,sign))||(checkcases(2,5,8,sign))||(checkcases(3,6,9,sign))||(checkcases(1,5,9,sign))||(checkcases(3,5,7,sign))){
//console.log(sign + " " + "is the winner");
  setTimeout(function(){
    document.querySelector("#temp1").setAttribute("style","display:none;");
    document.querySelector("#temp2").setAttribute("style","display:none;");  
    document.querySelector(".result").setAttribute("style","display:block;");    
  },250);
  if(sign=='X')
  document.querySelector(".won").innerHTML= "Congratulations !!! You won.";
  else
  document.querySelector(".won").innerHTML= "Hard Luck , You lost.";
  return true;
     }
else{
    if((getrs(1) != "")&&(getrs(2) != "")&&(getrs(8) != "")&&(getrs(3) != "")&&(getrs(4) != "")&&(getrs(5) != "")&&(getrs(6) != "")&&(getrs(7) != "")&&(getrs(9) != "")){
    setTimeout(function(){
        document.querySelector("#temp1").setAttribute("style","display:none;");
        document.querySelector("#temp2").setAttribute("style","display:none;");  
        document.querySelector(".result").setAttribute("style","display:block;");    
      },550);

      document.querySelector(".won").innerHTML= "Tie !!";
      return true;
}
}
return false;
 }
 replay.addEventListener("click",funct = ()=>{
window.location.reload();
 })