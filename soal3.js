/*
Soal nomor 3
Anaking Faiqal Lufi | 1202223053

Membuat logika sederhan program untuk menentukan pelaku pencuri kue berdasarkan case yang diberikan 

Urutan masuk : 

1. Ningguang
2. Hutao
3. Xiao
4. Childe 

action tiap tamu : 

1. Ningguang selalu memeriksa kue sebelum memberikan kado.
2. Hutao langsung memberikan kado tanpa memperhatikan kue.
3. Xiao memiliki kebiasaan memotret apa pun yang dia lihat pertama kali di ruangan.
4. Childe selalu membawa air mineral dan meletakkannya di meja sebelum memberikan kado.

yang paling mungkin mengambil kue : Childer karena dia merupakan orang terakhir yang masuk setelah kue difoto dalam keadaan utuh oleh tamu sebelumnya

*/

const guests = [
    {
        name : "Ningguang",
        action : "check cake"
    },
    {
        name : "Hutao",
        action : "give present"
    },
    {
        name : "Xiao",
        action : "took photo"
    },
    {
        name : "Childe",
        action : "place water"
    }

];
 
const getSuspects = (guestArray, cakeExistance) => {

    possible_suspects = []; 

    for (let i = 0; i < guestArray.length; i++) {
    
        possible_suspects.push(guests[i].name);
    
        if (guestArray[i].action === "took photo" && cakeExistance === true) {
            possible_suspects.length = 0;
        } else if (guests[i].action === "took photo" && cakeExistance === false) {
            break;
        }
    }

    return possible_suspects;
}

// test case

const suspects = getSuspects(guests, true);
console.info(suspects); 

// -> Jika kue masih ada ketika difoto (true), maka childe akan mejadi suspect
// -> Jika kue sudah tidak ada di foto (false), maka tamu-tamu sebelum Xiao yang menjadi suspects
