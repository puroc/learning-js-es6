var colors = ["red", "blue", "gree"];

//ES5遍历数组写法
// for (var i= 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

//ES6遍历数组写法
colors.forEach(function (color) {
    console.log(color);
});