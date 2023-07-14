
// function getTotals(numbers:Array<number>){
//     return numbers.reduce((acc,curr)=> {return acc + curr});
// }

// console.log(getTotals([1,2,3]))

//-------------- Creating user interface
// interface IUser {
//     fname:string;
//     lname: string;
//     age:number;
//     salary?:number
// }

// const user:IUser = {
//     fname: 'John',
//     lname : 'Doe',
//     age : 23,
//     salary : 2039202
// }

// console.log(user.salary)

// type Id = number;
// // type TId :number = 2992; //Can't do this

// let pId :Id = 22;


// type TUser = {
//     name : string,
//     age : number
// }

// function login <T> (user){
//     return user;
// }

// type TPro = {
//     name:string,
//     destination:string
// }

// const user:TUser | TPro={
//     name: "Hello",
//     age : 292,
//     destination : "Goa"
// }

// console.log('check login user is ',login(user));

// interface ITransaction{
//     accountNumber : number;
//     bankName : string | number
// }

// interface IBank{
//     name : string;
//     phone : number;
//     transaction : ITransaction[]
// }

// const bank :IBank = {
//     name : "Nikhil",
//     phone : 23022023,
//     transaction : [{accountNumber:200202202,bankName:"union"},{accountNumber:202202,bankName:"Panjab National"}]

// }

// console.log(typeof bank, bank);


//------------ Use two interfaces
interface IBook{
    title : string;
    description?:string
    author : string
}

// interface IEBook{ //Here is repeation of the code what we can do
//     title : string;
//     description?:string
//     author : string
//     link : string
// }

// interface IEBook extends IBook {
//     link : string
// }

// //Also can merge two interfaces
// interface IEBook {
//     inAudio:Boolean
// } //But you didn't do in types

// type Hello = {
//     greet : string
// }

// type Hello = { isExist:boolean } //Can't duplicate or merge

// const hello:Hello = { greet : "Hello and welcome"}

// const book:IEBook = {
//     title : "Anderson",
//     description : "Ferguson andersion is a guy who is better is nothing",
//     author : "Anderson",
//     link : "https://book.com/anderson/anderson",
//     inAudio : true
// }

// console.log('check book details ',typeof book,book);


//--------------------- Sanitization--------------------------X
// type Sanitization = string; //Can do
// interface hello = number ; //Can't do 


//-------------- Unions-----------------------------X
// type ID = number | string;
// // const pid:ID = 29292 || "wouewjwoe" || true ; //ONly give the compile time error not development time
// const pid:ID = 29292 || "wouewjwoe" ; //ONly give the compile time error not development time


// console.log('check type of pid ',typeof pid, pid)


//-------------------------- Narrowing--------------------------------X
// function getFirst(X:string | number[]) {
//     console.log(X.slice(0,3));
// }

// getFirst("hello" || [1,2,3,4,5]);


//------------------- Generics :most important in typescript-------------------------X

// function logString(arg:string){
//     console.log(arg);
// }
// logString('Email not found');

// function logNumber(arg:number){
//     console.log(arg);
// }
// logNumber(404);

// //-------- A function which handle both or may be all types of errors
// function fetchLog(arg){ //Here is the argument is boolena so that may be handle all types but we use Typescript, so not mean of 'any' type of argument

//     console.log(arg);
// }
// fetchLog('Email not found')
// fetchLog(404);
// fetchLog(true);

//----------- Real world problem
interface HasAge{
    age :number
}

// function getOldAge(age:HasAge[]):HasAge {
//     return age.sort((a,b)=> {return b.age - a.age})[0];
// // }
// function getOldAge <T extends HasAge> (age:T[]):T {
//     return age.sort((a,b)=> {return b.age - a.age})[0];
// }

// const ages = [{age:323},{age:232},{age:90}];
// // console.log('check oldest age is ',getOldAge(ages));

// interface Player{
//     name: string;
//     age: number;
//     team:string
// }

// const player:Player[] = [{name:"john" ,age:23,team:"india"},{name:"nik",age:34,team:"korea"}]

// // console.log("check the total age of players ",getOldAge(player));

// // const person = getOldAge(player) as Player; Its is assert I mean we presuriesed to convert it into player
// // person.


//---------------------- Url fetch data example
// const  fetchData = async(path:string) =>{
//         const res = await fetch(`http://localhost:8000/${path}`)
//         return res.json();
// }

// interface IPosts{
//     name : string
// }
// const  fetchContent= async<ResultType>(path:string) : Promise<ResultType> =>{
//         const res = await fetch(`http://localhost:8000/${path}`)
//         return res.json();
// }


// (async()=>{
//     const posts = await  fetchContent<IPosts[]>('posts')
//     console.log('check posts ',posts[0].name);
// })

// const person = getOldAge(player);
// person.name ; // Now you get all the all properties of the player 

//---------------- Duck / Structur Typing ----------------------X

interface ICredentials{
    username:string;
    password:string;
    login(username:string,password:string) : void;
}



const user:ICredentials = {
    username: "John doe",
    password: "secret",
    login(username,password){
        console.log('User login ',username,password)
    }
}

console.log(user.login('hello','zero'));