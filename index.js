
 let [milliseconds,seconds,minutes,hours]=[0,0,0,0];
 let timerref=document.querySelector(".timedisplay");
 let int=null;

document.getElementById("start").addEventListener("click",()=>{
    if(int!==null){
         clearInterval(int);
    }
    int=setInterval(displaytimer,10);
});


    document.getElementById('pause').addEventListener('click', ()=>{
             clearInterval(int);
         });


 document.getElementById("restart").addEventListener("click",()=>{
     clearInterval(int);
    [milliseconds,seconds,minutes,hours]=[0,0,0,0];
     timerref.innerHTML="00:00:00:000";
 });

 function displaytimer(){
     milliseconds=milliseconds+10;
     if(milliseconds==1000){
         milliseconds=0;
         seconds++;
         if(seconds==60){
             seconds=0;
             minutes++;
        
         if(minutes==60){
             minutes=0;
             hours++;
        }
     }
 }

 let h=hours<10 ? "0"+hours:hours;
 let m=minutes<10 ? "0"+minutes:minutes;
 let s=seconds<10 ? "0"+seconds:seconds;
 let ms=milliseconds<10 ? "00"+ milliseconds:milliseconds< 100? "0"+milliseconds:milliseconds;


 timerref.innerHTML=`${h} : ${m} : ${s} : ${ms}`;
 }


