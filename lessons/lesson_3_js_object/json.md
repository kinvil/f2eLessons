## JSON

#### JSON.stringify(o)
> 將 object 轉為 JSON。
#### JSON.parse(o)
> 將 JSON 轉為 object。

#### example 1
```
var o = {a: 1, b: {c: 2, d: 3}};
console.log(o.b.d); // 4

var returnValue = JSON.stringify(o);

console.log(returnValue, o); 
// {"a":1,"b":{"c":2,"d":3}} JSON
// { a: 1, b: { c: 2, d: 3}} object

returnValue = JSON.parse(returnValue);

console.log(returnValue, o); 
// { a: 1, b: { c: 2, d: 3 } } object
// { a: 1, b: { c: 2, d: 3 } } object
```