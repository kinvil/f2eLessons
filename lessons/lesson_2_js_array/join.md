## join
#### Array.prototype.join()
#### Syntax:
> str = arr.join([separator = ','])

#### Parameters:
> (optional)separator: 將值分隔用的字串。

#### Description:
> 1.未加入 separator ，會把陣列中每個值以逗號(",")隔開組成一個字串。  
2.有加入 separator ，會把陣列中每個值以 separator 隔開組成一個字串

#### Reference:
> https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/join

#### example 1
```
var arr = [1, 2, , 3, 4, 5];    // arr[2] = undefined
var returnValue = arr.join();
console.log(returnValue); // 1,2,,3,4,5
```

#### example 2
```
returnValue = arr.join('* ');
console.log(returnValue); // 1* 2* * 3* 4* 5
```