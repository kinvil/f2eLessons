## 傳值與傳址
#### 原始型別，直接指定值
```
var a = 10
var b = a; // b = 10
b = 3;
console.log(a); // 10 ，未被 b 的改動影響
```
#### 物件型別，用參考(傳址)
```
var a = {x: 1};
var b = a; // b.x = 1
b.x = 3;
console.log(a.x); // 3 ，被 b 的改動影響
```