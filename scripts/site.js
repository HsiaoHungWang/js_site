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
    for(let _c of str){
      if( _c === c){
        count++;
      }
    }
    return count;
  }
