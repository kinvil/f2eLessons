## indexOf
#### Array.prototype.indexOf()
#### Syntax:
> arr.indexOf(searchElement[, fromIndex = 0])

#### Parameters:
> searchElement: 從頭開始所找到第一個元素的 index。  
(optional) fromIndex: 從第幾個 index 開始往後找。

#### Description:
> 從頭開始找，回傳第一個找到的值的 index 。

#### Reference:
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

#### example 1
```
var arr = [1, 2, 3, 2, 3, 2, 1];
var returnValue = arr.indexOf(2);
console.log(returnValue); // 1
```

#### example 2
```
returnValue = arr.indexOf(2, 2);
console.log(returnValue); // 3
```

#### example 3
```
returnValue = arr.indexOf(2, 4);
console.log(returnValue); // 5
```
---
## lastIndexOf
#### Array.prototype.lastIndexOf()
#### Syntax:
> arr.lastIndexOf(searchElement[, fromIndex = arr.length - 1])

#### Parameters:
> searchElement: 從尾端開始所找到第一個元素的 index。  
(optional) fromIndex: 從第幾個 index 開始往前找。

#### Description:
> 從尾端開始找，回傳第一個找到的值的 index 。

#### Reference:
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf

#### example 1
```
returnValue = arr.lastIndexOf(2);
console.log(returnValue); // 5
```

#### example 2
```
returnValue = arr.lastIndexOf(2, 2);
console.log(returnValue); // 1
```

#### example 3
```
returnValue = arr.lastIndexOf(2, 4);
console.log(returnValue); // 3
```