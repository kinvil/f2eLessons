## global and local variable
#### example
```
var apple = 'apple'; // global，未包在 function 內用 var 宣告。
egg = 'egg'; // global，未用 var 宣告直接給予值。

function banana() {
    var cat = 'cat'; // local，在 function 中用 var 宣告。
    dog = 'dog';  // global，未用 var 宣告直接給予值。
};

banana(); // 上面 banana 只是宣告，在這執行一次後，裡面的值才會帶給變數。

console.log(apple); // 印出 apple。
console.log(dog); // 印出 dog。
console.log(cat); // error 在 function 外看不到 function 內所宣告的變數。
```