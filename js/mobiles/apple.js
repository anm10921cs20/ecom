const appleProducts = [
    {
        name: "Apple iPhone 17",
        spec: "Black, 256 GB",
        price: "82,900",
        rate: "4.7",
        reviews: "3,425",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/t/g/-original-imahft5gqkxzyeqa.jpeg?q=70"
    },
    {
        name: "Apple iPhone 16",
        spec: "Black, 128 GB",
        price: "69,900",
        rate: "4.6",
        reviews: "2,01,542",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/q/h/-original-imahgfmzjj8gtqbc.jpeg?q=70"
    },
    {
        name: "Apple iPhone 17",
        spec: "Lavender, 256 GB",
        price: "82,900",
        rate: "4.7",
        reviews: "3,425",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/7/f/-original-imahft5gfgwpt6pr.jpeg?q=70"
    },
    {
        name: "Apple iPhone 17",
        spec: "White, 256 GB",
        price: "82,900",
        rate: "4.7",
        reviews: "3,425",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/e/5/-original-imahft5g9uthykuh.jpeg?q=70"
    },
    ,
    {
        name: "Apple iPhone 17",
        spec: "Mist, 256 GB",
        price: "82,900",
        rate: "4.7",
        reviews: "3,425",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/x/y/-original-imahft5gkyd8wcqc.jpeg?q=70"
    },
    {
        name: "Apple iPhone 16",
        spec: "Teal, 256 GB",
        price: "79,900",
        rate: "4.6",
        reviews: "2,01,542",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/l/2/-original-imahgfmzvanpgncf.jpeg?q=70"
    }

];


appleProducts.forEach((apple, index) => {
    const appleContainer = document.createElement('div');
    appleContainer.classList.add('apple-mobiles-content');
    appleContainer.innerHTML = ` <div class="img-content">
                                <img src="${apple.img}" alt="Apple-iphone" class="product-img">
                            </div>
                            <div class="name-content">
                                <p class="product-name">${apple.name} <span class="product-spec">(${apple.spec})</span></p>
                            </div>
                            <div class="review-content">
                                <p class="product-rate">${apple.rate} <i class="fas fa-star"></i></p>
                                <p class="product-ratings">(${apple.reviews})</p>
                            </div>
                            <div class="price-content">
                                <p class="product-price">₹${apple.price}</p>
                            </div>
                            <div class="heart"><i class="fa-solid fa-heart heart-icon"></i></div>
                            <button class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
    
    `;
    const appleProductsContainer = document.getElementsByClassName('mobiles-container')[0];
    appleProductsContainer.appendChild(appleContainer);
})