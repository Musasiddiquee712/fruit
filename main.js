//fruits code start 
function fruit_info(name, price) {
    return { name, price };
}
let fruit_apple =  fruit_info("Apple  ", 230);
let fruit_mango =  fruit_info("Mango  ", 250);
let fruit_banana = fruit_info("Banana ", 120);
let fruit_orange = fruit_info("Orange ", 240);
let fruit_graps = fruit_info( "Graps  ", 150);

let fruits = [fruit_apple, fruit_mango,fruit_graps, fruit_banana,fruit_orange];
fruits.forEach(fruit => {
     console.log    
     (`Name: ${fruit.name},  Rs : ${fruit.price}`);
    
});
//fruit code end