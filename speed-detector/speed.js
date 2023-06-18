let speed = parseInt(window.prompt("Enter the speed of the car"))

if(speed <=70){
    console.log("OK")
}
else {
    const demeritPoints =Math.floor((speed-70)/5);
    //calculation of the speed of the car above 70(eg 80 - 70)
    if(demeritPoints > 12){
        console.log("License suspended")
    }
    else{
        console.log("Demerit points:", demeritPoints)
    }
}