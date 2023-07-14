"use strict";
// function getTotals(numbers:Array<number>){
//     return numbers.reduce((acc,curr)=> {return acc + curr});
// }
const user = {
    username: "John doe",
    password: "secret",
    login(username, password) {
        console.log('User login ', username, password);
    }
};
console.log(user.login('hello', 'zero'));
