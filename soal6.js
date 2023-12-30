/*
Soal nomor 6
Anaking Faiqal Lufi | 1202223053

Membuat program untuk menghitung harga akhir berdasarkan ketentuan yang diberikan 

pajak di setiap item makanan 5% dan minuman 3%. Serta dia menerapkan pajak untuk setiap transaksi 15%.
*/

const menus = [
    {
        itemName : "Ayam Goreng Krispi",
        category : "Makanan",
        price : 15000
    },
    {
        itemName : "Ayam Puk Puk (Bukan di geprek)",
        category : "Makanan",
        price : 13000
    },
    {
        itemName : "Ayam Bakar",
        category : "Makanan",
        price : 20000
    },
    {
        itemName : "Es teh",
        category : "Minuman",
        price : 5000
    },
    {
        itemName : "Es jeruk",
        category : "Minuman",
        price : 7000
    }
];
const rehanWhangsap_orders = ["ayam bakar", "ayam bakar", "es teh"];
const ambaRoni_orders = ["ayam puk puk", "es teh", "es teh", "es teh"];
const faizNgawi_orders = ["all each"];

const calculatePrice = (menus, orders, buyer) => {

    let prices = [];

    for (let i = 0; i < menus.length; i++) {
        for (const order of orders) {
            let regex = new RegExp(order, "gi")

            if(regex.test(menus[i].itemName)) {
                if (menus[i].category === "Makanan") {
                    prices.push(menus[i].price * (105/100));
                    console.info(`Harga item ${order} : Rp.${menus[i].price * (1.05)}\nInclude food tax 5%\n`)
                } else if (menus[i].category === "Minuman"){
                    prices.push(menus[i].price * (103/100));
                    console.info(`Harga item ${order} : Rp.${menus[i].price * (1.03)}\nInclude drink tax 3%\n`)
                } 
            } else if (regex.test("all each")) {
                if (menus[i].category === "Makanan") {
                    prices.push(menus[i].price * (105/100));
                    console.info(`Harga item ${menus[i].itemName} : Rp.${menus[i].price * (1.05)}\nInclude food tax 5%\n`)
                } else if (menus[i].category === "Minuman"){
                    prices.push(menus[i].price * (103/100));
                    console.info(`Harga item ${menus[i].itemName} : Rp.${menus[i].price * (1.03)}\nInclude drink tax 3%\n`)
                } 
            }
        }
    }

    let totalPrice = 0;
    for (const price of prices) {
        totalPrice += price;
    }

    console.info(`Total harga pesanan ${buyer} : Rp. ${totalPrice * (1.15)}\nInlcude total tax 15%\n`)

}

// test case 
calculatePrice(menus, rehanWhangsap_orders, "Rehan Whangsap");
calculatePrice(menus, ambaRoni_orders, "Amba Roni");
calculatePrice(menus, faizNgawi_orders, "Faiz Ngawi");