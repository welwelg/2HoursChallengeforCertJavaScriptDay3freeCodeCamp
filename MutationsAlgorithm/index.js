function mutation(arr) {
    const first = arr[0].toLowerCase();
    const second = arr[1].toLowerCase();

    for (let char of second) {
        if (!first.includes(char)) {
            return false;
        }
    }
    return true;
}
mutation(["hello", "Hello"]); // true
mutation(["hello", "hey"]);   // false
mutation(["Alien", "line"]);  // true

console.log(mutation(["hello", "Hello"])); 
console.log(mutation(["hello", "hey"]));