const pocoProducts = [
    {
        name: "Poco G75 5G",
        spec: "Midnight Black, 128 GB",
        price: "24999",
        rate: "4.5",
        reviews: "1,23,456",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/v/f/-original-imahbr2cmpwexghw.jpeg?q=70"
    },
    {
        name: "Poco C71",
        spec: "Midnight Blue, 256 GB",
        price: "34999",
        rate: "4.6",
        reviews: "87,654",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/5/z/-original-imahawgarmg5f8ff.jpeg?q=70"
    },
    {
        name: "Poco C71",
        spec: "Midnight Black, 128 GB",
        price: "24999",
        rate: "4.5",
        reviews: "1,23,456",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/7/z/w/-original-imahawgahmkbjxyj.jpeg?q=70"
    },
    {
        name: "Poco C75 5G",
        spec: "Midnight Silver, 128 GB",
        price: "24999",
        rate: "4.5",
        reviews: "1,23,456",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/2/g/-original-imahbr2cz5apcwze.jpeg?q=70"
    },
    {
        name: "Poco C75 5G",
        spec: "Midnight Black, 128 GB",
        price: "24999",
        rate: "4.5",
        reviews: "1,23,456",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/b/b/-original-imahbr2czzcrgfx7.jpeg?q=70"
    },
    {
        name: "Poco C71",
        spec: "Midnight Black, 128 GB",
        price: "24999",
        rate: "4.5",
        reviews: "1,23,456",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/l/a/-original-imahg2ny5htzbrjb.jpeg?q=70"
    }

];



pocoProducts.forEach((google, index) => {
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
    const googleProductsContainer = document.getElementsByClassName('mobiles-container')[8]; // third index 7
    googleProductsContainer.appendChild(googleContainer);
})