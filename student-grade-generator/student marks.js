//creating a variable
let marks = window.prompt ("Enter student's marks");

//using switch instead of if but they do the same function
// also console logs the grade of the marks input
switch(true){
    case marks > 79:
        console.log("A")
        break;
    case marks >= 60:
        console.log("B")
        break;
    case marks >= 49:
        console.log("C")
        break;
    case marks >= 40:
        console.log("D")    
        break;
    case marks < 40:
        console.log("E")
        break;
    default:
        console.log(marks, "is not a mark!")
}
