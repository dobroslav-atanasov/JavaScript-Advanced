function solve(array, criterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];
    for (let item of array) {
        let parts = item.split('|').filter(x => x != '');
        let ticket = new Ticket(parts[0], Number(parts[1]), parts[2]);
        tickets.push(ticket);
    }

    switch (criterion) {
        case 'destination': return tickets.sort((a, b) => a.destination.localeCompare(b.destination));
        case 'price': return tickets.sort((a, b) => a.price - b.price);
        case 'status': return tickets.sort((a, b) => a.status.localeCompare(b.status));
    }
}

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
));