/*
Soal nomor 1
Anaking Faiqal Lufi | 1202223053

Membuat function yang mengembalikan nilai terendah, tertinggi, dan rata-rata nilai dalam bentuk array

[4.5, 2.0, 1.5, 3.0, 2.5, 4.0, 5.0, 3.5, 2.0, 1.0] -> [1,5,2.9]
*/

const getRatings = (array) => {
    const min = Math.min.apply(Math, array);
    const max  = Math.max.apply(Math, array);
    
    const getMean = (array) => {
        let cummulative = 0;

        for (let i = 0; i < array.length; i++){
            
            cummulative += array[i];
            
            if (i === (array.length - 1)){
                let number = cummulative/array.length;
                return Number(number.toFixed(2));
            }
        }
    }

    return [min, max, getMean(array)];
}


// Test case 

array1 = [4.5, 2.0, 1.5, 3.0, 2.5, 4.0, 5.0, 3.5, 2.0, 1.0];
array2 = [5,4,2.5,5,3.6,1.1,3.6,4,4.2,1.5];

console.log(getRatings(array1)); // -> [1,5,2.9]
console.log(getRatings(array2)); // -> [ 1.1, 5, 3.45 ]