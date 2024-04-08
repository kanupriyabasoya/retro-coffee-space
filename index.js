// digital clock
const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(()=>{
    const currentTime = new Date();
    if(currentTime.getHours()<=12){
        hrs.innerHTML =  (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    } 
    else{
        hrs.innerHTML = currentTime.getHours() - 12;
    }
    
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000);

// pomodro script
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

let minn = 25;
let seconds = 0;
let timer;

start.addEventListener('click',startTimer);
  function startTimer() {
    timer = setInterval(function(){
        if(seconds === 0 && minn===0){
                clearInterval(timer);
                alert("time's up");
                minute.innerText = 25;
                second.innerText = 0;
                return;
            }
            else if(seconds ===0){
                minn--;
                seconds = 59;
            }else{
                seconds--;
            }
            minute.innerText = minn;
            second.innerText = seconds;
    },1000)

}

stop.addEventListener('click',function(){
    clearInterval(timer);})

reset.addEventListener('click', function(){
    clearInterval(timer);
    minute.innerText = 25;
    second.innerText = 0 + '0';
})

//todo list
const input = document.querySelector(".input");
const taskButton = document.querySelector(".task-button");
const listContainer = document.querySelector(".append-list-container");


taskButton.addEventListener('click',function(){
    if(input.value===''){
        alert("add task");
    }else{
        let li = document.createElement('li');
        li.textContent = input.value;
        li.className = `li-item`;
        listContainer.appendChild(li);
        input.value = '';
    }
})

//taskdone
listContainer.addEventListener('click', function(e){
    e.target.classList.toggle('bg');
})
//taskdelete
listContainer.addEventListener('dblclick', function(e){
    e.target.remove();
})