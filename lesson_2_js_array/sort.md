
## sort
#### Array.prototype.sort()
#### Syntax:
> arr.sort([compareFunction])

#### Parameters:
> (option) compareFunction: 自訂排列方式。

#### Description:
> 1.未加入 compareFunction，原本陣列中的值會依順序排列，也會回傳一排列過的陣列。  
2.有加入 compareFunction，原本陣列中的值會依所需功能來排序，也會回傳一排列過的陣列。

#### Reference:
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

#### example 1
```
var arr = [3, 2, , 1, 5, 4];    // arr[2] = undefined
var returnValue = arr.sort();
console.log(returnValue, arr); // [ 1, 2, 3, 4, 5,  ] [ 1, 2, 3, 4, 5,  ]
```

#### example 2
```
arr = ['cake', 'apple', 'Egg', 'Banana'];
returnValue = arr.sort();
console.log(returnValue); // [ 'Banana', 'Egg', 'apple', 'cake' ] 先大寫，再小寫
```

#### example 3
```
arr = ['apple', 'Banana', 'cake', 'Egg'];
returnValue = arr.sort(function (s, t) {
    var a = s.toLowerCase();
    var b = t.toLowerCase();
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
});
console.log(returnValue); // [ 'apple', 'Banana', 'cake', 'Egg' ] 不分大小寫，照字母順序
```