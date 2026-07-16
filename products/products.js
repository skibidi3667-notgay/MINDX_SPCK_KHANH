fetch("products.json")
    .then(response => response.json())
    .then(productData => {

        const featuredGrid = document.getElementById("featured-grid");
        const menGrid = document.getElementById("men-grid");
        const womenGrid = document.getElementById("women-grid");

        function createCard(product){

            return `
                <div class="card">
                    <img src="${product.img}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                    <a href="../details/${product.id}.html">Xem chi tiết</a>
                </div>
            `;

        }

        const featured = productData
            .filter(product => product.category === "featured")
            .map(product => createCard(product))
            .join("");

        const men = productData
            .filter(product => product.category === "men")
            .map(product => createCard(product))
            .join("");

        const women = productData
            .filter(product => product.category === "women")
            .map(product => createCard(product))
            .join("");

        featuredGrid.innerHTML = featured;
        menGrid.innerHTML = men;
        womenGrid.innerHTML = women;

    });