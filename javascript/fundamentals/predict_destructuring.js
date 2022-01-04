// 1.
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [randomCar] = cars
// const [, otherRandomCar] = cars
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)

// answer
// 'Tesla'
// 'Mercedes'

// 2.
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name);
// console.log(otherName);

// answer
// error when logging name
// elon for otherName

// 3. 
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;
// //Predict the output
// console.log(password);
// console.log(hashedPassword);

// answer
// 12345
// underfined

// 4.
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [, first] = numbers;
// const [, , , second] = numbers;
// const [, , , , , , , , third] = numbers;
// //Predict the output
// console.log(first == second);
// console.log(first == third);

// answer
// 2=5 false
// 2 = 2 true

// 5.
// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;
// const { secondKey } = lastTest;
// const [, willThisWork] = secondKey;
// //Predict the output
// console.log(key);
// console.log(secondKey);
// console.log(secondKey[0]);
// console.log(willThisWork);

// answer
// value
// [1, 5, 1, 8, 3, 3]
// 1
// 5


// const animals = ["dog", "cat", "fish"];
// const [first, second] = animals;
// console.log(first);
// console.log(second)
// console.log(first, second)







