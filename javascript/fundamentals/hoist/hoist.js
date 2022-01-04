// 1.
// console.log(hello);
// var hello = 'world';

// answer
// var hello = undefined
// console.log(hello);
// hell0 = "world";

// // 2. 
// var needle = 'haystack';
// test();
// function test() {
//     var needle = 'magnet';
//     console.log(needle);
// }

// answer
// var needle = 'haystack';
// function test() {

//     var needle = 'magnet';
//     console.log(needle)
// }
// test()

// 3.
// var brendan = 'super cool';
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// answer
// var brendan = 'super cool';
// function print() {
//     brendan = 'only okay';
//     console.log(brendan)
// }
// console.log(brendan)

// 4.
// var food = 'chicken';
// console.log(food);
// eat();
// function eat() {
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// // answer
// var food = 'chicken';
// console.log(food);
// function eat() {
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// eat();

// 5. 
// mean();
// console.log(food);
// var mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// answer
// mean is not a function

// 6.
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// // answer
// var genre = undefined
// console.log(genre);
// genre = 'disco';
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// rewind()
// console.log(genre);

// 7.
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// answer
// var dojo = undefined;
// dojo = "san jose";
// console.log(dojo);
// function learn() {
//     var dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo)
// }
// learn()
// console.log(dojo)

// 8
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students) {
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     }
//     else if (dojo.students <= 0) {
//         dojo.hiring = "closed for now";
//     }
//     return dojo;
// }

// answer
