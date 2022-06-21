function reverseString(string) {
    let newString = '';
    for(let i=string.length-1; i>-1; i--){
        let char = string.substr(i, 1)
        newString = newString + char;
    }
    return newString;
}

module.exports = reverseString;