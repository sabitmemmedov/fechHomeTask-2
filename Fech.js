//////////////////////////////////////////////////////// /products Ən bahalı məhsul task1


// const apiUrl = "https://northwind.vercel.app/api/products";

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     const sortedProducts = data.sort((a, b) => b.unitPrice - a.unitPrice);

//     const mostExpensiveProduct = sortedProducts[0];
//     console.log("En bahali product:", mostExpensiveProduct);
//   })



//////////////////////////////////////////////////////// /products Ortalama stok miqdarı


// const apiUrl = "https://northwind.vercel.app/api/products";

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     let totalStockQuantity = 0;
//     let inStockProductCount = 0;

//     data.forEach(product => {
//       if (product.unitsInStock > 0) {
//         totalStockQuantity += product.unitsInStock; // stodka olan mallarin umumi miqdari
//         inStockProductCount++; //mallarin novunun sayi
//       }
//     });

//     const averageStockQuantity = (totalStockQuantity / inStockProductCount).toFixed(0)

//     console.log("stokda olan mallarin ortalama miqdari:",averageStockQuantity);
//   })

////////////////////////////////// product “C” ilə başlayan məhsullar

// const apiUrl = "https://northwind.vercel.app/api/products";

// fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//         const productsWithC = data.filter(product => product.name.startsWith("C"));
//         productsWithC.forEach(product => {
//             console.log(product.name);
//         });
//     })


/////////////////////////customers “London” şəhərindəki müştəriləri console a yaz 




// const apiUrl = "https://northwind.vercel.app/api/customers";
// fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(element => {
//             if (element.address.city === "London") {
//                 console.log(element.companyName);
//             }
//         });
//     })



///////////////////customers Region NULL olan nə qədər customer var?



// const apiUrl = "https://northwind.vercel.app/api/customers";

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     const nullRegionCustomers = data.filter(customer => customer.address.region === "NULL");

//     console.log("Region NULL olan musteri sayi: " + nullRegionCustomers.length);
//   })




/////////////////////////posts UserId-si 1 olan userin nə qədər postu var?


const apiUrl = "https://jsonplaceholder.typicode.com/posts";

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const userFiltered = data.filter(post => post.userId == "1");

    console.log("UserID si 1 olanin" + " " + userFiltered.length+" "+"postu var");
  })
 
////////////////////// 



// const apiUrl = "https://jsonplaceholder.typicode.com/albums";

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     const userFiltered = data.filter(post => post.userId == 7);

//     console.log("1 nomreli albumde" + " " + userFiltered.length+" "+"foto var");
//   })

