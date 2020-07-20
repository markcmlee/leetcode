// https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/

const busyStudent = (startTime, endTime, queryTime) => {
  let counter = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) counter++;
  }
  return counter;
};

//filter solution
const busyStudent2 = (startTime, endTime, queryTime) => {
  return startTime.filter((t, i) => queryTime >= t && queryTime <= endTime[i])
    .length;
};

//reduce solution
const busyStudent3 = (startTime, endTime, queryTime) => {
  return startTime.reduce(
    (prev, t, i) =>
      queryTime >= t && queryTime <= endTime[i] ? prev + 1 : prev,
    0
  );
};

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4)); //1
console.log(busyStudent([4], [4], 4)); //1
console.log(busyStudent([4], [4], 5)); //0
console.log(busyStudent([1, 1, 1, 1], [1, 3, 2, 4], 7)); //0
console.log(
  busyStudent(
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [10, 10, 10, 10, 10, 10, 10, 10, 10],
    5
  )
); //5
