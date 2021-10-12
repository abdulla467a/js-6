const products =[

    { name:'laptop', price: 5500},
    { name:'watch', price: 500},
    { name:'shirt', price: 1500},
    { name:'pant', price: 500},
    { name:'desktop', price: 55500},
    { name:'Mobile', price: 15500},
    { name:'digital-watch', price: 5500}
];
let totalPrice =0;
for( const product of products){
    totalPrice = totalPrice + product.price;
}
console.log(totalPrice)