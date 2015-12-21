## object as arguments
#### example 1
```
// 若一函式同時有很多參數要輸入的時候
function multiArg(name, height, weight, id, birth, sex, bloodType) {
}
// 會很難記得參數總共有幾個，還有參數的順序，不小心就會輸入錯誤。
// 且少輸入或多輸入參數都會造成錯誤發生。
multiArg('jack', 180, ??);

// 這時可考慮將參數先組成物件
var profile = {
    name: 'jack',
    height: 180,
    weight: 80,
    id: 'A123456789',
    birth: '2000/1/1',
    sex: 'male',
    bloodType: 'A'
}

// 將程式改寫成以物件輸入
function oneArg(profile) {
    var name = profile.name;
    var height = profile.height;
    ...
}

// 只要將物件輸入就好，可以避免多個參數所造成的錯誤。
oneArg(profile);

// 當然，一個函示會寫到需要這麼多參數的話，應該考慮是否將函式的行為再切得更細一點，函式的體積不宜太大。
```