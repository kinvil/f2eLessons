## inherit
#### inherit = Object.create
```
function inherit (parent) {
    if (parent == null) {
        throw TypeError(); // parrent 不可為 null
    }
    if (Object.create) {
        return Object.create(parent); // Object.create 是否有定義，有就使用 Object.create
    }
    var type = typeof parent; // 以下與 Object.create 功能相同
    if (type !== 'object' && type !== 'function') {
        throw TypeError();
    }
    function f() {}
    f.prototype = parent;
    return new f();
}
```

#### 繼承實作
```
var Parent = function () {
    this.x = 1;
}

Parent.prototype.hello = function () {
    return 'hello world';
}

var child = inherit(Parent);
var returnValue = child.prototype.hello();
console.log(returnValue);
```