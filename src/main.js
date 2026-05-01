const getShowcase = document.getElementById('card-showcase');

const listOfCars = [
    {marke: "Audi", modell: "A4 B5", baujahr: 1999, motorcode: "ADR"},
    {marke: "Audi", modell: "RS3 8V", baujahr: 2016, motorcode: "DAZA"},
    {marke: "Audi", modell: "S4 B5", baujahr: 1999, motorcode: "AGB"},
]

listOfCars.forEach((car) => {
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
});

