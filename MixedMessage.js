const discounts = ["10%", "15%", "20%", "25%", "30%", "40%", "50%"];
const items = ["toys", "airfryers", "magnetrons", "ovens", "footballs", "dolls"];

function randomIndex(array) {
    return Math.floor(math.random() * array.length);
};

function fullString() {
    let fullString = `The ${items[randomIndex(items)]} have a discount of ${discounts[randomIndex(discounts)]}, be quick there are only ${math.floor(1 + math.random() * 10)} left!`
    console.log(fullString);
};

fullString();