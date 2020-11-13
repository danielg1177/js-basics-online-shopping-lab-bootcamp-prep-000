var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomInt() {
  let num = Math.floor(Math.random() * 100)
  return num
}

function createObject(item) {
  return {
    itemName: item,
    itemPrice: getRandomInt()
  }
}

function addToCart(item) {
  getCart().push(createObject(item))
  return `${item} has been added to your cart.`
}

function viewCart() {
  
  let sentance = "In your cart, you have"
  
  if (getCart().length === 0){
    return 'Your shopping cart is empty.'
    
  } else {
  
   for (let i = 0; getCart().length > i; i++) {
      
   if (getCart().length - 2 === i) {
    sentance = sentance + ` ${getCart()[i].itemName} at $${getCart()[i].itemPrice}, and`
    
  } else if(getCart().length - 1 === i) {
    sentance = sentance + ` ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`
    
  } else { 
    sentance = sentance + ` ${getCart()[i].itemName} at $${getCart()[i].itemPrice},`
   
    }
   }
  } return sentance
}

function getSum() {
  let sum = 0
  for (let i = 0; getCart().length > i; i++) {
    sum = sum + getCart()[i].itemPrice
  }
  return sum
}

function total() {
  return getSum()
}

function searchForItem(item) {
  for (let i = 0; getCart().length > i; i++){
    if (getCart()[i].itemName === item) {
    return true
    } else {
   return false
    }
  }
}

function removeObject(item) {
  for (let i = 0; getCart.length > i; i++) {
    if (getCart()[i].itemName === item) {
      return getCart().splice(i, 1)
    }
  }
}


function removeFromCart(item) { 
  if (searchForItem(item) === false) {
    return 'That item is not in your cart.'
    
  } else {
    return removeObject(item)
  } 
  
}

function placeOrder(cardNumber) {
  // write your code here
}
