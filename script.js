// Copy menu for mobile
function copyMenu() {
    // Copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat')
    var dptPlace = document.querySelector('.departments')
    dptPlace.innerHTML = dptCategory.innerHTML;

    // Copy inside nav to nav
    var mainNav = document.querySelector('.header-nav nav')
    var navPlace = document.querySelector('.off-canvas nav')
    navPlace.innerHTML = mainNav.innerHTML;

    // Copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper')
    var topPlace = document.querySelector('.off-canvas .thetop-nav')
    topPlace.innerHTML = topNav.innerHTML;
}

copyMenu();


// Show mobile menu
const menuButton = document.querySelector('.trigger')
const closeButton = document.querySelector('.t-close')
const addClass = document.querySelector('.site')

menuButton.addEventListener('click', () => {
    addClass.classList.toggle('showmenu')
})

closeButton.addEventListener('click', () => {
    addClass.classList.remove('showmenu')
})

// Show sub-menu on mobile
const submenu = document.querySelectorAll('.has-child .icon-small')
submenu.forEach(menu => menu.addEventListener('click', toggle))

function toggle(e) {
    e.preventDefault()

    submenu.forEach(
        item => item !== this
            ? item.closest('.has-child').classList.remove('expand')
            : null
    )

    if (this.closest('.has-child').classList !== 'expand') {
        this.closest('.has-child').classList.toggle('expand')
    }
}


//slider

const swiper = new Swiper('.swiper', {

    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
});

//Search Side

const searchButton = document.querySelector('.t-search')
const tClose = document.querySelector('.search-close')
const showClass = document.querySelector('.site')

searchButton.addEventListener('click', function () {
    showClass.classList.toggle('showsearch')
})

tClose.addEventListener('click', function () {
    showClass.classList.remove('showsearch')
})

//show dpt menu
const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
dptClass = document.querySelector('.site');

dptButton.addEventListener('click', function () {
    dptClass.classList.toggle('showdpt')
})

// Product image slider
let productThumb = new Swiper('.small-image', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        481: {
            spaceBetween: 32
        }
    }
})

let productBig = new Swiper('.big-image', {
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    thumbs: {
        swiper: productThumb
    }
})



// Stock products bar width percentage
const stocks = document.querySelectorAll('.products .stock')

for (let x = 0; x < stocks.length; x++) {
    let stock = stocks[x].dataset.stock
    let available = stocks[x].querySelector('.qty-available').innerHTML
    let sold = stocks[x].querySelector('.qty-sold').innerHTML
    let percent = sold * 100 / stock

    stocks[x].querySelector('.available').style.width = percent + '%'
}


// wishlist

let wishlistBtns = document.querySelectorAll(".ri-heart-fill")

let products = [];

if (localStorage.getItem("products")) {
    products = JSON.parse(localStorage.getItem("products"))
}

document.querySelector(".item-number").innerText = getProductsCount(products);

wishlistBtns.forEach(wishlistBtn => {
    let productId = parseInt(wishlistBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("data-id"));
    let existProduct = products.find(m=>m.id ==productId);
    if (existProduct&&products.includes(existProduct)) {
        wishlistBtn.classList.add('heart-active')
    }
    wishlistBtn.addEventListener("click", function(e){
        e.preventDefault();
        if (!wishlistBtn.classList.contains("heart-active")) {
        
        wishlistBtn.classList.add("heart-active")
       

        let productImage = this.parentNode.parentNode.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.firstElementChild.getAttribute("src");
        let productName = this.parentNode.parentNode.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.innerText;
        let productPrice = this.parentNode.parentNode.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText;
        let productId = parseInt(this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("data-id"));
       
        let existProduct = products.find(m=>m.id ==productId);
        if (existProduct != undefined) {
            existProduct.count += 0;
        }
        else{
            products.push({
                id:productId,
                image:productImage,
                name:productName,
                price:productPrice,
                count:1
            })
            document.querySelector(".item-number").innerText = getProductsCount(products);
        }
       

        localStorage.setItem("products", JSON.stringify(products));
        document.querySelector(".item-number").innerText = getProductsCount(products);
        }
        else{
            
            wishlistBtn.classList.remove("heart-active");
            
            let productId = parseInt(this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("data-id"));

            let existProduct = products.find(m=>m.id ==productId);
             if (existProduct) {
                
                const newProducts=products.filter(m=>m!==existProduct);
                localStorage.setItem('products',JSON.stringify(newProducts));
                document.querySelector(".item-number").innerText = getProductsCount(newProducts);
                window.location.reload()
            }
            
        }
        

    })
});




function getProductsCount(items) {    
    return items.length;
}


//basket

let basketBtns = document.querySelectorAll(".ri-shopping-basket-fill")
let  basketProducts = [];

if (localStorage.getItem("basketProducts") !=null) {
    basketProducts = JSON.parse(localStorage.getItem("basketProducts"))
}



basketBtns.forEach(basketBtn => {
    basketBtn.addEventListener("click", function(e){
        
        e.preventDefault();

        let basketProductImage = this.parentNode.parentNode.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.firstElementChild.getAttribute("src");   
        let basketProductName = this.parentNode.parentNode.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.innerText;
        let basketProductPrice = this.parentNode.parentNode.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText;
        let basketProductId = parseInt(this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("data-id"));
       
        let existBasketProduct = basketProducts.find(m=>m.id ==basketProductId);
        if (existBasketProduct != undefined) {
            existBasketProduct.Count += 1;
        }
        else{
            basketProducts.push({
                Id:basketProductId,
                Image:basketProductImage,
                Name:basketProductName,
                Price:basketProductPrice,
                Count:1
            })
        }
       

        localStorage.setItem("basketProducts", JSON.stringify(basketProducts));
        document.querySelector(".basketItem-number").innerText = getProductsCount(basketProducts);

    })
});




