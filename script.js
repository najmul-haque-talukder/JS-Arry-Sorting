
//! -SORT BY PRICE
//? Step 01 : Sort by price Ascending

let products = [
    {id : 1, name : 'Samsung S22 Ultra', price : 1700 , createAt : new Date('2023-05-27') },
    {id : 2, name : 'Google Pixel 7', price : 2000 , createAt : new Date('2022-03-01') },
    {id : 3, name : 'i Phone 12 Pro Max', price : 2500 , createAt : new Date('2021-07-09') },
    {id : 4, name : 'Tesla Updated', price : 2200 , createAt : new Date('2024-11-17') },

];


let productSortByPriceAsc = products.sort((a, b) =>{
    return a.price - b.price;
});
console.log(productSortByPriceAsc);
console.log("\n\n");




//! -SORT BY PRICE
//? Step 02 : Sort by price Descending


let products2 = [
    {id : 1, name : 'Samsung S22 Ultra', price : 1700 , createAt : new Date('2023-05-27') },
    {id : 2, name : 'Google Pixel 7', price : 2000 , createAt : new Date('2022-03-01') },
    {id : 3, name : 'i Phone 12 Pro Max', price : 2500 , createAt : new Date('2021-07-09') },
    {id : 4, name : 'Tesla Updated', price : 2200 , createAt : new Date('2024-11-17') },

]
let productSortByPriceDesc = products2.sort((a, b) =>{
return b.price - a.price;
});
console.log(productSortByPriceDesc);
console.log("\n\n");




//! -SORT BY NAME
//? Step 01 : Sort by name Ascending
let products3 = [
    {id : 1, name : 'Samsung S22 Ultra', price : 1700 , createAt : new Date('2023-05-27') },
    {id : 2, name : 'Google Pixel 7', price : 2000 , createAt : new Date('2022-03-01') },
    {id : 3, name : 'i Phone 12 Pro Max', price : 2500 , createAt : new Date('2021-07-09') },
    {id : 4, name : 'Tesla Updated', price : 2200 , createAt : new Date('2024-11-17') },

]

let productsSortByNameAsc = products3.sort((a, b) =>{
    return a.name.localeCompare(b.name)
})
console.log(productsSortByNameAsc);
console.log("\n\n");




//! -SORT BY NAME
//? Step 02 : Sort by name Descending

let products4 = [
    {id : 1, name : 'Samsung S22 Ultra', price : 1700 , createAt : new Date('2023-05-27') },
    {id : 2, name : 'Google Pixel 7', price : 2000 , createAt : new Date('2022-03-01') },
    {id : 3, name : 'i Phone 12 Pro Max', price : 2500 , createAt : new Date('2021-07-09') },
    {id : 4, name : 'Tesla Updated', price : 2200 , createAt : new Date('2024-11-17') },

]

let productsSortByNameDes = products4.sort((a, b) =>{
    return b.name.localeCompare(a.name)
})
console.log(productsSortByNameDes);
console.log("\n\n");







//! -SORT BY DATE
//? Step 02 : Sort by date Ascending

let products5 = [
    {id : 1, name : 'Samsung S22 Ultra', price : 1700 , createAt : new Date('2023-05-27') },
    {id : 2, name : 'Google Pixel 7', price : 2000 , createAt : new Date('2022-03-01') },
    {id : 3, name : 'i Phone 12 Pro Max', price : 2500 , createAt : new Date('2021-07-09') },
    {id : 4, name : 'Tesla Updated', price : 2200 , createAt : new Date('2024-11-17') },

];

let productSortByDateAsc = products5.sort((a, b) =>{
    return a.createAt - b.createAt;
});
console.log(productSortByDateAsc);
console.log("\n\n");







//! -SORT BY DATE
//? Step 02 : Sort by date Ascending

let products6 = [
    {id : 1, name : 'Samsung S22 Ultra', price : 1700 , createAt : new Date('2023-05-27') },
    {id : 2, name : 'Google Pixel 7', price : 2000 , createAt : new Date('2022-03-01') },
    {id : 3, name : 'i Phone 12 Pro Max', price : 2500 , createAt : new Date('2021-07-09') },
    {id : 4, name : 'Tesla Updated', price : 2200 , createAt : new Date('2024-11-17') },

];

let productSortByDatedes = products6.sort((a, b) =>{
    return b.createAt - a.createAt;
});
console.log(productSortByDatedes);
console.log("\n\n");









