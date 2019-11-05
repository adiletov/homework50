class Product {
    constructor(title, calories){
        this.title = title;
        this.calories = calories;
    }
}
class Dish{
    constructor(name){
        this.name = name;
        this.products = [];
    }
    addProduct(products, gramm){
        this.products.push({...products , gramm:gramm})
    }
    getCalories(){
        let calories = 0;
        this.products.forEach(product=>{
            calories+= product.calories * product.gramm/100
        });
        return calories;
    }
}
class CaloriesCalculator{
    constructor () {
        this.dish = [];
    }
    addDish(dish){
        this.dish.push(dish);
    }
    getTotalCalories(){
        let totalCal = 0;
        this.dish.forEach(dish => {
            totalCal += dish.getCalories();
        });
        return totalCal;
    }
    getAllDishesInfo(){
        for (let value of this.dish){
            console.log(value.name + ' ' + value.getCalories());
            for (let key of value.products){
                console.log(key.title + ' ' +  key.gramm + 'грамм  ' + key.calories*key.gramm/100 + 'ккал' )
            }
        }
    }
}





const meat = new Product('Филе говядина', 158);
const rice = new Product('Рис', 130);
const onion = new Product('Лук', 40);
const carrot = new Product('Морковь', 41);

const plov = new Dish('Плов');
plov.addProduct(meat, 100);
plov.addProduct(rice, 150);
plov.addProduct(onion, 25);
plov.addProduct(carrot, 25);

const calculator = new CaloriesCalculator();
calculator.addDish(plov);
const calories = calculator.getTotalCalories();
console.log(calories); // должно вывести 373.25


const totals = calculator.getAllDishesInfo();
console.log(totals);

