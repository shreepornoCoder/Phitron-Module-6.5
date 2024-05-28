function grade_point_calculator(marks) {
  let grade = -1;
  if (marks >= 0 && marks <= 32) {
    grade = 0;
  } else if (marks >= 33 && marks <= 39) {
    grade = 1;
  } else if (marks >= 40 && marks <= 49) {
    grade = 2;
  } else if (marks >= 50 && marks <= 59) {
    grade = 3;
  } else if (marks >= 60 && marks <= 69) {
    grade = 3.5;
  } else if (marks >= 70 && marks <= 79) {
    grade = 4;
  } else if (marks >= 80 && marks <= 100) {
    grade = 5;
  }
  return grade;
}
function grade_calculator(marks) {
  let point = grade_point_calculator(marks);

  if (point == -1) {
    console.log("Invalid Marks");
  } else if (point == 0) {
    console.log(`You Got F | Your Grade Point is ${point}`);
  } else if (point == 1) {
    console.log(`You Got D | Your Grade Point is ${point}`);
  } else if (point == 2) {
    console.log(`You Got C | Your Grade Point is ${point}`);
  } else if (point == 3) {
    console.log(`You Got B | Your Grade Point is ${point}`);
  } else if (point == 3.5) {
    console.log(`You Got A- | Your Grade Point is ${point}`);
  } else if (point == 4) {
    console.log(`You Got A | Your Grade Point is ${point}`);
  } else if (point == 5) {
    console.log(`You Got A+ | Your Grade Point is ${point}`);
  }
}

const mark = 80;
grade_calculator(mark);
