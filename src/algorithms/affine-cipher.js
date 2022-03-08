let cipherText = "";
let decryptText = "";

function encryptAffine(alphabet, plainText, KEY_1, KEY_2) {
    cipherText = plainText.split("").map((element) => {
        let cipherIndex = (KEY_1 * alphabet.indexOf(element)) + KEY_2;
        cipherIndex %= 29;

        return alphabet[cipherIndex];
    }).join("");
    
    return cipherText;
}

function decryptAffine(alphabet, cipherText, KEY_1, KEY_2) {
    decryptText = cipherText.split("").map((element) => {
        let decryptIndex = (alphabet.indexOf(element) - KEY_2) * modInverse(KEY_1, 29);
        decryptIndex = Math.abs(decryptIndex % 29);
        
        return alphabet[decryptIndex];
    }).join("");

    return decryptText;
}

function modInverse(KEY_1, M) {
    for (let x = 1; x < M; x++) {
        if (((KEY_1 % M) * (x % M)) % M === 1) {
            return x;
        }
    }
}

function cipherAlphabet(alphabet, KEY_1, KEY_2) {
    return encryptAffine(alphabet, alphabet.join(""), KEY_1, KEY_2);
}

export { encryptAffine, decryptAffine, cipherAlphabet };