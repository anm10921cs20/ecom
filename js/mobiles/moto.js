const motoProducts = [
    {
        name: "Moto G57",
        spec: "Midnight Black, 128 GB",
        price: "24999",
        rate: "4.5",
        reviews: "1,23,456",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/u/l/-original-imahhqjwyzsjyfvn.jpeg?q=70"
    },
    {
        name: "Moto Edge 60 Fushion 5G",
        spec: "Midnight Black, 256 GB",
        price: "34999",
        rate: "4.6",
        reviews: "87,654",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/7/t/-original-imahgqnz4hjyk6fh.jpeg?q=70"
    },
    {
        name: "Moto G05 5G",
        spec: "Midnight Black, 128 GB",
        price: "24999",
        rate: "4.5",
        reviews: "1,23,456",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/j/b/-original-imah83ezvx8m7hs6.jpeg?q=70"
    },
    {
        name: "Moto G67 Power 5G",
        spec: "Midnight Black, 128 GB",
        price: "24999",
        rate: "4.5",
        reviews: "1,23,456",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/y/y/-original-imahhjhfu7jed8kt.jpeg?q=70"
    },
    {
        name: "Moto Edge 60 Fusion 5G",
        spec: "Midnight Black, 128 GB",
        price: "24999",
        rate: "4.5",
        reviews: "1,23,456",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/e/i/-original-imahgqnzuy2fzusz.jpeg?q=70"
    },
    {
        name: "Moto G06 Power",
        spec: "Midnight Black, 128 GB",
        price: "24999",
        rate: "4.5",
        reviews: "1,23,456",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/k/4/-original-imahgctgwut6fewm.jpeg?q=70"
    }

];



motoProducts.forEach((google, index) => {
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
    const googleProductsContainer = document.getElementsByClassName('mobiles-container')[7]; // third index 7
    googleProductsContainer.appendChild(googleContainer);
})