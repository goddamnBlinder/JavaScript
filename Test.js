function battting(player, distance) {
    if(distance <= 350){
        console.log(player," Hit the ball");
    }
    else if (distance <= 0){
        console.log(player, "Struck out!!!");
    }
    else {
        console.log(player," hit a home run");
    }
    
}

battting("Steve", 0);