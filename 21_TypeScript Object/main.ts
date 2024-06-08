// Write a program that creates Objects containing these items.

//datatype of person object
interface person {
    name : string
    age : number
    nationality : string
    student : boolean

}
//person object
let person : person = {
    name : "ayesha",
    age : 20,
    nationality : "pakistani",
    student : true
}
// print person
console.log(person);

//datatype of mobile object
interface mobile {
    brand : string
    color : string
    memory : any
    bettery : any


}

//mobile object

let mobile : mobile = {
   brand : "iphone",
   color : "black",
   memory : '62gb' ,
   bettery : '6hours'
}
//print mobile
console.log(mobile);


