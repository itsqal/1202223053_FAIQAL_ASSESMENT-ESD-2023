/*
Soal nomor 4
Anaking Faiqal Lufi | 1202223053

Membuat function yang memeriksa apakah data input yang diberikan terdapat duplikat

[20, 1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10, 12, 14, 16, 18,  20, 17, 19] -> true
*/

const isDuplicate = (arr) => {
    const set = new Set(arr);

    if (arr.length === set.size) {
        console.info(false);
    } else {
        console.info(true);
    }
}

// test case 

const array1 = [20, 1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10, 12, 14, 16, 18,  20, 17, 19];
const array2 = [9,5,6,4,3,8,7,1,2]

isDuplicate(array1); // -> true
isDuplicate(array2); // -> false