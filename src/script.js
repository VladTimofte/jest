import { greet, multiply, createProductObject, updateLocalStorage } from "../utils/utils.js";

function loadGreet(name) {
  const doomGreet = document.getElementById("greeting");
  doomGreet.innerHTML = greet(name);
}

loadGreet("Costi");

function clearAllProducts() {
  localStorage.setItem("products", "");
}

function addProduct(event) {
    event.preventDefault();

    const productName = document.getElementById("productName").value;
    const unitPrice = document.getElementById("unitPrice").value;
    const totalProducts = document.getElementById("totalProducts").value;

    const totalPrice = multiply(unitPrice, totalProducts);

    const product = createProductObject(
      productName,
      unitPrice,
      totalProducts,
      totalPrice
    );

    let lsProducts = JSON?.parse(localStorage.getItem("products")) || [];
    lsProducts.push(product);
    updateLocalStorage(lsProducts)

    updateProductTable()

    document.getElementById("productForm").reset();
  }

  function updateProductTable() {
    const productTableBody = document.querySelector('#productTable tbody')
    productTableBody.innerHTML = "";

    const products = JSON.parse(localStorage.getItem("products")) || []

    products.forEach((product) => {
        const row = document.createElement('tr')

        Object.values(product).forEach((value) => {
            const cell = document.createElement('td')
            cell.textContent = value
            row.appendChild(cell)
        })

        productTableBody.appendChild(row)
    })
  }

document.getElementById("clearAll").addEventListener("click", clearAllProducts);
document.getElementById("productForm").addEventListener("submit", addProduct);
