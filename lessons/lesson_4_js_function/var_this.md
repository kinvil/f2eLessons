#### example 1
```
// var 是區域變數，不是特性，用呼叫特性方法不能呼叫到此值。
// this 是特性，所定義的值沒辦法在巢狀函式中使用。
function foo() {
    var a = 1;
    this.b = 2;
    (function () {
            console.log(a, this.b); // 1 undefined
    }());
}

var h = new f();
console.log(h.a, h.b); // undefined 2
```

#### example 2
```
// 若想要在巢狀函式中使用 this ，要把 this 存成變數。
function bar() {
    var x = 10;
    this.y = 20;
    var self = this; // 把 this 存成變數
    (function () {
            console.log(x, self.y); // 10 20
    }());
}
var k = new bar();
console.log(k.x, k.y); // undefined 20
```