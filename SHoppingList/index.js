console.log("Grocery shopping list");

const shoppingList = [];
shoppingList.push("Apples"); //Add an array Apples

console.log("It will be nice to have some fruit to eat.");

function getShoppingListMsg(arr) {  
    return "Current Shopping List: " + arr;
}
console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Grapes");//add array in the ending list array Grapes
console.log(getShoppingListMsg(shoppingList));

console.log("It looks like we need to get some cooking oil.");

shoppingList.unshift("Vegetable Oil");//add an array at the beginning array list
console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList));

console.log("This looks like too much junk food.");
shoppingList.pop(); //remove last ending array

console.log(getShoppingListMsg(shoppingList));

console.log("It might be nice to get a dessert.");
shoppingList.unshift("Chocolate Cake");//add the beginning of the array list
console.log(getShoppingListMsg(shoppingList));

console.log("On second thought, maybe we should be more health conscious.");
shoppingList.shift();//remove the beginning of the list of array
shoppingList[0] = "Canola Oil"; // update the begening of the array using index[0,1,2,3.....]
console.log(getShoppingListMsg(shoppingList));