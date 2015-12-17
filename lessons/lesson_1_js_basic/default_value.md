## 變數預設值
#### 使用 ||
跟變數做 || ，若變數有值，則結果為該變數。  
若變數為 undefined ，則結果為後面的值。  
常用在設立初始值。  
```
var a; // undefined
var b = a || 10;
console.log(b); // 10
a = 3;
b = a || 10;
console.log(b); // 3
```

#### 使用 &&
跟變數做 && ，若變數有值，則結果為後面的值。  
若變數為 undefined ，則結果為 undefined。  
```
var c; // undefined
var d = c && 10;
console.log(d); // undefined
c = 3;
d = c && 10;
console.log(d); // 10
```