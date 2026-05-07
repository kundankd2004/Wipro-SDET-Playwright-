const rawFlights = [
    "London-paris:150",
    "New York-Tokyo:invalid",
    "Dubai-Mumbai:450",
    "Berlin-Rome:95"
];

function cleanFlightdata(flights) {
    const formattedFlights = flights.map(flight => {
        const [route, price] = flight.split(':');
        const [from, to] = route.split("-");
        let price = Number(priceText);
        if (isNaN(price)) {
            price = 0;
        }
        return { from, to, price };
    });
    const filteredFlights = formattedFlights.filter(flight => flight.price >=100 && flight.price <= 500);
    filteredFlights.sort((a, b) => a.price - b.price);
    return JSON.stringify(filteredFlights, null, 2);
}

console.log(cleanFlightdata(rawFlights));