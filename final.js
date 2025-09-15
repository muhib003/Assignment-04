function totalFine( fare ) {
    if(typeof fare !== "number" || fare <= 0){
        return "Invalid";
    };
    const fine = fare + ((fare * 20) / 100) + 30;
    return fine;
}


function  onlyCharacter( str ) {
    if(typeof str !== "string"){
        return "Invalid";
    };
    const allCharacters = str.replaceAll(" ","");
    const uppercase = allCharacters.toUpperCase(allCharacters);
    return uppercase;
}


function  bestTeam( player1, player2 ) {
    if(typeof player1 && player2 !== "object"){
        return "Invalid";
    }

    const team1 = player1.foul + player1.cardY + player1.cardR;
    const team2 = player2.foul + player2.cardY + player2.cardR;

    if(team1 < team2){
        return player1.name;
    }
    else if(team1 === team2){
        return "Tie";
    }
    else{
        return player2.name
    }
}


function isSame(arr1, arr2) {
    if(arr1.length === arr2.length){
        for(let i = 0; i < arr1.length; i++){
            if(arr1[i] !== arr2[i]){
                return false;
            }
        }
        return true;
    }
}


function  resultReport( marks ) {
    if(!Array.isArray(marks)){
        return "Invalid";
    }
    const finalResult = {};
    const fail = [];
    const pass = [];
    let sum = 0;
    for(const mark of marks){
        sum += mark;
        const avg = Math.round((sum / marks.length));
        finalResult.finalScore = avg;
        if(mark > 40){
            pass.push(mark);
            finalResult.pass = pass.length;
            finalResult.fail = fail.length
        }else{
            fail.push(mark);
            finalResult.fail = fail.length;
            finalResult.pass = pass.length;
        }
    }
    return finalResult;
}