



// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(element) {
//         this.items.push(element);
//     }

//     pop() {
//         if (this.isEmpty()) {
//             return "Stack is empty";
//         }
//         return this.items.pop();
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     size() {
//         return this.items.length;
//     }
// }

// function reverse(arr) {
//     let stack = new Stack();

//     for (let i = 0; i < arr.length; i++) {
//         stack.push(arr[i]);
//     }

//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = stack.pop();
//     }

//     return arr;
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(" array: ", arr.join(' '));

// let reversed = reverse(arr);
// console.log("Reversed array: ", reversed.join(' '));


// q3)------------------------------------------------------------------------
// let sum = function(arr){
//     if(arr.length < 1){
//         return 0;
//     }else{
//         return arr.pop() + sum(arr);
//     }
    
    
// }
// console.log(sum([2,8,6,5,3,5,10]));
// console.log(sum([7,9]));
// console.log(sum([2,4]));

