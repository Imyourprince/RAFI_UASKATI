// ... (fungsi addToCart, getCartData, dan displayInvoice dari sebelumnya) ...

function displayInvoice() {
    // ... (kode sebelumnya untuk mengambil data dan mengisi detail pelanggan) ...

    // Display product details in a table
    let total = 0;
    const invoiceProductsBody = invoiceProducts.querySelector('tbody');
    invoiceProductsBody.innerHTML = ''; // Clear previous product list
    for (const productName in productData) {
        const product = productData[productName];
        const row = invoiceProductsBody.insertRow();
        const nameCell = row.insertCell();
        const priceCell = row.insertCell();
        nameCell.textContent = product.name;
        priceCell.textContent = `Rp ${product.price.toLocaleString()}`;
        total += parseInt(product.price);
    }

    // ... (kode sebelumnya untuk menampilkan total harga) ...

    // Display invoice date
    const invoiceDate = document.getElementById('invoice-date');
    const today = new Date();
    invoiceDate.textContent = today.toLocaleDateString(); 
}
