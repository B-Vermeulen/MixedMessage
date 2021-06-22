const discounts = ["10%", "15%", "20%", "25%", "30%", "40%", "50%"];
const items = ["toys", "airfryers", "magnetrons", "ovens", "footballs", "dolls"];

function randomIndex(array) {
    return Math.floor(Math.random() * array.length);
};

function fullString() {
    let fullString = `The ${items[randomIndex(items)]} have a discount of ${discounts[randomIndex(discounts)]}, be quick there are only ${Math.floor(1 + Math.random() * 100)} left!`
    console.log(fullString);
};

fullString();
