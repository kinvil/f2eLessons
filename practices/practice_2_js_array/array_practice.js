// 將以下 arr 過濾，回傳所有大於 40 的數值，
// 並將結果依小到大排列，最後將結果轉換成 string，以 '>' 區隔。
// 用 console.log()印出結果。
var arr = [18, 23, 35, 44, 65, 7, 90, 26, 53];

var returnValue = arr.filter(function(array) {
	return array > 40 ;
});


returnValue.sort();
console.log(returnValue.join('> '));