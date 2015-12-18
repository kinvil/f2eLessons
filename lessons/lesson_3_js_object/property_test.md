## hasOwnProperty( p )
> 檢查所輸入之特性是否為自有特性，是則回傳 true ，否則回傳 false 。

#### example 1
```
var o = {x: 1};
console.log('x' in o, 'y' in o, 'toString' in o); // true false true
console.log(o.x !== undefined, o.y !== undefined, o.toString !== undefined); // true false true ，也可用跟 undefined 比較來判斷
console.log(o.hasOwnProperty('x'), o.hasOwnProperty('y'), o.hasOwnProperty('toString')); // true false false ，toString 是繼承特性
```

#### example 2
```
var p = Object.create(o);
p.y = 2;
console.log(p.hasOwnProperty('x'), p.hasOwnProperty('y'), p.hasOwnProperty('toString')); // false true false
```
---
## propertyIsEnumerable( p )
> 同 hasOwnProperty，但會更進一步檢查 enumerable 屬性，是自有特性且 enumerable 為 true 才回傳 true，否則回傳 false。

#### example 1
```
console.log(o.propertyIsEnumerable('x'), o.propertyIsEnumerable('y'), o.propertyIsEnumerable('toString')); // true false false ，toString 不可列舉
for (p in o) {
    console.log(p); // x ，toString 不會被印出
}
```