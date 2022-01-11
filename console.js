function returnEvenValues(array){
    let evenNums = [];
    let notEvenNums = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            evenNums.push(array[i]);

        } else {
            notEvenNums.push(array[i]);            
        }
    }
    console.log("Os números pares são: ", evenNums);
    console.log("Os números ímpares são: ", notEvenNums);
}

let array = [1,2,4,5,6,8];

returnEvenValues(array);
