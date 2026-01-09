const categories = [
    {
        name:"Mobiles & Tablets",
        img:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100"
    },
    {
        name:"Fashion",
        img:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ff559cb9d803d424.png?q=100"
    },
    {
        name:"Electronics",
        img:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/af646c36d74c4be9.png?q=100"
    },
    {
        name:"Tv & Appliances",
        img:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e90944802d996756.jpg?q=100"
    },
    {
        name:"Home & Furnitures",
        img:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/1788f177649e6991.png?q=100"
    },
    {
      name:"Flight Bookings",
      img:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/3c647c2e0d937dc5.png?q=100"  
    },
    {
        name:"Beauty,Food",
        img:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/b3020c99672953b9.png?q=100"
    },
    {
        name:"Grocery",
        img:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e730a834ad950bae.png?q=100"
    }
];

// products categories
categories.forEach((category, id) => {
    categoriesadd(category);
})

// categories orders fumction

function categoriesadd(category){
   const categoriesDiv = document.createElement('div');
   categoriesDiv.className = 'categories-products';
   categoriesDiv.innerHTML = `
                        <div class="categories-products-img">
                            <img src="${category.img}"
                                alt="${category.name}">
                        </div>
                        <div class="categories-products-name">
                            <h5>${category.name}</h5>
                        </div>   
   `;

//    categories container append

const categoriesContainerElement = document.getElementsByClassName('categories-img')[0];
categoriesContainerElement.appendChild(categoriesDiv);
    
} 