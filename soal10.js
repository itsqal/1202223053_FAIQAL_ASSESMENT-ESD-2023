/*
Soal nomor 8
Anaking Faiqal Lufi | 1202223053

Membuat function yang menghasilkan object pecahan uang kembalian dan jumlahnya

Input : total pembayaran : 10000
        total belanja : 7500

Output 
        { “500” : 1, “2000” : 1 } -> 2500
*/

const getChange = (totalPrice, totalPayment) => {
        let nominal = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
        let changes = {};

        let totalChange = totalPrice - totalPayment;
        
        for (let i = 0; i < nominal.length; i++) {
                if ((totalChange - nominal[i]) >= 0) {
                        totalChange -= nominal[i];
                        if (changes.hasOwnProperty(nominal[i])) {
                                changes[nominal[i]] += 1;
                        } else {
                                changes[nominal[i]] = 1;
                        }
                        i -= 1;
                }
        }

        console.log(changes)

}

// test case 

getChange(10000, 7500); // -> { '500': 1, '2000': 1 }
getChange(5000, 1100); // -> { '200': 2, '500': 1, '1000': 1, '2000': 1 }
getChange(178000, 90500); // -> { '500': 1, '2000': 1, '5000': 1, '10000': 1, '20000': 1, '50000': 1 }