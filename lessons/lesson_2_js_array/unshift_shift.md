## unshift
#### Array.prototype.unshift()
#### Syntax:
> arr.unshift([element1[, ...[, elementN]]])

#### Parameters:
> elementN: 要插入的元素，可一次插入多個。

#### Description:
> 由陣列開頭插入元素，並回傳陣列開頭的值。

#### Reference:
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

#### example 1
```
var arr = [1, 2, 3];
var returnValue = arr.unshift(4);
console.log(returnValue, arr);  // 4 [ 4, 1, 2, 3 ]
```
#### example 2
```
returnValue = arr.unshift(5, 6, 7);
console.log(returnValue, arr);  // 7 [ 5, 6, 7, 4, 1, 2, 3 ]
```

## shift
#### Array.prototype.shift()
#### Syntax:
> arr.shift()

#### Description:
> 由陣列開頭移除元素，並回傳所移除的值。

#### Reference:
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

#### example 1
```
returnValue = arr.shift();
console.log(returnValue, arr);  // 5 [ 6, 7, 4, 1, 2, 3 ]
```