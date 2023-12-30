/*
Soal nomor 8
Anaking Faiqal Lufi | 1202223053

Membuat program yang memberi tahu anak nakal berdasarkan jumlah kemunculan dalam array input

[  “Bagas”, “Dimas”, “Bagas”, “Bagas”, “Indra”, “Gilang”, “Gilang”, “Hana”, “Fajar”, “Fajar” ]
-> Bagas Nackal

[  “Bagas”, “Dimas”, “Fajar”, “Bagas”, “Indra”, “Gilang”, “Gilang”, “Bagas”, “Fajar”, “Fajar” ]
-> Bagas dan Fajar Nackal

[ “Aisyah” , “Bagas”, “Dewi”, ‘Dimas”, “Eka”, “Fajar”, “Gilang” , “Hana”, “Indra”, “Jihan” ] 
-> Semuanya anak baik
*/

const getName = (arrayNames) => {
    let nameObj = {};
    let highestValue = 0;
    let kidNames = [];
    let keyNames = [];

    for (let i = 0; i < arrayNames.length; i++){
        
        if (nameObj.hasOwnProperty(arrayNames[i])) {
            nameObj[arrayNames[i]] += 1;
        } else {
            nameObj[arrayNames[i]] = 1;
        }
    }

    keyNames = Object.keys(nameObj);

    for (const key in nameObj) {
        if (nameObj[key] > highestValue) {
            highestValue = nameObj[key];
        }
    }

    if (highestValue === 1 ) {
        console.info("Semuanya anak baik");
        return;
    }

    for (const name of keyNames) {
        if (nameObj[name] === highestValue) {
            kidNames.push(name);
        }
    }
    
    if (kidNames.length > 1) {
        let string = "";
        for (let i = 0; i < kidNames.length; i++){
            if (i === kidNames.length - 1) {
                string += `${kidNames[i]} Nackal`;
            } else {
                string += `${kidNames[i]} dan `;
            }
        }
        console.log(string)
    } else {
        console.log(`${kidNames[0]} Nackal`);
    }
}  

// test case 

names1 = ["Bagas", "Dimas", "Fajar", "Bagas", "Indra", "Gilang", "Gilang", "Bagas", "Fajar", "Fajar" ]; // -> Bagas dan Fajar Nackal
names2 = [  "Bagas", "Dimas", "Bagas", "Bagas", "Indra", "Gilang", "Gilang", "Hana", "Fajar", "Fajar" ]; // -> Bagas Nackal
names3 = [ "Aisyah" , "Bagas", "Dewi", "Dimas", "Eka", "Fajar", "Gilang" , "Hana", "Indra", "Jihan"]; // -> Semuanya anak baik

getName(names1);
getName(names2);
getName(names3);



