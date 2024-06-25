export const galleryIndex = (res, category)=>{
    let {products} = res.data
    let plantilla = "";
    products.forEach((value,index) => {
        plantilla += /*html*/`
        <section>
           <div class="section__front_page">
               <a href="views/detail.html?id=${value.asin}">
                   <img src="${value.product_photo}">
               </a>
               <img src="storage/img/heart.svg">
           </div>
           <h5>${value.product_title}</h5>
           <small>${category}</small>
           <div class="section__price">
               <span>${value.product_price}</span>
               <div  class="price__score">
                   <img src="storage/img/star.svg">
                   <p>${(value.product_star_rating!=null) ? value.product_star_rating : 0}</p>
               </div>
           </div>
       </section>
       `;
    });
    return plantilla
}

export const galleryCategory = ({data: {product_photos}} = res)=>{
    return /*html*/`
        <article class="article__product">
            <div class="product__image">
                ${product_photos.map(value => `<div class="product__image__item"><img src="${value}"></div>`).join('')}
            </div>
            <div class="product__menu">
                <a href="../">
                    <img src="../storage/img/back.svg">
                </a>
                <img src="../storage/img/heartBlack.svg">
            </div>
        </article>`;
<<<<<<< HEAD
=======
}

export const galleryCheckout = async()=>{
    let keys = Object.keys(sessionStorage)
    let plantilla = "";
    keys.forEach(key=>{
        let diccionarios = JSON.parse(sessionStorage.getItem(key));
        if(diccionarios.checkout){
            let value = diccionarios.data;
            plantilla += /*html*/`
            <article class="details__product">
            <div class="product_image">
                <img src="${value.product_photo}">
            </div>
            <div class="product__description">
                <h3>${(value.product_title).substring(0, 15)}...</h3>
                <small> ⭐ ${value.product_star_rating ? value.product_star_rating : "*No Ratings*"}</small>
                <span id ="spanPrecio">${value.product_price}</span>
            </div>
            <div class="product__custom">
                <img src="../storage/img/option.svg">
            <div id = "precio" class="product__select">
                <img src="../storage/img/minus.svg" id= "decreaseQuantity">
                <span id ="quantity">1</span>
                <img src="../storage/img/plus.svg" id= "increaseQuantity">
            </div>
        </div>
        </article>`;
        };
    })
return plantilla;
}

export const galleryBill = async()=>{
    return /*html*/`
        <div class="bill__total">
            <label id= "Totalitems">Total(9 items)</label>
            <span id ="spanPrecio">0.00</span>
        </div>
        <div class="bill__fee">
            <label>Shipping Fee</label>
            <span>0.00</span>
        </div>
        <div class="bill__subtotal">
            <label >Sub Total</label>
            <span id="subPrecio">0.00</span>
        </div>`;
    }


export const itemsCarrito = ()=>{
    return /*html*/`
    <footer class="footer">
    <ul class="footer__ul">
        <li>
            <a href="index.html">
                <img src="storage/img/homeSelect.svg">
            </a>
        </li>
        <li>
            <a href="views/detail.html">
                <img src="storage/img/bag.svg">
            </a>
        </li>
        <li>
            <a href="views/checkout.html">
                <img src="storage/img/heart.svg">
            </a>
        </li>
        <li>
            <a href="index.html">
                <img src="storage/img/profile.svg">
            </a>
        </li>
    </ul>
</footer>`;
>>>>>>> f9bbe3c (fix: :construction: adventages in button of quantity)
}