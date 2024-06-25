import { getProductId } from "./module/detail.js";
import { galleryCheckout, galleryBill } from "./components/gallery.js";


let main__section__checkout = document.querySelector(".checkout__details")
let section__bill = document.querySelector(".section__bill")


addEventListener("DOMContentLoaded", async(e)=>{
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    if(!sessionStorage.getItem(id)) sessionStorage.setItem(id, JSON.stringify(await getProductId({id})));

    let info = JSON.parse(sessionStorage.getItem(id));
    main__section__checkout.innerHTML = await galleryCheckout();
    section__bill.innerHTML = await galleryBill();

    let cantidadItems = 0;
    let totalPrecio = 0;

    let details__product = document.querySelectorAll (".details__product")
    details__product.forEach(parametro =>{


    let decreaseButton = parametro.querySelector("#decreaseQuantity");
    let increaseButton = parametro.querySelector("#increaseQuantity");
    let quantitySpan = parametro.querySelector("#quantity");
    let Totalitems = parametro.querySelector("#Totalitems")
    let precio = parametro.querySelector("#spanPrecio")



    totalPrecio += Number((precio.textContent).replace("$",""))
    cantidadItems += Number(quantitySpan.textContent);
    console.log(totalPrecio)

    decreaseButton.addEventListener('click', () => {
        let quantity = parseInt(quantitySpan.textContent);
        if (quantity > 0) {
            quantity -= 1;
            quantitySpan.textContent = quantity;

        cantidadItems -= 1
        totalPrecio -= Number((precio.textContent).replace("$",""))


        Totalitems.textContent = `Total(${cantidadItems} items)`;
        let spanPrecio = document.querySelector("#spanPrecio")
        spanPrecio.textContent = totalPrecio
        let subPrecio = document.querySelector("#subPrecio")
        subPrecio.textContent = totalPrecio
        }
    });

    increaseButton.addEventListener('click', () => {
        let quantity = parseInt(quantitySpan.textContent);
        quantity += 1;
        quantitySpan.textContent = quantity;


        cantidadItems += 1
        totalPrecio += Number((precio.textContent).replace("$",""))

        let Totalitems = document.querySelector("#Totalitems")
        Totalitems.textContent = `Total(${cantidadItems} items)`;
        let spanPrecio = document.querySelector("#spanPrecio")
        spanPrecio.textContent = totalPrecio
        let subPrecio = document.querySelector("#subPrecio")
        subPrecio.textContent = totalPrecio
        });
        })
        let Totalitems = document.querySelector("#Totalitems")
        Totalitems.textContent = `Total(${cantidadItems} items)`;
        let spanPrecio = document.querySelector("#spanPrecio")
        spanPrecio.textContent = totalPrecio
        let subPrecio = document.querySelector("#subPrecio")
        subPrecio.textContent = totalPrecio

// Inicializa el precio con la cantidad inicial
});