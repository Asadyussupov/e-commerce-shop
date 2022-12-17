function addToCart(prod) {
    let cart = getCart()
    if (!cart.includes(prod)) {
        cart.push(prod)
        localStorage.setItem('cart', JSON.stringify(cart))
    } else {
        console.log('areadey exists');
    }
    // console.log(cart.includes(prod));
}

function getCart() {
    if (localStorage.getItem('cart') != null) {
        return JSON.parse(localStorage.getItem('cart')) 
    } else {
        localStorage.setItem('cart', JSON.stringify([]))
        return getCart()
    }
}

function destroyItem(prod) {
    if (getCart().includes(prod)) {
        localStorage.setItem('cart', JSON.stringify(getCart().filter(i => i != prod)))
    }
}