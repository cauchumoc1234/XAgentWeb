const items = [{
        name: 'Nike Air Force 1 Low Black Tie Dye (W)',
        price: 249,
        quantity: 1,

    },
    {
        name: 'Nike Air Force 2 Low Black Tie Dye (W)',
        price: 249,
        quantity: 1,

    },
    {
        name: 'Nike Air Force 3 Low Black Tie Dye (W)',
        price: 249,
        quantity: 1,

    },

]
const SHIPPING = 1


function add() {
    items.push({
        name: `Nike Air Force ${Math.floor(Math.random()*20+3)} Low Black Tie Dye (W) `,
        quantity: 1,
        price: Math.random() * 100
    })
    render()
}

function remove(index) {
    items.splice(index, 1)
    render();
}

function updateQuantity(index, quantity) {
    if (quantity < 1) {
        return
    }
    items[index].quantity = quantity
    render()
}
scr = 'image' + '/' + 'product_1.jpg';

function change_red() {
    this.style.backgroundColor = "red";
}

function render() {
    let subTotal = 0;
    items.forEach(item => {
        subTotal += item.quantity * item.price
    })
    const total = subTotal + SHIPPING;

    const html = items.map(item => `
            <li class="order-item">
                    <img class="products" src="${scr}">
                    <span class="item-name">${item.name}</span>

                    <span class="item-quantity">
                        <button class="dec">-</button>
                        <input type="number" class="quantity" value="${item.quantity}" />
                        <button class= "inc">+</button>
                    </span>
                    <span class="item-price">
                        <span>$${(item.quantity * item.price).toFixed(2)}</span>
                    <button class="delete">x</button>
                    </span>
                </li>
        `).join('')
    document.getElementById('order-items').innerHTML = html
    var deleteButtons = document.getElementsByClassName('delete')
    var decButtons = document.getElementsByClassName('dec')
    var incButtons = document.getElementsByClassName('inc')
    for (let i = 0; i < deleteButtons.length; i++) {
        decButtons[i].addEventListener("click", function() { updateQuantity(i, items[i].quantity - 1); });
        incButtons[i].addEventListener('click', function() {
                updateQuantity(i, items[i].quantity + 1)
            }

        )
        deleteButtons[i].addEventListener("click", function() {
            remove(i)
        })
    }


    document.getElementById("sub-total").innerText = `$${subTotal.toFixed(2)}`
    document.getElementById("shipping").innerText = `$${SHIPPING}`
    document.getElementById("total").innerText = `$${total.toFixed(2)}`
}


document.getElementById("btn-add").addEventListener('click',
    add);
render();