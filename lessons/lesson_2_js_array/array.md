## Array
## 建立陣列的方法：

```
// 建立陣列有兩種方式：1. 建構式。2. 實字。  
var array_1 = new Array(1, 2, 3); // Array 是 js 的建構式。
var array_2 = [1, 2, 3]; // 實字。
```
兩種方法所建立出來的都是陣列，建議都用實字的方式，比較簡單明瞭。  
這裡是要說明 js 裡有內建 Array 這個建構式。
```
var Array = function () {
    this.map = function () {...};
    this.filter = function () {...};
    this.push = function () {...};
    this.pop = function () {...};
    ...
}
```
所以在建立出陣列的時候，可以直接呼叫這些功能來用。