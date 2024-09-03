export function add(a, b) {
    return a + b
}

export function multiply(a, b) {
    return a * b
}

export function greet(name) {
    return `Hello ${name}!`
}

export function updateLocalStorage(data) {
    localStorage.setItem("products", JSON.stringify(data))
}

export function createProductObject(productName, unitPrice, totalProducts, totalPrice) {
    return {
        productName: productName,
        unitPrice: Math.abs(unitPrice),
        totalProducts: Math.abs(totalProducts),
        totalPrice: Math.abs(totalPrice),
    }
}