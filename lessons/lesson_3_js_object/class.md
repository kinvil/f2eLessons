## 查詢物件種類
```
function classof (object) {
	return Object.prototype.toString.call(object).slice(8,-1);
}
```
```
var returnValue = classof(null);
console.log(returnValue); // Null

var returnValue = classof(undefined);
console.log(returnValue); // Undefined

var returnValue = classof(1);
console.log(returnValue); // Number

var returnValue = classof('');
console.log(returnValue); //String

var returnValue = classof(true);
console.log(returnValue); // Boolean

var returnValue = classof({});
console.log(returnValue); // Object

var returnValue = classof([]);
console.log(returnValue); // Array

var returnValue = classof(/./);
console.log(returnValue); // Regexp

var returnValue = classof(new Date());
console.log(returnValue); // Date

function f () {}
var returnValue = classof(new f());
console.log(returnValue); // Object
```