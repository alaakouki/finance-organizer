// const anchor = document.querySelector("a");
// // console.log(anchor.href);
// // first solution to solve anchor.href error, is to put it in if statement
// if (anchor){
//     console.log(anchor.href);
// };
// // another solution to solve anchor.href error (null) is :
// // as we knew that there is anchor (a) there in html
// // the 2nd solution is to put at the end : !
// const anchorTwo = document.querySelector("a")!;
// console.log(anchorTwo.href);
// const form = document.querySelector("form")!;
var form = document.querySelector(".new-item-form");
console.log(form.children);
// inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
