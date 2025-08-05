// setTimeout(function(){
//     alert("Ping...");
// }, 5000); // sẽ thực hiện sau 5000 miliseconds

// setInterval(function(){
//     alert("Pong...");
// }, 3000);

// var m = 10;
// var s = 0;
// var timer = setInterval(function(){
//     console.log(m+":"+s);
//     s--;
//     if(s<0){
//         m--;
//         s = 59;
//     }
//     if(m<0){
//         clearInterval(timer);
//     }
// },10);

alert("Task 1");
setTimeout(function(){
    alert("Task 2");
},5000);
alert("Task 3");