const getShowcase = document.getElementById('card-showcase');
const getAddBtn = document.querySelector('.addBtn');
const getCloseBtn = document.getElementById('exitBtn');

async function loadCars() {
    
    const response = await fetch('/api/cars');
    const cars = await response.json();

    cars.forEach((car) => {

        const card = document.createElement("div");
        card.classList = "card";

        const content = `
            <h2 class="card-header"> ${car.marke}</h2>
            <div class="card-body">
                <h3>Modell: ${car.modell}</h3>
                <h3>Baujahr: ${car.baujahr}</h3>
                <h3>Motorcode: ${car.motorcode}</h3>
            </div>
        `
        card.innerHTML = content; 
        getShowcase.appendChild(card);
        
})};

loadCars();

getAddBtn.addEventListener('click', () => {
    document.getElementById('modal-overlay').style.display = 'flex';
})

getCloseBtn.addEventListener('click', () => {
    document.getElementById('modal-overlay').style.display = 'none';
})



