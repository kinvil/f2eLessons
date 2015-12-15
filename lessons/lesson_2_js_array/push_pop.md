## push
#### Array.prototype.push()
#### Syntax:
> arr.push(element1, ..., elementN)

#### Parameters:
> elementN: 要插入的元素，可一次插入多個。

#### Description:
> 由陣列尾端插入元素，並回傳陣列尾端的值。

#### Reference:
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

#### example 1
```
var arr = [1, 2, 3];
var returnValue = arr.push(4);
console.log(returnValue, arr);	// 4 [ 1, 2, 3, 4 ]
```
#### example 2
```
returnValue = arr.push(5, 6, 7);
console.log(returnValue, arr);	// 7 [ 1, 2, 3, 4, 5, 6, 7 ]
```
---
## pop
#### Array.prototype.pop()
#### Syntax:
> arr.pop()

#### Description:
> 由陣列尾端移除元素，並回傳所移除的值。

#### Reference:
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
#### example 1
```
returnValue = arr.pop();
console.log(returnValue, arr);	// 7 [ 1, 2, 3, 4, 5, 6 ]
```