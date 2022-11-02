function fisherYatesShuffle(array) {
    const mixedArray = array.slice();
    let randomIndex;

    mixedArray.reduceRight((accumulator, currentValue, currentIndex) => {
        randomIndex = Math.floor(Math.random() * currentIndex);
        return [mixedArray[currentIndex], mixedArray[randomIndex]] = [mixedArray[randomIndex], mixedArray[currentIndex]];
    }, null);

    return mixedArray;
}

export { fisherYatesShuffle }