let cipherText  = "";
let decryptText  = "";

function encryptShift(alphabet, plainText, KEY) {
    cipherText = plainText.split("").map((element) => {
        let cipherIndex = alphabet.indexOf(element) + KEY;
        cipherIndex %= 29;

        return alphabet[cipherIndex];
    }).join("");

    return cipherText;
}

function decryptShift(alphabet, cipherText, KEY) {
    decryptText = cipherText.split("").map((element) => {
        let decryptIndex = alphabet.indexOf(element) - KEY;
        decryptIndex = Math.abs(decryptIndex % 29);
        
        return alphabet[decryptIndex];
    }).join("");

    return decryptText;
}

function cipherAlphabet(alphabet, KEY) {
    return encryptShift(alphabet, alphabet.join(""), KEY);
}

export { encryptShift, decryptShift, cipherAlphabet }