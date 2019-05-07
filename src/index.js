//var是全局变量，会污染全局
// var a = 1;
// console.log(a);
// window.onload = function(){
//     console.log(a);
// }
//因为var是全局变量，会把之前的变量值给覆盖
// {
//     var a = 2;
// }
// console.log(a);
//使用let可以避免变量的污染
// {
//     let a = 2;
// }
// console.log(a)
// for(var i=0;i<10;i++){
//     console.log("循环1内："+i)
// }
// console.log("循环1外："+i)
// for(let i=0;i<10;i++){
//     console.log("循环2内："+i)
// }
// console.log("循环2外："+i)
//const是声明的常量，不能被let或var在改变值
// const a = "lulisong";
// var a = 2;
// console.log(a)