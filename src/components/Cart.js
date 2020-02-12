import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'
import Recipe from './Recipe'
class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    constructor(props) {
        super(props);
        this.state = {
        addedItems: [],
        title: 'title',
        id: 'id'
        }
    }

    componentDidMount() {
    fetch('http://localhost:8080/food')
      .then(res => res.json())
      .then((data) => {
        this.setState( { food: data })
      })
    .catch(console.log)
   }

    render(){
              
        let addedItems = this.props.addedItems.length ?
            (  
                this.props.items.map(foods=>{
                    return(
                       
                        <li className="collection-item avatar" key={foods.id}>
                                    <div className="item-img"> 
                                        <img src={foods.img} alt={foods.img} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{foods.title}</span>
                                        <p>{foods.desc}</p>
                                        <p><b>Price: {foods.price}€</b></p> 
                                        <p>
                                            <b>Quantity: {foods.inventory}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(foods.id)}}>arrow_drop_up</i></Link>
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(foods.id)}}>arrow_drop_down</i></Link>
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(foods.id)}}>Poista</button>
                                    </div>
                                    
                                </li>
                         
                    )
                })
            ):

             (
                <p>Ostoskori on tyhjä.</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>Tilauksesi:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
                <Recipe />          
            </div>
       )
    }
}

Cart.defaultProps={ addedItems:[] };

const initState = {
    items: [
    
        
    ],
    addedItems:[],
    total: 0
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
        //addedItems: state.addedItems
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}




//export default connect(mapStateToProps,mapDispatchToProps)(Cart)
export default Cart 