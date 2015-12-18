#### 特性存取錯誤
```
var o = {}; // o.x 的特性不存在
console.log(o.x); // undefined
// 在 o.x 不存在的情況下再往下呼叫特性。
// console.log(o.x.y); // error
```

#### 避免方式 (1)
```
var y;

if (o) {
    if(o.x) {
        y = o.x.y; // 這樣就算沒有 y 特性也會傳回 undefined 而不會造成 error
    }
}
console.log(y); // undefined
```

#### 避免方式 (2)
```
y = o && o.x && o.x.y;
console.log(y); // undefined

// 若 o.x.y 存在的情況下
o.x = {x: 1};
o.x.y = 2;
y = o && o.x && o.x.y;
console.log(y); // 2
```