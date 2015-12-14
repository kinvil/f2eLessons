## map
#### Array.prototype.map()
#### Syntax:
> arr.map(callback[, thisArg])

#### Parameters:
> callback: 操作所要回傳陣列的 function 。  
(optional) currentValue: function 中迭代陣列中的值。  
(optional) index: function 中迭代陣列中的指標。  
(optional) array: 呼叫 map 的陣列。  
(optional) thisArg

#### Description:
> 會將陣列中每個值作處理，在 function 中的 return 先記錄下來，等全部掃完後會將每次 return 的值組成一個陣列回傳。

#### Reference:
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

#### example 1
```
var arr = [1, 2, , 3, 4, 5];	// arr[2] = undefined
var returnValue = arr.map(function (currentValue, index, array) {
	return currentValue;
});
console.log(returnValue); // [ 1, 2, , 3, 4, 5 ]
```