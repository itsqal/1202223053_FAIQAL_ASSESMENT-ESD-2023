/*
Soal nomor 2
Anaking Faiqal Lufi | 1202223053

Membuat function yang menghasilkan output "eureeka!" jika input yang diberikan merupakan palindrome. Jika tidak,
maka output akan menghasilkan nilai string "suka blyat"

Note : Incase sensitive

Angsa -> suka blyat
KataK -> eureeka!
kasur empuk -> suka blyat
*/

const isPalindrome = (input) => {
    let inputLower = input.toLowerCase();

    const regex = /[^a-z0-9\s]/g;

    if (regex.test(inputLower)) {
        inputLower = inputLower.replace(regex, "");
    }

    const arrayInput = inputLower.split("");
    const arrayReversed = arrayInput.reverse();
    const reversedInput = arrayReversed.join("");
   
    for (let i = 0; i < inputLower.length; i++) {
        if (input.toLowerCase().charAt(i) !== reversedInput.charAt(i)) {
            console.info("suka blyat");
            return;
        }
    }

    console.info("eureeka!");
}

// test case

isPalindrome("Angsa"); // -> suka blyat

isPalindrome("KataK"); // -> eureeka!

isPalindrome("kasur empuk"); // -> suka blyat

isPalindrome("Aku Suka Kamu"); // -> suka blyat

isPalindrome("Ibu Ratna antar ubi."); // -> eureeka!