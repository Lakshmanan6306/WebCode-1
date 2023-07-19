var container = document.querySelector('.data');

var makeupAPI = 'https://makeup-api.herokuapp.com/api/v1/products.json';

console.log(makeupAPI)

async function data() {
    const apiData = await fetch(makeupAPI);
    const fetchedData = await apiData.json();
    console.log(fetchedData);


    for (var i of fetchedData) {
        // console.log(i.image_link)
        try {
            let child = document.createElement('div');
            child.classList.add('col');
            child.innerHTML = 
            `<div class="card m-1">
                <img src="${i.image_link}" class="card-img-top"/>
                <div class="card-body">
                    <div class="my-1">
                        <span class="text-muted small text-uppercase">Brand:</span>
                        <p class="card-text text-capitalize d-inline mx-1">${i.brand}</p>
                    </div>
                    <div class="my-1">
                        <span class="text-muted small text-uppercase">Name:</span>
                        <p class="card-text text-capitalize d-inline mx-1">${i.name}</p>
                    </div>
                    <div class="my-1">
                        <span class="text-muted small text-uppercase">Price:</span>
                        <p class="card-text text-capitalize d-inline mx-1">${i.price} $</p>
                    </div>
                    <div class="my-1">
                        <a href="${i.product_link}" target="_blank" rel="noopener noreferrer" class="btn btn-warning d-block">Buy</a>
                    </div>
               </div>
                
               
            </div>`
            container.append(child);
        } catch (error) {
            console.log(error)
        }
    }
}

setTimeout(() => {
    data();
}, 2000)
