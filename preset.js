function hideAllCategories() {
	hideSpecificCategories([
		"topunderwear",
		"shoes",
		"pants",
		"skirt",
		"top",
		"dress",
		"jacket",
		"accessories",
		"hat",
		"weapon", "maccessories", "mask","hair"
	]);
}

// Preset 1: จาก `ที่เก็บถาวร.zip`
function applyPreset1() {
	hideAllCategories();
	forceShowItem("plants5.png", "plants");
	forceShowItem("hat5.png", "hat");
	forceShowItem("dress1.png", "dress");
	forceShowItem("shoes3.png", "shoes");
	forceShowItem("topunderwear1.png", "topunderwear");
	forceShowItem("hair1.png", "hair");
	forceShowItem("weapon6.png", "weapon");
}

// Preset 2: จาก `ที่เก็บถาวร 2.zip`
function applyPreset2() {
	hideAllCategories();
	forceShowItem("accessories1.png", "accessories");
	forceShowItem("jacket1.png", "jacket");
	forceShowItem("top2.png", "top");
	forceShowItem("pants2.png", "pants");
	forceShowItem("shoes2.png", "shoes");
	forceShowItem("hair2.png", "hair");
}

// Preset 3: จาก `ที่เก็บถาวร 3.zip`
function applyPreset3() {
	hideAllCategories();
	forceShowItem("top1.png", "top");
	forceShowItem("pants1.png", "pants");
	forceShowItem("shoes1.png", "shoes");
	forceShowItem("hair1.png", "hair");
}

function applyPreset4() {
	hideAllCategories();
	forceShowItem("hair1.png", "hair");
}

function applyPreset5() {
	hideAllCategories();
	forceShowItem("top3.png", "top");
	forceShowItem("hat6.png", "hat");
	forceShowItem("hair3.png", "hair");
	forceShowItem("pants3.png", "pants");
	forceShowItem("shoes4.png", "shoes");
}

function applyPreset6() {
	hideAllCategories();
	forceShowItem("weapon5.png", "weapon");
	forceShowItem("dress2.png", "dress");
	forceShowItem("hair1.png", "hair");
}

function applyPreset7() {
	hideAllCategories();
	forceShowItem("weapon7.png", "weapon");
	forceShowItem("pants5.png", "pants");
	forceShowItem("top5.png", "top");
}

function applyPreset8() {
	hideAllCategories();
	forceShowItem("shoes6.png", "shoes");
	forceShowItem("pants4.png", "pants");
	forceShowItem("top4.png", "top");
	forceShowItem("hat8.png", "hat");
}

function applyPreset9() {
	hideAllCategories();
	forceShowItem("dress3.png", "dress");
	forceShowItem("accessories3.png", "accessories");
	forceShowItem("hat9.png", "hat");
}

function applyPreset10() {
	hideAllCategories();
	forceShowItem("mask1.png", "mask");
	forceShowItem("weapon9.png", "weapon");
	forceShowItem("top7.png", "top");
	forceShowItem("shoes8.png", "shoes");
	forceShowItem("hair6.png", "hair");
}

function applyPreset11() {
	hideAllCategories();
	forceShowItem("weapon8.png", "weapon");
	forceShowItem("top6.png", "top");
	forceShowItem("pants6.png", "pants");
	forceShowItem("shoes7.png", "shoes");
	forceShowItem("hair5.png", "hair");
}

// Utility: Keep your original forceShowItem()
function forceShowItem(itemId, categoryName) {
	const selectedItem = document.getElementById(itemId);
	if (selectedItem) {
		const categoryItems = document.querySelectorAll(`.${categoryName}`);
		categoryItems.forEach(item => item.style.visibility = 'hidden');

		selectedItem.style.visibility = "visible";
		selectedItem.style.display = "block";
		selectedItem.style.position = "absolute";
		selectedItem.style.left = "0";
		selectedItem.style.top = "0";
		selectedItem.style.zIndex = getZIndex(categoryName);
	} else {
		console.warn(`Item not found: ${itemId} in category ${categoryName}`);
	}
}