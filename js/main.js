document.addEventListener("DOMContentLoaded", () => {
    const categoryListElement = document.getElementById('categoryList');


    fetch('https://api.escuelajs.co/api/v1/categories')
        .then(response => response.json())
        .then(categories => {

            const validCategories = categories.filter(category => typeof category.name === 'string' && category.name.trim() !== '');


            validCategories.forEach(category => {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item';


                listItem.innerHTML = `
                    <div class="row">
                        <div class="col-md-3">
                            <img src="${category.image}" alt="${category.name}" class="img-fluid rounded">
                        </div>
                        <div class="col-md-9">
                            <h4>${category.name}</h4>
                        </div>
                    </div>
                `;

                categoryListElement.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching categories:', error));
});
