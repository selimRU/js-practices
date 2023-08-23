// Problem #1
const multi = (num1, num2, num3) => num1 * num2 * num3;
console.log(multi(2, 3, 4));

// Problem #2
const sentence = `
i am a web devloper.
i love to code.
i love to eat biryani.
`
console.log(sentence);

// Problem #3
const add = (a, b = 12) => a + b;
console.log(add(5));

// Problem #4
let newArray = [];
const getEvenLength = (array) => {
    for (const friend of array)
        if (friend.length % 2 === 0) {
            newArray.push(friend);
        }
    return newArray;
}
const friends = ['mahebub', 'shezan', 'shojib', 'shohag', 'rasel', 'shaheen']
console.log(getEvenLength(friends));

// Problem #5
let sumOfSquire = 0;
const getAvarege = (elements) => {
    for (const element of elements) {
        const squire = Math.pow(element, 2);
        sumOfSquire = sumOfSquire + squire;
    }
    return avarege = sumOfSquire / elements.length;
}
const array = [3, 4, 5, 6, 7];
console.log(getAvarege(array));

// Problem #6
const maxNumber = (arr1, arr2) => {
    let newArray = [...arr1, ...arr2];
    return max = Math.max(...newArray)
}
const array1 = [3, 4, 5, 2];
const array2 = [4, 7, 9, 22];
console.log(maxNumber(array1, array2));
