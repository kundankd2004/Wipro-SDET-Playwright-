function formatGuests(names) {
    names.shift();
    const formattedNames = names.map(name => `Guest: ${name}`);
    return formattedNames.join('\n');
}

const getHighNumbers = (arr) => {
    const threshold = Math.floor(Math.random() * 50) + 1;
    const result = arr
    .filter(num => num > threshold)
    .filter(item => typeof item === "number");
    return result;
}

const prices = ["100", "250", "50", "30"];
const handlingFee = prices.splice(-1)[0];
const total = prices
.reduce((sum, num) => sum + parseInt(num), 0);
console.log(`Total Price: ${total}`, );