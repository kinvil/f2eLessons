var numbers;

var Basket = function (n)  {
    this.appleNum = n || 100;
};

// 使用 Basket 建構式建立一個 apple 的變數，建構式參數填入 numbers
// 把問號換成可以執行的程式
var apple = new Basket(numbers);

// 直接在下行註解內將問號改成正確答案
// apple.appleNum = 100; 

var num = apple;

apple.appleNum = 20;
num.appleNum = 10;

// 直接在下行註解內將問號改成正確答案
// apple.appleNum = 10