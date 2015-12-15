## slice
#### Array.prototype.slice()
#### Syntax:
> arr.slice([begin[, end]])

#### Parameters:
> begin: 從第幾個 index 開始。  
(optional) end: 到第幾個 index 結束，不包含此 index 值。

#### Description:
> 1.未加入 end ，則會回傳 index begin 到陣列末端中間所有的值。  
2.有加入 end ，則會將 index begin 到 index end 中間的陣列回傳，不包含 end 。

#### Reference:
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

#### example 1
```
var arr = [1, 2, , 3, 4, 5];    // arr[2] = undefined
var returnValue = arr.slice(2);
console.log(returnValue); // [ , 3, 4, 5 ]
```

#### example 2
```
returnValue = arr.slice(1, 4);
console.log(returnValue); // [ 2, , 3 ]
```