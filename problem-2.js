function  onlyCharacter( str ) {
    if(typeof str !== "string"){
        return "Invalid";
    };
    const allCharacters = str.replaceAll(" ","");
    const uppercase = allCharacters.toUpperCase(allCharacters);
    return uppercase;
}