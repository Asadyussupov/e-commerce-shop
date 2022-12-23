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
    },
    {
        product: 'sproduct3',
        name: 'KEEPALL BANDOULIÈRE 50',
        price: 2500,
    },
    {
        product: 'sproduct4',
        name: 'LLOVER VUITTON SNOW DOWN JACKET',
        price: 4750,
    },
    {
        product: 'sproduct5',
        name: 'LVSE FLOWER QUILTED HOODIE JACKET',
        price: 3400,
    },
    {
        product: 'sproduct6',
        name: 'MONOGRAM PADDED LIGHT BLOUSON',
        price: 3200,
    },
    {
        product: 'sproduct7',
        name: 'DISTORTED DAMIER DENIM JACKET',
        price: 2200,
    },
    {
        product: 'sproduct8',
        name: 'LV TRAINER SNEAKER',
        price: 1250,
    },
    {
        product: 'sproduct9',
        name: 'RUN AWAY SNEAKER',
        price: 1190,
    },
    {
        product: 'sproduct10',
        name: 'LUXEMBOURG SNEAKER',
        price: 860,
    },
    {
        product: 'sproduct11',
        name: 'RUN AWAY SNEAKER',
        price: 1200,
    },
    {
        product: 'sproduct12',
        name: 'MY MONOGRAM ECLIPSE HAT',
        price: 365,
    },
    {
        product: 'sproduct13',
        name: 'LV AHEAD BEANIE',
        price: 560,
    },
    {
        product: 'sproduct14',
        name: 'LV AHEAD BEANIE Small',
        price: 320,
    },
    {
        product: 'sproduct15',
        name: 'NEO PETIT DAMIER BEANIE',
        price: 390,
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
    img.setAttribute('src', 'img/products/' +  i.product + '.jpg')
    tdimg.appendChild(img)

    tr.appendChild(tddelete)
    tr.appendChild(tdimg)
    tr.appendChild(tdname)
    tr.appendChild(tdprice)
    tr.appendChild(tdquant)
    tr.appendChild(tdtotal)

    console.log(tr);
    console.log(addhere);
    addhere.appendChild(tr)
}

for (const i of cart) {
    appendItem(items.filter(j => j.product == i)[0])
}

function deletItem(i) {
    destroyItem(i)
    location.reload()
}
