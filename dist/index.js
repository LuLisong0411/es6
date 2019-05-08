"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
// let [a,b="LuLisong"]=['100']
// console.log(a+b); //控制台显示“100LuLisong”
//undefined和null的区别：undefined相当于什么都没有，b是默认值;null相当于有值，但值为null。所以b并没有取默认值，而是解构成了null。
// let [a,b="LuLisong"]=['黑龙江大学',undefined];
// console.log(a+b); //控制台显示“黑龙江大学LuLisong”
// let [a,b="LuLisong"]=['黑龙江大学',null];
// console.log(a+b); //控制台显示“黑龙江大学null”
//对象的解构赋值
//对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
// let {foo,bar} = {foo:'LuLisong',bar:'黑龙江大学'};
// console.log(foo+bar); //控制台打印出了“LuLisong黑龙江大学”
// 如果在解构之前就定义了变量，这时候你再解构会出现问题(圆括号的使用可以解决)
//错误示范
// let foo;
// {foo} ={foo:'LuLisong'};
// console.log(foo);
//正确示范
// let foo;
// ({foo} ={foo:'LuLisong'});
// console.log(foo); //控制台输出LuLisong
//字符串解构：字符串也可以解构，这是因为，此时字符串被转换成了一个类似数组的对象。
var _LuLisong = "LuLisong",
    _LuLisong2 = _slicedToArray(_LuLisong, 8),
    a = _LuLisong2[0],
    b = _LuLisong2[1],
    c = _LuLisong2[2],
    d = _LuLisong2[3],
    e = _LuLisong2[4],
    f = _LuLisong2[5],
    g = _LuLisong2[6],
    h = _LuLisong2[7];

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
