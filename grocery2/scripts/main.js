// CONSTANTS (page specifications)

const displayItemsDiv = "display-items";
const cartDiv = "cart";
const cartContentDiv = "cart-content";
const cartCountSpans = "cart-count";
const displayCartItemsDiv = "display-cart";
const cartTotal = "cart-total";
const orderButton = "order-button";
const pickupDate = 'pickup-date';
const pickupTime = 'pickup-time';
const orderMenu = "order-menu";
const firstNameInput = "first-name";
const lastNameInput = "last-name";
const minDateSpan = "min-date"; 
const enterAllErrorP = "enter-all-error";
const dateErrorP = "date-error";

// VARIABLES (customer specificcations)

let diets = [];
let chosenItems = {};

function toggleCart() {
    const cart = document.getElementById(cartDiv);

    if (cart.className.includes("visible")) {
        cart.className = cart.className.replace(" visible", "");
    } else {
        cart.className += " visible";
    }

    window.onclick = function(event) {
        const cart = document.getElementById(cartDiv);
        if (event.target == cart) {
            cart.className = cart.className.replace(" visible", "");
        }
      }
}

function updateDiet(diet) {
    if (diet == null || diet.trim == "")
        return;

    const index = diets.indexOf(diet);

    if (index >= 0) {
        diets.splice(index, 1);
    } else {
        diets.push(diet);
    }

    updateItems();
}

function updateItems() {
    document.getElementById(displayItemsDiv).innerHTML = "";
    items.forEach(item => {
        if (item.respectsDiets(diets))
            addItemToDiv(item);
    });
}

function addItemToDiv(item) {
    const itemDiv = document.createElement("div");
    itemDiv.id = (item.name.replace(" ", "-"));
    itemDiv.className = "item";

    const titleBrandDiv = document.createElement("div");
    titleBrandDiv.className = "title-brand";
    itemDiv.appendChild(titleBrandDiv);

    const title = document.createElement("h1");
    title.innerHTML = item.name;
    titleBrandDiv.appendChild(title);

    const brand = document.createElement("p");
    brand.innerHTML = item.brand;
    titleBrandDiv.appendChild(brand);

    const priceQuantityDiv = document.createElement("div");
    priceQuantityDiv.className = "price-quantity";
    itemDiv.appendChild(priceQuantityDiv);

    let price;

    if (item.discount != 0) {
        price = document.createElement("p");
        price.className = "discount";

        const discountedPrice = document.createElement("span");
        discountedPrice.innerHTML = (item.price - item.discount) + "$  ";
        price.appendChild(discountedPrice);
        
        const originalPrice = document.createElement("span");
        originalPrice.className = "original-price";
        originalPrice.innerHTML = item.price + "$";
        price.appendChild(originalPrice);
    } else {
        price = document.createElement("p");
        price.innerHTML = item.price + "$";
    }
    priceQuantityDiv.appendChild(price);

    const quantity = document.createElement("p");
    quantity.innerHTML = item.quantity;
    priceQuantityDiv.appendChild(quantity);

    const addButtonDiv = document.createElement("div");
    addButtonDiv.className = "add-button";
    itemDiv.appendChild(addButtonDiv);

    if (chosenItems[item.name] == undefined || chosenItems[item.name] <= 0) {
        addButtonDiv.appendChild(createAddItemButton(item.name));
    } else {
        addButtonDiv.appendChild(createItemCounter(item.name, chosenItems[item.name]));
    }

    document.getElementById(displayItemsDiv).appendChild(itemDiv);
}

function addItemToCart(event) {
    const itemName = event.target.getAttribute("data-item-name");

    if (chosenItems[itemName] == undefined || chosenItems[itemName] <= 0) {
        chosenItems[itemName] = 1;
    } else {
        chosenItems[itemName]++;
    }

    updateItems();
    updateCart();
}

function removeItemFromCart(event) {
    const itemName = event.target.getAttribute("data-item-name");
    chosenItems[itemName]--;

    updateItems();
    updateCart();
}

function updateCart() {
    const cart = document.getElementById(displayCartItemsDiv);
    const spans = document.getElementsByClassName(cartCountSpans);
    const totalCount = getTotalNumberItems();
    const total = calculateTotal();
    cart.innerHTML = "";

    for (let i = 0; i < spans.length; i++) {
        spans[i].innerHTML = totalCount;
    }

    document.getElementById(cartTotal).innerHTML = total;

    if (totalCount <= 0) {
        const noItem = document.createElement("p");
        noItem.innerHTML = "You don't have any item in you cart.";
        cart.appendChild(noItem);

        document.getElementById(orderButton).className = "disabled";

        return;
    }

    document.getElementById(orderButton).className = "";

    for (const [itemName, count] of Object.entries(chosenItems)) {
        if (count > 0) {
            const item = items.get(itemName);
            addItemToCartDiv(item);
        }
    }
}

function addItemToCartDiv(item) {
    const count = chosenItems[item.name];
    const totalPrice = Math.round((item.price - item.discount) * count * 100.0) / 100.0;

    const itemDiv = document.createElement("div");
    itemDiv.id = (item.name.replace(" ", "-"));
    itemDiv.className = "item";

    const titleBrandDiv = document.createElement("div");
    titleBrandDiv.className = "title-brand";
    itemDiv.appendChild(titleBrandDiv);

    const title = document.createElement("h1");
    title.innerHTML = item.name;
    titleBrandDiv.appendChild(title);

    const brand = document.createElement("p");
    brand.innerHTML = "Marque";
    titleBrandDiv.appendChild(brand);

    const priceQuantityDiv = document.createElement("div");
    priceQuantityDiv.className = "price-quantity";
    itemDiv.appendChild(priceQuantityDiv);

    const price = document.createElement("p");
    price.innerHTML = totalPrice + "$";
    priceQuantityDiv.appendChild(price);

    const quantity = document.createElement("p");
    quantity.innerHTML = (item.price - item.discount) + "/1 un";
    priceQuantityDiv.appendChild(quantity);

    const addButtonDiv = document.createElement("div");
    addButtonDiv.className = "add-button";
    itemDiv.appendChild(addButtonDiv);
    
    const addButton = createItemCounter(item.name, count, true);
    addButtonDiv.appendChild(addButton);
    document.getElementById(displayCartItemsDiv).appendChild(itemDiv);
}

function createAddItemButton(itemName) {
    const addButton = document.createElement("button");
    addButton.setAttribute("data-item-name", itemName);
    addButton.onclick = function(event) {
        addItemToCart(event);
    };
    addButton.innerHTML = "Ajouter";

    return addButton;
}

function createItemCounter(itemName, quantity) {
    const itemCounter = document.createElement("div");
    itemCounter.className = "item-counter";
    
    const removeButton = document.createElement("button");
    removeButton.setAttribute("data-item-name", itemName);
    removeButton.onclick = function(event) {
        removeItemFromCart(event);
    };
    removeButton.innerHTML = "-";
    itemCounter.appendChild(removeButton);

    const count = document.createElement("p");
    count.innerHTML = quantity;
    itemCounter.appendChild(count);

    const addButton = document.createElement("button");
    addButton.setAttribute("data-item-name", itemName);
    addButton.onclick = function(event) {
        addItemToCart(event);
    };
    addButton.innerHTML = "+";
    itemCounter.appendChild(addButton);

    return itemCounter;
}

function getTotalNumberItems() {
    let count = 0;
    const itemsCount = Object.values(chosenItems);

    for (let i = 0; i < itemsCount.length; i++) {
        count += itemsCount[i];
    }

    return count;
}

function calculateTotal() {
    let total = 0;

    for (const [itemName, count] of Object.entries(chosenItems)) {
        const item = items.get(itemName);
        const price = item.price - item.discount;
        total += price * count;
    }

    return Math.round(total * 100.0) / 100.0;
}

function toggleOrderMenu() {
    if (getTotalNumberItems() <= 0)
        return;
    
    const cart = document.getElementById(cartDiv);
    cart.className = cart.className.replace(" visible", "");

    const orderMenuDiv = document.getElementById(orderMenu);
    const date = new Date();
    let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    let month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    let hour = date.getHours() + 2 < 10 ? '0' + (date.getHours() + 2) : date.getHours() + 2;

    document.getElementById('pickup-date').value = `${year}-${month}-${day}`;
    document.getElementById('pickup-time').value = `${hour}:00`;

    if (orderMenuDiv.className.includes("visible")) {
        orderMenuDiv.className = orderMenuDiv.className.replace(" visible", "");
    } else {
        orderMenuDiv.className += " visible";
    }

    window.onclick = function(event) {
        const orderMenuDiv = document.getElementById(orderMenu);
        if (event.target == orderMenuDiv) {
            orderMenuDiv.className = orderMenuDiv.className.replace(" visible", "");
        }
      }
}

function submitOrder() {
    const date = document.getElementById(pickupDate).value.split('-');
    const time = document.getElementById(pickupTime).value.split(':');
    const firstName = document.getElementById(firstNameInput).value;
    const lastName = document.getElementById(lastNameInput).value;
    const enterAllError = document.getElementById(enterAllErrorP);
    const dateError = document.getElementById(dateErrorP);

    const chosenDate = new Date(date[0], date[1] - 1, date[2], time[0], time[1]);
    const minDate = (new Date());
    minDate.setHours((new Date()).getHours() + 2, 0, 0, 0);

    let errors = false;

    if (minDate > chosenDate) {
        document.getElementById(minDateSpan).innerHTML = minDate.toString();
        dateError.className = "visible";
        errors = true;
    } else {
        dateError.className = "";
    }
    
    if (firstName == undefined || firstName.trim() == "" || lastName == undefined || lastName.trim() == ""){
        enterAllError.className = "visible";
        errors = true;
    } else {
        enterAllError.className = "";
    }

    if (!errors) {
        const orderMenuDiv = document.getElementById(orderMenu);
        orderMenuDiv.className = orderMenuDiv.className.replace(" visible", "");

        chosenItems = {};
        updateItems();
        updateCart();
        displayNotification("Order successfully made");
    }
}

function displayNotification(message) {
    clearTimeout();
    const notification = document.getElementById("notification");
    document.getElementById("notification-message").innerHTML = message;
    notification.className = "visible";

    setTimeout(function() {
        const notification = document.getElementById("notification");
        notification.className = "";
    }, 3000);
}
