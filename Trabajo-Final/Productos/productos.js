const products = [
    { name: 'Vino Bonarda Orgánico 750ml', price: 5936, stock: 40, image: 'images/vino-bonarda.jpg' },
    { name: 'Vinagre de Manzana Orgánico 250cc', price: 5911.38, stock: 45, image: 'images/vinagre-manzana.jpg' },
    { name: 'Té Verde Matcha apto Vegano 60 Cap', price: 11463.60, stock: 18, image: 'images/te-verde.jpg' },
    { name: 'Harina integral extrafina orgánica 1 kilo', price: 2802, stock: 30, image: 'images/harina-integral.jpg' },
    { name: 'Barra de Chocolate Orgánico 60% Cacao 100gr', price: 4220, stock: 22, image: 'images/chocolate-organico.jpg' },
    { name: 'Arroz Blanco Grano Largo 750gr', price: 3775.20, stock: 25, image: 'images/arroz-blanco.jpg' },
    { name: 'Avena Arrollada Tradicional 300gr', price: 5569.86, stock: 19, image: 'images/avena.jpg' },
    { name: 'Granola Manzana 400gr', price: 5815.92, stock: 11, image: 'images/granola.jpg' },
    { name: 'Lentejas 300gr', price: 4369, stock: 26, image: 'images/lentejas.jpg' },
    { name: 'Cúrcuma en polvo 50gr', price: 3849.13, stock: 24, image: 'images/curcuma-enpolvo.jpg' },
    { name: 'Mermelada Frutos del Bosque 212gr', price: 3680, stock: 11, image: 'images/mermelada-frutos.jpg' },
    { name: 'Vino Moscatel 750ml', price: 5936, stock: 19, image: 'images/vino-moscatel.jpg' },
    
];
function loadProducts() {
    const productListDiv = document.getElementById('product-list');
    productListDiv.innerHTML = ''; // Limpia lista de productos antes de cargar

    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        productDiv.innerHTML = `
            <img src="${product.image}"
            <span>${product.name} - $${product.price.toFixed(2)}</span>
            <input type="number" id="quantity-${index}" min="0" max="${product.stock}" value="0">
            <span>En stock: ${product.stock}</span>
        `;
        productListDiv.appendChild(productDiv);
    });
}
function calculateTotal() {
    let total = 0;
    let valid = true;
    const messages = [];

    products.forEach((product, index) => {
        const quantityInput = document.getElementById(`quantity-${index}`);
        const quantity = parseInt(quantityInput.value);

        if (isNaN(quantity) || quantity < 0 || quantity > product.stock) {
            valid = false;
            messages.push(`${product.name} no tiene suficiente stock o cantidad inválida.`);
        } else {
            total += quantity * product.price;
        }
    });

    if (valid) {
        document.getElementById('message').innerHTML = '';
        document.getElementById('total').innerHTML = `Total de la compra: $${total.toFixed(2)}`;
    } else {
        document.getElementById('message').innerHTML = `<span id="error">${messages.join('<br>')}</span>`;
        document.getElementById('total').innerHTML = '';
    }
}

document.getElementById('buy-button').addEventListener('click', calculateTotal);

// Carga productos al cargar la página
window.onload = loadProducts;
