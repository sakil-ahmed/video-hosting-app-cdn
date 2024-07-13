// Cookie option switch
document.querySelectorAll('.cookie-consent-switch-root').forEach(element => {
    const slider = element.querySelector('.cookie-consent-slider');
    const isNecessary = element.id === "switch-cookie_cat_necessary";

    if (isNecessary) {
        slider.classList.add('cookie-consent-active');
        element.setAttribute("checked", 'true');

    } else {
        element.addEventListener('click', () => {
            const isActive = slider.classList.toggle('cookie-consent-active');
            element.setAttribute("checked", isActive.toString());
        });
    }
});

// detail toggle
const detailToggleButton = document.getElementById('details-toggle-button');
const detailBody = document.getElementById('details-wrapper');

detailToggleButton.addEventListener('click', () => {

    const isHidden = detailBody.getAttribute("aria-hidden") === "true";
    detailToggleButton.textContent = isHidden ? 'Hide details' : 'Show details';
    detailBody.setAttribute("aria-hidden", `${!isHidden}`);

});


// Category Table Toggle
document.querySelectorAll('.category-toggle-btn').forEach(element => {
    element.addEventListener("click", () => {

        const table = element.parentElement.querySelector('.category-details-table');

        const isHidden = table.getAttribute("aria-hidden") === "true";
        table.setAttribute("aria-hidden", `${!isHidden}`);

        element.setAttribute("isOpen", `${isHidden}`);

    })
})


const styleSheet = new CSSStyleSheet()
styleSheet.replaceSync(`
    .cookie-consent-active {
        transform: translateX(25px);
    }
    .cookie-consent-switch-root[checked="true"] {
        background-color: #237AC3;
    } 
    .cookie-consent-switch-root[aria-label="strictly-necessary"] {
        cursor:not-allowed;
        opacity:0.5;
    }
    
    .details-wrapper[aria-hidden="false"] {
        display: block;
    }
    
    .category-toggle-btn[isOpen="true"] {
        color:#2C622C;
    }
    .category-toggle-btn[isOpen="true"] svg{
        transform: rotate(90deg);
    }
    .category-details-table[aria-hidden="false"] {
        display: block;
    }
    
`)

document.adoptedStyleSheets.push(styleSheet);

