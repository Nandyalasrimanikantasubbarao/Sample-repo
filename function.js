const item={
    food:1000,
    drinks:1500
};
var cart=0;
function addTocart=(item)=> {
    return cart+item;
}
function addcartvalue=(item)=> {
    cart=addTocart(item);
    
}
addcartvalue(item.food)
console.log("cart:",cart);
var cart;