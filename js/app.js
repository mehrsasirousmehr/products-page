const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");
const priceButton = document.getElementById("search-price").querySelector("button");

// search products name
const searchHandler = (event) => {
    const searchValue = event.target.value.toLowerCase().trim();
    products.forEach((product) => {
        const productName = product.children[1].innerText.toLowerCase();
        console.log(productName);

        if (productName.includes(searchValue)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
};

// add event to all buttons
const filterHandler = (event) => {
    const filter = event.target.dataset.filter;
    cahngeClass(filter);

    // filter products
    products.forEach((product) => {
        const category = product.dataset.category;
        if (filter === "all") {
            product.style.display = "block";
        } else {
            filter === category ? (product.style.display = "block") : (product.style.display = "none");
        }
    });
};

// change the style of the selected button
const cahngeClass = (filter) => {
    buttons.forEach((button) => {
        if (button.dataset.filter === filter) {
            button.classList.add("selected");
        } else {
            button.classList.remove("selected");
        }
    });
};

// get products price
const searchPriceHandler = (event) => {
    const searchPrice = +event.target.parentElement.children[0].value;

    products.forEach((product) => {
        const productPrice = product.children[2].innerText;
        const price = +productPrice.split(" ")[1];

        if (!searchPrice) {
            product.style.display = "block";
        } else {
            searchPrice === price ? (product.style.display = "block") : (product.style.display = "none");
        }
    });
};

const start = () => {
    searchInput.addEventListener("keyup", searchHandler);

    buttons.forEach((button) => {
        button.addEventListener("click", filterHandler);
    });

    priceButton.addEventListener("click", searchPriceHandler);
};

window.addEventListener("load", start);