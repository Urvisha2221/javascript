//primitive

//types:string,number,null,undefine,boolean,symbole,bigInt
const score=100;
const scorevalue=100.3;
const isLoggedIn=false;
const outsideTemp=null;

const id=Symbol("123");
const anotherId=Symbol("123");
console.log(id===anotherId)

//refreance(non-primitive);
//array,object,function

const fruits=["apple","banana","watermalon","mango"] //array
const myobj={
    name:'urvisha',
    age:'21',
}//object
const myfunction=function()
{
    console.log("hello world")

}
console.log( typeof null)