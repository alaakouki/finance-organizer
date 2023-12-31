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

const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;

const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener( "submit", (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
}

);