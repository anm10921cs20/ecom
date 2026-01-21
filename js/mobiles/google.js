const googleProducts = [
    {
        name: "Google Pixel 8",
        spec: "Obsidian Black, 128 GB",
        price: "59,999",
        rate: "4.5",
        reviews: "1,23,456",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/o/b/-original-imahfjsftzhymazf.jpeg?q=70"
    },
    {
        name: "Google Pixel 7 Pro",
        spec: "Stormy Blue, 256 GB",
        price: "74,999",
        rate: "4.6",
        reviews: "87,654",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/b/u/-original-imahadxg2fazkzub.jpeg?q=70"
    },
    {
        name: "Google Pixel 7",
        spec: "Snow White, 128 GB",
        price: "49,999",
        rate: "4.4",
        reviews: "65,432",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/q/f/-original-imahadxg8mgjzrfh.jpeg?q=70"
    },
    {
        name: "Google Pixel 6a",
        spec: "Forest Green, 128 GB",
        price: "34,999",
        rate: "4.3",
        reviews: "45,678",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/3/2/-original-imahadxgjufkypv5.jpeg?q=70"
    },
    {
        name: "Google Pixel 6",
        spec: "Awesome Iceblue, 128 GB",
        price: "18,999",
        rate: "4.4",
        reviews: "2,01,542",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/b/8/-original-imahfjsf5gxbpfks.jpeg?q=70"
    },
    {
        name: "Google Pixel 5a",
        spec: "Mint Green, 64 GB",
        price: "8,290",
        rate: "4.3",
        reviews: "3,425",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/h/n/pixel-8a-ga05570-in-google-original-imahyn3ncc6gcfnc.jpeg?q=70"
    }

];



googleProducts.forEach((google, index) => {
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
    const googleProductsContainer = document.getElementsByClassName('mobiles-container')[2]; // third index 2
    googleProductsContainer.appendChild(googleContainer);
})