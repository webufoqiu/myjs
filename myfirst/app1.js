// var a = 20;
// function fn() {
//     console.log(this.a);
// }
// fn();

// var a = 20;
// function fn() {
//     function foo() {
//         console.log(this.a);
//     }
//     foo();
// }
// fn();

// var a = 20;
// var obj = {
//     a: 10,
//     c: this.a + 20,
//     fn: function () {
//         return this.a;
//     }
// }

// console.log(obj.c);
// console.log(obj.fn());


// var a = 20;
// function foo () {
//     var a = 1;
//     var obj = {
//         a: 10,
//         c: this.a + 20,
//         fn: function () {
//             return this.a;
//         }
//     }
//     return obj.c;

// function delay() {
//     console.log('5000ms之后执行该方法.');
// }
// var timer = setTimeout(
//     delay, 5000);

// function _add(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c;
//         }
// //     }
// // }

// // console.log(_add(1));

// function add(a, b, c) {
//     return a + b + c;
// }

// // 简单实现，参数只能从右到左传递
// function createCurry(func, args) {

//     var arity = func.length;
//     var args = args || [];

//     return function() {
//         var _args = [].slice.call(arguments);
//         [].push.apply(_args, args);

//         // 如果参数个数小于最初的func.length，则递归调用，继续收集参数
//         if (_args.length < arity) {
//             return createCurry.call(this, func, _args);
//         }

//         // 参数收集完毕，则执行func
//         return func.apply(this, _args);
//     }
// }
// // createCurry(add,2);

// var myf1 = createCurry(add,1);
// console.log(myf1)



function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = [].slice.call(arguments);

    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var adder = function () {
        var _adder = function () {
            [].push.apply(_args, [].slice.call(arguments));
            return _adder;
        };

        // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
        _adder.toString = function () {
            return _args.reduce(function (a, b) {
                return a + b;
            });
        }

        return _adder;
    }
    return adder.apply(null, [].slice.call(arguments));
}

// 输出结果，可自由组合的参数
console.log(add(1, 2, 3, 4, 5));  // 15
console.log(add(1, 2, 3, 4)(5));  // 15
console.log(add(1)(2)(3)(4)(5));  // 15




