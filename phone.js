const phones =[   

{name: 'samsung', price: 45000, camera: 10, storage: 32},
{name: 'apple', price: 45000, camera: 10, storage: 32},
{name: 'walton', price: 4900, camera: 10, storage: 32},
{name: 'huawei', price: 500, camera: 10, storage: 32},
{name: 'nokia', price: 3000, camera: 10, storage: 32},
{name: 'mi', price: 4050, camera: 10, storage: 32},
{name: 'realme', price: 5000, camera: 10, storage: 32},
{name: 'oppo', price: 4500, camera: 10, storage: 32},

]

let cheapest = phones[0];
for (const phone of phones){
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
  
}
console.log(cheapest);