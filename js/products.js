const productsContainer1 = [
    {
        id:1,
        img:'https://rukminim2.flixcart.com/image/120/120/xif0q/projector/x/s/t/i9-pro-max-fhd-1080p-e03i31-10-e03i31-led-projector-egate-original-imahgxvbyhh7uejw.jpeg?q=80',
        name:'Projector',
        price:'6,990'
    },
     {
        id:2,
        img:'https://rukminim2.flixcart.com/image/120/120/kcf4lu80/speaker/mobile-tablet-speaker/h/u/f/srs-xb23-sony-original-imaftk66vjxp86h5.jpeg?q=80',
        name:'Speakers',
        price:'499'
    },
     {
        id:3,
        img:'https://rukminim2.flixcart.com/image/120/120/xif0q/smartwatch/5/v/s/-original-imagxrhetgfuebnn.jpeg?q=80',
        name:'Smart Watches',
        price:'1,599'
    },
     {
        id:4,
        img:'https://rukminim2.flixcart.com/image/120/120/l58iaa80/headphone/k/z/m/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg?q=80',
        name:'True AirBuds',
        price:'1,479'
    },
     {
        id:5,
        img:'https://rukminim2.flixcart.com/image/120/120/xif0q/printer/s/8/d/-original-imafkykednshkhx5.jpeg?q=80',
        name:'Printers',
        price:'2,999'
    },
     {
        id:6,
        img:'https://rukminim1.flixcart.com/image/240/240/xif0q/monitor/p/w/w/-original-imahg9bfku8q2neg.jpeg?q=60',
        name:'Monitors',
        price:'5,399'
    },
     {
        id:7,
        img:'https://rukminim1.flixcart.com/image/240/240/xif0q/monitor/w/i/f/-original-imahagy2cefszqgy.jpeg?q=60',
        name:'Monitor',
        price:'8,199'
    },
     {
        id:8,
        img:'https://rukminim1.flixcart.com/image/240/240/xif0q/camera/s/o/y/na-digital-kids-camera-20mp-1080p-32gb-card-supported-mini-original-imagy2znwq4uy4z8.jpeg?q=60',
        name:'Camera',
        price:'2,336'
    }
];


productsContainer1.forEach((item, id) => {
    createItems(item);
})


// funciton make create items

function createItems(item)
{
    const productsDiv = document.createElement('div');
    productsDiv.className = 'products-contents-products';
    productsDiv.innerHTML = `
                        <img src="${item.img}" alt="" class="product-img">
                        <div class="product-name">${item.name}</div>
                        <div class="product-price">From Rs.${item.price}</div>
    
    `;

    const productsContainerElement = document.getElementsByClassName('products-content')[0];
    productsContainerElement.appendChild(productsDiv);


const leftSideArrow = document.getElementsByClassName('product-scroll-left')[0];
const rightSideArrow = document.getElementsByClassName('product-scroll-right')[0];

leftSideArrow.addEventListener('click', () => {
    productsContainerElement.scrollLeft -= 300;
})
rightSideArrow.addEventListener('click', () => {
    productsContainerElement.scrollLeft += 300;
})




}





const bestQualityProducts = [
    {
        id:1,
        name:'Graphics Card',
        img:'https://rukminim2.flixcart.com/image/210/210/xif0q/graphics-card/c/g/f/pci-e-pci-express-3-0-x4-to-nvme-m-2-nvme-to-nvme-ssd-pci-e-3-0-original-imah8yc9x4gueuuh.jpeg?q=80',
        moto:'Big Savings'
    },
    {
        id:2,
        name:'GT Player Gaming Chair',
        img:'https://rukminim2.flixcart.com/image/210/210/xif0q/gaming-chair/w/k/v/1usa-premium-gaming-chair-gt-player-original-imahckqyxmzkezfk.jpeg?q=80',
        moto:'Bestsellers'
    },
    {
        id:3,
        name:'Milk Chocolate Chocalates',
        img:'https://rukminim2.flixcart.com/image/210/210/xif0q/chocolate/h/l/m/125-gold-bon-bons-milk-chocolates-perfect-gifting-chocolate-1-original-imahbnf58qt6pyxy.jpeg?q=80',
        moto:'Specials'
    },
    {
        id:4,
        name:'Commuters',
        img:'https://rukminim2.flixcart.com/image/210/210/xif0q/motorcycle/b/z/d/-original-imahftzexmhttnky.jpeg?q=80',
        moto:'New Range'
    }
];



bestQualityProducts.forEach((bestprom, id ) => {
    
   bestQualityProductsRun(bestprom)
})


// best qyality product runs funciton

function bestQualityProductsRun(bestprom)
{
     const bestQualityProductsDiv = document.createElement('div');
    bestQualityProductsDiv.className = 'best-quality-product';
    bestQualityProductsDiv.innerHTML = `
                            <div class="best-quality-product-img">
                                <img src="${bestprom.img}"
                                    alt="${bestprom.name}">
                            </div>
                            <div class="best-quality-product-details">
                                <div class="best-quality-product-name">
                                   ${bestprom.name}
                                </div>
                                <div class="best-quality-product-status">
                                    ${bestprom.moto}
                                </div>
                            </div>
    
    `;

    const bestQualityProductsElement = document.getElementsByClassName('best-quality-products')[0];
    bestQualityProductsElement.appendChild(bestQualityProductsDiv)
}



const topSelection = [
    {
        id:1,
        name:'Washing Machines',
        img:'https://rukminim2.flixcart.com/image/210/210/xif0q/washing-machine-new/n/e/t/-original-imahffsfhyhegzd9.jpeg?q=80',
        moto:'Top Collection'
    },
    {
        id:2,
        name:'Projectors',
        img:'https://rukminim2.flixcart.com/image/210/210/xif0q/projector/l/b/j/hy300-portable-projector-android-11-projector-4k-1080p-wi-fi-5g-original-imahgeydue3bzqsj.jpeg?q=80',
        moto:'Special offer'
    },
    {
        id:3,
        name:'Canon Dslr',
        img:'https://rukminim2.flixcart.com/image/210/210/xif0q/dslr-camera/i/o/c/eos-r100-24-1-eos-r100-kit-canon-original-imagqeydhsxgacxp.jpeg?q=80',
        moto:'Bestsellers'
    },
    {
        id:4,
        name:'Milk Drink Mixes',
        img:'https://rukminim2.flixcart.com/image/210/210/xif0q/milk-drink-mix/h/6/f/-original-imagwzhbmyywhcwb.jpeg?q=80',
        moto:'Explore Now'
    }
];



topSelection.forEach((topprom, id ) => {
    
   topQualityProductsRun(topprom)
})


// top product runs funciton

function topQualityProductsRun(topprom)
{
     const topSelectionDiv = document.createElement('div');
    topSelectionDiv.className = 'best-quality-product';
    topSelectionDiv.innerHTML = `
                            <div class="best-quality-product-img">
                                <img src="${topprom.img}"
                                    alt="${topprom.name}">
                            </div>
                            <div class="best-quality-product-details">
                                <div class="best-quality-product-name">
                                   ${topprom.name}
                                </div>
                                <div class="best-quality-product-status">
                                    ${topprom.moto}
                                </div>
                            </div>
    
    `;

    const topSelectionElement = document.getElementsByClassName('best-quality-products')[1];
    topSelectionElement.appendChild(topSelectionDiv)
}





const discountForYou = [
    {
        id:1,
        name:'Other Oils',
        img:'https://rukminim2.flixcart.com/image/210/210/jjylw280/edible-oil/g/5/m/500-na-pouch-sesame-oil-777-original-imaf7e3ej2jzwd2t.jpeg?q=80',
        disc:'Min. 20% OFF'
    },
    {
        id:2,
        name:'Plants Saplings',
        img:'https://rukminim2.flixcart.com/image/210/210/xif0q/plant-sapling/e/t/a/no-perennial-yes-hybrid-mullberry-plant-hmp20-small-1-grow-bag-original-imagzhxpupybmzag.jpeg?q=80',
        disc:'Min. 50% OFF'
    },
    {
        id:3,
        name:'OTG Adapters',
        img:'https://rukminim2.flixcart.com/image/210/210/xif0q/shopsy-data-cable/x/p/8/0-3-60w-usb-adapter-cable-conversion-storage-box-multi-type-original-imagtbgvysmm4rp8.jpeg?q=80',
        disc:'Min. 50% OFF'
    },
    {
        id:4,
        name:'Smart Watches',
        img:'https://rukminim2.flixcart.com/image/210/210/xif0q/smartwatch/s/i/u/-original-imah76jt64ffmwg4.jpeg?q=80',
        disc:'Min. 40% OFF'
    }
];





discountForYou.forEach((disfor, id ) => {
    
   discForRun(disfor)
})


//  discount for you funciton

function discForRun(disfor)
{
     const discForProductsDiv = document.createElement('div');
    discForProductsDiv.className = 'best-quality-product';
    discForProductsDiv.innerHTML = `
                            <div class="best-quality-product-img">
                                <img src="${disfor.img}"
                                    alt="${disfor.name}">
                            </div>
                            <div class="best-quality-product-details">
                                <div class="best-quality-product-name">
                                   ${disfor.name}
                                </div>
                                <div class="best-quality-product-status">
                                    ${disfor.disc}
                                </div>
                            </div>
    
    `;

    const disForProductsElement = document.getElementsByClassName('best-quality-products')[2];
    disForProductsElement.appendChild(discForProductsDiv)
}





// wedding special container




const weddingSpecials = [
    {
        id:1,
        name:'Dry Fruits',
        img:'https://rukminim2.flixcart.com/image/210/210/xif0q/nut-dry-fruit/y/c/n/1-mix-dry-fruit-panchmeva-1-mason-jar-hariyam-original-imah7ghgafgcsyxq.jpeg?q=80',
        disc:'Special Offer'
    },
    {
        id:2,
        name:'Kids Lehenga Cholis',
        img:'https://rukminim2.flixcart.com/image/210/210/xif0q/kids-lehenga-choli/d/f/h/12-13-years-kids-bella-rani-yellow-gheludi-original-imahf4fvut2ygedt.jpeg?q=80',
        disc:'In Focus Now'
    },
    {
        id:3,
        name:'Women s Ethnic Sets',
        img:'https://rukminim2.flixcart.com/image/210/210/xif0q/salwar-kurta-dupatta/u/m/q/xs-new-orange-m-binkal-original-imahj84yfrauunfs.jpeg?q=80',
        disc:'Hand-Picked'
    },
    {
        id:4,
        name:'Gemstones, Coins & Bars',
        img:'https://rukminim2.flixcart.com/image/210/210/xif0q/coin/f/f/r/na-1-sb-999-10g-bangalore-refinery-original-imahfayzzdxhrmwk.jpeg?q=80',
        disc:'New Range'
    }
];





weddingSpecials.forEach((disfor, id ) => {
    
   weddingSpecialsRun(disfor)
})


//  discount for you funciton

function weddingSpecialsRun(disfor)
{
     const weddingSpecialProductsDiv = document.createElement('div');
    weddingSpecialProductsDiv.className = 'best-quality-product';
    weddingSpecialProductsDiv.innerHTML = `
                            <div class="best-quality-product-img">
                                <img src="${disfor.img}"
                                    alt="${disfor.name}">
                            </div>
                            <div class="best-quality-product-details">
                                <div class="best-quality-product-name">
                                   ${disfor.name}
                                </div>
                                <div class="best-quality-product-status">
                                    ${disfor.disc}
                                </div>
                            </div>
    
    `;

    const weddingSpecialProductsElement = document.getElementsByClassName('best-quality-products')[3];
    weddingSpecialProductsElement.appendChild(weddingSpecialProductsDiv)
}







