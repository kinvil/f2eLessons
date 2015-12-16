#### example 1
```
var scope = 'global scope'; // 全域變數
function checkscope_1() {
	var scope = 'local scope';
	function f() {
		return scope;
	}
	return f(); // 回傳 f 執行後的回傳值。
}
console.log(checkscope_1()); // local scope
```
#### example 2
```
function checkscope_2() {
	var scope = 'local scope';
	function f() {
		return scope;
	}
	return f; // 回傳 f 這個 function
}
console.log(checkscope_2()()); // local scope ，這個 function 在外面才執行，但還是會連結到內部的 local scoope
```

#### example 3
```
function addPrivateProperty(o, name, predicate) {
	var value;
	o['get' + name] = function () {
		return value;
	};
	o['set' + name] = function (v) {
		if (predicate && !predicate(v)) {
			// throw Error('set' + name + ': invalid value ' + v);
			console.log('type error');
		}
		else {
			value = v;
		}
	};
}
var o = {};
addPrivateProperty(o, 'Name', function (x) {
	return typeof x == 'string';
});
o.setName('Frank');
console.log(o.getName()); // Frank
o.setName(0); // type error
```