function bookPurchase({ title, author, price }, disc, tax) {
    const discount = price * disc / 100;
    const pricedisc = price - discount;
    const amountTax = pricedisc * tax / 100;
    const priceAftTax = pricedisc + amountTax;

    console.log(`Title : ${title}`);
    console.log(`Author: ${author}`);
    console.log(`Price : ${price}`);
    console.log(`Discount percentage : ${disc} %`);
    console.log(`Price after discount : ${pricedisc}`);
    console.log(`Tax : ${tax} %`);
    console.log(`Price after tax : ${priceAftTax}`);

    return {
        title,
        author,
        price,
        discount,
        pricedisc,
        amountTax,
        priceAftTax
    };

}

let data = {
    title: 'Laskar Pelangi',
    author: 'Andrea Hirata',
    price: 100000,
}

const Pbook = []
Pbook.push(bookPurchase(data, 10, 5));