	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Yogourt",
		lactoseFree: false,
		nutsFree: true,
		organic: false,
		price: 5.99
	},
	{
		name: "Almond Granola Bar",
		lactoseFree: true,
		nutsFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "Salmon",
		lactoseFree: true,
		nutsFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "Organic Eggs",
		lactoseFree: true,
		nutsFree: true,
		organic: true,
		price: 0
	},
	{
		name: "Organic Almond Yogourt",
		lactoseFree: false,
		nutsFree: false,
		organic: true,
		price: 0
	},
	{
		name: "Organic Cheese",
		lactoseFree: false,
		nutsFree: true,
		organic: true,
		price: 0
	},
	{
		name: "Almonds",
		lactoseFree: true,
		nutsFree: false,
		organic: false,
		price: 0
	},
	{
		name: "Apple",
		lactoseFree: true,
		nutsFree: true,
		organic: false,
		price: 0
	},
	{
		name: "Organic Strawberry",
		lactoseFree: true,
		nutsFree: true,
		organic: true,
		price: 0
	},
	{
		name: "Cerials",
		lactoseFree: true,
		nutsFree: false,
		organic: false,
		price: 0
	}
	// TODO: ADD 7 MORE ARTICLES
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions) {
	let products = [];
	for (let i=0; i<prods.length; i+=1) {
		var selected = true;
		var prod = prods[i];

		for (var j = 0; j < restrictions.length; j++) {
			var restriction = restrictions[j];
	
			if ((restriction == "LactoseFree") && (prod.lactoseFree != true)
				|| (restriction == "NutsFree") && (prod.nutsFree != true)
				|| (restriction == "Organic") && (prod.organic != true)){
				selected = false;
			}
		}

		if (selected) {
			products.push(prod);
		}		
	}
	
	// Custom sort function by price
	products.sort(function(elem1, elem2){
		return elem1.price > elem2.price ? 1 : -1;
	})
	return products;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}