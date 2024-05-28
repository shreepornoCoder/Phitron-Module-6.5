const num_array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50,
];

const new_arr = num_array.filter((pd) => pd % 3 == 0 && pd % 5 == 0);

console.log(new_arr);

// or

const result_arr = [];

for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    result_arr.push(i);
  }
}

console.log(result_arr);
