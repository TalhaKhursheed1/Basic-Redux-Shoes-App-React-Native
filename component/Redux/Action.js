import { ADD_TO_CART, REMOVE_FROM_CART, USER_LIST } from "./Constants";


export function addToCart(item){
  return{
    type:ADD_TO_CART,
    data:item,
  }

}

export function removeFromCart(index){
  return{
    type:REMOVE_FROM_CART,
    data:index,
  }

}

export function getUserList(){
  return{
    type: USER_LIST, 
  }
}
