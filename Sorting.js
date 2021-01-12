class Sorting {
	constructor (file, comparisoncount = 0) {
		this.file = file;
		this.comparisoncount = comparisoncount;
	};

	bubbleSort(string) {
		this.comparisoncount = 0
		let isSorted = false;
		let array = string.split(' ').map(Number);
		while (!isSorted) {
			isSorted = true;
			for (let i = 0; i < array.length - 1; i++) {
				this.comparisoncount += 1;
				if (array[i] > array[i + 1]) {
					[array[i], array[i + 1]] = [array[i + 1], array[i]];
					isSorted = false;
				}
			}
		}
		return array;
	} ;

	bubbleSort2(string) {
        this.comparisoncount = 0
        let swapped = false
        const array = string.split(' ').map(Number);

        for (let i = 1; i < array.length; i++) {
			swapped = false
			
            for (let j = 0; j < array.length - i; j++) {
				this.comparisoncount += 1;
				if (array[j + 1] < array[j]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]]
					swapped = true
                }
            }
            if (!swapped) {
                return array
            }
        }

        return array
    };

	insertionSort(string) {
		let array = string.split(' ').map(Number);
		this.comparisoncount = 0
		let n = array.length;
			for (let i = 1; i < n; i++) {
				// Choosing the first element in our unsorted subarray
				let current = array[i];
				// The last element of our sorted subarray
				let j = i-1; 
				while ((j > -1) && (current < array[j])) {
					array[j+1] = array[j];
					j--;
					this.comparisoncount += 1
				}
				array[j+1] = current;
			}
		return array;
	};

	selectionSort(string) { 
		let inputArr = string.split(' ').map(Number);
		this.comparisoncount = 0
		let n = inputArr.length;
			
		for(let i = 0; i < n; i++) {
			// Finding the smallest number in the subarray
			let min = i;
			for(let j = i+1; j < n; j++){
				this.comparisoncount += 1
				if(inputArr[j] < inputArr[min]) {
					min=j; 
				}
			 }
			 if (min != i) {
				 // Swapping the elements
				 let tmp = inputArr[i]; 
				 inputArr[i] = inputArr[min];
				 inputArr[min] = tmp;      
			}
		}
		return inputArr;
	};

	quickSort(array) {
		if(array.length < 2) {
		  return array;
		}
	  
		const pivot = array[0];
		const lesserArray = [];
		const greaterArray = [];
	  
		for (var i = 1; i < array.length; i++) {
			this.comparisoncount += 1
			if ( array[i] > pivot ) {
				greaterArray.push(array[i]);
			} else {
				lesserArray.push(array[i]);
			}
		}
		return this.quickSort(lesserArray).concat(pivot, this.quickSort(greaterArray));
	}; 
};

function Sort () {
  	const fs = require('fs');
	const fileName = process.argv[2];
	const sort1 = new Sorting();

	// Méthode asynchrone
	if (fileName == undefined) {console.error("please add a valid file name")}
	else {
		fs.readFile(fileName, 'utf8', (error, data) => {
			if (error) {
					console.error(error.message);
					return ;
			}
			console.log(data);
			sort1.bubbleSort(data);
			console.log(`tri à bulle: comparaisons: ${sort1.comparisoncount} pour un résultat: ${sort1.bubbleSort(data)}`);
			sort1.bubbleSort2(data);
			console.log(`tri à bulle 2: comparaisons: ${sort1.comparisoncount} pour un résultat: ${sort1.bubbleSort2(data)}`);
			sort1.insertionSort(data);
			console.log(`tri à insertion: comparaisons: ${sort1.comparisoncount} pour un résultat: ${sort1.insertionSort(data)}`);
			sort1.selectionSort(data);
			console.log(`tri à selection: comparaisons: ${sort1.comparisoncount} pour un résultat: ${sort1.selectionSort(data)}`);
			const changetonumber = data.split(' ').map(Number);
			sort1.comparisoncount = 0
			sort1.quickSort(changetonumber);
			console.log(`tri rapide: comparaisons: ${sort1.comparisoncount} pour un résultat: ${sort1.quickSort(changetonumber)}`);
		});
	}
};

Sort();
