let cipherText  = "";
let decryptText  = "";

function shiftEncrypt(alphabet, plainText, KEY) {
    cipherText = plainText.split("").map((element) => {
        let cipherIndex = alphabet.indexOf(element) + KEY;
        cipherIndex %= 29;

        return alphabet[cipherIndex];
    }).join("");

    return cipherText;
}

function shiftDecrypt(alphabet, cipherText, KEY) {
    decryptText = cipherText.split("").map((element) => {
        let decryptIndex = alphabet.indexOf(element) - KEY;
        decryptIndex = Math.abs(decryptIndex % 29);
        
        return alphabet[decryptIndex];
    }).join("");

    return decryptText;
}

function cipherAlphabet(alphabet, KEY) {
    return shiftEncrypt(alphabet, alphabet.join(""), KEY);
}

export { shiftEncrypt, shiftDecrypt, cipherAlphabet }