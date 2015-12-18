## delete
#### delete 只會刪除特性，不影響 prototype。刪除後會回傳布林值。
刪除成功或刪除的特性不存在皆會回傳 true ，欲刪除的物件不能刪除時回傳 false。

#### example 1
```
var o = {x: 1, y: 2}
console.log(o); // { x: 1, y: 2 }
delete o.x;
console.log(o); // { y: 2 }

console.log(delete o); // false
console.log(delete p); // true
```