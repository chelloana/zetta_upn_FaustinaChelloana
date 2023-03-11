function bookPurchase() {

    var title = "Laskar Pelangi";
    var author = "Andrea Hirata";
    let price = 100000;
    let disc = 10;
    let tax = 10;

    const discount = price * disc / 100;
    const PriceDiscount = price - discount;
    const AmountTax = PriceDiscount * tax / 100;
    const PriceTax = price - AmountTax;
    const total = PriceDiscount + PriceTax;

    console.log('Title : ${title}');
    console.log('Author : ${author}');
    console.log('Price : Rp.${price}');
    console.log('Discount : ${discount}');
    console.log('Price after discount : Rp.${PriceDiscount}');
    console.log('Tax : ${AmountTax}%');
    console.log('Tax amount : Rp.${PriceTax}');
    console.log('Total : Rp.${total}`]');

}