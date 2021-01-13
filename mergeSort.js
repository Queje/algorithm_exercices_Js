class Sorting {
	constructor (result, comparisoncount = 0) {
		this.comparisoncount = comparisoncount;
		this.result = result
	};

    merge(left, right) {
        const arr = []
        // Break out of loop if any one of the array gets empty
        while (left.length != 0 && right.length != 0) {
            // Pick the smaller among the smallest element of left and right sub arrays 
            if (left[0] < right[0]) {
                arr.push(left.shift())  
            } else {
                arr.push(right.shift()) 
            }
            this.comparisoncount += 1
        };
        console.log([...arr,...left,...right])
        // Concatenating the leftover elements
				// (in case we didn't go through the entire left or right array)
				this.result = [...arr,...left,...right];
        return this.result
    };

    mergeSort(array) {
        const half = array.length / 2
        
        // Base case or terminating case
        if(array.length < 2){
        return array 
        }
        const left = array.splice(0, half)
        return this.merge(this.mergeSort(left),this.mergeSort(array))
    };
};

function Sort() {
  const fs = require('fs');
  const fileName = process.argv[2];
  const sort1 = new Sorting();

  // Asynchronous Method
  if (fileName == undefined) {console.error("please add a valid file name")}
  else {
    fs.readFile(fileName, 'utf8', (error, data) => {
      if (error) {
                  console.error(error.message);
                  return ;
      }
			console.log(data);
			const changetonumber = data.split(' ').map(Number);
      sort1.comparisoncount = 0
			sort1.mergeSort(changetonumber);
      console.log(`tri fusion (merge sort): comparaisons: ${sort1.comparisoncount} pour un résultat: ${sort1.result}`);
    })
	}
};

Sort();