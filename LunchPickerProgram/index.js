let lunches = [];//create lunch array

//add lunch to the end pf the array
function addLunchToEnd(arr, lunchItem){
    arr.push(lunchItem);
    console.log(`${lunchItem} added to the end of the lunch menu.`);
    return arr;
}

//add lunch to the start of the array
function addLunchToStart(arr, lunchItem) { 
    arr.unshift(lunchItem);
    console.log(`${lunchItem} added to the start of the lunch menu.`);
    return arr;
 }

 //remove last lunch of the array list
 function removeLastLunch(arr) {
    if (arr.length === 0) {
        console.log("No lunches to remove.");
        return arr;
    }

    const removedLunch = arr.pop();
    console.log(`${removedLunch} removed from the end of the lunch menu.`);
    return arr;
 }

 //remove first array list 
 function removeFirstLunch(arr) {
    if (arr.length === 0) {
        console.log("No lunches to remove.");
        return arr;
    }

    const removedLunch = arr.shift();
    console.log(`${removedLunch}  removed from the start of the lunch menu.`);
    return arr;
 }

 //get random lunch
 function getRandomLunch(arr) {
    if(arr.length === 0){
        console.log("No lunches available.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * arr.length);
    console.log(`Randomly selected lunch: ${arr[randomIndex]}`);
 }

 //show lunch menu
 function showLunchMenu(arr) {
    if (arr.length === 0) {
        console.log("The menu is empty");
    } else {
        console.log(`Menu items: ${arr.join(",")}`);
    }
 }