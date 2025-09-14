function  onlyCharacter( str ) {
    if(typeof str !== "string"){
        return "Invalid";
    };
    const allCharacters = str.replaceAll(" ","");
    const uppercase = allCharacters.toUpperCase(allCharacters);
    return uppercase;
}

const str = true;
const result = onlyCharacter(str);
console.log(result);