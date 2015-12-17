## reduce
#### Array.prototype.reduce()
#### Syntax:
> arr.reduce(callback[, initialValue])

#### Parameters:
> callback: 過濾所要回傳值的 function 。  
previousValue: 會依是否加入 initialValue 變動，參考 Description 。  
currentValue: 會依是否加入 initialValue 變動，參考 Description 。  
(optional) index: currentValue 的 index 值。
(optional) array: 呼叫 reduce 的陣列。  
(optional) initialValue: 自訂 previousValue 初始值。

#### Description:
> 1.未加入 initialValue，function 中之 previousValue 為陣列中第一個值， currentValue 為陣列中的第二個值。  
2.有加入 initialValue，function 中之 previousValue 為 initialValue，currentValue 為陣列中第一個值。  
之後 function 中之 previousValue 為上一次操作的回傳值，currentValue 為陣列中的下一個值。

#### Reference:
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

#### example 1
```
var arr = [1, 2, , 3, 4, 5];    // arr[2] = undefined
var returnValue = arr.reduce(function (previousValue, currentValue, index, array) {
    console.log(previousValue, currentValue, index, array);
    // 1 2 1 [ 1, 2, , 3, 4, 5 ]
    // 3 3 3 [ 1, 2, , 3, 4, 5 ]
    // 6 4 4 [ 1, 2, , 3, 4, 5 ]
    // 10 5 5 [ 1, 2, , 3, 4, 5 ]
    return previousValue + currentValue;
});
console.log(returnValue);   // 15
```

#### example 2
```
returnValue = arr.reduce(function (previousValue, currentValue, index, array) {
    console.log(previousValue, currentValue, index, array);
    // 10 1 0 [ 1, 2, , 3, 4, 5 ]
    // 11 2 1 [ 1, 2, , 3, 4, 5 ]
    // 13 3 3 [ 1, 2, , 3, 4, 5 ]
    // 16 4 4 [ 1, 2, , 3, 4, 5 ]
    // 20 5 5 [ 1, 2, , 3, 4, 5 ]
    return previousValue + currentValue;
}, 10);
console.log(returnValue);   // 25
```
---
## reduceRight
#### Array.prototype.reduceRight()
#### Syntax:
> arr.reduceRight(callback[, initialValue])

#### Parameters:
> callback: 過濾所要回傳值的 function 。  
previousValue: 會依是否加入 initialValue 變動，參考 Description 。  
currentValue: 會依是否加入 initialValue 變動，參考 Description 。  
(optional) index: currentValue 的 index 值。  
(optional) array: 呼叫 reduceRight 的陣列。  
(optional) initialValue: 自訂 previousValue 初始值。

#### Description:
> 同 reduce ，只是從陣列尾端開始抓取值作為初始值。

#### Reference:
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight

#### example 1
```
returnValue = arr.reduceRight(function (previousValue, currentValue, index, array) {
    console.log(previousValue, currentValue, index, array);
    // 5 4 4 [ 1, 2, , 3, 4, 5 ]
    // 9 3 3 [ 1, 2, , 3, 4, 5 ]
    // 12 2 1 [ 1, 2, , 3, 4, 5 ]
    // 14 1 0 [ 1, 2, , 3, 4, 5 ]
    return previousValue + currentValue;
});
console.log(returnValue);   // 15
```

#### example 2
```
returnValue = arr.reduceRight(function (previousValue, currentValue, index, array) {
    console.log(previousValue, currentValue, index, array);
    // 10 5 5 [ 1, 2, , 3, 4, 5 ]
    // 15 4 4 [ 1, 2, , 3, 4, 5 ]
    // 19 3 3 [ 1, 2, , 3, 4, 5 ]
    // 22 2 1 [ 1, 2, , 3, 4, 5 ]
    // 24 1 0 [ 1, 2, , 3, 4, 5 ]
    return previousValue + currentValue;
}, 10);
console.log(returnValue);   // 25
```