const fs = require('fs');
const fileName = process.argv[2];

const bubbleSort = (string) => {
    let comparisoncount = 0
    let isSorted = false;
    const array = string.split(' ').map(Number);
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                isSorted = false;
                comparisoncount++
            }
        }
    }
    return [array , comparisoncount];
} ;

// Méthode asynchrone
fs.readFile(fileName, 'utf8', (error, data) => {
if (error) {
        console.error(error.message);
        return ;
}
console.log(data);
console.log(`le nombre de comparaisons: ${bubbleSort(data)[1]} pour un résultat: ${bubbleSort(data)[0]}`);
});