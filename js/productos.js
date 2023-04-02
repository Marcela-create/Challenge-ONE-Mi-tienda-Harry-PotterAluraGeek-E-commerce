import {productosServicios} from "productos-servicios.js";

export const nuevoProducto = (name, price, imageUrl, id) => {
    const contenido = `
             <div class="product__card-edit hidden ">
                <button class="btnDelete" type="button"><img src="img/icons/delete.svg" alt="edition_icon" class="iconEdit" data-delete></button>
                <a href="edit-product?id=${id}"><img src="img/icons/edit.svg" alt="edition_icon" class="iconEdit" data-edit></a>
            </div>
            <div class="imgContainer">
                <img class="product__card--img" src = "${imageUrl}" alt = "imagen_del_producto">
            </div>
            <div class="product__card--info">
                <p class="product__card--title">${name}</p>
                <p class="product__card--price">${price}</p>
                <a href="../screens/viewProducts?id=${id}"  class="product__card-boton" data-verProducto>Ver producto</a>
            </div>
    `;

    const card = document.createElement('div');
    card.setAttribute('data-product', name)
    card.innerHTML = contenido;
    card.classList.add('product__card');

    const deleteBtn = card.querySelector('.btnDelete');
    deleteBtn.addEventListener('click', () => {
        productosServicios.deleteItem(id)
            .then(() => {
                render();
            })
            .catch((err) => console.error("hubo un error", err))
    });

    return card;
};

const productos = document.querySelector('[data-varitasCategory]');
const productos2 = document.querySelector('[data-tazasCategoria]');
const productos3 = document.querySelector('[data-bufandasCategoria]');
const productos4 = document.querySelector('[data-gorrosCategoria]');
const productos5 = document.querySelector('[data-buzosCategoria]');
const productos6 = document.querySelector('[data-soportesCategoria]');
const adminProducts = document.querySelector('[data-adminProducts]');

const render = async () => {
    try {
        const allProducts = await productosServicios.listaProductos();

        if (adminProducts) {
            adminProducts.innerHTML = '';
            allProducts.forEach(elemento => {
                adminProducts.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id));
            });
        }
        if (productos) {
            productos.innerHTML = '';
            allProducts.filter(product => product.categoria === 'varitas').forEach(elemento => {
                productos.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id));
            });
        }
        if (productos2) {
            productos2.innerHTML = '';
            allProducts.filter(product => product.categoria === 'tazas').forEach(elemento => {
                productos2.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id));
            });
        }
        if (productos3) {
            productos3.innerHTML = '';
            allProducts.filter(product => product.categoria === 'bufandas').forEach(elemento => {
                productos3.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id));
            });
        }
        if (productos4) {
            productos4.innerHTML = '';
            allProducts.filter(product => product.categoria === 'gorros').forEach(elemento => {
                productos4.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id));
            });
        }
        if (productos5) {
            productos5.innerHTML = '';
            allProducts.filter(product => product.categoria === 'buzos').forEach(elemento => {
                productos5.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id));
            });
        }if (productos6) {
            productos6.innerHTML = '';
            allProducts.filter(product => product.categoria === 'soportes').forEach(elemento => {
                productos6.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id));
            });
        }
    } catch (err) {
        console.error("Ocurrió un error", err);
    }
};

render();





