const addhere = document.querySelector('#appendhere')

const items = [
    {
        product: 'sproduct',
        name: 'KEEPALL BANDOULIÈRE 50',
        price: 5100,
    },
    {
        product: 'sproduct1',
        name: 'KEEPALL BANDOULIÈRE 50',
        price: 5100,
    },
    {
        product: 'sproduct2',
        name: 'KEEPALL BANDOULIÈRE 25',
        price: 2700,
    }
] 

let cart = getCart()

function appendItem(i) {
    let tr = document.createElement('tr')
    let tddelete = document.createElement('td')
    let tdname = document.createElement('td')
    tdname.innerHTML = i.name
    let tdprice = document.createElement('td')
    tdprice.innerHTML = "$" + i.price
    let tdtotal = document.createElement('td')
    tdtotal.innerHTML =  '$' + i.price
    let tdquant =  document.createElement('td')
    let tdimg = document.createElement('td')

    let aDelete = document.createElement('a')
    aDelete.setAttribute('href', '#')
    aDelete.setAttribute('onclick', `deletItem('${i.product}')`)
    aDelete.setAttribute('class', 'bi bi-x-circle')
    tddelete.appendChild(aDelete)
    
    let quantInp = document.createElement('input')
    quantInp.setAttribute('value', 1)
    tdquant.appendChild(quantInp)

    let img = document.createElement('img')
    img.setAttribute('src', '../img/products/' +  i.product + '.jpg')
    tdimg.appendChild(img)

    tr.appendChild(tddelete)
    tr.appendChild(tdimg)
    tr.appendChild(tdname)
    tr.appendChild(tdprice)
    tr.appendChild(tdquant)
    tr.appendChild(tdtotal)

    addhere.appendChild(tr)
}

for (const i of cart) {
    appendItem(items.filter(j => j.product == i)[0])
}

function deletItem(i) {
    destroyItem(i)
    location.reload()
}