const samsungProducts = [
    {
        name: "Samsung Galaxy F05",
        spec: "Twilight Blue, 64 GB",
        price: "6499",
        rate: "4.2",
        reviews: "77,532",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/r/f/-original-imah56hkgehywn5b.jpeg?q=70"
    },
    {
        name: "Samsung Galaxy M35 5G",
        spec: "Awesome Iceblue, 128 GB",
        price: "18999",
        rate: "4.4",
        reviews: "2,01,542",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/j/d/-original-imahgy25zuwqzzye.jpeg?q=70"
    },
    {
        name: "Samsung Galaxy M05",
        spec: "Mint Green, 64 GB",
        price: "8290",
        rate: "4.3",
        reviews: "3,425",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/2/v/m05-sm-m055f-samsung-original-imah4z9v2qp2tpgw.jpeg?q=70"
    },
    {
        name: "Samsung Galaxy S24 5G",
        spec: "Onyx Black, 128 GB",
        price: "40900",
        rate: "4.6",
        reviews: "50,425",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/8/1/-original-imahfz2tenzpsd3p.jpeg?q=70"
    },
    ,
    {
        name: "Samsung Galaxy F06 5G",
        spec: "Lite Violet, 64 GB",
        price: "8999",
        rate: "4.2",
        reviews: "38,425",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/q/r/-original-imahfvrmzd46wgw5.jpeg?q=70"
    },
    {
        name: "Samsung Galaxy S24 5G",
        spec: "Onyx Black, 256 GB",
        price: "45900",
        rate: "4.6",
        reviews: "2,01,542",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/8/1/-original-imahfz2tenzpsd3p.jpeg?q=70"
    }

];



samsungProducts.forEach((samsung, index) => {
    const samsungContainer = document.createElement('div');
    samsungContainer.classList.add('apple-mobiles-content');
    samsungContainer.innerHTML = ` <div class="img-content">
                                <img src="${samsung.img}" alt="Samsung-galaxy" class="product-img">
                            </div>
                            <div class="name-content">
                                <p class="product-name">${samsung.name} <span class="product-spec">(${samsung.spec})</span></p>
                            </div>
                            <div class="review-content">
                                <p class="product-rate">${samsung.rate} <i class="fas fa-star"></i></p>
                                <p class="product-ratings">(${samsung.reviews})</p>
                            </div>
                            <div class="price-content">
                                <p class="product-price">₹${samsung.price}</p>
                            </div>
                            <div class="heart"><i class="fa-solid fa-heart heart-icon"></i></div>
                              <button class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
    
    `;
    const appleProductsContainer = document.getElementsByClassName('mobiles-container')[1]; // second index 1
    appleProductsContainer.appendChild(samsungContainer);
})