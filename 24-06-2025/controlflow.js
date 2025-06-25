let age = 18;
if(age < 18){
    console.log("You are a minor.");
}
    else if (age >= 18 && age< 65){
        console.log("You are in adult.");
    }
    else {
        console.log("You are a citizen");
    }
    console.log("\n");


    //switch
    let day = 6;
    switch(day){
        case 1:
            console.log("Sunday");
        break;
        case 2:
            console.log("Monday");
        break;
        case 3:
            console.log("Tuesday");
        break;
        case 4:
            console.log("Wednesday");
        break;
        case 5:
            console.log("Thursday");
        break;
        case 6:
            console.log("Friday");
        break;
        case 7:
            console.log("Saturday");
        break;
        default:
            console.log("Invalid day");
    }


    //while
    let j = 0;
    while(j < 5){
        console.log("while loop Iterator.",j);
        j++;
    }

    console.log("\n");