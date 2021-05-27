
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	var tablink = document.getElementById(tabName + "Tab");

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "flex";
	tablink.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(inputsDivId, displayDivId) {
	var inputs = document.getElementById(inputsDivId).getElementsByTagName("input");
    var displayDiv = document.getElementById(displayDivId);
	
	var restrictions = [];

	for (var i = 0; i < inputs.length; i++) {
		var input = inputs[i];

		if (input.checked) {
			restrictions.push(input.value);
		}
	}

	// displayDiv represents the <div> in the Products tab, which shows the product list, so we first set it empty
    displayDiv.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, restrictions);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		var productPrice = optionArray[i].price;

		var container = document.createElement("label");
		container.className = "items-container";
		container.appendChild(document.createTextNode(productName + " - " + productPrice + "$"));

		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		container.appendChild(checkbox);

		var checkmark = document.createElement("span");
		checkmark.className = "checkmark";
		container.appendChild(checkmark);

		displayDiv.appendChild(container); 
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var itemsContainer = document.getElementById('cart-items');
	itemsContainer.innerHTML = "";

	var notification = document.getElementById('cart-notification');
	
	// build list of selected item
	var list = document.createElement("ul");
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			var listElem = document.createElement("li");
			listElem.innerHTML = ele[i].value + " - " + getPrice(ele[i].value) + "$";
			list.appendChild(listElem);
			chosenProducts.push(ele[i].value);
		}
	}

	if (chosenProducts.length > 0) {
		itemsContainer.appendChild(list);

		notification.innerHTML = "Successfully put " + chosenProducts.length + " item(s) in the cart";
		notification.className += " visible";
		setTimeout(
			function() {
				var notification = document.getElementById('cart-notification');
				notification.className = notification.className.replace(" visible", "");
			}, 2000);
	} else {
		var text = document.createElement("p");
		text.innerHTML = "You don't have any item in your cart";
		itemsContainer.appendChild(text);
	}
		
	// add total price
	document.getElementById('total-price').innerHTML = "Total Price is " + getTotalPrice(chosenProducts);
		
}
