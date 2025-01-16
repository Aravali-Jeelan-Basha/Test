// 1. calculateDiscount
function calculateDiscount(price, discount = 10) {
    const discountAmount = (price * discount) / 100;
    return price - discountAmount;
}

// 2. mergeArrays
function mergeArrays(array1, array2) {
    return [...array1, ...array2];
}

// 3. logArguments
function logArguments(...args) {
    console.log(args);
}

// 4. createMessage
function createMessage(defaultMessage, ...names) {
    return names.map(name => `${defaultMessage}, ${name}!`);
}

// 5. sum with spread operator
function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}
const numbers = [10, 20, 30];
console.log(sum(...numbers));

// 6. createUserProfile
function createUserProfile(username, age = 25, country = "Unknown") {
    return { username, age, country };
}

// Example Usage:
// calculateDiscount
console.log(calculateDiscount(100)); // 90 (default discount 10%)
console.log(calculateDiscount(200));

console.log(createUserProfile("Jeelan",22,"Britain"))
console.log(mergeArrays([1,2,3,4],[12,23,34,45,43]));
