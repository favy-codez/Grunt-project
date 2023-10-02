let shop = document.getElementById("shop");

let shopItemsData = [
    {
        id: 1,
        name: "Casual Shirt",
        price: 45,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "./IMAGES/three.svg",
    }, 
    {
        id: 2,
        name: "Office Shirt",
        price: 100,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "./IMAGES/four.svg",
    },
    {
        id: 3,
        name: "T Shirt",
        price: 25,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "./IMAGES/one.svg",
    },
    {
        id: 4,
        name: "Mens Suit",
        price: 300,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "./IMAGES/two.svg",
    },
]

let generateShop = () =>{
    return (shop.innerHTML = shopItemsData.map(data =>{
        // using destructuring so we don't have to use data.name
        let {id, name, price, desc, img} = data;
        return `
           <div id=product-id-${id} class="item">
                <img width="200" src=${img} alt="">
                <div class="details">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="price-quantity">
                        <h2>$ ${price}</h2>
                        <div class="buttons">
                            <i class="bi bi-dash-lg"></i>
                            <div class="quantity">0</div>
                            <i class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join(""));
};

generateShop()



// ! USING HARDCODED JS
// let generateShop = () =>{
//     return (shop.innerHTML = `
//     <div class="item">
//                 <img width="200" src="IMAGES/one.svg" alt="">
//                 <div class="details">
//                     <h3>${data.name}</h3>
//                     <p>${data.desc}</p>
//                     <div class="price-quantity">
//                         <h2>$ ${data.price}</h2>
//                         <div class="buttons">
//                             <i class="bi bi-dash-lg"></i>
//                             <div class="quantity">0</div>
//                             <i class="bi bi-plus-lg"></i>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     `);
// };

generateShop()

