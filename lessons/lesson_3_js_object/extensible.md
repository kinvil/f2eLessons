Object.isExtensible(o) ，確認物件是否可擴充。  
Object.preventExtensions(o) ，禁止物件擴充，禁止後無法變回可擴充。  
Object.seal(o) ，物件不可配置或刪除，但可改寫。密封後無法回復。  
Object.isSealed(o) ，確認物件是否密封。  
Object.freeze(o) ，物件唯獨。冷凍無法回復。  

```
var o = {x: 1};
console.log(Object.isExtensible(o)); // true
o.x = 2;
o.y = 2;
console.log(o.x, o.y); // 2 2

Object.preventExtensions(o);

console.log(Object.isExtensible(o)); // false
o.x = 3;
o.z = 3;
console.log(o.x, o.z); // 3 undefined

Object.seal(o);
console.log(Object.isSealed(o)); // true
o.x = 4;
console.log(o.x); // 4

Object.freeze(o);

o.x = 5;
console.log(o.x); // 4

// 與 Object.create 一起使用
var p = Object.seal(Object.create(Object.freeze({x: 1}), {y: {value: 2, writable: true}}));
console.log(p.x, p.y); // 1 2
p.x = 3;
p.y = 4;
console.log(p.x, p.y); // 1 4
```