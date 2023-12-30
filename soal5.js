/*
Soal nomor 5
Anaking Faiqal Lufi | 1202223053

Membuat function yang menghasilkan jumlah kombinasi string user input dengan ketentuan :
tidak ada pemisah, harus gabung semua (tanpa underscore, titik, dll.), 
username dalam lowercase, dan maksimal panjang usernamenya adalah 6.

return -> array kombinasi string dengan maks string length 6
return -> jumlah kombinasi username
*/

const getCombinations = (username) => {
    let combinations = [];
    let tempCombination = [];
    let usernameLower = username.toLowerCase();
    const regex = /[^a-z0-9]/g;

    if (regex.test(usernameLower)) {
        usernameLower = usernameLower.replace(regex, "");
    }

    for (let i = 0; i < usernameLower.length; i++) {
        tempCombination.push(usernameLower[i]);
        for(let j = i+1; j < usernameLower.length; j++) {

            if (tempCombination.length === 6) {
                tempCombination.length = 0;
                tempCombination.push(usernameLower[i]);
            }

            tempCombination.push(usernameLower[j]);
            combinations.push(tempCombination.join(""));

            if (j === usernameLower.length-1) {
                tempCombination.length = 0;
            }
        }
    }

    console.info(combinations);
    console.info(`Jumlah kombinasi username kamu : ${combinations.length}`);
}

//test case 

getCombinations("Naip Lovyu"); 

/*
[
  'na',     'nai',    'naip',  'naipl',
  'naiplo', 'nv',     'nvy',   'nvyu',
  'ai',     'aip',    'aipl',  'aiplo',
  'aiplov', 'ay',     'ayu',   'ip',
  'ipl',    'iplo',   'iplov', 'iplovy',
  'iu',     'pl',     'plo',   'plov',
  'plovy',  'plovyu', 'lo',    'lov',
  'lovy',   'lovyu',  'ov',    'ovy',
  'ovyu',   'vy',     'vyu',   'yu'
]

Jumlah kombinasi username kamu : 36
*/