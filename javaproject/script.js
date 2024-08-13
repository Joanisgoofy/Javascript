let myshop =  document.getElementById('shop')
console.log(myshop)

let basket = []
let productShop = [
    {
        id: 'Hello',
        name: 'Casual Shirt',
        img: './images/img-1.jpg',
        desc: 'A very nice for male',
        price: 30000
    },
    {
        id: 'Green',
        name: 'Casual Shirt',
        img: './images/img-3.jpg',
        desc: 'A very nice for male',
        price: 45000
    },
    {
        id: 'White',
        name: 'Casual Shirt',
        img: './images/img-4.jpg',
        desc: 'A very nice for male',
        price: 30000
    },
    {
        id: 'Hello2',
        name: 'Casual Shirt',
        img: './images/img-5.png',
        desc: 'A very nice for male',
        price: 30000
    },
    {
        id: 'Hello3',
        name: 'Casual Shirt',
        img: './images/img-6.png',
        desc: 'A very nice for male',
        price: 30000
    },
    {
        id: 'Hello4',
        name: 'Casual Shirt',
        img: './images/img-7.png',
        desc: 'A very nice for male',
        price: 30000
    },
]


let shopData = () => {
    return(
        myshop.innerHTML = productShop.map((x) => {
            let {id, img, desc, price, name} = x
            return(`

                        <div id=product-id-${id} class="item">
                            <img src="${img}" alt="">
                            <h1>${name}</h1>
                            <p>${desc}</p>
                            <div class="cartdetails">
                                <div>
                                    <h3>&#x20A6; ${price}</h3>
                                    <div>
                                        <span onclick="decrease(${id})"><i class="bi bi-dash-lg"></i></span>
                                        <span id=${id}>0</span>
                                        <span onclick="increase(${id})"><i class="bi bi-plus-lg"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
        `)
        }).join('')
    ) 
}
shopData()


let increase = (id) => {
    let selected = id
    // console.log(selected.id)
    let search = basket.find((x) => x.id === selected.id)
    // console.log(search)
    if (search === undefined){
        basket.push({
            id: selected.id,
            item: 1
        })
    }else{
        search.item +=1
    }
    
    // console.log(basket)
    update(selected.id)

}

let decrease = (id) => {
    let selected = id
    // console.log(selected.id)
    let search = basket.find((x) => x.id === selected.id)
    // console.log(search)
    if (search.item === 0)return;
    else{
        search.item -= 1
    }
    
    // console.log(basket)
    update(selected.id)
}

let update = (id) => {
    console.log(id)

    let search  = basket.find((x) => x.id === id)
    document.getElementById(id).innerHTML = search.item
    
}