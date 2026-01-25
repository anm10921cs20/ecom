const navMainImgContainer = document.querySelector('.nav-img-container');

navMainImgContainer.addEventListener('click', () => {
    window.location.href = "../index.html";
})


const cartProductItems = JSON.parse(localStorage.getItem('cartitems'));



if (cartProductItems) {
    cartProductItems.forEach((cartitems, index) => {

        CartItemCreate(cartitems, index)

    })


    function CartItemCreate(cartitems, index) {
        const cartDiv = document.createElement('div');
        cartDiv.className = 'cart-item';
        cartDiv.innerHTML = `
                            <div class="cart-product-img">
                                <img src="${cartitems.img}"
                                    class="product-img" alt="${cartitems.name}">
                            </div>
                            <div class="cart-product-det">
                                <p class="product-name">${cartitems.name}</p>
                                <p class="product-spec">${cartitems.spec}</p>
                                <div class="cart-product-price">
                                    <p class="product-discount-price">${cartitems.price}</p>
                                    <p class="product-secondary-price"></p>
                                </div>
                                <div class="cart-qty">
                                    <button class="fas fa-minus"></button>                                    
                                    <input type="text" value="1" readonly class="product-qty">
                                    <button class="fas fa-plus"></button>
                                </div>
                            </div>
                            <div class="cart-product-delete">
                                <i class="fas fa-trash-can"></i>
                            </div>
        `;
        // content append 

        const cartItems1 = document.getElementsByClassName('cart-items')[0];
        cartItems1.appendChild(cartDiv);

      
        

     




    }




    document.addEventListener('DOMContentLoaded', () => {
        const qtyValue = document.querySelectorAll('.product-qty');
        const qtyPlus = document.getElementsByClassName('fa-plus');
        const qtyMinus = document.getElementsByClassName('fa-minus')
        qtyValue.forEach((qty, idx) => {
           qtyUpdate(qty, idx)
        })





















        
    function qtyUpdate(qty, idx)
    {
         qtyPlus[idx].addEventListener('click', () => {
            var qtyvalue = parseInt(qty.value);
            qty.value = qtyvalue + 1;
            total()
            })

            qtyMinus[idx].addEventListener('click', () => {
                var qtyvalue = parseInt(qty.value);
                if(qtyvalue > 1)
                {
                    qty.value = qtyvalue - 1;
                    total()
                }
            })
           
    }

    function total()
    {
        var PriceElement = document.querySelectorAll('.product-discount-price');
        const priceAddElement = document.getElementsByClassName('product-secondary-price');
        const productQty = document.getElementsByClassName('product-qty');
        var productadd = 0;
       PriceElement.forEach((price, idx) => {
       priceAddElement[idx].textContent = price.innerHTML;
       const priceValue =parseInt(price.innerHTML.slice(1));
       
       const productValue = parseInt(productQty[idx].value);
       PriceElement = priceValue * productValue;
       priceAddElement[idx].textContent = "₹" + PriceElement; 
       


        
       })
        

    }
    total()





    })









































}
else {
    
    var emptyImg = 'https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    var emptyText = 'Your Cart Is Empty';
    var emptySmallText = 'Explore Our Wide Selection and Find Something You Like'
    const cartContainerMain = document.getElementsByClassName('main-cart-content')[0];
    cartContainerMain.style.display = "flex";
    cartContainerMain.style.justifyContent = "center";
    cartContainerMain.style.alignItems = "center";
    cartContainerMain.style.backgroundColor = "#fff";
    cartContainerMain.style.height = "100%"
    cartContainerMain.innerHTML =   ` <div class="empty-content">
   <div class="empty-img">
   <img src="${emptyImg}" alt="empty-img" class="img-empty">
   </div>
   <div class="emptyadd-text">
   <h5>${emptyText}</h5>
   <h6>${emptySmallText}</h6>
   </div>
   </div>`;

}