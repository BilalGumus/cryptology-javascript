let cipherText  = "";
let decryptText  = "";

function mixedAlphabetEncrypt(alphabet, mixedAlphabet, plainText) {
    cipherText = plainText.split("").map((element) => {
        let plainIndex = alphabet.indexOf(element);
        return mixedAlphabet[plainIndex];
    }).join("");

    return cipherText;
}

function mixedAlphabetDecrypt(alphabet, mixedAlphabet, cipherText) {
    decryptText = cipherText.split("").map((element) => {
        let cipherIndex = mixedAlphabet.indexOf(element);
        return alphabet[cipherIndex];
    }).join("");

    return decryptText;
}

export { mixedAlphabetEncrypt, mixedAlphabetDecrypt };