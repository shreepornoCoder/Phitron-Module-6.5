let num_array = [
  13, 6, 3, 15, 2, 7, 5, 20, 19, 1, 14, 4, 10, 8, 12, 16, 17, 11, 18, 9,
];

for (let i = 0; i < num_array.length - 1; i++) {
  for (let j = i + 1; j < num_array.length; j++) {
    if (num_array[i] > num_array[j]) {
      let tmp = num_array[i];
      num_array[i] = num_array[j];
      num_array[j] = tmp;
    }
  }
}
console.log("By For Loop: ", num_array);

num_array = [
  13, 6, 3, 15, 2, 7, 5, 20, 19, 1, 14, 4, 10, 8, 12, 16, 17, 11, 18, 9,
];

num_array.sort(function (a, b) {
  return a - b;
});
console.log("By Sort function: ", num_array);
