// // synchronous code
// console.log("start");
// console.log("async");
// console.log("end");



// // using dummy Async code
// console.log("Start");

// setTimeout(function(){
//     console.log("Async...");
// },5000);

// console.log("end");



// // Using promises
// var x = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve([1,2,3,4,5]);
//         // reject("Error...");
//     }, 3000);
// })
// .then(result=>{
//     console.log(result);
//     return "done";
// })
// .catch(error => {
//     console.log(error);
// })

// console.log("hi");




// // Using async-await
// async function callme(){
//     var a = await setTimeout(() => {
//         return [1,3,5,7];
//     },3000);
//     var b = await setTimeout(() => {
//         return "kartik";
//     },3000);
//     console.log(a,b);
//     console.log("hello");
// } 

// callme();


