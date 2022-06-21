function ceasarCipher (string) {
    let newString = '';
    for ( i = 0 ; i < string.length ; i ++) {
        let char = string[i];
        for ( j = 0 ; j < lower.length ; j ++) {
            if ( char == lower[j]) {
                char = lower[(j + 1) % 26];
                break;
            }
            if ( char == upper[j]) {
                char = upper[(j + 1) % 26];
                break;
            }
        }
        newString += char;
    }
    return newString;
}

const lower = ['a', 'b', 'c', 'd', 'e',
                'f', 'g', 'h', 'i', 'j',
                'k', 'l', 'm', 'n', 'o',
                'p', 'q', 'r', 's', 't',
                'u', 'v', 'w', 'x', 'y', 'z'];

const upper = ['A', 'B', 'C', 'D', 'E',
                'F', 'G', 'H', 'I', 'J',
                'K', 'L', 'M', 'N', 'O',
                'P', 'Q', 'R', 'S', 'T',
                'U', 'V', 'W', 'X', 'Y', 'Z'];

module.exports = ceasarCipher;