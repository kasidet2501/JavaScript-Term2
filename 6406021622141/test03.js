function cal(basket){
    let price = 0;
    let disc = 0;
    let total = 0;
    for(let i = 0 ;i < basket.item.length ; i++){
        price += basket.item[i].price;

        let dis = basket.item[i].price * basket.item[i].discount;
        disc += dis;
    }
    total = price - disc;
    let str = basket.customer + ' total price = ' + price + ', total discount = ' + disc + ", final price = " + total;
    return str;
}
const basket1 = {customer:'Peter',item:[{name:'Milk',price:35,discount:0.1},
                                        {name:'Bread',price:80,discount:0.2},
                                        {name:'Eggs',price:45,discount:0.3}]};
const basket2 = {customer:'Tom',item:[{name:'Pork',price:130,discount:0.1},
                                        {name:'Eggs',price:45,discount:0.3},
                                        {name:'Butter',price:50,discount:0.4},
                                        {name:'Carrot',price:60,discount:0.2}]};
console.log(cal(basket1));
console.log(cal(basket2));