let encryptText = "";
let decryptText = "";
let currentDimension;

function encryptPermutationCipher(alphabet, plainText, cipherKEY) {
    const splittedArray = [];
    const cipherArray = [];
    const CHUNK = cipherKEY.length;
    let randomIndex = Math.floor(Math.random() * alphabet.length);

    for (let i = 0, j = plainText.length; i < j; i += CHUNK) {
        currentDimension = plainText.split("").slice(i, i + CHUNK);

        while (currentDimension.length !== CHUNK) {
            currentDimension.push(alphabet[randomIndex]);
        }

        splittedArray.push(currentDimension);
    }

    splittedArray.forEach((row, dimension) => {
        cipherArray[dimension] = [];

        row.forEach((element, index) => {
            cipherArray[dimension].push(row[cipherKEY[index] - 1]);
        })
    })

    encryptText = [].concat(...cipherArray).join("");

    return encryptText;
}

function decryptPermutationCipher(alphabet, cipherText, cipherKEY) {
    const splittedArray = [];
    const plainArray = [];
    const CHUNK = cipherKEY.length;
    let randomIndex = Math.floor(Math.random() * alphabet.length);
    
    for (let i = 0, j = cipherText.length; i < j; i += CHUNK) {
        currentDimension = cipherText.split("").slice(i, i + CHUNK);

        while (currentDimension.length !== CHUNK) {
            currentDimension.push(alphabet[randomIndex]);
        }

        splittedArray.push(currentDimension);
    }

    splittedArray.forEach((row, dimension) => {
        plainArray[dimension] = [];

        row.forEach((element, index) => {
            plainArray[dimension][cipherKEY[index]] = row[index];
        })
    })

    decryptText = [].concat(...plainArray).join("");

    return decryptText;
}

export { encryptPermutationCipher, decryptPermutationCipher }


/*

let encryptText = "";
let decryptText = "";
let currentDimension;

function encryptPermutationCipher(alphabet, plainText, cipherKEY) {
    const splittedArray = [];
    const cipherArray = [];
    const CHUNK = cipherKEY.length;
    let randomIndex = Math.floor(Math.random() * alphabet.length);

    for (let i = 0, j = plainText.length; i < j; i += CHUNK) {
        currentDimension = plainText.split("").slice(i, i + CHUNK);

        while (currentDimension.length !== CHUNK) {
            currentDimension.push(alphabet[randomIndex]);
        }

        splittedArray.push(currentDimension);
    }

    splittedArray.map((row, dimension) => {
        cipherArray[dimension] = new Array();

        row.map((element, index) => {
            cipherArray[dimension].push(row[cipherKEY[index] - 1]);
        })
    })

    encryptText = [].concat(...cipherArray).join("");

    return encryptText;
}

function decryptPermutationCipher(alphabet, cipherText, cipherKEY) {
    const splittedArray = [];
    const plainArray = [];
    const CHUNK = cipherKEY.length;
    let randomIndex = Math.floor(Math.random() * alphabet.length);
    
    for (let i = 0, j = cipherText.length; i < j; i += CHUNK) {
        currentDimension = cipherText.split("").slice(i, i + CHUNK);

        while (currentDimension.length != CHUNK) {
            currentDimension.push(alphabet[randomIndex]);
        }

        splittedArray.push(currentDimension);
    }

    splittedArray.map((row, dimension) => {
        plainArray[dimension] = new Array();

        row.map((element, index) => {
            plainArray[dimension][cipherKEY[index]] = row[index];
        })
    })

    decryptText = [].concat(...plainArray).join("");

    return decryptText;
}

export { encryptPermutationCipher, decryptPermutationCipher }
*/