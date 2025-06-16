document.addEventListener("DOMContentLoaded", () => {
    const presetScrollBar = document.getElementById("presetScrollBar");
    const categoryScrollBar = document.getElementById("categoryScrollBar");
    const buttonContainer = document.querySelector(".scrollable-buttons");

    // === PRESET CONFIG ===
    const presets = [
     { name: "remove", action: applyPreset4 }, 
	 { name: "OC", action: applyPreset1 },  
    { name: "Default", action: applyPreset2 },	
    { name: "future", action: applyPreset3 },	
    
	{ name: "breakdancer", action: applyPreset5 },  
	{ name: "parasol", action: applyPreset6 },  
    // จาก ที่เก็บถาวร 3.zip
     // จาก ที่เก็บถาวร 2.zip

		// จาก ที่เก็บถาวร.zip
    ];

    // Use jsonFiles from global context if available
    const categories = (typeof jsonFiles !== 'undefined')
        ? jsonFiles.map(file => file.replace('.json', ''))
        : [
            "hair", "face", "topunderwear", "shoes", "pants", "skirt",
            "top", "dress", "jacket", "accessories", "hat", "plants", "weapon"
        ];

    function generatePresetButtons() {
        presetScrollBar.innerHTML = "";
        presets.forEach(preset => {
            const presetButton = document.createElement("button");
            presetButton.textContent = preset.name;
            presetButton.classList.add("preset-button");
            presetButton.onclick = preset.action;
            presetScrollBar.appendChild(presetButton);
        });
    }

    function generateCategoryButtons() {
        categoryScrollBar.innerHTML = "";
        categories.forEach(cat => {
            const tab = document.createElement("button");
            tab.textContent = cat;
            tab.classList.add("preset-button");
            tab.onclick = () => showCategoryButtons(cat);
            categoryScrollBar.appendChild(tab);
        });
    }

    function showCategoryButtons(categoryName) {
        buttonContainer.innerHTML = "";

        const items = document.querySelectorAll(`img.${categoryName}`);
        items.forEach(item => {
            const buttonWrap = document.createElement('div');
            buttonWrap.classList.add('button-wrap');

            const button = document.createElement("img");
            button.src = item.src.replace(".png", "b.png");
            button.classList.add("item-button");
            button.onclick = () => toggleVisibility(item.id, categoryName);
            buttonWrap.appendChild(button);

            const colorButton = document.createElement("button");
            colorButton.textContent = "🎨";
            colorButton.classList.add("color-change-button");
            colorButton.onclick = (e) => {
                e.stopPropagation();
                if (item.style.visibility === "hidden") toggleVisibility(item.id, categoryName);
                showColorPicker(item.id);
            };
            buttonWrap.appendChild(colorButton);

            buttonContainer.appendChild(buttonWrap);
        });
    }

    function enableDragScroll(scrollElement) {
        let isDown = false;
        let startX;
        let scrollLeft;

        scrollElement.addEventListener('mousedown', (e) => {
            isDown = true;
            scrollElement.classList.add('dragging');
            startX = e.pageX - scrollElement.offsetLeft;
            scrollLeft = scrollElement.scrollLeft;
        });

        scrollElement.addEventListener('mouseleave', () => {
            isDown = false;
            scrollElement.classList.remove('dragging');
        });

        scrollElement.addEventListener('mouseup', () => {
            isDown = false;
            scrollElement.classList.remove('dragging');
        });

        scrollElement.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollElement.offsetLeft;
            const walk = (x - startX) * 1.5;
            scrollElement.scrollLeft = scrollLeft - walk;
        });
    }

    function enableWheelScroll(scrollElement) {
        scrollElement.addEventListener("wheel", (evt) => {
            if (evt.deltaY !== 0) {
                evt.preventDefault();
                scrollElement.scrollLeft += evt.deltaY;
            }
        }, { passive: false });
    }

    // === Init Calls ===
    generatePresetButtons();
    generateCategoryButtons();

    if (presetScrollBar) {
        enableDragScroll(presetScrollBar);
        enableWheelScroll(presetScrollBar);
    }

    if (categoryScrollBar) {
        enableDragScroll(categoryScrollBar);
        enableWheelScroll(categoryScrollBar);
    }
});