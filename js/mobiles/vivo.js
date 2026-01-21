const vivoProducts = [
    {
        name: "Vivo T4 5G",
        spec: "Midnight Black, 128 GB",
        price: "24,999",
        rate: "4.5",
        reviews: "1,23,456",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/k/r/-original-imahfhudssrdghcz.jpeg?q=70"
    },
    {
        name: "Vivo Y19e",
        spec: "Midnight Black, 256 GB",
        price: "34,999",
        rate: "4.6",
        reviews: "87,654",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/t/x/-original-imahbgpzbumfzkbh.jpeg?q=70"
    },
    {
        name: "Vivo T4 Lite 5G",
        spec: "Midnight Black, 128 GB",
        price: "24,999",
        rate: "4.5",
        reviews: "1,23,456",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/6/9/t/-original-imahfkvfhpfaftmb.jpeg?q=70"
    },
    {
        name: "Vivo T4 5G",
        spec: "Midnight Black, 128 GB",
        price: "24,999",
        rate: "4.5",
        reviews: "1,23,456",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/7/q/-original-imahaeeb5be43z2h.jpeg?q=70"
    },
    {
        name: "Vivo T4x 5G",
        spec: "Midnight Black, 128 GB",
        price: "24,999",
        rate: "4.5",
        reviews: "1,23,456",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/6/9/t/-original-imahfkvfhpfaftmb.jpeg?q=70"
    },
    {
        name: "Vivo T4 5G",
        spec: "Midnight Black, 128 GB",
        price: "24,999",
        rate: "4.5",
        reviews: "1,23,456",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/f/0/-original-imahbgqyz5sqhwq9.jpeg?q=70"
    }

];



vivoProducts.forEach((google, index) => {
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
    const googleProductsContainer = document.getElementsByClassName('mobiles-container')[3]; // third index 3
    googleProductsContainer.appendChild(googleContainer);
})