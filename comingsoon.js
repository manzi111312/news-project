let customDate = new DragEvent("September 10, 2023 12:00:00").getTime();
let timer = setInterval(timing, 1000);
function timing(){
    let now = new Date().getTime();
    let x = customDate - now;
    if(x > 0){
        let days = Math.floor(x / (1000*60*60*24));
        let hours = Math.floor((x % (1000*60*60*24)) / (1000*60*60));
        let mins = Math.floor((x % (1000*60*60)) / (1000*60));
        let secs = Math.floor((x % (1000*60)) / 1000);
        
        let time = `${hours}h : ${mins}m : ${secs}s`;
        document.quertSelector('.timing').innerHTML = time;
    }
}