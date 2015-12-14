## for - in
若陣列中之值為 undefined 的話，該值將不會被迭代到。
```
var arr = [1, 2, , 3, 4, 5];	// arr[2] = undefined
for (var i in arr) {
	console.log(arr[i]);	// 1 2 3 4 5
}
```
也可用於物件。
```
var obj = {a: 5, b: 6, c: 7};
for (var i in obj) {
	console.log(obj[i]); // 5 6 7
}
```