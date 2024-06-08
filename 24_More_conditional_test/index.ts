

//Equality and Inequality Test
console.log("Equality test with stings:" ,"Apple" === "Apple");

//Equality and Inequality Test
console.log("Inequality test with stings:" ,("Apple" as string) != "Orange");

//test using the lower case functon
console.log("lower case function test:" ,"HELLO".toLowerCase() === "hello");

// Numerical tests involving equality 
console.log("Equality test with numbers:" , 26 === 26);

// Numerical tests involving inequality
console.log("Inequality test with numbers:" , (26 as number) != 35);


//greater than 
console.log("greater tan test:" , 15 > 8);

//less than 
console.log("less than test:" , 8 < 15 );


//greater than and equal to
console.log("greater than and equal to test:" , 20 >= 20 );

//less than or equal to
console.log("less than oe equal to test:" , 5 <= 10);

//Tests using "and" operators
console.log("And operator test:" , 5===5 && 20 > 10);
   
//Tests using "or" operators
console.log("Or opreator test:" , 5===5 || false );

//Test whether an item is in a array
const fruits : string[] = ["Mango" ,"Orange" ,"Grapes"]
console.log('test "Mango" in the array:' , fruits.includes("Mango"));

//Test whether an item is not in a array
 console.log('test "Apple" is not in array:' , !fruits.includes("Apple"));
 


