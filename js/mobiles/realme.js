const realmeProducts = [
    {
        name: "Realme P3 Lite 5G",
        spec: "Midnight Black, 128 GB",
        price: "24999",
        rate: "4.5",
        reviews: "1,23,456",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/u/v/-original-imahjhas8jcvacxu.jpeg?q=70"
    },
    {
        name: "Realme P4 5G",
        spec: "Midnight Black, 256 GB",
        price: "34999",
        rate: "4.6",
        reviews: "87,654",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/m/d/-original-imahf47f6fgxwh9a.jpeg?q=70"
    },
    {
        name: "Realme C71",
        spec: "Midnight Black, 128 GB",
        price: "24999",
        rate: "4.5",
        reviews: "1,23,456",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/f/j/-original-imahdz2gdtkwhz9g.jpeg?q=70"
    },
    {
        name: "Realme C61",
        spec: "Midnight Black, 128 GB",
        price: "24999",
        rate: "4.5",
        reviews: "1,23,456",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/v/z/-original-imah28xpzzwz4fwg.jpeg?q=70"
    },
    {
        name: "Realme P3 Lite 5G",
        spec: "Midnight Black, 128 GB",
        price: "24999",
        rate: "4.5",
        reviews: "1,23,456",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/o/v/-original-imahfsgvr6fvsczs.jpeg?q=70"
    },
    {
        name: "Realme P4 x 5G",
        spec: "Midnight Black, 128 GB",
        price: "24999",
        rate: "4.5",
        reviews: "1,23,456",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/9/n/-original-imahgdr4shzrvcfh.jpeg?q=70"
    }

];



realmeProducts.forEach((google, index) => {
    const googleContainer = document.createElement('div');
    googleContainer.classList.add('apple-mobiles-content');
    googleContainer.innerHTML = ` <div class="img-content">
                                <img src="${google.img}" alt="Google Pixel" class="product-img">
                            </div>
                            <div class="name-content">
                                <p class="product-name">${google.name} <span class="product-spec">(${google.spec})</span></p>
                            </div>
                            <div class="review-content">
                                <p class="product-rate">${google.rate} <i class="fas fa-star"></i></p>
                                <p class="product-ratings">(${google.reviews})</p>
                            </div>
                            <div class="price-content">
                                <p class="product-price">₹${google.price}</p>
                            </div>
                            <div class="heart"><i class="fa-solid fa-heart heart-icon"></i></div>
                              <button class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
    
    `;
    const googleProductsContainer = document.getElementsByClassName('mobiles-container')[5]; // third index 5
    googleProductsContainer.appendChild(googleContainer);
})