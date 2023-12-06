//Exercise #2: At Least Five Function
// ตรวจว่ามีอย่างน้อย 5 คน เกิน 70 มั้ย
// ถ้าใช่ true ไม่ false
//

function atLeastFive(array, operation) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (operation(array[i])) {
      count++;
    }   
  }
  console.log(count)
  return count >= 5;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];
// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, function (Over70) {
  return Over70 > 70;
});
let scoreRoom2Result = atLeastFive(studentScoresRoom2, function (Over70) {
  return Over70 > 70;
});
let scoreRoom3Result = atLeastFive(studentScoresRoom3, function (Over70) {
  return Over70 > 70;
});

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
