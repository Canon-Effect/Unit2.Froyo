function parseFroyoOrders(orderString) {
    let flavors = orderString.split(",");
    let flavorCount = {};

    for (let i = 0; i < flavors.length; i++) {
        let flavor = flavors[i].trim();

        if (flavor in flavorCount) {
            flavorCount[flavor]++;
        } else {
            flavorCount[flavor] = 1;
        }
    }

    return flavorCount;
}

let userOrders = prompt("Welcome to Froyo bonanza! Please enter a list of comma-separated froyo flavors:","vanilla,vanilla,vanilla,strawberry,coffee,coffee");
let orderSummary = parseFroyoOrders(userOrders);

console.log("Order Summary:");
for (let flavor in orderSummary) {
    console.log(`${flavor}: ${orderSummary[flavor]} order(s)`);
}


