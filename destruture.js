// object destructure
const saihan = {
    age: 5,
    district: 'chuadanga',
    school: 'model',
    father: 'selim'
}
// destructuring
const { age, district, school, father } = saihan;

// normal method...>
// const age = saihan.age;
// const district = saihan.district;
// const school = saihan.school;

// console.log(age);
// console.log(age);
// console.log(age);
// console.log(school);
// console.log(school);
// console.log(school);

// array destructure....>
const numbers = [2, 3, 4];
const [first, second, third] = numbers;
console.log(first);
console.log(second);
console.log(third);