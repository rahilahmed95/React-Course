
// const person1 = {
//     name : "Virat"
// };

// const person2 = {
//     name: "Dhoni"
// };

// function x(){
//     console.log(this);
// }

// x();                    // window
// x.call(this);           // window
// x.call(person1);        // Virat
// x.call(person2);        // Dhoni





// Jismein this hai woh aayega agar .call use hua hai toh woh this ki value ko us hisaab se change kar dega 

// const person1 = {
//     name : "Virat",
//     print: function(){
//         console.log(this);
//     }
// };

// const person2 = {
//     name: "Dhoni"
// };

// person1.print();                 // person1
// person1.print.call();            // window
// person1.print.call(this);        // window
// person1.print.call(person2);     // person2







// let obj = {
//     firstName: "Virat",
//     printName1: function() {
//         console.log(this);
//     },
//     printName2 : () => {
//         console.log(this);
//     } 
// }

// obj.printName1();
// obj.printName2();
// obj.printName1.call();




















