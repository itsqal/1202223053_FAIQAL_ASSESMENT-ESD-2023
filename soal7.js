/*
Soal nomor 7
Anaking Faiqal Lufi | 1202223053

Membuat program decription message dengan logika alphabet urutan 5 kedepan

"abc" -> "fgh"
"esd" -> "jxi"
*/

const decryptMessage = (encryptedMessage) => {
    const alphabets = [];
    const regex = /[^a-z]/;
    const encryptedMessageArray = encryptedMessage.split("");
    let decryptedMessage = [];
    
    for (let j = 97; j <= 122; j++) {
        alphabets.push(String.fromCharCode(j));
      }

    for (let i = 0; i < encryptedMessageArray.length; i++) {

        if (regex.test(encryptedMessageArray[i])) {
            decryptedMessage.push(encryptedMessageArray[i]);
            continue;
        } else {
            for (let j = 0; j < alphabets.length; j++) {
                if(encryptedMessageArray[i] === alphabets[j]) {
                    if ((j-5) < 0) {
                        let index = j-5;
                        decryptedMessage.push(alphabets[alphabets.length + (index)]);
                    } 
                    decryptedMessage.push(alphabets[j-5]);
                }
            }
        }
    }

    return decryptedMessage.join("")
}

// test case

console.info(decryptMessage("xfqfr bfmdz"));
console.info(decryptMessage("gjxtp lzj rfz ifkyfw jxi snm"));
console.info(decryptMessage("gwt, gjxtp qz rfz rfpfs in bfwlty lfp?"));
console.info(decryptMessage("fpz xfdfsl pfrz, rfz lfp ofin ufhfwpz"));
console.info(decryptMessage("dfsl pnwnr xynhpjw otrtp pz pnhp ifwn lwzu"));

/*
OUTPUT 

salam wahyu
besok gue mau daftar esd nih
bro, besok lu mau makan di wargot gak?
aku sayang kamu, mau gak jadi pacarku
yang kirim sticker jomok ku kick dari grup

*/



