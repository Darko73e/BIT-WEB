var students = ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"];
var grades = [50, 39, 63, 72, 99, 51, 83, 59];

function calculateGrade(points) {
    var grade = 0;

    if (points > 90 && points <= 100) {
        grade = 10;
    } else if (points > 80) {
        grade = 9;
    } else if (points > 70) {
        grade = 8;
    } else if (points > 60) {
        grade = 7;
    } else if (points > 50) {
        grade = 6;
    }

    return grade;
}

function printGrades(studentsArray, gradesArray) {
    var output = "";

    for (var i = 0; i < studentsArray.length; i++) {
        var name = studentsArray[i];
        var points = gradesArray[i];
        var grade = calculateGrade(points);

        if (grade !== 0) {
            output += name + " acquired " + points + " points and earned " + grade + ".\n";
        } else {
            output += name + " acquired " + points + " points and failed to complete the exam.\n";
        }

    }

    return output;
}


console.log(printGrades(students, grades));


// var str = "start";
// str += "dodatak";

// console.log(str);
