/*
Soal nomor 8
Anaking Faiqal Lufi | 1202223053

Membuat program yang memberikan rekomendasi pembelian produk berdasarkan minat pelanggan

Rina -> ["TV", "headphone", "gitar", "kamera"]
*/

const products = [
    {
        itemName : "TV",
        category : "elektronik",
        price : 1000
    },
    {
        itemName : "headphone",
        category : "elektronik",
        price : "200"
    },
    {
        itemName : "baju",
        category : "fashion",
        price : 50
    },
    {
        itemName : "gitar",
        category : "musik",
        price : 300
    },
    {
        itemName : "sepatu",
        category : "olahraga",
        price : 80
    },
    {
        itemName : "kamera",
        category : "elektronik",
        price : 600
    }
];

const customers = {
    customer1 : {
        name : "Rina",
        interests : ["elektronik", "musik"]
    },
    customer2 : {
        name : "Budi",
        interests : ["fashion", "musik"]
    },
    customer3 : {
        name : "Hartono",
        interests : ["olahraga", "elektronik"]
    }
};

const generateRecommendationProducts = (customer, customersData, productsData) => {

    let productsReccomendation = [];

    for (const key in customersData) {
        if (customersData[key].name.toLowerCase() === customer.toLowerCase()) {
            let interests = customersData[key].interests;

            let interestsArr = interests.map(Element => {
                return Element.toLowerCase();
            })

            for (let i = 0; i < productsData.length; i++) {
                for (let j = 0; j < interestsArr.length; j++){
                    if (productsData[i].category.toLowerCase() === interestsArr[j].toLowerCase()){
                        productsReccomendation.push(productsData[i].itemName);
                    }
                }
            }
        }
    }

    return productsReccomendation;
}

// test case 

const rina = generateRecommendationProducts("rina", customers, products);
const budi = generateRecommendationProducts('budi', customers, products);
const hartono = generateRecommendationProducts('hartono', customers, products);

console.info(rina); // -> [ 'TV', 'headphone', 'gitar', 'kamera' ]
console.info(budi); // -> [ 'baju', 'gitar' ]
console.info(hartono); // -> [ 'TV', 'headphone', 'sepatu', 'kamera' ]
