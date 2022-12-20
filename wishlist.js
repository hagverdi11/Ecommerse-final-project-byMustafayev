let products = [];

if (localStorage.getItem("products") !=null) {
    products = JSON.parse(localStorage.getItem("products"))
}

let tableBody = document.querySelector(".table .table-body")

for (const product of products) {
    tableBody.innerHTML += ` <tr>
    <td data-id="${product.id}" class="flexitem">
        <div class="thumbnail object-cover">
            <a href="#">
                <img src="${product.image}" alt="">
            </a>
        </div>
        <div class="content">
            <strong><a href="#">${product.name}</a></strong>
          
        </div>
    </td>
    <td>${product.price}</td>
    <td>
        <div class="icon-wishlist">
            <a href=""><i class="ri-shopping-basket-line"></i></a>
        </div>
    </td>
    
    <td>
        <div class="delete-icon">
            <a href="#"><i class="ri-delete-bin-line delete-btn"></i></a>
        </div>
       
    </td>
</tr>`
}



document.querySelector(".item-number").innerText = getProductsCount(products);

function getProductsCount(items) {
    let resultCount = 0;
    for (const item of items) {
        resultCount += item.count
    }
    return resultCount;
}

let deleteBtns = document.querySelectorAll(".delete-btn");
deleteBtns.forEach(btn =>{
    btn.addEventListener("click",function (e) {
        e.preventDefault();
        let id = parseInt(this.parentNode.parentNode.parentNode.parentNode.firstElementChild.getAttribute("data-id"));

       products = products.filter(m=>m.id == id);
        localStorage.setItem("products",JSON.stringify(products));
        
        this.parentNode.parentNode.parentNode.parentNode.remove();
    })
})