var f_name = 'Danny';
f_name.toLowerCase();
console.log(f_name); // Danny - the string method didn't mutate the string
var arr = [1, 3, 5, 7];
arr.pop();
console.log(arr); // [1, 3, 5] - the array method mutated the array
f_name = 'Anna'; // Assignment gives the primitive a new (not a mutated) value
console.log(f_name);
