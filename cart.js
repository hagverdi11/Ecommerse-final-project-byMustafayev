let basketProducts = [];

if (localStorage.getItem("basketProducts") != null) {
    basketProducts = JSON.parse(localStorage.getItem("basketProducts"))
}

let tableBody = document.querySelector(".cart-table .table-body")

for (const basketProduct of basketProducts) {
    tableBody.innerHTML += ` <tr>
    <td data-id="${basketProduct.Id}" class="flexitem">
        <div class="thumbnail object-cover">
            <a href="#">
                <img src="${basketProduct.Image}" alt="">
            </a>
        </div>
        <div class="content">
            <strong><a href="#">${basketProduct.Name}</a></strong>
            
        </div>
    </td>
    <td>${basketProduct.Price}</td>
    <td>
      <p>${basketProduct.Count}</p>
    </td>
    <td>$559.98</td>
    <td><a href="#"><i class="ri-close-line"></i></a></td>
</tr>`
}



document.querySelector(".basketItem-number").innerText = getBasketProductsCount(basketProducts);

function getBasketProductsCount(items) {
    let resultCount = 0;
    for (const item of items) { 
        resultCount += item.count
    }
    return resultCount;
}

let deleteBtns = document.querySelectorAll(".ri-close-line");
deleteBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        let id = parseInt(this.parentNode.parentNode.parentNode.parentNode.firstElementChild.getAttribute("data-id"));
        console.log(id);

        basketProducts = basketProducts.filter(m => m.id == id);
        localStorage.setItem("basketProducts", JSON.stringify(basketProducts));

        this.parentNode.parentNode.parentNode.remove();
    })
})