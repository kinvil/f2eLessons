## for - each
#### Array.prototype.forEach()
#### Syntax:
> arr.forEach(callback[, thisArg])

#### Parameters:
> callback: 過濾所要回傳值的 function 。  
(optional)currentValue: function 中迭代陣列中的值。  
(optional)index: function 中迭代陣列中的指標。  
(optional)array: 呼叫 forEach 的陣列。  
(optional)thisArg

#### Description:
> 若陣列中之值為 undefined 的話，該值將不會被迭代到。

#### Reference:
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

#### example 1
```
var arr = [1, 2, , 3, 4, 5];	// arr[2] = undefined
arr.forEach(function (currentValue, index, array) {
	console.log(currentValue, index, array);
	// 依序列出以下結果
	// 1 0 [ 1, 2, , 3, 4, 5 ]
	// 2 1 [ 1, 2, , 3, 4, 5 ]
	// 3 3 [ 1, 2, , 3, 4, 5 ]
	// 4 4 [ 1, 2, , 3, 4, 5 ]
	// 5 5 [ 1, 2, , 3, 4, 5 ]
});
```