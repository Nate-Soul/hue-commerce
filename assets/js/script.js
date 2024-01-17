const cycleProductImages = (currentColorIndex) => {    
    const productHighlightImgs = document.querySelectorAll("#productHighlight img");

    productHighlightImgs.forEach((img, imgIndex) => {
        img.classList.replace("d-block", "hidden");
        if (imgIndex === currentColorIndex) {
            img.classList.replace("hidden", "d-block");
        }
    });
};

const getCurrentHueElements = (hueNames) => {
    for (const hueName of hueNames) {
        const currentHueElements = document.querySelectorAll(`.bg-color-${hueName}`);
        if (currentHueElements.length > 0) {
            return currentHueElements;
        }
    }
    return [];
};


const cycleColourOnCarousel = (direction) => {
    const hueNames = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    
    const initialHueElements    = getCurrentHueElements(hueNames);
    
    if (initialHueElements.length > 0) {

        const getCurrentHueName     = initialHueElements[0].classList.value.split(" ").find(className => className.startsWith("bg-color-")).split("-")[2];
        const currentHueElements    = document.querySelectorAll(`.bg-color-${getCurrentHueName}`);
    
        if(currentHueElements.length > 0) {
            const currentHueIndex   = hueNames.indexOf(getCurrentHueName);
            const nextHueIndex      = direction === "next" ? (currentHueIndex + 1) % hueNames.length : (currentHueIndex - 1 + hueNames.length) % hueNames.length;
            const nextHue           = hueNames[nextHueIndex];
            
            cycleProductImages(nextHueIndex);
            currentHueElements.forEach((hueElement) => {
                hueElement.classList.replace(`bg-color-${getCurrentHueName}`, `bg-color-${nextHue}`);
            });
        }
    }
};

document.querySelector(".slider-btn-prev").addEventListener("click", () => { cycleColourOnCarousel("prev"); });
document.querySelector(".slider-btn-next").addEventListener("click", () => { cycleColourOnCarousel("next"); });

