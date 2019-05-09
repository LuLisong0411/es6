'use strict';

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
//字符串解构：字符串也可以解构，这是因为，此时字符串被转换成了一个类似数组的对象。在实战项目中解构Json数据格式还是很普遍的，有了ES6得帮助，提高了不少工作效率
// const [a,b,c,d,e,f,g,h]="LuLisong";
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);
//程序运行会报错，因为没有定义
// function a(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
//     console.log(e)
// }
// a(1,2,3);
//扩展运算符不会报错
// function a(...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
//     console.log(arg[4]);
//     console.log(arg[5]);
// }
// a(1,2,3);
//输出["www", "baidu", "com"]，["www", "baidu", "com", "百度"]
//因为这是对内存堆栈的引用，而不是真正的赋值。会造成业务逻辑的错误。
// let arr1=['www','baidu','com'];
// let arr2=arr1;
// console.log(arr2);
// arr2.push('百度');
// console.log(arr1);
//扩展运算符确保了arr1的值没有改变
// let arr1=['www','baidu','com'];
// let arr2=[...arr1];
// console.log(arr2);
// arr2.push('百度');
// console.log(arr2);
// console.log(arr1);
//rest运算符是知道已知元素个数扩展剩下的
// function a(a,...arg){
//     console.log(arg.length)
// }
// a(0,1,2,3,4,5,6,7,8,9);
//es5循环写法
// function a(a,...arg){
//     // console.log(arg.length);
//     for(let i=0;i<arg.length;i++){
//         console.log(arg[i])
//     }
// }
// a(0,1,2,3,4,5,6,7,8,9);
//es6写法,for…of的循环可以避免我们开拓内存空间，增加代码运行效率，建议工作中使用for…of循环。
// function a(a,...arg){
//     // console.log(arg.length);
//     for(let val of arg){
//         console.log(val)
//     }
// }
// a(0,1,2,3,4,5,6,7,8,9);

//字符串模板:字符串的拼接，运算，查找，复制
// let lulisong = "陆力松";
// let blog = "字符串模板"+lulisong+"es6";
// document.write(blog);
// let lulisong = "陆力松";
// let blog = `字符串模板${lulisong}es6`;
// document.write(blog);

// let a = 1;
// let b = 2;
// let result = `${a+b}`;
// document.write(result);

// let lulisong = "陆力松";
// let blog = `字符串模板${lulisong}es6`;
// document.write(blog.indexOf(lulisong));
// document.write(blog.includes(lulisong));
// document.write(blog.startsWith(lulisong));
// document.write(blog.endsWith(lulisong));
document.write('lulisong|'.repeat(34));
