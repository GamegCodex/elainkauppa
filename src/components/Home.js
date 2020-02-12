import React, { Component, useState, useEffect } from 'react';

import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import {bindActionCreators} from "redux"
import { addToCart } from './actions/cartActions'


//class Home extends Component
const Home = ({items}) => {
{

    //render()
    //{
        //const itemList = ({items}) => {
        //let itemList = this.props.items.map(item=>{
        //let itemList = this.state.items.map(item => {
         // return(


           // <div>
              
          /*    items.map((item) => (
                
                <div className="card" key={item.id}
              style={{backgroundColor: 'LightGray'}}>
                    <div className="card-body">
                      <h3 className="card-title">{item.desc}</h3>
                      <p className="card-text"><b>Price: {item.price}€</b></p>
                    </div>
                </div>
              ))  
           // </div>
          //) 
        };*/
        //console.log(itemList)

        return(
            <div className="container">
                <center>Ruokaa lemmikillesi
                 <h3>Tuotteet kaupassa</h3></center> 

                 <div className="box">
                   {items && items.map((item) => (   
                    //this.state.items.map((item) => (
                
                      <div className="card" key={item.id}
                    style={{backgroundColor: 'LightGreen'}}>

                    <div className="card-image">
                            
                           
                            

                    <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Hinta: {item.price}€</b></p>
                        </div>

                     
                      </div>
                      </div>
                    ))  
                   }
                  </div>
            </div>   
            
        )
    }
}

       
export default Home;
