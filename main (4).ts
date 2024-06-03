// Exploring Object with for..in Loop (typescript)
let myObject={
    item1:"First item",
    item2:"Second item",
    item3:"Third item",
};
//Use for in loop ti iterate over properties
for(const property in myObject){
    if (myObject.hasOwnProperty(property)){
console.log(`${property}: ${myObject[property]}`)    }
}