"use strict";

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
//解构赋值
// let [a,b,c] = [1,2,3]
// console.log(a);
// console.log(b);
// console.log(c)
//数组模式和赋值模式统一：等号左边和等号右边的形式要统一，如果不统一解构将失败
// let [a,[b,c],d]=[1,[2,3],4];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
//解构的默认值：解构赋值是允许你使用默认值的
// let [foo = true] =[];
// console.log(foo); //控制台打印出true
var _ref = ['100'],
    a = _ref[0],
    _ref$ = _ref[1],
    b = _ref$ === undefined ? "LuLisong" : _ref$;

console.log(a + b); //控制台显示“LuLisong100”
