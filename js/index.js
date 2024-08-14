fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {

        let card = '<div class="row row-cols-1 row-cols-md-3 g-4">'

        for(let product of data){
            card += `   
            <div class="col">
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><strong>Price:</strong> $${product.price}</li>
                            <li class="list-group-item"><strong>Description:</strong> ${product.description}</li>
                            <li class="list-group-item"><strong>Category:</strong> ${product.category}</li>
                        </ul>
                    </div>
                </div> 
            </div>`;
        }

        card += "</div>";
        document.getElementById("lista").innerHTML = card;
    });
