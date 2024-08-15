
let label = document.getElementById('label')
let shoppingcart = document.getElementById('shoppingcart')
let basket = JSON.parse(localStorage.getItem('data')) || []

let mycart = () => {
    // console.log('cart')
    let cartIcon = document.getElementById('cartamount')
    cartIcon.innerHTML =  basket.map((x) => x.item).reduce((prev, next) => prev + next, 0)
    // console.log(search)
}
mycart()


console.log(basket)

let generateCart = () => {
    if (basket.length !==0){
        console.log('Item available')
    }else{
        label.innerHTML = `
        <div>
            <h3>Cart is Empty</h3>
            <a href="./index.html">Go back Home</a>
        </div>
        `

        
    }
}
generateCart()