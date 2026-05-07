const getShowcase = document.getElementById('card-showcase');
const getAddBtn = document.querySelector('.addBtn');
const getCloseBtn = document.getElementById('exitBtn');
const modal = document.getElementById('modal-overlay')
const createForm = document.querySelector('#createForm');

async function loadCars() {
    
    const response = await fetch('/api/router');
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
    modal.style.display = 'flex';
})

getCloseBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})


document.addEventListener('click', (event) => {
    
    if (
        event.target === modal || event.target.classList.contains("modal-overlay")
    ) {
        modal.style.display = 'none';
    }
});

createForm.addEventListener('submit', async (event) => {

    event.preventDefault();
    
    const getMake = document.getElementById('marke').value;
    const getModell = document.getElementById('modell').value;
    const getYearOfConstruction = document.getElementById('baujahr').value;
    const getMotorcode = document.getElementById('motorcode').value;

    const newCar = {
        getMake,
        getModell,
        getYearOfConstruction,
        getMotorcode
    };

    await fetch('/api/cars', {
        method: 'Post',
        headers: { 'Content-Type': 'application/json'}, 
        body: JSON.stringify(newCar)  
    });
    
});

