//Exploring Arrays with Loops(Using for loop  and for...of loop)
//create an empty array
let myArray:number[]=[];
//loop
for(let i=1;1<=10;i++){
    myArray.push();
}
console.log("Array aftre population:",myArray);
//use for loop to iterate through array element
for(let i=0;i<myArray.length;i++){
    console.log(`Index ${i}:Value ${myArray[i]}`);
}
for (const value of myArray){
console.log('Value: ${value}');
}