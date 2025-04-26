// Tip: Any JS code is valid in TypeScript
var grades = [8, 10, 8.5, 9, 9.3];
function calculateAvg(studentGrades, totalGrades) {
    var sum = 0;
    for (var i = 0; i < totalGrades; i++) {
        sum = sum + studentGrades[i];
    }
    return sum / totalGrades;
}
var result = calculateAvg(grades, grades.length);
console.log(result); // 8.96
