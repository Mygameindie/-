function applyPreset1() {
    // Hide all clothing items first (except underwear, boxers, and sweatshirt)
    hideSpecificCategories([
        "top1", "top2", "pants1", "pants2", "skirt1", "skirt2", 
        "shoes1", "shoes2", "jacket1", "jacket2", "dress1", "dress2", 
        "sweatshirt1", "sweatshirt2", "hat1", "hat2", "socks1", "socks2", 
        "accessories", "leaf1", "leaf2",
        "topunderwear1", "bottomunderwear1", "boxers1", "boxers2",
        "onepiece1", "topunderwear2", "accessories1", "accessories2"
    ]);

    // Ensure that the required items are explicitly set to visible
    showItem("top1_3.png", "top1"); 
    showItem("top2_2.png", "top2"); 
    showItem("pants2_2.png", "pants2"); 
    showItem("skirt1_2.png", "skirt1"); 
    showItem("shoes1_2.png", "shoes1");
    showItem("shoes2_2.png", "shoes2");
    showItem("socks1_2.png", "socks1");
    showItem("socks2_1.png", "socks2");
	showItem("topunderwear1_1.png", "topunderwear1"); 
    showItem("bottomunderwear1_1.png", "bottomunderwear1"); 
showItem("bottomunderwear2_1.png", "bottomunderwear2"); 
    showItem("boxers2_1.png", "boxers");
}

function showItem(itemId, categoryName) {
    const selectedItem = document.getElementById(itemId);
    if (selectedItem) {
        selectedItem.style.visibility = "visible"; // Force visibility
        selectedItem.style.display = "block"; // Ensure it's not hidden
        selectedItem.style.position = "absolute"; // Keep absolute positioning
        selectedItem.style.left = "0"; // Ensure alignment
        selectedItem.style.top = "0"; // Reset any displacement
        selectedItem.style.zIndex = getZIndex(categoryName); // Apply correct layering
    } else {
        console.warn(`Item not found: ${itemId} in category ${categoryName}`);
    }
}



function applyUnderwearOnlyPreset() {
    // Hide all clothing items except underwear and boxers
    hideSpecificCategories([
        "top1", "top2", "pants1", "pants2", "skirt1", "skirt2", 
        "shoes1", "shoes2", "jacket1", "jacket2", "dress1", "dress2", 
        "sweatshirt1", "sweatshirt2", "hat1", "hat2", "socks1", "socks2", 
        "accessories", "leaf1", "leaf2",
        "topunderwear1", "bottomunderwear1", "boxers1", "boxers2",
        "onepiece1", "topunderwear2", "accessories1", "accessories2"
    ]);

    // Ensure top and bottom underwear remain visible
    showItem("topunderwear1_1.png", "topunderwear1"); 
    showItem("bottomunderwear1_1.png", "bottomunderwear1"); 
showItem("bottomunderwear2_1.png", "bottomunderwear2"); 
    showItem("boxers2_1.png", "boxers");
}

function showItem(itemId, categoryName) {
    const selectedItem = document.getElementById(itemId);
    if (selectedItem) {
        selectedItem.style.visibility = "visible"; // Force visibility
        selectedItem.style.display = "block"; // Ensure it's not hidden
        selectedItem.style.position = "absolute"; // Keep absolute positioning
        selectedItem.style.left = "0"; // Ensure alignment
        selectedItem.style.top = "0"; // Reset any displacement
        selectedItem.style.zIndex = getZIndex(categoryName); // Apply correct layering
    } else {
        console.warn(`Item not found: ${itemId} in category ${categoryName}`);
    }
}

function applyCustomPreset() {
    // Hide all clothing items first
    hideSpecificCategories([
        "top1", "top2", "pants1", "pants2", "skirt1", "skirt2", 
        "shoes1", "shoes2", "jacket1", "jacket2", "dress1", "dress2", 
        "sweatshirt1", "sweatshirt2", "hat1", "hat2", "socks1", "socks2", 
        "accessories", "leaf1", "leaf2",
        "topunderwear1", "bottomunderwear1", "boxers1", "boxers2",
        "onepiece1", "topunderwear2", "accessories1", "accessories2"
    ]);

    // Show all uploaded items
    showItem("skirt1_1.png", "skirt1");
    showItem("pants1_1.png", "pants1");
    showItem("shoes1_1.png", "shoes1");
    showItem("socks1_1.png", "socks1");
    showItem("top1_1.png", "top1");
    showItem("shoes2_1.png", "shoes2");
    showItem("socks2_1.png", "socks2");
    showItem("jacket2_1.png", "jacket2");
    showItem("top2_1.png", "top2");
    showItem("pants2_1.png", "pants2");
    showItem("hat1_1.png", "hat1");
    showItem("leaf1_1.png", "leaf1");
	showItem("topunderwear1_1.png", "topunderwear1"); 
    showItem("bottomunderwear1_1.png", "bottomunderwear1"); 
showItem("bottomunderwear2_1.png", "bottomunderwear2"); 
    showItem("boxers2_1.png", "boxers");
}

function showItem(itemId, categoryName) {
    const selectedItem = document.getElementById(itemId);
    if (selectedItem) {
        selectedItem.style.visibility = "visible"; // Force visibility
        selectedItem.style.display = "block"; // Ensure it's not hidden
        selectedItem.style.position = "absolute"; // Keep absolute positioning
        selectedItem.style.left = "0"; // Ensure alignment
        selectedItem.style.top = "0"; // Reset any displacement
        selectedItem.style.zIndex = getZIndex(categoryName); // Apply correct layering
    } else {
        console.warn(`Item not found: ${itemId} in category ${categoryName}`);
    }
}

function applypajamasPreset() {
    // Hide all clothing items first
    hideSpecificCategories([
        "top1", "top2", "pants1", "pants2", "skirt1", "skirt2", 
        "shoes1", "shoes2", "jacket1", "jacket2", "dress1", "dress2", 
        "sweatshirt1", "sweatshirt2", "hat1", "hat2", "socks1", "socks2", 
        "accessories", "leaf1", "leaf2",
        "topunderwear1", "bottomunderwear1", "boxers1", "boxers2",
        "onepiece1", "topunderwear2", "accessories1", "accessories2"
    ]);

    // Show all uploaded items (updated)
    showItem("hat2_1.png", "hat1");
    showItem("pants2_3.png", "pants2");
    showItem("pants1_2.png", "pants1");
    showItem("top2_3.png", "top2");
    showItem("shoes1_3.png", "shoes1");
    showItem("shoes2_3.png", "shoes2");
    showItem("top1_4.png", "top1");
	showItem("topunderwear1_1.png", "topunderwear1"); 
    showItem("bottomunderwear1_1.png", "bottomunderwear1"); 
showItem("bottomunderwear2_1.png", "bottomunderwear2"); 
    showItem("boxers2_1.png", "boxers");
}

function showItem(itemId, categoryName) {
    const selectedItem = document.getElementById(itemId);
    if (selectedItem) {
        selectedItem.style.visibility = "visible"; // Force visibility
        selectedItem.style.display = "block"; // Ensure it's not hidden
        selectedItem.style.position = "absolute"; // Keep absolute positioning
        selectedItem.style.left = "0"; // Ensure alignment
        selectedItem.style.top = "0"; // Reset any displacement
        selectedItem.style.zIndex = getZIndex(categoryName); // Apply correct layering
    } else {
        console.warn(`Item not found: ${itemId} in category ${categoryName}`);
    }
}


function applyPresetBeach() {
    // Hide all clothing items first (except underwear and boxers)
   hideSpecificCategories([
        "top1", "top2", "pants1", "pants2", "skirt1", "skirt2", 
        "shoes1", "shoes2", "jacket1", "jacket2", "dress1", "dress2", 
        "sweatshirt1", "sweatshirt2", "hat1", "hat2", "socks1", "socks2", 
        "accessories", "leaf1", "leaf2",
        "topunderwear1", "bottomunderwear1", "boxers1", "boxers2",
        "onepiece1", "topunderwear2", "accessories1", "accessories2"
    ]);
    // Ensure that the required items are explicitly set to visible
    showItem("topunderwear1_2.png", "top1"); 
    showItem("bottomunderwear1_2.png", "pants1"); 
    showItem("boxers2_2.png", "pants2"); 
}

function showItem(itemId, categoryName) {
    const selectedItem = document.getElementById(itemId);
    if (selectedItem) {
        selectedItem.style.visibility = "visible"; // Force visibility
        selectedItem.style.display = "block"; // Ensure it's not hidden
        selectedItem.style.position = "absolute"; // Keep absolute positioning
        selectedItem.style.left = "0"; // Ensure alignment
        selectedItem.style.top = "0"; // Reset any displacement
        selectedItem.style.zIndex = getZIndex(categoryName); // Apply correct layering
    } else {
        console.warn(`Item not found: ${itemId} in category ${categoryName}`);
    }
}

function applyReversePreset() {
    // Hide all clothing items first
   hideSpecificCategories([
        "top1", "top2", "pants1", "pants2", "skirt1", "skirt2", 
        "shoes1", "shoes2", "jacket1", "jacket2", "dress1", "dress2", 
        "sweatshirt1", "sweatshirt2", "hat1", "hat2", "socks1", "socks2", 
        "accessories", "leaf1", "leaf2",
        "topunderwear1", "bottomunderwear1", "boxers1", "boxers2",
        "onepiece1", "topunderwear2", "accessories1", "accessories2"
    ]);

    // Show all uploaded items
    showItem("pants2_4.png", "pants2");
    showItem("pants1_3.png", "pants1");
    showItem("top2_4.png", "top2");
    showItem("shoes1_1.png", "shoes1");
    showItem("shoes2_1.png", "shoes2");
    showItem("top1_5.png", "top1");
    showItem("jacket1_1.png", "jacket1");
    showItem("socks1_1.png", "socks1");
    showItem("socks2_1.png", "socks2");
	showItem("topunderwear1_1.png", "topunderwear1"); 
    showItem("bottomunderwear1_1.png", "bottomunderwear1"); 
showItem("bottomunderwear2_1.png", "bottomunderwear2"); 
    showItem("boxers2_1.png", "boxers");
}

function showItem(itemId, categoryName) {
    const selectedItem = document.getElementById(itemId);
    if (selectedItem) {
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

function applyIntrovertPreset() {
    // Hide all clothing items first
    hideSpecificCategories([
        "top1", "top2", "pants1", "pants2", "skirt1", "skirt2", 
        "shoes1", "shoes2", "jacket1", "jacket2", "dress1", "dress2", 
        "sweatshirt1", "sweatshirt2", "hat1", "hat2", "socks1", "socks2", 
        "accessories", "leaf1", "leaf2",
        "topunderwear1", "bottomunderwear1", "boxers1", "boxers2",
        "onepiece1", "topunderwear2", "accessories1", "accessories2"
    ]);

    // Show all uploaded items for the introvert style
    showItem("pants2_1.png", "pants2");
    showItem("pants1_3.png", "pants1");
    showItem("top2_1.png", "top2");
    showItem("shoes1_1.png", "shoes1");
    showItem("shoes2_1.png", "shoes2");
    showItem("top1_5.png", "top1");
    showItem("jacket1_1.png", "jacket1");
    showItem("jacket2_1.png", "jacket2");
    showItem("socks1_1.png", "socks1");
    showItem("socks2_1.png", "socks2");
	showItem("topunderwear1_1.png", "topunderwear1"); 
    showItem("bottomunderwear1_1.png", "bottomunderwear1"); 
showItem("bottomunderwear2_1.png", "bottomunderwear2"); 
    showItem("boxers2_1.png", "boxers");
}

function showItem(itemId, categoryName) {
    const selectedItem = document.getElementById(itemId);
    if (selectedItem) {
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

function applyTennisPreset() {
    // Hide all clothing items first
    hideSpecificCategories([
        "top1", "top2", "pants1", "pants2", "skirt1", "skirt2", 
        "shoes1", "shoes2", "jacket1", "jacket2", "dress1", "dress2", 
        "sweatshirt1", "sweatshirt2", "hat1", "hat2", "socks1", "socks2", 
        "accessories", "leaf1", "leaf2",
        "topunderwear1", "bottomunderwear1", "boxers1", "boxers2",
        "onepiece1", "topunderwear2", "accessories1", "accessories2"
    ]);

    // Show all uploaded items for the tennis style
    showItem("top2_4.png", "top2");
    showItem("top1_1.png", "top1");
    showItem("shoes1_1.png", "shoes1");
    showItem("hat1_1.png", "hat1");
    showItem("pants2_4.png", "pants2");
    showItem("skirt1_1.png", "skirt1");
    showItem("shoes2_1.png", "shoes2");
    showItem("socks1_1.png", "socks1");
    showItem("socks2_1.png", "socks2");
    showItem("pants1_1.png", "pants1");
    showItem("leaf1_1.png", "leaf1"); // Newly added leaf
	showItem("topunderwear1_1.png", "topunderwear1"); 
    showItem("bottomunderwear1_1.png", "bottomunderwear1"); 
showItem("bottomunderwear2_1.png", "bottomunderwear2"); 
    showItem("boxers2_1.png", "boxers");
}

function showItem(itemId, categoryName) {
    const selectedItem = document.getElementById(itemId);
    if (selectedItem) {
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

function applyCustomPreset2() {
    // Hide all clothing items first
    hideSpecificCategories([
        "top1", "top2", "pants1", "pants2", "skirt1", "skirt2", 
        "shoes1", "shoes2", "jacket1", "jacket2", "dress1", "dress2", 
        "sweatshirt1", "sweatshirt2", "hat1", "hat2", "socks1", "socks2", 
        "accessories", "leaf1", "leaf2",
        "topunderwear1", "bottomunderwear1", "boxers1", "boxers2",
        "onepiece1", "topunderwear2", "accessories1", "accessories2"
    ]);

    // Show all uploaded items
    showItem("skirt1_1.png", "skirt1");
    showItem("pants1_1.png", "pants1");
    showItem("shoes1_1.png", "shoes1");
    showItem("socks1_1.png", "socks1");
    showItem("shoes2_1.png", "shoes2");
    showItem("socks2_1.png", "socks2");
    showItem("jacket2_1.png", "jacket2");
    showItem("pants2_1.png", "pants2");
    showItem("hat1_1.png", "hat1");
    showItem("leaf1_1.png", "leaf1");
	showItem("topunderwear1_1.png", "topunderwear1"); 
    showItem("bottomunderwear1_1.png", "bottomunderwear1"); 
showItem("bottomunderwear2_1.png", "bottomunderwear2"); 
    showItem("boxers2_1.png", "boxers");
}
function showItem(itemId, categoryName) {
    const selectedItem = document.getElementById(itemId);
    if (selectedItem) {
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