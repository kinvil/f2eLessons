## 建構式
```
var F = function () {
	this.a = 'hello';
}
var a = new F(); // 用 new
console.log(a.a); // hello
var b = F(); // 未使用 new
console.log(b.a); // error
console.log(window.a); // hello ，function F 中的 this.a 被執行後設定給全域 window
```