
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'
import { productAPI } from '../../util.js'
import React, { Component } from 'react';
//import App from '../../App'
const DEFAULT_QUERY = 'redux';

var loppusumma


/*
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
*/
/*
const initState ={
      items: [],
      id: 'id',
      desc: 'desc',
      price: 'price'

    };

componentDidMount() {
  fetch('~/catfood.json' + DEFAULT_QUERY)
    .then(res => res.json())
    .then((data) => {
      this.setState( { items: data })
    })
    .catch(console.log)
 }
*/
/*
const initState = {
    items: [
    
        {id:1, desc: "Whiskas Meaty Selections with Real Chicken, Dry CAT Food", price:24.98,img:100},
        {id:2, desc: "Gourmet Perle Mini Filets kastikkeessa 60x 85g", price:23.55,img: 200},
        {id:3, desc: "Brit Premium paloja hyytelössä, Multipack 12x85g.",price:8.95,img: 300},
        {id:4, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:26.75,img:400},
      
    ],
    addedItems:[],
    total: 0
} 
*/

const cartReducer= (state = loppusumma, action)=>{
   
    //var loppusumma
    function roundToTwo(num) { 
    return +(Math.round(num + "e+2")  + "e-2");
    }

    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        loppusumma = roundToTwo(newTotal)
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: loppusumma
        }
    }
    //INSIDE CART COMPONENT

    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          loppusumma = roundToTwo(newTotal)
          return{
              ...state,
              total: loppusumma
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            loppusumma = roundToTwo(newTotal)
            return{
                ...state,
                addedItems: new_items,
                total: loppusumma
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            loppusumma = roundToTwo(newTotal)
            return{
                ...state,
                total: loppusumma
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer
