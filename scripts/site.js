/*
window.alert('Hello JavaScript from site.js!!');





const myDiv = document.getElementById("div1");
console.log(myDiv);  //null
myDiv.innerHTML = "<h2>Hello World!!</h2>";
*/

//console.log("xyz\bxyz");

//函式宣告式
// function minNumber(num1, num2){
//    let _min = num1;
//    if(num1 > num2){
//     _min = num2;
//    }
//    return _min;
// }
//函式表達式
// const minNumber = function(num1, num2){
//        let _min = num1;
//    if(num1 > num2){
//     _min = num2;
//    }
//    return _min;
// }

// //箭頭函式
// const minNumber = (num1, num2) => {
//     let _min = num1;
// if(num1 > num2){
//  _min = num2;
// }
// return _min;
// }

// //箭頭函式
// const minNumber = (num1, num2) => {
//     let _min = num1;
// if(num1 > num2){
//  _min = num2;
// }
// return _min;
// }

// //箭頭函式
// const minNumber = (num1, num2) => {
//     // ? :
//   return  num1 > num2 ? num2 : num1;
// }

//箭頭函式
const minNumber = (num1, num2) => num1 > num2 ? num2 : num1;


// const BCount = str => {
//   let count = 0;
//   for(let c of str){
//     if( c === "B"){
//       count++;
//     }
//   }
//   return count;
// }

// const BCount = str => {
//   const re = new RegExp("B","g");
//   return str.match(re).length  
// }

const BCount = str => str.match(/B/g).length;



const charCount = (str, c) => {
  let count = 0;
  for (let _c of str) {
    if (_c === c) {
      count++;
    }
  }
  return count;
}


//計算年紀
const ageCalc = birthday => {
  let birth = new Date(birthday);
  let today = new Date();

  //一年有多少毫秒 => 365.2425(天) * 24(小時) * 60(分) * 60(秒) * 1000(毫秒)
  //日期相減會得到毫秒 / 一年毫秒數 => 就會得到幾歲
  const yearMilliseconds = (today - birth) / (365.2425 * 24 * 60 * 60 * 1000);
  //Number.EPSILON
  //Number.EPSILON 是 JavaScript 能够表示的最小精度
  //這表示誤差如果小於這個值，就可以認為已經没有意義了，即不存在誤差了。
  //一般用在浮點數的計算，因為在JavaScript中浮點數的計算是不精確的

  //Math.round() 四捨五入取整數，如果要取得小數點一位數就要先乘上10，再做四捨五入，然後再除回10
  let age = Math.round((yearMilliseconds + Number.EPSILON) * 10) / 10;

  return age;
}
