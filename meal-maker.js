//getters used to access properties
//setters use to change(mutate) them

const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {
        return this._courses.appetizers
    },
    get mains() {
        return this._courses.mains
    },
    get desserts() {
        return this._courses.desserts
    },
    set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
    },
    set appetizers(mains) {
        this._courses.appetizers = mains;
    },
    set appetizers(desserts) {
        this._courses.appetizers = desserts;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and the total price ${totalPrice}`;
    }


};

menu.addDishToCourse('appetizers', 'salad', 4.00);
menu.addDishToCourse('appetizers', 'wings', 5.00);
menu.addDishToCourse('appetizers', 'fries', 3.00);

menu.addDishToCourse('mains', 'steak', 10.25);
menu.addDishToCourse('mains', 'tofu', 8.50);
menu.addDishToCourse('mains', 'fish', 15.75);

menu.addDishToCourse('desserts', 'coffee', 3.00);
menu.addDishToCourse('desserts', 'ice cream', 4.00);
menu.addDishToCourse('desserts', 'tea', 2.00);

const meal = menu.generateRandomMeal();
console.log(meal);