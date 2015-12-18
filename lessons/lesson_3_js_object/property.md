## getOwnPropertyDescriptor
#### 格式：
> Object.getOwnPropertyDescriptor(object, propertyname);

#### 解說：
> 取得特性描述。

#### example 1
```
var o = {x: 1};
var returnValue = Object.getOwnPropertyDescriptor(o, 'x');
console.log(returnValue); // { value: 1, writable: true, enumerable: true, configurable: true }
console.log(returnValue.value, returnValue.writable, returnValue.enumerable, returnValue.configurable); // 1 true true true
```
---
## defineProperty
#### 格式：
> Object.defineProperty(object, propertyname, descriptor);

#### 解說：
> 設定物件特性。

#### example 1
```
var p = {};
Object.defineProperty(p, 'x', {value: 10, writable: false, enumerable: false, configurable: false});
returnValue = Object.getOwnPropertyDescriptor(p, 'x');
console.log(returnValue); // { value: 10, writable: false, enumerable: false, configurable: false }
```
---
## defineProperties
#### 格式：
> Object.defineProperties(object, descriptors);

#### 解說：
> 一次設定多個物件特性。

#### example 1
```
var q = Object.defineProperties({}, {
    x: {value: 1, writable: true, enumerable: true, configurable: true},
    y: {value: 2, writable: false, enumerable: false, configurable: false},
});
console.log(q); // { x: 1 }
returnValue = Object.getOwnPropertyDescriptor(q, 'x');
console.log(returnValue); // { value: 1, writable: true, enumerable: true, configurable: true }

returnValue = Object.getOwnPropertyDescriptor(q, 'y');
console.log(returnValue); // { value: 2, writable: false, enumerable: false, configurable: false }
```