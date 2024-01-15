const changeHue = (direction) => {
    const hueNames = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    const productHighlightImgs = document.querySelectorAll("#productHighlight img");

    for (i = 0; i < hueNames.length; i++){

        const hueElements = document.querySelectorAll(`.bg-color-${hueNames[i]}`);
        if (hueElements.length > 0){
            hueElements.forEach(hueElement => {
                if(hueElement.classList.contains(`bg-color-${hueNames[i]}`)){
                    const isFirstItem = hueNames.indexOf(hueNames[i]) === 0;
                    const isLastItem  = hueNames.indexOf(hueNames[i]) === hueNames.length - 1
                    const prevHue = isFirstItem ? hueNames[hueNames.length - 1] : hueNames[hueNames.indexOf(hueNames[i]) - 1];
                    const nextHue = isLastItem ? "one" : hueNames[hueNames.indexOf(hueNames[i]) + 1];
                    
                    productHighlightImgs.forEach(img => {
                        img.classList.replace("d-block", "hidden");
                        productHighlightImgs[i].classList.replace("hidden", "d-block");
                    });

                    if (direction === "prev") {
                        hueElement.classList.replace(`bg-color-${hueNames[i]}`, `bg-color-${prevHue}`);
                    } else {
                        hueElement.classList.replace(`bg-color-${hueNames[i]}`, `bg-color-${nextHue}`);
                    }
                }
            });
        }

    }
};

document.querySelector(".slider-btn-prev").addEventListener("click", () => { changeHue("prev"); });
document.querySelector(".slider-btn-next").addEventListener("click", () => { changeHue("next"); });

