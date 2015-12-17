## filter
#### Array.prototype.filter()
#### Syntax:
> arr.filter(callback[, thisArg])

#### Parameters:
> callback: 過濾所要回傳值的 function 。
(optional) element: function 中迭代陣列中的值。  
(optional) index: function 中迭代陣列中的指標。  
(optional) array: 呼叫 filter 的陣列。  
(optional)thisArg

#### Description:
> 陣列中值為 undefined 不會被迭代，回傳 callback function 為 true 的結果，每次 return 會記錄結果，最後一次返回一個陣列。

#### Reference:
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

#### example 1
```
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var returnValue = arr.filter(function (element, index, array) {
    console.log(element, index, array);
    // 1 0 [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    // 2 1 [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    // 3 2 [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    // 4 3 [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    // 5 4 [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    // 6 5 [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    // 7 6 [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    // 8 7 [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    // 9 8 [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    // 10 9 [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    return element % 2 === 0;
});
console.log(returnValue); // [ 2, 4, 6, 8, 10 ]
```