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
        "plants",
        "weapon"
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
}

// Preset 2: จาก `ที่เก็บถาวร 2.zip`
function applyPreset2() {
    hideAllCategories();
    forceShowItem("accessories1.png", "accessories");
    forceShowItem("jacket1.png", "jacket");
    forceShowItem("top2.png", "top");
    forceShowItem("pants2.png", "pants");
    forceShowItem("shoes2.png", "shoes");
}

// Preset 3: จาก `ที่เก็บถาวร 3.zip`
function applyPreset3() {
    hideAllCategories();
    forceShowItem("top1.png", "top");
    forceShowItem("pants1.png", "pants");
    forceShowItem("shoes1.png", "shoes");
}
function applyPreset4() {
    hideAllCategories();
}
function applyPreset5() {
    hideAllCategories();
    forceShowItem("top3.png", "top");
    forceShowItem("hat6.png", "hat");
    forceShowItem("hair3.png", "hair");
    forceShowItem("pants3.png", "pants");
    forceShowItem("shoes4.png", "shoes");
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