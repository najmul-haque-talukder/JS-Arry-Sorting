let products = [
    {id : 1, name : 'Samsung S22 Ultra', price : 1700 , createAt : new Date('2023-05-27') },
    {id : 2, name : 'Google Pixel 7', price : 2000 , createAt : new Date('2022-03-01') },
    {id : 3, name : 'i Phone 12 Pro Max', price : 2500 , createAt : new Date('2021-07-09') },
    {id : 4, name : 'Tesla Updated', price : 2200 , createAt : new Date('2024-11-17') },

]

let printProducts = (products) => {
    console.log(JSON.stringify(products, null, 2));
}


let sortedArray = [...products]
let menu = `
1. sorted by name (A to Z)
2. sorted by name (Z to A)
3. sorted by price (High to Low)
4. sorted by price (Low to High)
5. sorted by date (Old to New)
6. sorted by date (New to Old)
`

console.log(menu);
let choice = prompt('Enter a number to between 1 - 6')


switch(choice){
    case '1':
        sortedArray.sort((a, b) => a.name.localeCompare(b.name));
        printProducts(sortedArray);
        break;

    case '2':
        sortedArray.sort((a, b) => b.name.localeCompare(a.name));
        printProducts(sortedArray);
        break;


    case '3':
        sortedArray.sort((a, b) => a.price - b.price);
        printProducts(sortedArray);
        break;


    case '4':
        sortedArray.sort((a, b) => b.price - a.price);
        printProducts(sortedArray);
        break;

    
    case '5':
        sortedArray.sort((a, b) => a.createAt - b.createAt);
        printProducts(sortedArray);
        break;


    case '6':
        sortedArray.sort((a, b) => b.createAt - a.createAt);
        printProducts(sortedArray);
        break;




}