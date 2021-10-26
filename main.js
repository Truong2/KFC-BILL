const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const list = [
    {
        name:'Pizza 1',
        quantity: 2,
        price: 4.5
    },
    {
        name:'Pizza 2',
        quantity: 3,
        price: 8.6
    },
    {
        name:'Pizza 3',
        quantity: 1,
        price: 5.5
    }
]
const Ship = 1.9;
function render(){
    const htmls = list.map((item,index) => {
        return `
        <div class="item-order">
        <div class="KFC-name">${item.name}</div>
        <div class="KFC-quantity">
            <span class="reduce">
            <i class="fas fa-minus"></i>
            </span>
            <span class="number-KFC">${item.quantity}</span>
            <span class="increase">
            <i class="fas fa-plus"></i>
            </span>
        </div>
        <div class="KFC-price">
            $
            <span class="price">${(item.price * item.quantity).toFixed(2)}</span>
            <i class="delete fas fa-times"></i>
        </div>
    </div>
        `
    })
    $('.list-order').innerHTML = htmls.join('');
    total()
    const increases = $$('.increase');
    increases.forEach((item,index) =>{
        item.onclick = function(){
            updateQuantity(index,list[index].quantity+1);
        }
    })
    const reduces = $$('.reduce');
    reduces.forEach((value,index) =>{
        value.onclick = function(){
            updateQuantity(index,list[index].quantity-1);  
        }
    })
    const del = $$('.delete');
    del.forEach((item,index)=>{
        item.onclick = function(){
            removeItem(index);
        }
    })
}
function total(){
    const total = list.reduce((acc,curr) => {
        return acc + (curr.price * curr.quantity);
    }
    ,0)
    const Sumtotal = (total + Ship).toFixed(2);
    $('.price-item').innerText = `$${total.toFixed(2)}`;
    $('.total').innerText = `$${Sumtotal}`;

}
function updateQuantity(index,quantity){
    if(quantity<1){
        return
    }
    else{
        list[index].quantity = quantity;
    }
    render();
}
function addItem(){
    list.push({
        name:`Pizza ${(Math.random() * 10).toFixed(1)}`,
        quantity: 1,
        price: Math.random() * 10
    })
    render();
}
function removeItem(index){
    list.splice(index,1);
    render();
}

const add = $('.add-KFC');
add.addEventListener('click',function(){
    addItem();
})
function start(){
    render();
}
start();