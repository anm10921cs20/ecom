document.addEventListener('DOMContentLoaded', () => {


const addToCartBtn = document.querySelectorAll('.cart-btn');
addToCartBtn.forEach((btn, index) => {
    btn.addEventListener('click', addToCart);
})


// function to add products to cart

function addToCart(event)
{
    var button = event.target.parentElement;
    var productImg = button.getElementsByClassName('product-img')[0].src;
    var productName = button.getElementsByClassName('product-name')[0].innerText;
    var productPrice = button.getElementsByClassName('product-price')[0].innerText;
    var productSpec = button.getElementsByClassName('product-spec')[0].innerText;

    // object for product

    var product = {
        img: productImg,
        name: productName,
        price: productPrice,
        spec: productSpec
    }
    
    
    // cart items in local storage if -> local storage has not store else open array
    let cartItems = JSON.parse(localStorage.getItem('cartitems')) || [];

    const exists = cartItems.some(item => item.img === product.img);

    if(!exists)
    {
        cartItems.push({...product});
        localStorage.setItem('cartitems', JSON.stringify(cartItems));
    }
    else
    {
        alert("Already Added to Cart")
    }
    
    
}



















})




