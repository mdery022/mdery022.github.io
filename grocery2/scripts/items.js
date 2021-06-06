function Item(name, lactoseFree, nutsFree, origanic, price, discount, brand, quantity) {
	this.name = name;
	this.lactoseFree = lactoseFree;
	this.nutsFree = nutsFree;
	this.organic = origanic;
	this.price = price;
	this.discount = discount;
	this.brand = brand;
	this.quantity = quantity;

	this.respectsDiets = function(diets) {
		if (diets == null)
			return;
	
		for (let i = 0; i < diets.length; i++) {
			const diet = diets[i];
	
			if (!this[diet]) {
				return false;
			}
		}
	
		return true;
	}
}

// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var items = [
	new Item("Vanilla Yogourt", false, true, false, 3.99, 0.00, "Activia", "650g"), ,
	new Item("Almond Granola Bar", true, false, false, 2.35, 0.50, "Nature Valley", "210g"),
	new Item("Smoked Salmon", true, true, false, 15.99, 3.00, "Vasco", "300g"),
	new Item("Organic Eggs", true, true, true, 8.99, 0.00, "PC Organics", "12un"),
	new Item("Organic Almond Yogourt", false, false, true, 5.49, 0.00, "Liberte", "500g"),
	new Item("Organic Old Cheddar", false, true, true, 6.39, 0.00, "PC Organics", "200g"),
	new Item("McIntosh Apple", true, true, false, 0.99, 0.00, "", "1un"),
	new Item("Organic Strawberry", true, true, true, 6.99, 0.00, "Sunrise", "450g"),
	new Item("Honey Nut Cheerios", true, false, false, 3.49, 0.00, "General Mills", "430g"),
	new Item("Unsalted Raw California Almonds", true, false, false, 10.35, 0.00, "President's Choice", "400g")
];

items.get = function(itemName) {
	for (let i = 0; i < this.length; i++){
		if (items[i].name == itemName)
			return items[i];
	}
	return null;
}

items.sort(function(elem1, elem2){
	return elem1.price > elem2.price ? 1 : -1;
});