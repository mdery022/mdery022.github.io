	
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
		name: "Almond Flavored Granola",
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
	}
	// TODO: ADD 7 MORE ARTICLES
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "NutsFree") && (prods[i].nutsFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "Organic" && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
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