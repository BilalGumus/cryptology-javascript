import { traversalSIBLC, reverseTraversalSIBLC } from "./other/spiral-traversal";

function encryptRouteCipher(plainText, alphabet, KEY) {
    let ROW = KEY;
    let COLUMN = Math.ceil(plainText.length / KEY);
    const cipherArray = [];
    let randomIndex = Math.floor(Math.random() * alphabet.length);

    for (let i = 0, j = ROW * COLUMN; i < j; i += COLUMN) {
        let currentDimension = plainText.split("").slice(i, i + COLUMN);
        
        while (currentDimension.length !== COLUMN) {
            currentDimension.push(alphabet[randomIndex]);
        }
        
        cipherArray.push(currentDimension);
    }

    return traversalSIBLC(cipherArray).join("");
}

function decryptRouteCipher(cipherText, alphabet, KEY) {
    let ROW = KEY;
    let COLUMN = Math.ceil(cipherText.length / KEY);
    const matrixArray = [];
    let randomIndex = Math.floor(Math.random() * alphabet.length);
    
    for (let i = 0, j = ROW * COLUMN; i < j; i += COLUMN) {
        let currentDimension = cipherText.split("").slice(i, i + COLUMN);
        
        while (currentDimension.length !== COLUMN) {
            currentDimension.push(alphabet[randomIndex]);
        }
        
        matrixArray.push(currentDimension);
    }

    return reverseTraversalSIBLC(matrixArray).join("");
}

export { encryptRouteCipher, decryptRouteCipher }