var counter = document.querySelector(".counter");
var viewers = document.querySelector(".viewers");
counter.innerHTML = 1001;

let count = 0;
setInterval(()=> {
    if(count < 1000)
    count++;
    counter.innerText = count; 

    
},1)

setTimeout(() => {
    viewers.innerText = "Viewers on the website"

},7000)

var index = document.getElementsByClassName('hello');
index = "Hello peers";


