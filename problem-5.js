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

const marks = [];
const result = resultReport(marks);
console.log(result);